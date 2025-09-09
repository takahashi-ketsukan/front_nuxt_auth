export default defineEventHandler(async (event) => {
    const path = event.context.params?.path;
    if (!path) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid path' });
    }

    // kuroco-img の URL を組み立て
    const fileUrl = `https://ucdgovtest.g.kuroco-img.app/${path}`;

    const res = await fetch(fileUrl);
    if (!res.ok) {
        throw createError({ statusCode: res.status, statusMessage: 'File not found' });
    }

    const buffer = Buffer.from(await res.arrayBuffer());

    // パスの末尾からファイル名を取り出す
    const fileName = path.split('/').pop() || 'download.bin';

    // ヘッダーでダウンロード強制
    setHeader(event, 'Content-Type', res.headers.get('content-type') || 'application/octet-stream');
    setHeader(event, 'Content-Disposition', `attachment; filename="${fileName}"`);

    return buffer;
});
