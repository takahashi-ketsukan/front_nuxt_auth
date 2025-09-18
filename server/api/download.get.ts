export default defineEventHandler(async (event) => {
    const { url } = getQuery(event);
    const token = getHeader(event, 'x-access-token');
    console.log('token:', token);
    if (!url || !token) {
        throw createError({ statusCode: 400, statusMessage: 'Missing url or token' });
    }

    const res = await fetch(url.toString(), {
        headers: { 'X-RCMS-API-ACCESS-TOKEN': token },
        redirect: 'follow'
    });
    console.log('res1:', res);

    if (!res.ok) {
        throw createError({ statusCode: res.status, statusMessage: 'Failed to fetch file' });
    }
    console.log('res2:', res);
    const buffer = Buffer.from(await res.arrayBuffer());
    setHeader(event, 'Content-Type', res.headers.get('content-type') || 'application/octet-stream');
    setHeader(event, 'Content-Disposition', res.headers.get('content-disposition') || 'attachment');
    return buffer;
});
