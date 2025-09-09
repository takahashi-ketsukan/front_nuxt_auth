export default defineEventHandler(async (event) => {
    const path = event.context.params?.path;
    if (!path) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid path' });
    }

    // 例) t=xxxx/files/topics/14_ext_2_0.xlsx が入ってくる
    const fileUrl = `https://ucdgovtest.g.kuroco-img.app/${path}`;

    // リダイレクト追従で取得
    const upstream = await fetch(fileUrl, { redirect: 'follow' });

    if (!upstream.ok || !upstream.body) {
        const text = await upstream.text().catch(() => '');
        throw createError({
            statusCode: upstream.status || 502,
            statusMessage: `Upstream fetch failed: ${text || 'no body'}`
        });
    }

    // 元のファイル名（Content-Disposition 優先、なければパス末尾）
    const cd = upstream.headers.get('content-disposition') || '';
    const fromHeader = /filename\*?=(?:UTF-8''|")?([^";]+)"/i.exec(cd)?.[1] || /filename\*?=(?:UTF-8'')?([^;]+)/i.exec(cd)?.[1];
    const fallback = (path.split('/').pop() || 'download.bin').trim();
    const rawName = fromHeader ? decodeURIComponent(fromHeader) : fallback;
    // ASCII 以外も安全に落とす（RFC5987 併記）
    const asciiFallback = rawName.replace(/[^\x20-\x7E]/g, '_');

    // ヘッダー（プレビュー回避＆確実に保存ダイアログ）
    // ※ Excel MIME を返すと一部ブラウザがプレビューに回すので octet-stream を明示
    setHeader(event, 'Content-Type', 'application/octet-stream');
    setHeader(event, 'Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(rawName)}; filename="${asciiFallback}"`);
    const lenStr = upstream.headers.get('content-length');
    const len = lenStr ? parseInt(lenStr, 10) : null;
    if (len && !isNaN(len)) {
        setHeader(event, 'Content-Length', len);
    }
    setHeader(event, 'X-Content-Type-Options', 'nosniff');
    setHeader(event, 'X-Download-Options', 'noopen');
    // 任意: キャッシュ
    setHeader(event, 'Cache-Control', 'private, max-age=0, must-revalidate');

    // そのままストリーム転送（メモリ食い防止）
    // Nitro は WHATWG ReadableStream をそのまま返却可能
    // @ts-ignore
    return upstream.body;
});
