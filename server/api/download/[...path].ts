export default defineEventHandler(async (event) => {
    const path = event.context.params?.path;
    if (!path) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid path' });
    }

    const fileUrl = `https://ucdgovtest.g.kuroco-img.app/${path}`;
    const upstream = await fetch(fileUrl, { redirect: 'follow' });

    if (!upstream.ok || !upstream.body) {
        const text = await upstream.text().catch(() => '');
        throw createError({
            statusCode: upstream.status || 502,
            statusMessage: `Upstream fetch failed: ${text || 'no body'}`
        });
    }

    // ファイル名推定
    const cd = upstream.headers.get('content-disposition') || '';
    const fromHeader = /filename\*?=(?:UTF-8''|")?([^";]+)"/i.exec(cd)?.[1] || /filename\*?=(?:UTF-8'')?([^;]+)/i.exec(cd)?.[1];
    const fallback = (path.split('/').pop() || 'download.bin').trim();
    const rawName = fromHeader ? decodeURIComponent(fromHeader) : fallback;
    const asciiFallback = rawName.replace(/[^\x20-\x7E]/g, '_');

    // 強制ダウンロード系ヘッダ
    setHeader(event, 'Content-Type', 'application/octet-stream');
    setHeader(event, 'Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(rawName)}; filename="${asciiFallback}"`);
    const lenStr = upstream.headers.get('content-length');
    const len = lenStr ? parseInt(lenStr, 10) : null;
    if (len && !isNaN(len)) {
        setHeader(event, 'Content-Length', len);
    }
    setHeader(event, 'X-Content-Type-Options', 'nosniff');
    setHeader(event, 'X-Download-Options', 'noopen');
    setHeader(event, 'Cache-Control', 'private, max-age=0, must-revalidate');

    // そのままストリーム返却（Nitro対応）
    // @ts-ignore
    return upstream.body;
});
