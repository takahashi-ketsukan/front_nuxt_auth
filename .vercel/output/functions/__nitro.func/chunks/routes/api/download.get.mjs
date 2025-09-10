import { d as defineEventHandler, g as getQuery, c as createError, a as getRequestHeader, s as setHeader, b as send } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';

const download_get = defineEventHandler(async (event) => {
  const { topics_id, ext_no, index = 0 } = getQuery(event);
  if (!topics_id || !ext_no) {
    throw createError({ statusCode: 400, statusMessage: "Missing params" });
  }
  const fileUrl = `https://ucdgovtest.g.kuroco.app/direct/topics/topics_file_download/?topics_id=${topics_id}&ext_no=${ext_no}&index=${index}`;
  const cookie = getRequestHeader(event, "cookie") || "";
  const res = await fetch(fileUrl, { headers: { cookie }, redirect: "follow" });
  if (!res.ok) {
    throw createError({ statusCode: res.status, statusMessage: "File fetch failed" });
  }
  setHeader(event, "Content-Type", res.headers.get("content-type") || "application/octet-stream");
  setHeader(event, "Content-Disposition", res.headers.get("content-disposition") || "attachment");
  const buf = Buffer.from(await res.arrayBuffer());
  return send(event, buf);
});

export { download_get as default };
//# sourceMappingURL=download.get.mjs.map
