(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.Vuegic = {}));
}(this, (function (exports) { 'use strict';

    //
    var script = {
        name: 'CustomTag',
        props: {
            tag: {}
        },
        components: {
            CustomTag: __vue_component__,
            customTag2: {
                props: {
                    tag: String
                },
                functional: true,
                render: function render(h, context) {
                    return h(context.props.tag, context.props, context.props.content);
                }
            }
        },
        computed: {
            tagName: function tagName() {
                return this.getTag(this.tag)
            }
        },
        methods: {
            checkIsArray: function checkIsArray(config){
                return Array.isArray(config)
            },
            isValidTag: function isValidTag(tag, config) {
                if(Array.isArray(config[tag])) {
                    return false
                }
                if(isNaN(tag) == false) {
                    return false
                }
                return document.createElement(tag).toString() != "[object HTMLUnknownElement]";
            },
            parse: function parse(input, params) {
                if(typeof input == 'function') {
                    return input(params)
                }
                return input
            },
            getTag: function getTag(tag) {
                return Object.keys(tag)[0]
            },
            getTags: function getTags(config) {
                var conf = Object.assign({}, config);
                delete conf.attrs;
                delete conf.events;
                return this.parse(conf, {parent: this.tag})
            },
            getAttrs: function getAttrs(config) {
                return this.parse(config.attrs, {parent: this.tag})
            },
            getEvents: function getEvents(config) {
                console.log(config);
                return this.parse(config.events, {parent: this.tag})
            }
        }
    };

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
        if (typeof shadowMode !== 'boolean') {
            createInjectorSSR = createInjector;
            createInjector = shadowMode;
            shadowMode = false;
        }
        // Vue.extend constructor export interop.
        var options = typeof script === 'function' ? script.options : script;
        // render functions
        if (template && template.render) {
            options.render = template.render;
            options.staticRenderFns = template.staticRenderFns;
            options._compiled = true;
            // functional template
            if (isFunctionalTemplate) {
                options.functional = true;
            }
        }
        // scopedId
        if (scopeId) {
            options._scopeId = scopeId;
        }
        var hook;
        if (moduleIdentifier) {
            // server build
            hook = function (context) {
                // 2.3 injection
                context =
                    context || // cached call
                        (this.$vnode && this.$vnode.ssrContext) || // stateful
                        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
                // 2.2 with runInNewContext: true
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                    context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (style) {
                    style.call(this, createInjectorSSR(context));
                }
                // register component module identifier for async chunk inference
                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
        }
        else if (style) {
            hook = shadowMode
                ? function (context) {
                    style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
                }
                : function (context) {
                    style.call(this, createInjector(context));
                };
        }
        if (hook) {
            if (options.functional) {
                // register for functional component in vue file
                var originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            }
            else {
                // inject component registration as beforeCreate hook
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
        return script;
    }

    var isOldIE = typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    function createInjector(context) {
        return function (id, style) { return addStyle(id, style); };
    }
    var HEAD;
    var styles = {};
    function addStyle(id, css) {
        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
        if (!style.ids.has(id)) {
            style.ids.add(id);
            var code = css.source;
            if (css.map) {
                // https://developer.chrome.com/devtools/docs/javascript-debugging
                // this makes source maps inside style tags work properly in Chrome
                code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
                // http://stackoverflow.com/a/26603875
                code +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                        ' */';
            }
            if (!style.element) {
                style.element = document.createElement('style');
                style.element.type = 'text/css';
                if (css.media)
                    { style.element.setAttribute('media', css.media); }
                if (HEAD === undefined) {
                    HEAD = document.head || document.getElementsByTagName('head')[0];
                }
                HEAD.appendChild(style.element);
            }
            if ('styleSheet' in style.element) {
                style.styles.push(code);
                style.element.styleSheet.cssText = style.styles
                    .filter(Boolean)
                    .join('\n');
            }
            else {
                var index = style.ids.size - 1;
                var textNode = document.createTextNode(code);
                var nodes = style.element.childNodes;
                if (nodes[index])
                    { style.element.removeChild(nodes[index]); }
                if (nodes.length)
                    { style.element.insertBefore(textNode, nodes[index]); }
                else
                    { style.element.appendChild(textNode); }
            }
        }
    }

    /* script */
    var __vue_script__ = script;

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _vm.tag
        ? _c(
            _vm.tagName,
            _vm._g(
              _vm._b(
                { tag: "customTag2" },
                "customTag2",
                _vm.getAttrs(_vm.tag[_vm.tagName]),
                false
              ),
              _vm.getEvents(_vm.tag[_vm.tagName])
            ),
            [
              _vm.checkIsArray(_vm.tag[_vm.tagName])
                ? [
                    _vm._l(_vm.getTags(_vm.tag[_vm.tagName]), function(t, k) {
                      return [
                        t && _vm.isValidTag(_vm.getTag(t), t)
                          ? _c("CustomTag", {
                              key: k,
                              attrs: { tag: _vm.parse(t, { parent: _vm.tag }) }
                            })
                          : typeof t == "string"
                          ? [_vm._v(_vm._s(_vm.parse(t, { tag: _vm.tag })))]
                          : [
                              _vm._v(
                                _vm._s(
                                  _vm.parse(t[_vm.getTag(t)], { tag: _vm.tag })
                                )
                              )
                            ]
                      ]
                    })
                  ]
                : typeof _vm.tag[_vm.tagName] == "object"
                ? [
                    _vm._l(_vm.getTags(_vm.tag[_vm.tagName]), function(t, k) {
                      var _obj;
                      return [
                        t && _vm.isValidTag(k, t)
                          ? _c("CustomTag", {
                              key: k,
                              attrs: {
                                tag:
                                  ((_obj = {}),
                                  (_obj[k] = _vm.parse(t, { parent: _vm.tag })),
                                  _obj)
                              }
                            })
                          : typeof t == "string"
                          ? [_vm._v(_vm._s(_vm.parse(t, { tag: _vm.tag })))]
                          : [
                              _vm._v(
                                _vm._s(
                                  _vm.parse(t[_vm.getTag(t)], { tag: _vm.tag })
                                )
                              )
                            ]
                      ]
                    })
                  ]
                : typeof _vm.tag[_vm.tagName] == "string"
                ? [
                    _vm._v(
                      _vm._s(_vm.parse(_vm.tag[_vm.tagName], { tag: _vm.tag }))
                    )
                  ]
                : [_vm._v(_vm._s(_vm.parse(_vm.tag, { tag: _vm.tag })))]
            ],
            2
          )
        : _vm._e()
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      var __vue_inject_styles__ = function (inject) {
        if (!inject) { return }
        inject("data-v-d363e0ee_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Tag.vue"}, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__ = undefined;
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      var __vue_component__ = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        false,
        createInjector,
        undefined,
        undefined
      );

    //
    var script$1 = {
        components: {
            CustomTag: __vue_component__
        },
        props: {
            doc: {required: true}
        }
    };

    /* script */
    var __vue_script__$1 = script$1;

    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("CustomTag", { attrs: { tag: _vm.doc } })
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

      /* style */
      var __vue_inject_styles__$1 = undefined;
      /* scoped */
      var __vue_scope_id__$1 = undefined;
      /* module identifier */
      var __vue_module_identifier__$1 = undefined;
      /* functional template */
      var __vue_is_functional_template__$1 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      var __vue_component__$1 = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        false,
        undefined,
        undefined,
        undefined
      );

    // Import vue component

    // Declare install function executed by Vue.use()
    function install(Vue) {
    	if (install.installed) { return; }
    	install.installed = true;
    	Vue.component('Vuegic', __vue_component__$1);
    }

    // Create module definition for Vue.use()
    var plugin = {
    	install: install,
    };

    // Auto-install when vue is found (eg. in browser via <script> tag)
    var GlobalVue = null;
    if (typeof window !== 'undefined') {
    	GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
    	GlobalVue = global.Vue;
    }
    if (GlobalVue) {
    	GlobalVue.use(plugin);
    }

    exports.default = __vue_component__$1;
    exports.install = install;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
