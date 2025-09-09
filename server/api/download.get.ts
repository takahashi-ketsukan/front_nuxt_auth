export default defineEventHandler(async (event) => {
    const q = getQuery(event);
    // 例）/api/download?topics_id=14&ext_no=2&index=0
    const topics_id = q.topics_id;
    const ext_no = q.ext_no;
    const index = q.index ?? 0;
    if (!topics_id || !ext_no) {
        throw createError({ statusCode: 400, statusMessage: 'Missing params' });
    }

    // KurocoのダウンロードURLを組み立て（/direct を使用）
    const fileUrl = `https://ucdgovtest.g.kuroco.app/direct/topics/topics_file_download/?topics_id=${topics_id}&ext_no=${ext_no}&index=${index}`;

    // ブラウザから来た会員セッションCookieをそのままKurocoへ
    const cookie = getRequestHeader(event, 'cookie') || '';
    console.log('cookie:', cookie);
    const res = await fetch(fileUrl, {
        method: 'GET',
        headers: { cookie },
        redirect: 'follow'
    });
    if (!res.ok) {
        throw createError({ statusCode: res.status, statusMessage: 'File fetch failed' });
    }

    // ヘッダを引き継いで返却
    const ct = res.headers.get('content-type') || 'application/octet-stream';
    const cd = res.headers.get('content-disposition') || 'attachment';
    setHeader(event, 'Content-Type', ct);
    setHeader(event, 'Content-Disposition', cd);

    const buf = Buffer.from(await res.arrayBuffer());
    return send(event, buf);
});
