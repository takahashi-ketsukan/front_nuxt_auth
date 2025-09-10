import { f as useAuth, C as useKurocoContent, e as useI18n, l as useRoute$1, g as useLocalePath, k as apiDomain, x as VProgressLinear, V as VContainer, t as VRow, v as VCol, D as VDivider, m as VCard, E as VTextarea } from './server.mjs';
import { ref, computed, withAsyncContext, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { useSnackbar } from 'vue3-snackbar';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const useToken = () => {
  const accessToken = ref("");
  const setToken = (token) => {
    accessToken.value = token;
  };
  const loadToken = () => {
  };
  const clearToken = () => {
    accessToken.value = "";
  };
  return { accessToken, setToken, loadToken, clearToken };
};
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
    let __temp, __restore;
    const { authUser } = useAuth();
    useKurocoContent();
    const { t } = useI18n();
    const route = useRoute$1();
    const topicsDetail = ref(null);
    const files = ref(null);
    const loading = ref(true);
    const favoriteResponse = ref(null);
    const favoriteColor = ref("grey");
    const snackbar = useSnackbar();
    useLocalePath();
    const { accessToken, loadToken } = useToken();
    loadToken();
    console.log("accessToken:", accessToken.value);
    computed(() => {
      const { texts, positionPatterns, imageUrls, subtitles } = topicsDetail.value;
      return positionPatterns.map(({ key }, i) => {
        var _a2, _b2;
        return {
          text: texts[i] || "",
          positionPatternKey: key,
          imageUrl: ((_a2 = imageUrls == null ? void 0 : imageUrls[i]) == null ? void 0 : _a2.url) ? `${(_b2 = imageUrls == null ? void 0 : imageUrls[i]) == null ? void 0 : _b2.url}?width=800` : null,
          subtitle: subtitles[i] || ""
        };
      });
    });
    const formatDate = (str) => {
      const [year, month, day] = str.slice(0, 10).split("-");
      return `${year}\u5E74${month}\u6708${day}\u65E5`;
    };
    const getfilename = (url) => {
      const pathname = new URL(url).pathname;
      const filename = pathname.substring(pathname.lastIndexOf("/") + 1);
      return filename;
    };
    try {
      const response = ([__temp, __restore] = withAsyncContext(() => $fetch(`${apiDomain.baseURL}/rcms-api/1/content/details/${route.params.slug}`, {
        credentials: "include",
        server: false
      })), __temp = await __temp, __restore(), __temp);
      console.log("API response:", response);
      console.log("details:", response.details);
      const d = response.details;
      topicsDetail.value = {
        ...d,
        fileType: (_a = d == null ? void 0 : d.ext_1) == null ? void 0 : _a.key,
        file1Url: (_b = d == null ? void 0 : d.ext_2) == null ? void 0 : _b.url,
        file1Download: (_c = d == null ? void 0 : d.ext_2) == null ? void 0 : _c.dl_link,
        file1Name: (_d = d == null ? void 0 : d.ext_2) == null ? void 0 : _d.desc,
        file2Url: (_e = d == null ? void 0 : d.ext_3) == null ? void 0 : _e.url,
        file2Download: (_f = d == null ? void 0 : d.ext_3) == null ? void 0 : _f.dl_link,
        // for TopicsDetail
        positionPatterns: d == null ? void 0 : d.ext_4,
        texts: d == null ? void 0 : d.ext_7,
        imageUrls: d == null ? void 0 : d.ext_5,
        subtitles: d == null ? void 0 : d.ext_9
      };
      files.value = {
        file1: {
          url: (_g = d == null ? void 0 : d.ext_2) == null ? void 0 : _g.url,
          fileDownload: (_h = d == null ? void 0 : d.ext_2) == null ? void 0 : _h.dl_link,
          fileName: (_i = d == null ? void 0 : d.ext_2) == null ? void 0 : _i.desc,
          dlName: getfilename((_j = d == null ? void 0 : d.ext_2) == null ? void 0 : _j.url)
        },
        file2: {
          url: (_k = d == null ? void 0 : d.ext_3) == null ? void 0 : _k.url,
          fileDownload: (_l = d == null ? void 0 : d.ext_3) == null ? void 0 : _l.dl_link,
          fileName: (_m = d == null ? void 0 : d.ext_3) == null ? void 0 : _m.desc,
          dlName: getfilename((_n = d == null ? void 0 : d.ext_3) == null ? void 0 : _n.url)
        },
        file3: {
          url: (_o = d == null ? void 0 : d.ext_4) == null ? void 0 : _o.url,
          fileDownload: (_p = d == null ? void 0 : d.ext_4) == null ? void 0 : _p.dl_link,
          fileName: (_q = d == null ? void 0 : d.ext_4) == null ? void 0 : _q.desc,
          dlName: getfilename((_r = d == null ? void 0 : d.ext_4) == null ? void 0 : _r.url)
        },
        file4: {
          url: (_s = d == null ? void 0 : d.ext_5) == null ? void 0 : _s.url,
          fileDownload: (_t = d == null ? void 0 : d.ext_5) == null ? void 0 : _t.dl_link,
          fileName: (_u = d == null ? void 0 : d.ext_5) == null ? void 0 : _u.desc,
          dlName: getfilename((_v = d == null ? void 0 : d.ext_5) == null ? void 0 : _v.url)
        },
        file5: {
          url: (_w = d == null ? void 0 : d.ext_6) == null ? void 0 : _w.url,
          fileDownload: (_x = d == null ? void 0 : d.ext_6) == null ? void 0 : _x.dl_link,
          fileName: (_y = d == null ? void 0 : d.ext_6) == null ? void 0 : _y.desc,
          dlName: getfilename((_z = d == null ? void 0 : d.ext_6) == null ? void 0 : _z.url)
        }
      };
      console.log(files);
      console.log(topicsDetail);
      const fav = ([__temp, __restore] = withAsyncContext(() => $fetch(`${apiDomain.baseURL}/rcms-api/1/favorite/list`, {
        credentials: "include",
        server: false,
        params: {
          member_id: parseInt(authUser.value.member_id),
          module_id: parseInt(route.params.slug),
          module_type: "topics"
        }
      })), __temp = await __temp, __restore(), __temp);
      favoriteResponse.value = fav;
      favoriteColor.value = ((_B = (_A = favoriteResponse.value) == null ? void 0 : _A.pageInfo) == null ? void 0 : _B.totalCnt) > 0 ? "red" : "grey";
      loading.value = false;
    } catch (error) {
      snackbar.add({
        type: "error",
        text: ((_F = (_E = (_D = (_C = error == null ? void 0 : error.response) == null ? void 0 : _C._data) == null ? void 0 : _D.errors) == null ? void 0 : _E[0]) == null ? void 0 : _F.message) || t("common.error")
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VProgressLinear, {
        active: unref(loading),
        indeterminate: unref(loading),
        absolute: "",
        top: "",
        color: "orange white-4"
      }, null, _parent));
      if (unref(topicsDetail)) {
        _push(ssrRenderComponent(VContainer, {
          class: "pa-4",
          "max-width": "800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="c-btn c-btn_main c-btn_sm c-btn_disable white--text"${_scopeId3}>${ssrInterpolate(unref(topicsDetail).contents_type_nm)}</span><h1 class="text-h4 font-weight-bold mb-1"${_scopeId3}>${ssrInterpolate(unref(topicsDetail).subject)}</h1><p class="text-caption grey--text mb-3"${_scopeId3}>${ssrInterpolate(unref(topicsDetail).ymd ? formatDate(unref(topicsDetail).ymd) : "")}</p>`);
                          _push4(ssrRenderComponent(VDivider, { class: "mb-4" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("span", { class: "c-btn c-btn_main c-btn_sm c-btn_disable white--text" }, toDisplayString(unref(topicsDetail).contents_type_nm), 1),
                            createVNode("h1", { class: "text-h4 font-weight-bold mb-1" }, toDisplayString(unref(topicsDetail).subject), 1),
                            createVNode("p", { class: "text-caption grey--text mb-3" }, toDisplayString(unref(topicsDetail).ymd ? formatDate(unref(topicsDetail).ymd) : ""), 1),
                            createVNode(VDivider, { class: "mb-4" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("span", { class: "c-btn c-btn_main c-btn_sm c-btn_disable white--text" }, toDisplayString(unref(topicsDetail).contents_type_nm), 1),
                          createVNode("h1", { class: "text-h4 font-weight-bold mb-1" }, toDisplayString(unref(topicsDetail).subject), 1),
                          createVNode("p", { class: "text-caption grey--text mb-3" }, toDisplayString(unref(topicsDetail).ymd ? formatDate(unref(topicsDetail).ymd) : ""), 1),
                          createVNode(VDivider, { class: "mb-4" })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            outlined: "",
                            class: "pa-3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h2 class="text-h6 font-weight-medium mb-2"${_scopeId4}>\u8A73\u7D30\u5185\u5BB9\uFF1A</h2><div class="mb-4"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VTextarea, {
                                  value: unref(topicsDetail).ext_1,
                                  outlined: "",
                                  dense: "",
                                  readonly: "",
                                  rows: "3"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div><h2 class="text-h6 font-weight-medium mb-2"${_scopeId4}>\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\uFF1A</h2><!--[-->`);
                                ssrRenderList(unref(files), (file, index) => {
                                  _push5(ssrRenderComponent(VCol, {
                                    key: index,
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    lg: "3"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` \u30FB `);
                                        if (file.url) {
                                          _push6(`<a${ssrRenderAttr("href", file.url)}${ssrRenderAttr("download", file.dlName)} target="_blank" class="file-card"${_scopeId5}>${ssrInterpolate(file.fileName)}</a>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      } else {
                                        return [
                                          createTextVNode(" \u30FB "),
                                          file.url ? (openBlock(), createBlock("a", {
                                            key: 0,
                                            href: file.url,
                                            download: file.dlName,
                                            target: "_blank",
                                            class: "file-card"
                                          }, toDisplayString(file.fileName), 9, ["href", "download"])) : createCommentVNode("", true)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  createVNode("h2", { class: "text-h6 font-weight-medium mb-2" }, "\u8A73\u7D30\u5185\u5BB9\uFF1A"),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode(VTextarea, {
                                      value: unref(topicsDetail).ext_1,
                                      outlined: "",
                                      dense: "",
                                      readonly: "",
                                      rows: "3"
                                    }, null, 8, ["value"])
                                  ]),
                                  createVNode("h2", { class: "text-h6 font-weight-medium mb-2" }, "\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\uFF1A"),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(files), (file, index) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: index,
                                      cols: "12",
                                      sm: "6",
                                      md: "4",
                                      lg: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u30FB "),
                                        file.url ? (openBlock(), createBlock("a", {
                                          key: 0,
                                          href: file.url,
                                          download: file.dlName,
                                          target: "_blank",
                                          class: "file-card"
                                        }, toDisplayString(file.fileName), 9, ["href", "download"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              outlined: "",
                              class: "pa-3"
                            }, {
                              default: withCtx(() => [
                                createVNode("h2", { class: "text-h6 font-weight-medium mb-2" }, "\u8A73\u7D30\u5185\u5BB9\uFF1A"),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode(VTextarea, {
                                    value: unref(topicsDetail).ext_1,
                                    outlined: "",
                                    dense: "",
                                    readonly: "",
                                    rows: "3"
                                  }, null, 8, ["value"])
                                ]),
                                createVNode("h2", { class: "text-h6 font-weight-medium mb-2" }, "\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\uFF1A"),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(files), (file, index) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: index,
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    lg: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u30FB "),
                                      file.url ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: file.url,
                                        download: file.dlName,
                                        target: "_blank",
                                        class: "file-card"
                                      }, toDisplayString(file.fileName), 9, ["href", "download"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            outlined: "",
                            class: "pa-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-h6 font-weight-medium mb-2" }, "\u8A73\u7D30\u5185\u5BB9\uFF1A"),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode(VTextarea, {
                                  value: unref(topicsDetail).ext_1,
                                  outlined: "",
                                  dense: "",
                                  readonly: "",
                                  rows: "3"
                                }, null, 8, ["value"])
                              ]),
                              createVNode("h2", { class: "text-h6 font-weight-medium mb-2" }, "\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\uFF1A"),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(files), (file, index) => {
                                return openBlock(), createBlock(VCol, {
                                  key: index,
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  lg: "3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u30FB "),
                                    file.url ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      href: file.url,
                                      download: file.dlName,
                                      target: "_blank",
                                      class: "file-card"
                                    }, toDisplayString(file.fileName), 9, ["href", "download"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "c-btn c-btn_main c-btn_sm c-btn_disable white--text" }, toDisplayString(unref(topicsDetail).contents_type_nm), 1),
                        createVNode("h1", { class: "text-h4 font-weight-bold mb-1" }, toDisplayString(unref(topicsDetail).subject), 1),
                        createVNode("p", { class: "text-caption grey--text mb-3" }, toDisplayString(unref(topicsDetail).ymd ? formatDate(unref(topicsDetail).ymd) : ""), 1),
                        createVNode(VDivider, { class: "mb-4" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          outlined: "",
                          class: "pa-3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h2", { class: "text-h6 font-weight-medium mb-2" }, "\u8A73\u7D30\u5185\u5BB9\uFF1A"),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode(VTextarea, {
                                value: unref(topicsDetail).ext_1,
                                outlined: "",
                                dense: "",
                                readonly: "",
                                rows: "3"
                              }, null, 8, ["value"])
                            ]),
                            createVNode("h2", { class: "text-h6 font-weight-medium mb-2" }, "\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\uFF1A"),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(files), (file, index) => {
                              return openBlock(), createBlock(VCol, {
                                key: index,
                                cols: "12",
                                sm: "6",
                                md: "4",
                                lg: "3"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u30FB "),
                                  file.url ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    href: file.url,
                                    download: file.dlName,
                                    target: "_blank",
                                    class: "file-card"
                                  }, toDisplayString(file.fileName), 9, ["href", "download"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/topics_detail/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-KpmVYDcn.mjs.map
