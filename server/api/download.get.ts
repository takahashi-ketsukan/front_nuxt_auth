export default defineEventHandler(async (event) => {
    const { topics_id, ext_no, index = 0 } = getQuery(event);
    if (!topics_id || !ext_no) {
        throw createError({ statusCode: 400, statusMessage: 'Missing params' });
    }
    const fileUrl = `https://ucdgovtest.g.kuroco.app/direct/topics/topics_file_download/?topics_id=${topics_id}&ext_no=${ext_no}&index=${index}`;

    // 会員セッションCookieを転送
    const cookie = getRequestHeader(event, 'cookie') || '';

    const res = await fetch(fileUrl, { headers: { cookie }, redirect: 'follow' });
    if (!res.ok) {
        throw createError({ statusCode: res.status, statusMessage: 'File fetch failed' });
    }

    setHeader(event, 'Content-Type', res.headers.get('content-type') || 'application/octet-stream');
    setHeader(event, 'Content-Disposition', res.headers.get('content-disposition') || 'attachment');

    const buf = Buffer.from(await res.arrayBuffer());
    return send(event, buf);
});
