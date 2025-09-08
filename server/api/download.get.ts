import { defineEventHandler, getQuery, setHeader } from 'h3';

export default defineEventHandler(async (event) => {
    const { url } = getQuery(event);
    if (!url) {
        return { error: 'url is required' };
    }
    console.log('url', url);
    const urls = `https://ucdgovtest.g.kuroco.app/direct/topics/topics_file_download/?topics_id=14&ext_no=2&index=0`;

    // Kuroco にリクエスト
    const res = await fetch(urls, {
        headers: {
            Authorization: `Bearer ${process.env.KUROCO_API_TOKEN}` // 管理者トークンを環境変数に設定
        }
    });

    if (!res.ok) {
        return { error: `Kuroco API failed: ${res.status}` };
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    setHeader(event, 'Content-Type', res.headers.get('content-type') || 'application/octet-stream');
    setHeader(event, 'Content-Disposition', res.headers.get('content-disposition') || `attachment; filename="download.bin"`);
    return buffer;
});
