import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { u as useHead } from './index-BabADJUJ.mjs';
import { l as useRoute$1, e as useI18n, g as useLocalePath, t as VRow, v as VCol, z as VIcon, m as VCard, A as VForm, o as VCardTitle, V as VContainer, B as VTextField, y as VBtn, k as apiDomain, u as useRouter$1 } from './server.mjs';
import { useSnackbar } from 'vue3-snackbar';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
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

const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== void 0) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
    const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
const Meta = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _imports_0 = "" + buildAssetsURL("logo.Bo6rc5ZC.png?width=150px");
const _sfc_main = {
  __name: "reminder",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const token = route.query.token;
    const snackbar = useSnackbar();
    const pageState = ref(1);
    const loading1 = ref(false);
    const loading2 = ref(false);
    const password_show = ref(false);
    const password_show2 = ref(false);
    const form2 = ref(null);
    const { t } = useI18n();
    const localePath = useLocalePath();
    const rules = {
      required: (v) => !!v || t("reminder.required"),
      password_min: (v) => v.length >= 8 || t("reminder.word_count"),
      password2: (v) => v === formData.password || t("reminder.conf_error")
    };
    const formData = reactive({
      email: "",
      temporaryPassword: "",
      password: "",
      confirmPassword: ""
    });
    const reminder = async () => {
      var _a, _b, _c, _d;
      loading1.value = true;
      try {
        const response = await $fetch(`${apiDomain.baseURL}/rcms-api/1/reminder`, {
          method: "POST",
          server: false,
          body: {
            email: formData.email
          }
        });
        pageState.value = 3;
        snackbar.add({
          type: "success",
          text: t("reminder.password_sent")
        });
      } catch (error) {
        snackbar.add({
          type: "error",
          text: ((_d = (_c = (_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a._data) == null ? void 0 : _b.errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.message) || t("reminder.invalid_email")
        });
      }
      loading1.value = false;
    };
    const set_password = async () => {
      var _a, _b, _c, _d, _e;
      const isValid = await ((_a = form2.value) == null ? void 0 : _a.validate());
      if (!isValid.valid) {
        return;
      }
      loading2.value = true;
      try {
        const response = await $fetch(`${apiDomain.baseURL}/rcms-api/1/reminder`, {
          method: "POST",
          server: false,
          body: {
            token,
            temp_pwd: formData.temporaryPassword,
            login_pwd: formData.password
          }
        });
        snackbar.add({
          type: "success",
          text: t("reminder.already_updated")
        });
        useRouter$1().push(localePath("/"));
      } catch (error) {
        snackbar.add({
          type: "error",
          text: ((_e = (_d = (_c = (_b = error == null ? void 0 : error.response) == null ? void 0 : _b._data) == null ? void 0 : _c.errors) == null ? void 0 : _d[0]) == null ? void 0 : _e.message) || t("common.error")
        });
      }
      loading2.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Meta = Meta;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-login_content elevation-7" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Meta, {
              name: "og_title",
              content: "Reminder"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "og_description",
              content: "Reminder page"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Meta, {
                name: "og_title",
                content: "Reminder"
              }),
              createVNode(_component_Meta, {
                name: "og_description",
                content: "Reminder page"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { class: "pa-0 col-sm-6 col-12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-login_intro"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="p-login_logo"${_scopeId2}><div class="p-login_intro-text"${_scopeId2}><h1 class="heading"${_scopeId2}><span${_scopeId2}>${_ctx.$t("reminder.back_to_login")}</span>`);
                  _push3(ssrRenderComponent(VIcon, {
                    dark: "",
                    right: "",
                    large: "",
                    class: "icon"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` mdi-undo-variant `);
                      } else {
                        return [
                          createTextVNode(" mdi-undo-variant ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h1><p${_scopeId2}>${_ctx.$t("reminder.sign_up")}</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-login_intro" }, [
                      createVNode("img", {
                        src: _imports_0,
                        class: "p-login_logo"
                      }),
                      createVNode("div", { class: "p-login_intro-text" }, [
                        createVNode("h1", { class: "heading" }, [
                          createVNode("span", {
                            innerHTML: _ctx.$t("reminder.back_to_login")
                          }, null, 8, ["innerHTML"]),
                          createVNode(VIcon, {
                            dark: "",
                            right: "",
                            large: "",
                            class: "icon"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-undo-variant ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("p", {
                          innerHTML: _ctx.$t("reminder.sign_up")
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { class: "pa-0 col-sm-6 col-12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(pageState) == 1) {
                    _push3(ssrRenderComponent(VCard, { outlined: "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="p-login_form"${_scopeId3}>`);
                          _push4(ssrRenderComponent(VForm, { onSubmit: reminder }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<h2 align="left" class="pb-4 c-text_blue"${_scopeId5}>${ssrInterpolate(_ctx.$t("reminder.password_reset"))}</h2>`);
                                    } else {
                                      return [
                                        createVNode("h2", {
                                          align: "left",
                                          class: "pb-4 c-text_blue"
                                        }, toDisplayString(_ctx.$t("reminder.password_reset")), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VContainer, { fluid: "" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<p${_scopeId7}>${ssrInterpolate(_ctx.$t("reminder.send_email"))}</p>`);
                                                  _push8(ssrRenderComponent(VTextField, {
                                                    modelValue: unref(formData).email,
                                                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                    label: "Email address",
                                                    type: "email",
                                                    autocomplete: "off",
                                                    outlined: ""
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode("p", null, toDisplayString(_ctx.$t("reminder.send_email")), 1),
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).email,
                                                      "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                      label: "Email address",
                                                      type: "email",
                                                      autocomplete: "off",
                                                      outlined: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, toDisplayString(_ctx.$t("reminder.send_email")), 1),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).email,
                                                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                    label: "Email address",
                                                    type: "email",
                                                    autocomplete: "off",
                                                    outlined: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              class: "text-center white--text"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<button type="submit"${ssrRenderAttr("loading", unref(loading1))} class="c-btn c-btn_dark"${_scopeId7}>${ssrInterpolate(_ctx.$t("reminder.reset"))}</button>`);
                                                } else {
                                                  return [
                                                    createVNode("button", {
                                                      type: "submit",
                                                      loading: unref(loading1),
                                                      class: "c-btn c-btn_dark"
                                                    }, toDisplayString(_ctx.$t("reminder.reset")), 9, ["loading"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, {
                                                cols: "12",
                                                class: "text-center white--text"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("button", {
                                                    type: "submit",
                                                    loading: unref(loading1),
                                                    class: "c-btn c-btn_dark"
                                                  }, toDisplayString(_ctx.$t("reminder.reset")), 9, ["loading"])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, toDisplayString(_ctx.$t("reminder.send_email")), 1),
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).email,
                                                  "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                  label: "Email address",
                                                  type: "email",
                                                  autocomplete: "off",
                                                  outlined: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "text-center white--text"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("button", {
                                                  type: "submit",
                                                  loading: unref(loading1),
                                                  class: "c-btn c-btn_dark"
                                                }, toDisplayString(_ctx.$t("reminder.reset")), 9, ["loading"])
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("h2", {
                                        align: "left",
                                        class: "pb-4 c-text_blue"
                                      }, toDisplayString(_ctx.$t("reminder.password_reset")), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, { fluid: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("reminder.send_email")), 1),
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).email,
                                                "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                label: "Email address",
                                                type: "email",
                                                autocomplete: "off",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "text-center white--text"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("button", {
                                                type: "submit",
                                                loading: unref(loading1),
                                                class: "c-btn c-btn_dark"
                                              }, toDisplayString(_ctx.$t("reminder.reset")), 9, ["loading"])
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
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "p-login_form" }, [
                              createVNode(VForm, {
                                onSubmit: withModifiers(reminder, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("h2", {
                                        align: "left",
                                        class: "pb-4 c-text_blue"
                                      }, toDisplayString(_ctx.$t("reminder.password_reset")), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, { fluid: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("reminder.send_email")), 1),
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).email,
                                                "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                label: "Email address",
                                                type: "email",
                                                autocomplete: "off",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "text-center white--text"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("button", {
                                                type: "submit",
                                                loading: unref(loading1),
                                                class: "c-btn c-btn_dark"
                                              }, toDisplayString(_ctx.$t("reminder.reset")), 9, ["loading"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else if (unref(pageState) == 2) {
                    _push3(ssrRenderComponent(VCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="p-login_form"${_scopeId3}>`);
                          _push4(ssrRenderComponent(VForm, {
                            ref_key: "form2",
                            ref: form2,
                            "lazy-validation": "",
                            onSubmit: set_password
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<h2 align="center" class="pb-4 c-text_blue"${_scopeId5}><p${_scopeId5}>${ssrInterpolate(_ctx.$t("reminder.set_password"))}</p></h2>`);
                                    } else {
                                      return [
                                        createVNode("h2", {
                                          align: "center",
                                          class: "pb-4 c-text_blue"
                                        }, [
                                          createVNode("p", null, toDisplayString(_ctx.$t("reminder.set_password")), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VContainer, {
                                  fluid: "",
                                  class: "p-login_content-inner"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, { cols: "12 py-0" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<p${_scopeId7}>${ssrInterpolate(_ctx.$t("reminder.temp_password"))}</p>`);
                                                  _push8(ssrRenderComponent(VTextField, {
                                                    modelValue: unref(formData).temporaryPassword,
                                                    "onUpdate:modelValue": ($event) => unref(formData).temporaryPassword = $event,
                                                    type: _ctx.text,
                                                    label: "",
                                                    outlined: ""
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode("p", null, toDisplayString(_ctx.$t("reminder.temp_password")), 1),
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).temporaryPassword,
                                                      "onUpdate:modelValue": ($event) => unref(formData).temporaryPassword = $event,
                                                      type: _ctx.text,
                                                      label: "",
                                                      outlined: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, { cols: "12 py-0" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, toDisplayString(_ctx.$t("reminder.temp_password")), 1),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).temporaryPassword,
                                                    "onUpdate:modelValue": ($event) => unref(formData).temporaryPassword = $event,
                                                    type: _ctx.text,
                                                    label: "",
                                                    outlined: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, { cols: "12 py-0" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<p${_scopeId7}>${ssrInterpolate(_ctx.$t("reminder.new_password"))}</p>`);
                                                  _push8(ssrRenderComponent(VTextField, {
                                                    modelValue: unref(formData).password,
                                                    "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                    "append-icon": unref(password_show) ? "mdi-eye" : "mdi-eye-off",
                                                    rules: [rules.required, rules.password_min],
                                                    type: unref(password_show) ? "text" : "password",
                                                    label: "",
                                                    hint: _ctx.$t("reminder.rule"),
                                                    counter: "",
                                                    outlined: "",
                                                    "onClick:append": ($event) => password_show.value = !unref(password_show)
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode("p", null, toDisplayString(_ctx.$t("reminder.new_password")), 1),
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).password,
                                                      "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                      "append-icon": unref(password_show) ? "mdi-eye" : "mdi-eye-off",
                                                      rules: [rules.required, rules.password_min],
                                                      type: unref(password_show) ? "text" : "password",
                                                      label: "",
                                                      hint: _ctx.$t("reminder.rule"),
                                                      counter: "",
                                                      outlined: "",
                                                      "onClick:append": ($event) => password_show.value = !unref(password_show)
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, { cols: "12 py-0" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, toDisplayString(_ctx.$t("reminder.new_password")), 1),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).password,
                                                    "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                    "append-icon": unref(password_show) ? "mdi-eye" : "mdi-eye-off",
                                                    rules: [rules.required, rules.password_min],
                                                    type: unref(password_show) ? "text" : "password",
                                                    label: "",
                                                    hint: _ctx.$t("reminder.rule"),
                                                    counter: "",
                                                    outlined: "",
                                                    "onClick:append": ($event) => password_show.value = !unref(password_show)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, { cols: "12 pt-0" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<p${_scopeId7}>${ssrInterpolate(_ctx.$t("reminder.conf_password"))}</p>`);
                                                  _push8(ssrRenderComponent(VTextField, {
                                                    modelValue: unref(formData).confirmPassword,
                                                    "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event,
                                                    "append-icon": unref(password_show2) ? "mdi-eye" : "mdi-eye-off",
                                                    rules: [rules.required, rules.password_min, rules.password2],
                                                    type: unref(password_show2) ? "text" : "password",
                                                    label: "",
                                                    hint: _ctx.$t("reminder.rule"),
                                                    counter: "",
                                                    outlined: "",
                                                    "onClick:append": ($event) => password_show2.value = !unref(password_show2)
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode("p", null, toDisplayString(_ctx.$t("reminder.conf_password")), 1),
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).confirmPassword,
                                                      "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event,
                                                      "append-icon": unref(password_show2) ? "mdi-eye" : "mdi-eye-off",
                                                      rules: [rules.required, rules.password_min, rules.password2],
                                                      type: unref(password_show2) ? "text" : "password",
                                                      label: "",
                                                      hint: _ctx.$t("reminder.rule"),
                                                      counter: "",
                                                      outlined: "",
                                                      "onClick:append": ($event) => password_show2.value = !unref(password_show2)
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, { cols: "12 pt-0" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, toDisplayString(_ctx.$t("reminder.conf_password")), 1),
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).confirmPassword,
                                                    "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event,
                                                    "append-icon": unref(password_show2) ? "mdi-eye" : "mdi-eye-off",
                                                    rules: [rules.required, rules.password_min, rules.password2],
                                                    type: unref(password_show2) ? "text" : "password",
                                                    label: "",
                                                    hint: _ctx.$t("reminder.rule"),
                                                    counter: "",
                                                    outlined: "",
                                                    "onClick:append": ($event) => password_show2.value = !unref(password_show2)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VBtn, {
                                                    type: "submit",
                                                    block: "",
                                                    "x-large": "",
                                                    color: "success",
                                                    dark: "",
                                                    loading: unref(loading2)
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(_ctx.$t("reminder.submit"))}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(_ctx.$t("reminder.submit")), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VBtn, {
                                                      type: "submit",
                                                      block: "",
                                                      "x-large": "",
                                                      color: "success",
                                                      dark: "",
                                                      loading: unref(loading2)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(_ctx.$t("reminder.submit")), 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["loading"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    type: "submit",
                                                    block: "",
                                                    "x-large": "",
                                                    color: "success",
                                                    dark: "",
                                                    loading: unref(loading2)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(_ctx.$t("reminder.submit")), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["loading"])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12 py-0" }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, toDisplayString(_ctx.$t("reminder.temp_password")), 1),
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).temporaryPassword,
                                                  "onUpdate:modelValue": ($event) => unref(formData).temporaryPassword = $event,
                                                  type: _ctx.text,
                                                  label: "",
                                                  outlined: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12 py-0" }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, toDisplayString(_ctx.$t("reminder.new_password")), 1),
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).password,
                                                  "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                  "append-icon": unref(password_show) ? "mdi-eye" : "mdi-eye-off",
                                                  rules: [rules.required, rules.password_min],
                                                  type: unref(password_show) ? "text" : "password",
                                                  label: "",
                                                  hint: _ctx.$t("reminder.rule"),
                                                  counter: "",
                                                  outlined: "",
                                                  "onClick:append": ($event) => password_show.value = !unref(password_show)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12 pt-0" }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, toDisplayString(_ctx.$t("reminder.conf_password")), 1),
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).confirmPassword,
                                                  "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event,
                                                  "append-icon": unref(password_show2) ? "mdi-eye" : "mdi-eye-off",
                                                  rules: [rules.required, rules.password_min, rules.password2],
                                                  type: unref(password_show2) ? "text" : "password",
                                                  label: "",
                                                  hint: _ctx.$t("reminder.rule"),
                                                  counter: "",
                                                  outlined: "",
                                                  "onClick:append": ($event) => password_show2.value = !unref(password_show2)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  type: "submit",
                                                  block: "",
                                                  "x-large": "",
                                                  color: "success",
                                                  dark: "",
                                                  loading: unref(loading2)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.$t("reminder.submit")), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["loading"])
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("h2", {
                                        align: "center",
                                        class: "pb-4 c-text_blue"
                                      }, [
                                        createVNode("p", null, toDisplayString(_ctx.$t("reminder.set_password")), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, {
                                    fluid: "",
                                    class: "p-login_content-inner"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12 py-0" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("reminder.temp_password")), 1),
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).temporaryPassword,
                                                "onUpdate:modelValue": ($event) => unref(formData).temporaryPassword = $event,
                                                type: _ctx.text,
                                                label: "",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12 py-0" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("reminder.new_password")), 1),
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).password,
                                                "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                "append-icon": unref(password_show) ? "mdi-eye" : "mdi-eye-off",
                                                rules: [rules.required, rules.password_min],
                                                type: unref(password_show) ? "text" : "password",
                                                label: "",
                                                hint: _ctx.$t("reminder.rule"),
                                                counter: "",
                                                outlined: "",
                                                "onClick:append": ($event) => password_show.value = !unref(password_show)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12 pt-0" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("reminder.conf_password")), 1),
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).confirmPassword,
                                                "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event,
                                                "append-icon": unref(password_show2) ? "mdi-eye" : "mdi-eye-off",
                                                rules: [rules.required, rules.password_min, rules.password2],
                                                type: unref(password_show2) ? "text" : "password",
                                                label: "",
                                                hint: _ctx.$t("reminder.rule"),
                                                counter: "",
                                                outlined: "",
                                                "onClick:append": ($event) => password_show2.value = !unref(password_show2)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                type: "submit",
                                                block: "",
                                                "x-large": "",
                                                color: "success",
                                                dark: "",
                                                loading: unref(loading2)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("reminder.submit")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["loading"])
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
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "p-login_form" }, [
                              createVNode(VForm, {
                                ref_key: "form2",
                                ref: form2,
                                "lazy-validation": "",
                                onSubmit: withModifiers(set_password, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("h2", {
                                        align: "center",
                                        class: "pb-4 c-text_blue"
                                      }, [
                                        createVNode("p", null, toDisplayString(_ctx.$t("reminder.set_password")), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, {
                                    fluid: "",
                                    class: "p-login_content-inner"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12 py-0" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("reminder.temp_password")), 1),
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).temporaryPassword,
                                                "onUpdate:modelValue": ($event) => unref(formData).temporaryPassword = $event,
                                                type: _ctx.text,
                                                label: "",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12 py-0" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("reminder.new_password")), 1),
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).password,
                                                "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                "append-icon": unref(password_show) ? "mdi-eye" : "mdi-eye-off",
                                                rules: [rules.required, rules.password_min],
                                                type: unref(password_show) ? "text" : "password",
                                                label: "",
                                                hint: _ctx.$t("reminder.rule"),
                                                counter: "",
                                                outlined: "",
                                                "onClick:append": ($event) => password_show.value = !unref(password_show)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12 pt-0" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("reminder.conf_password")), 1),
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).confirmPassword,
                                                "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event,
                                                "append-icon": unref(password_show2) ? "mdi-eye" : "mdi-eye-off",
                                                rules: [rules.required, rules.password_min, rules.password2],
                                                type: unref(password_show2) ? "text" : "password",
                                                label: "",
                                                hint: _ctx.$t("reminder.rule"),
                                                counter: "",
                                                outlined: "",
                                                "onClick:append": ($event) => password_show2.value = !unref(password_show2)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                type: "submit",
                                                block: "",
                                                "x-large": "",
                                                color: "success",
                                                dark: "",
                                                loading: unref(loading2)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("reminder.submit")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["loading"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 512)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else if (unref(pageState) == 3) {
                    _push3(ssrRenderComponent(VCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="p-login_form"${_scopeId3}>`);
                          _push4(ssrRenderComponent(VForm, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VContainer, { fluid: "" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VRow, { class: "p-login_content-inner" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              class: "align-self-center"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<p align="center"${_scopeId7}>${_ctx.$t("reminder.send_emailed")}</p>`);
                                                } else {
                                                  return [
                                                    createVNode("p", {
                                                      align: "center",
                                                      innerHTML: _ctx.$t("reminder.send_emailed")
                                                    }, null, 8, ["innerHTML"])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, {
                                                cols: "12",
                                                class: "align-self-center"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("p", {
                                                    align: "center",
                                                    innerHTML: _ctx.$t("reminder.send_emailed")
                                                  }, null, 8, ["innerHTML"])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VRow, { class: "p-login_content-inner" }, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "align-self-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("p", {
                                                  align: "center",
                                                  innerHTML: _ctx.$t("reminder.send_emailed")
                                                }, null, 8, ["innerHTML"])
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VContainer, { fluid: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, { class: "p-login_content-inner" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "align-self-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("p", {
                                                align: "center",
                                                innerHTML: _ctx.$t("reminder.send_emailed")
                                              }, null, 8, ["innerHTML"])
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
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "p-login_form" }, [
                              createVNode(VForm, null, {
                                default: withCtx(() => [
                                  createVNode(VContainer, { fluid: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, { class: "p-login_content-inner" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "align-self-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("p", {
                                                align: "center",
                                                innerHTML: _ctx.$t("reminder.send_emailed")
                                              }, null, 8, ["innerHTML"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(pageState) == 1 ? (openBlock(), createBlock(VCard, {
                      key: 0,
                      outlined: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "p-login_form" }, [
                          createVNode(VForm, {
                            onSubmit: withModifiers(reminder, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createVNode("h2", {
                                    align: "left",
                                    class: "pb-4 c-text_blue"
                                  }, toDisplayString(_ctx.$t("reminder.password_reset")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, { fluid: "" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, toDisplayString(_ctx.$t("reminder.send_email")), 1),
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).email,
                                            "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                            label: "Email address",
                                            type: "email",
                                            autocomplete: "off",
                                            outlined: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "text-center white--text"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("button", {
                                            type: "submit",
                                            loading: unref(loading1),
                                            class: "c-btn c-btn_dark"
                                          }, toDisplayString(_ctx.$t("reminder.reset")), 9, ["loading"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })) : unref(pageState) == 2 ? (openBlock(), createBlock(VCard, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "p-login_form" }, [
                          createVNode(VForm, {
                            ref_key: "form2",
                            ref: form2,
                            "lazy-validation": "",
                            onSubmit: withModifiers(set_password, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createVNode("h2", {
                                    align: "center",
                                    class: "pb-4 c-text_blue"
                                  }, [
                                    createVNode("p", null, toDisplayString(_ctx.$t("reminder.set_password")), 1)
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, {
                                fluid: "",
                                class: "p-login_content-inner"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12 py-0" }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, toDisplayString(_ctx.$t("reminder.temp_password")), 1),
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).temporaryPassword,
                                            "onUpdate:modelValue": ($event) => unref(formData).temporaryPassword = $event,
                                            type: _ctx.text,
                                            label: "",
                                            outlined: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12 py-0" }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, toDisplayString(_ctx.$t("reminder.new_password")), 1),
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).password,
                                            "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                            "append-icon": unref(password_show) ? "mdi-eye" : "mdi-eye-off",
                                            rules: [rules.required, rules.password_min],
                                            type: unref(password_show) ? "text" : "password",
                                            label: "",
                                            hint: _ctx.$t("reminder.rule"),
                                            counter: "",
                                            outlined: "",
                                            "onClick:append": ($event) => password_show.value = !unref(password_show)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12 pt-0" }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, toDisplayString(_ctx.$t("reminder.conf_password")), 1),
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).confirmPassword,
                                            "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event,
                                            "append-icon": unref(password_show2) ? "mdi-eye" : "mdi-eye-off",
                                            rules: [rules.required, rules.password_min, rules.password2],
                                            type: unref(password_show2) ? "text" : "password",
                                            label: "",
                                            hint: _ctx.$t("reminder.rule"),
                                            counter: "",
                                            outlined: "",
                                            "onClick:append": ($event) => password_show2.value = !unref(password_show2)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            block: "",
                                            "x-large": "",
                                            color: "success",
                                            dark: "",
                                            loading: unref(loading2)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.$t("reminder.submit")), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["loading"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ])
                      ]),
                      _: 1
                    })) : unref(pageState) == 3 ? (openBlock(), createBlock(VCard, { key: 2 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "p-login_form" }, [
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VContainer, { fluid: "" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, { class: "p-login_content-inner" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "align-self-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", {
                                            align: "center",
                                            innerHTML: _ctx.$t("reminder.send_emailed")
                                          }, null, 8, ["innerHTML"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { class: "pa-0 col-sm-6 col-12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-login_intro" }, [
                    createVNode("img", {
                      src: _imports_0,
                      class: "p-login_logo"
                    }),
                    createVNode("div", { class: "p-login_intro-text" }, [
                      createVNode("h1", { class: "heading" }, [
                        createVNode("span", {
                          innerHTML: _ctx.$t("reminder.back_to_login")
                        }, null, 8, ["innerHTML"]),
                        createVNode(VIcon, {
                          dark: "",
                          right: "",
                          large: "",
                          class: "icon"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-undo-variant ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("p", {
                        innerHTML: _ctx.$t("reminder.sign_up")
                      }, null, 8, ["innerHTML"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VCol, { class: "pa-0 col-sm-6 col-12" }, {
                default: withCtx(() => [
                  unref(pageState) == 1 ? (openBlock(), createBlock(VCard, {
                    key: 0,
                    outlined: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "p-login_form" }, [
                        createVNode(VForm, {
                          onSubmit: withModifiers(reminder, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createVNode("h2", {
                                  align: "left",
                                  class: "pb-4 c-text_blue"
                                }, toDisplayString(_ctx.$t("reminder.password_reset")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, { fluid: "" }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("p", null, toDisplayString(_ctx.$t("reminder.send_email")), 1),
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).email,
                                          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                          label: "Email address",
                                          type: "email",
                                          autocomplete: "off",
                                          outlined: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "text-center white--text"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("button", {
                                          type: "submit",
                                          loading: unref(loading1),
                                          class: "c-btn c-btn_dark"
                                        }, toDisplayString(_ctx.$t("reminder.reset")), 9, ["loading"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })) : unref(pageState) == 2 ? (openBlock(), createBlock(VCard, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "p-login_form" }, [
                        createVNode(VForm, {
                          ref_key: "form2",
                          ref: form2,
                          "lazy-validation": "",
                          onSubmit: withModifiers(set_password, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createVNode("h2", {
                                  align: "center",
                                  class: "pb-4 c-text_blue"
                                }, [
                                  createVNode("p", null, toDisplayString(_ctx.$t("reminder.set_password")), 1)
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, {
                              fluid: "",
                              class: "p-login_content-inner"
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12 py-0" }, {
                                      default: withCtx(() => [
                                        createVNode("p", null, toDisplayString(_ctx.$t("reminder.temp_password")), 1),
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).temporaryPassword,
                                          "onUpdate:modelValue": ($event) => unref(formData).temporaryPassword = $event,
                                          type: _ctx.text,
                                          label: "",
                                          outlined: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12 py-0" }, {
                                      default: withCtx(() => [
                                        createVNode("p", null, toDisplayString(_ctx.$t("reminder.new_password")), 1),
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).password,
                                          "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                          "append-icon": unref(password_show) ? "mdi-eye" : "mdi-eye-off",
                                          rules: [rules.required, rules.password_min],
                                          type: unref(password_show) ? "text" : "password",
                                          label: "",
                                          hint: _ctx.$t("reminder.rule"),
                                          counter: "",
                                          outlined: "",
                                          "onClick:append": ($event) => password_show.value = !unref(password_show)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12 pt-0" }, {
                                      default: withCtx(() => [
                                        createVNode("p", null, toDisplayString(_ctx.$t("reminder.conf_password")), 1),
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).confirmPassword,
                                          "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event,
                                          "append-icon": unref(password_show2) ? "mdi-eye" : "mdi-eye-off",
                                          rules: [rules.required, rules.password_min, rules.password2],
                                          type: unref(password_show2) ? "text" : "password",
                                          label: "",
                                          hint: _ctx.$t("reminder.rule"),
                                          counter: "",
                                          outlined: "",
                                          "onClick:append": ($event) => password_show2.value = !unref(password_show2)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "append-icon", "rules", "type", "hint", "onClick:append"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          type: "submit",
                                          block: "",
                                          "x-large": "",
                                          color: "success",
                                          dark: "",
                                          loading: unref(loading2)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.$t("reminder.submit")), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["loading"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 512)
                      ])
                    ]),
                    _: 1
                  })) : unref(pageState) == 3 ? (openBlock(), createBlock(VCard, { key: 2 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "p-login_form" }, [
                        createVNode(VForm, null, {
                          default: withCtx(() => [
                            createVNode(VContainer, { fluid: "" }, {
                              default: withCtx(() => [
                                createVNode(VRow, { class: "p-login_content-inner" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "align-self-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", {
                                          align: "center",
                                          innerHTML: _ctx.$t("reminder.send_emailed")
                                        }, null, 8, ["innerHTML"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reminder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reminder-BawIhwue.mjs.map
