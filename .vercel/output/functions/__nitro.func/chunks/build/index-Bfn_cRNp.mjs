import { e as useI18n, f as useAuth, g as useLocalePath, k as apiDomain, _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, computed, watch, useSSRContext } from 'vue';
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
    const { t } = useI18n();
    const { authUser } = useAuth();
    const topicsList = ref([]);
    const favouriteList = ref([]);
    const perPage = ref(5);
    ref(0);
    const snackbar = useSnackbar();
    useLocalePath();
    computed(() => {
      return topicsList.value.map((topic) => {
        var _a;
        return (_a = topic == null ? void 0 : topic.ext_8) == null ? void 0 : _a.url;
      }).filter((sliderImage) => sliderImage);
    });
    const updateTopics = async () => {
      var _a, _b, _c, _d;
      try {
        topicsList.value = [];
        const { list: topics } = await $fetch(`${apiDomain.baseURL}/rcms-api/1/content/list?cnt=6`, {
          credentials: "include",
          server: false
        });
        topicsList.value = topics;
      } catch (error) {
        snackbar.add({
          type: "error",
          text: ((_d = (_c = (_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a._data) == null ? void 0 : _b.errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.message) || t("common.error")
        });
      }
    };
    const updateFavourite = async () => {
      var _a, _b, _c, _d;
      try {
        favouriteList.value = [];
        const favouriteRes = await $fetch(`${apiDomain.baseURL}/rcms-api/1/favorite/list`, {
          credentials: "include",
          server: false,
          params: {
            member_id: parseInt(authUser.value.member_id),
            module_type: "topics"
          }
        });
        const topicsIds = favouriteRes.list.map((item) => item.module_id);
        if (topicsIds.length === 0) {
          return;
        }
        const favouriteTopicsRes = await $fetch(`${apiDomain.baseURL}/rcms-api/1/content/list`, {
          credentials: "include",
          server: false,
          params: {
            cnt: perPage.value,
            ["id[]"]: topicsIds
          }
        });
        favouriteList.value = favouriteTopicsRes.list;
      } catch (error) {
        snackbar.add({
          type: "error",
          text: ((_d = (_c = (_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a._data) == null ? void 0 : _b.errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.message) || t("common.error")
        });
      }
    };
    watch(
      () => authUser.value,
      async () => {
        if (!authUser.value.member_id) {
          return [];
        }
        await updateTopics();
        await updateFavourite();
      },
      {
        deep: true,
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bfn_cRNp.mjs.map
