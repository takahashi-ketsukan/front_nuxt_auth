import { F as resource$1, G as resource } from './server.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-snackbar';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/observer';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/inputs';
import '@formkit/themes';
import '@formkit/dev';
import 'vue/server-renderer';

const i18n_config = () => ({
  legacy: false,
  locale: "en",
  messages: {
    en: resource$1,
    ja: resource
  }
});

export { i18n_config as default };
//# sourceMappingURL=i18n.config-DiIgF-ua.mjs.map
