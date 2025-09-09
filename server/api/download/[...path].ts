export default defineEventHandler(async (event) => {
    const path = event.context.params?.path;
    console.log('...path', path);
    if (!path) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid path' });
    }

    // KurocoファイルURLを構築
    const fileUrl = `https://ucdgovtest.g.kuroco-img.app/${path}`;

    // ファイル取得（リダイレクト対応）
    const res = await fetch(fileUrl, { redirect: 'follow' });
    console.log('...path~res', res);
    if (!res.ok) {
        throw createError({ statusCode: res.status, statusMessage: 'File fetch failed' });
    }

    const buffer = Buffer.from(await res.arrayBuffer());

    // ファイル名
    const fileName = path.split('/').pop() || 'download.bin';

    // ヘッダー設定（必ずダウンロード）
    setHeader(event, 'Content-Type', res.headers.get('content-type') || 'application/octet-stream');
    setHeader(event, 'Content-Disposition', `attachment; filename="${fileName}"`);

    // Bufferを直接レスポンスに書き込む
    event.node.res.end(buffer);
});
