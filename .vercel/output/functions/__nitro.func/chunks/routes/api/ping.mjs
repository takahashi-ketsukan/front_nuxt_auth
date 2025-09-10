import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';

const ping = defineEventHandler(() => "ok");

export { ping as default };
//# sourceMappingURL=ping.mjs.map
