import { ref, computed, withAsyncContext, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, mergeProps, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { e as useI18n, l as useRoute$1, k as apiDomain, x as VProgressLinear, v as VCol, t as VRow, y as VBtn, z as VIcon, V as VContainer, m as VCard, o as VCardTitle, q as VCardText, s as VImg } from './server.mjs';
import { useSnackbar } from 'vue3-snackbar';
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

const _sfc_main$1 = {
  __name: "Detail",
  __ssrInlineRender: true,
  props: {
    subtitle: {
      type: String,
      required: false,
      default: ""
    },
    imageUrl: {
      type: String,
      required: false,
      default: ""
    },
    positionPatternKey: {
      type: String,
      required: false,
      default: null
    },
    text: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(__props) {
    const positionPattern = computed(() => {
      const getPattern = (key) => {
        switch (key) {
          case "0":
            return "no image";
          case "1":
            return "top";
          case "2":
            return "left";
          case "3":
            return "bottom";
          case "4":
            return "right";
          default:
            return null;
        }
      };
      return getPattern(props.positionPatternKey);
    });
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(positionPattern) === "no image" && __props.text) {
        _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCard, {
                class: "mx-auto",
                "max-width": "7000"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "c-heading_h2" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text--primary"${_scopeId3}><span class="text"${_scopeId3}>${ssrInterpolate(__props.text)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text--primary" }, [
                              createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardTitle, {
                        class: "c-heading_h2",
                        textContent: toDisplayString(__props.subtitle)
                      }, null, 8, ["textContent"]),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text--primary" }, [
                            createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                          ])
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
                createVNode(VCard, {
                  class: "mx-auto",
                  "max-width": "7000"
                }, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, {
                      class: "c-heading_h2",
                      textContent: toDisplayString(__props.subtitle)
                    }, null, 8, ["textContent"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text--primary" }, [
                          createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                        ])
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
      } else if (unref(positionPattern) === "top") {
        _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCard, {
                class: "mx-auto",
                "max-width": "7000"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "c-heading_h2" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VImg, {
                      class: "mx-auto",
                      src: __props.imageUrl,
                      "max-width": "1060",
                      "max-height": "800",
                      position: "center",
                      "aspect-ratio": 1
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text--primary"${_scopeId3}><span class="text"${_scopeId3}>${ssrInterpolate(__props.text)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text--primary" }, [
                              createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardTitle, {
                        class: "c-heading_h2",
                        textContent: toDisplayString(__props.subtitle)
                      }, null, 8, ["textContent"]),
                      createVNode(VImg, {
                        class: "mx-auto",
                        src: __props.imageUrl,
                        "max-width": "1060",
                        "max-height": "800",
                        position: "center",
                        "aspect-ratio": 1
                      }, null, 8, ["src"]),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text--primary" }, [
                            createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                          ])
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
                createVNode(VCard, {
                  class: "mx-auto",
                  "max-width": "7000"
                }, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, {
                      class: "c-heading_h2",
                      textContent: toDisplayString(__props.subtitle)
                    }, null, 8, ["textContent"]),
                    createVNode(VImg, {
                      class: "mx-auto",
                      src: __props.imageUrl,
                      "max-width": "1060",
                      "max-height": "800",
                      position: "center",
                      "aspect-ratio": 1
                    }, null, 8, ["src"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text--primary" }, [
                          createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                        ])
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
      } else if (unref(positionPattern) === "bottom") {
        _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCard, {
                class: "mx-auto",
                "max-width": "7000"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "c-heading_h2" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text--primary pb-5"${_scopeId3}><span class="text"${_scopeId3}>${ssrInterpolate(__props.text)}</span></div>`);
                          _push4(ssrRenderComponent(VImg, {
                            class: "mx-auto",
                            "aspect-ration": 16 / 9,
                            src: __props.imageUrl,
                            "max-height": "900",
                            "max-width": "1000",
                            position: "center"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("div", { class: "text--primary pb-5" }, [
                              createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                            ]),
                            createVNode(VImg, {
                              class: "mx-auto",
                              "aspect-ration": 16 / 9,
                              src: __props.imageUrl,
                              "max-height": "900",
                              "max-width": "1000",
                              position: "center"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardTitle, {
                        class: "c-heading_h2",
                        textContent: toDisplayString(__props.subtitle)
                      }, null, 8, ["textContent"]),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text--primary pb-5" }, [
                            createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                          ]),
                          createVNode(VImg, {
                            class: "mx-auto",
                            "aspect-ration": 16 / 9,
                            src: __props.imageUrl,
                            "max-height": "900",
                            "max-width": "1000",
                            position: "center"
                          }, null, 8, ["src"])
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
                createVNode(VCard, {
                  class: "mx-auto",
                  "max-width": "7000"
                }, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, {
                      class: "c-heading_h2",
                      textContent: toDisplayString(__props.subtitle)
                    }, null, 8, ["textContent"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text--primary pb-5" }, [
                          createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                        ]),
                        createVNode(VImg, {
                          class: "mx-auto",
                          "aspect-ration": 16 / 9,
                          src: __props.imageUrl,
                          "max-height": "900",
                          "max-width": "1000",
                          position: "center"
                        }, null, 8, ["src"])
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
      } else if (unref(positionPattern) === "left") {
        _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCard, {
                class: "mx-auto",
                "max-width": "7000"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "text-h4" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VImg, {
                                        fluid: "",
                                        class: "mr-auto img-responsive",
                                        "aspect-ration": 16 / 9,
                                        src: __props.imageUrl,
                                        "max-height": "900",
                                        "max-width": "500"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VImg, {
                                          fluid: "",
                                          class: "mr-auto img-responsive",
                                          "aspect-ration": 16 / 9,
                                          src: __props.imageUrl,
                                          "max-height": "900",
                                          "max-width": "500"
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text--primary"${_scopeId5}><span class="text"${_scopeId5}>${ssrInterpolate(__props.text)}</span></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text--primary" }, [
                                          createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        fluid: "",
                                        class: "mr-auto img-responsive",
                                        "aspect-ration": 16 / 9,
                                        src: __props.imageUrl,
                                        "max-height": "900",
                                        "max-width": "500"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text--primary" }, [
                                        createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      fluid: "",
                                      class: "mr-auto img-responsive",
                                      "aspect-ration": 16 / 9,
                                      src: __props.imageUrl,
                                      "max-height": "900",
                                      "max-width": "500"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text--primary" }, [
                                      createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                                    ])
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardTitle, {
                        class: "text-h4",
                        textContent: toDisplayString(__props.subtitle)
                      }, null, 8, ["textContent"]),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    fluid: "",
                                    class: "mr-auto img-responsive",
                                    "aspect-ration": 16 / 9,
                                    src: __props.imageUrl,
                                    "max-height": "900",
                                    "max-width": "500"
                                  }, null, 8, ["src"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text--primary" }, [
                                    createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                                  ])
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCard, {
                  class: "mx-auto",
                  "max-width": "7000"
                }, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, {
                      class: "text-h4",
                      textContent: toDisplayString(__props.subtitle)
                    }, null, 8, ["textContent"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  fluid: "",
                                  class: "mr-auto img-responsive",
                                  "aspect-ration": 16 / 9,
                                  src: __props.imageUrl,
                                  "max-height": "900",
                                  "max-width": "500"
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text--primary" }, [
                                  createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                                ])
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
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref(positionPattern) === "right") {
        _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCard, {
                class: "mx-auto",
                "max-width": "7000"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "text-h5" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VContainer, { key: "start" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text--primary"${_scopeId5}><span class="text"${_scopeId5}>${ssrInterpolate(__props.text)}</span></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text--primary" }, [
                                          createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VImg, {
                                        fluid: "",
                                        class: "ml-auto img-responsive",
                                        "aspect-ration": 16 / 9,
                                        src: __props.imageUrl,
                                        "max-height": "900",
                                        "max-width": "500"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VImg, {
                                          fluid: "",
                                          class: "ml-auto img-responsive",
                                          "aspect-ration": 16 / 9,
                                          src: __props.imageUrl,
                                          "max-height": "900",
                                          "max-width": "500"
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text--primary" }, [
                                        createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        fluid: "",
                                        class: "ml-auto img-responsive",
                                        "aspect-ration": 16 / 9,
                                        src: __props.imageUrl,
                                        "max-height": "900",
                                        "max-width": "500"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text--primary" }, [
                                      createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      fluid: "",
                                      class: "ml-auto img-responsive",
                                      "aspect-ration": 16 / 9,
                                      src: __props.imageUrl,
                                      "max-height": "900",
                                      "max-width": "500"
                                    }, null, 8, ["src"])
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardTitle, {
                        class: "text-h5",
                        textContent: toDisplayString(__props.subtitle)
                      }, null, 8, ["textContent"]),
                      createVNode(VContainer, { key: "start" }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text--primary" }, [
                                    createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    fluid: "",
                                    class: "ml-auto img-responsive",
                                    "aspect-ration": 16 / 9,
                                    src: __props.imageUrl,
                                    "max-height": "900",
                                    "max-width": "500"
                                  }, null, 8, ["src"])
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCard, {
                  class: "mx-auto",
                  "max-width": "7000"
                }, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, {
                      class: "text-h5",
                      textContent: toDisplayString(__props.subtitle)
                    }, null, 8, ["textContent"]),
                    createVNode(VContainer, { key: "start" }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text--primary" }, [
                                  createVNode("span", { class: "text" }, toDisplayString(__props.text), 1)
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  fluid: "",
                                  class: "ml-auto img-responsive",
                                  "aspect-ration": 16 / 9,
                                  src: __props.imageUrl,
                                  "max-height": "900",
                                  "max-width": "500"
                                }, null, 8, ["src"])
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
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/topics/Detail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "topics_detail",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    let __temp, __restore;
    const { t } = useI18n();
    const route = useRoute$1();
    const preview_token = route.query.preview_token;
    const topicsDetail = ref(null);
    const loading = ref(true);
    const snackbar = useSnackbar();
    const favoriteColor = ref("grey");
    const items = computed(() => {
      if (!topicsDetail.value) {
        return [];
      }
      const { texts, positionPatterns, imageUrls, subtitles } = topicsDetail.value;
      return positionPatterns.map(({ key }, i) => {
        var _a2, _b2;
        return {
          text: texts == null ? void 0 : texts[i],
          positionPatternKey: key,
          imageUrl: ((_a2 = imageUrls == null ? void 0 : imageUrls[i]) == null ? void 0 : _a2.url) ? `${(_b2 = imageUrls == null ? void 0 : imageUrls[i]) == null ? void 0 : _b2.url}?width=800` : null,
          subtitle: subtitles == null ? void 0 : subtitles[i]
        };
      });
    });
    try {
      const response = ([__temp, __restore] = withAsyncContext(() => $fetch(`${apiDomain.baseURL}/rcms-api/1/content/preview`, {
        credentials: "include",
        params: {
          preview_token
        },
        server: false
      })), __temp = await __temp, __restore(), __temp);
      const d = response.details;
      favoriteColor.value = d.my_favorite_flg === true ? "red" : "grey";
      topicsDetail.value = {
        ...d,
        fileType: (_a = d == null ? void 0 : d.ext_1) == null ? void 0 : _a.key,
        fileUrl: (_b = d == null ? void 0 : d.ext_2) == null ? void 0 : _b.url,
        fileDownload: (_c = d == null ? void 0 : d.ext_2) == null ? void 0 : _c.dl_link,
        linkUrl: (_d = d == null ? void 0 : d.ext_3) == null ? void 0 : _d.url,
        linkTitle: (_e = d == null ? void 0 : d.ext_3) == null ? void 0 : _e.title,
        // for TopicsDetail
        positionPatterns: d == null ? void 0 : d.ext_4,
        texts: d == null ? void 0 : d.ext_7,
        imageUrls: d == null ? void 0 : d.ext_5,
        subtitles: d == null ? void 0 : d.ext_9
      };
      loading.value = false;
    } catch (error) {
      snackbar.add({
        type: "error",
        text: ((_i = (_h = (_g = (_f = error == null ? void 0 : error.response) == null ? void 0 : _f._data) == null ? void 0 : _g.errors) == null ? void 0 : _h[0]) == null ? void 0 : _i.message) || t("common.error")
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TopicsDetail = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VProgressLinear, {
        active: unref(loading),
        indeterminate: unref(loading),
        absolute: "",
        top: "",
        color: "orange white-4"
      }, null, _parent));
      if (unref(topicsDetail)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(VCol, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="d-flex justify-space-between mb-6" flat tile${_scopeId}><div flat${_scopeId}>`);
              _push2(ssrRenderComponent(VRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, { class: "pt-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h1 class="mt-3 mb-3"${_scopeId3}>${ssrInterpolate(unref(topicsDetail).subject)}</h1><span class="c-btn c-btn_main c-btn_sm c-btn_disable white--text"${_scopeId3}>${ssrInterpolate(unref(topicsDetail).contents_type_nm)}</span>`);
                        } else {
                          return [
                            createVNode("h1", { class: "mt-3 mb-3" }, toDisplayString(unref(topicsDetail).subject), 1),
                            createVNode("span", { class: "c-btn c-btn_main c-btn_sm c-btn_disable white--text" }, toDisplayString(unref(topicsDetail).contents_type_nm), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCol, { class: "pt-0" }, {
                        default: withCtx(() => [
                          createVNode("h1", { class: "mt-3 mb-3" }, toDisplayString(unref(topicsDetail).subject), 1),
                          createVNode("span", { class: "c-btn c-btn_main c-btn_sm c-btn_disable white--text" }, toDisplayString(unref(topicsDetail).contents_type_nm), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-right mt-2"${_scopeId}><div${_scopeId}>${ssrInterpolate(unref(topicsDetail).inst_ymdhi.slice(0, 10))}</div>`);
              _push2(ssrRenderComponent(VBtn, {
                icon: "",
                variant: "text",
                color: unref(favoriteColor)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      size: "x-large",
                      left: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` mdi-star `);
                        } else {
                          return [
                            createTextVNode(" mdi-star ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "x-large",
                        left: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" mdi-star ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
              if (unref(topicsDetail) && unref(topicsDetail).contents) {
                _push2(ssrRenderComponent(VRow, { class: "p-article_content" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VContainer, { fluid: "" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(unref(topicsDetail).subtitles, (subtitle, index) => {
                              _push4(ssrRenderComponent(VCard, {
                                key: index,
                                class: "mx-auto",
                                "max-width": "7000"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VCardTitle, { class: "c-heading_h2" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(subtitle)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(subtitle), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div class="text--primary"${_scopeId5}>${unref(topicsDetail).contents}</div>`);
                                        } else {
                                          return [
                                            createVNode("div", {
                                              class: "text--primary",
                                              innerHTML: unref(topicsDetail).contents
                                            }, null, 8, ["innerHTML"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, { class: "c-heading_h2" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(subtitle), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "text--primary",
                                            innerHTML: unref(topicsDetail).contents
                                          }, null, 8, ["innerHTML"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(topicsDetail).subtitles, (subtitle, index) => {
                                return openBlock(), createBlock(VCard, {
                                  key: index,
                                  class: "mx-auto",
                                  "max-width": "7000"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "c-heading_h2" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(subtitle), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "text--primary",
                                          innerHTML: unref(topicsDetail).contents
                                        }, null, 8, ["innerHTML"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VContainer, { fluid: "" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(topicsDetail).subtitles, (subtitle, index) => {
                              return openBlock(), createBlock(VCard, {
                                key: index,
                                class: "mx-auto",
                                "max-width": "7000"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "c-heading_h2" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(subtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "text--primary",
                                        innerHTML: unref(topicsDetail).contents
                                      }, null, 8, ["innerHTML"])
                                    ]),
                                    _: 1
                                  })
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
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--[-->`);
              ssrRenderList(unref(items), (item, idx) => {
                _push2(ssrRenderComponent(VRow, {
                  key: idx,
                  class: "p-article_content"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (item) {
                        _push3(ssrRenderComponent(_component_TopicsDetail, item, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        item ? (openBlock(), createBlock(_component_TopicsDetail, mergeProps({ key: 0 }, item), null, 16)) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  class: "d-flex justify-space-between mb-6",
                  flat: "",
                  tile: ""
                }, [
                  createVNode("div", { flat: "" }, [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { class: "pt-0" }, {
                          default: withCtx(() => [
                            createVNode("h1", { class: "mt-3 mb-3" }, toDisplayString(unref(topicsDetail).subject), 1),
                            createVNode("span", { class: "c-btn c-btn_main c-btn_sm c-btn_disable white--text" }, toDisplayString(unref(topicsDetail).contents_type_nm), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "text-right mt-2" }, [
                    createVNode("div", null, toDisplayString(unref(topicsDetail).inst_ymdhi.slice(0, 10)), 1),
                    createVNode(VBtn, {
                      icon: "",
                      variant: "text",
                      color: unref(favoriteColor)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "x-large",
                          left: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-star ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["color"])
                  ])
                ]),
                unref(topicsDetail) && unref(topicsDetail).contents ? (openBlock(), createBlock(VRow, {
                  key: 0,
                  class: "p-article_content"
                }, {
                  default: withCtx(() => [
                    createVNode(VContainer, { fluid: "" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(topicsDetail).subtitles, (subtitle, index) => {
                          return openBlock(), createBlock(VCard, {
                            key: index,
                            class: "mx-auto",
                            "max-width": "7000"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "c-heading_h2" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(subtitle), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "text--primary",
                                    innerHTML: unref(topicsDetail).contents
                                  }, null, 8, ["innerHTML"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, idx) => {
                  return openBlock(), createBlock(VRow, {
                    key: idx,
                    class: "p-article_content"
                  }, {
                    default: withCtx(() => [
                      item ? (openBlock(), createBlock(_component_TopicsDetail, mergeProps({ key: 0 }, item), null, 16)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VCol, null, null, _parent));
        _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/preview/topics_detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=topics_detail-CwjcgbO2.mjs.map
