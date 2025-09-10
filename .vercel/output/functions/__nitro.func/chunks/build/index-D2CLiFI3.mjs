import { e as useI18n, _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, computed, useSSRContext } from 'vue';
import { useSnackbar } from 'vue3-snackbar';
import { ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/observer';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/inputs';
import '@formkit/themes';
import '@formkit/dev';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    const userList = ref([]);
    const currName = ref("");
    const currDepartment = ref("");
    ref(false);
    ref(false);
    useSnackbar();
    computed(() => {
      return ["", ...userList.value.map(({ name }) => name)];
    });
    computed(() => {
      return ["", ...userList.value.map(({ department }) => department).filter((d) => d)];
    });
    computed(() => {
      return userList.value.filter(({ department }) => currDepartment.value === "" ? true : department === currDepartment.value).filter(({ name }) => currName.value === "" ? true : name === currName.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D2CLiFI3.mjs.map
