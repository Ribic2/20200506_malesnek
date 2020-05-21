(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ "./resources/js/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show: false,
      currentlySelectedItemId: null
    };
  },
  methods: {
    /**
     * Calls function in vuex that adds item to cart
     * @param {Object} e selected product
     */
    addToCart: function addToCart(e) {
      //If cart is empty adds item
      if (this.$store.state.cart.cart.length < 1) {
        return this.$store.dispatch('addProduct', {
          product: e,
          quantity: 1
        });
      } //If not then it checks cart products and check if newly added product is already in cart
      //If it's not it addes it
      //Else it returns false
      else {
          for (var i = 0; i < this.$store.state.cart.cart.length; i++) {
            if (e.itemId == this.$store.state.cart.cart[i].product.itemId) {
              return false;
            }
          } //Turns item button to green and changes text
          //TODO


          return this.$store.dispatch('addProduct', {
            product: e,
            quantity: 1
          });
        }
    },

    /**
     * Calls function in Vuex storage that adds
     * new products to products array
     * ONLY ADDS products of 1st page!
     */
    addData: function addData() {
      return this.$store.dispatch('getDataPerPage', 1);
    },

    /**
     *There are two ways how this functions works:
     *First - if item is already selected and it's clicked again it sets currentlySelectedItemId to null
     *Secound - if item is not selected, it gets it's id and and sets currentlySelectedItemId to newly obtained id
     */
    selectItem: function selectItem(e) {
      this.currentlySelectedItemId = e;
    }
  },
  computed: {
    getData: function getData() {
      return this.$store.state.products.products;
    }
  },
  mounted: function mounted() {
    this.addData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-card",
        { attrs: { color: "#6C3FB8", dark: "" } },
        [
          _c(
            "v-card-actions",
            [
              _c("v-card-title", [_vm._v("Trgovina")]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      _vm.show = !_vm.show
                    }
                  }
                },
                [
                  _c("v-icon", [
                    _vm._v(
                      _vm._s(_vm.show ? "mdi-chevron-up" : "mdi-chevron-down")
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-expand-transition", [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.show,
                    expression: "show"
                  }
                ],
                attrs: { id: "filter" }
              },
              [
                _c("v-divider"),
                _vm._v(" "),
                _c(
                  "div",
                  { attrs: { id: "filterButtonHolder" } },
                  [
                    _c(
                      "v-btn-toggle",
                      [
                        _c("v-btn", { attrs: { color: "#6C3FB8" } }, [
                          _vm._v(
                            "\n                Redni artikli\n                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("v-btn", { attrs: { color: "#6C3FB8" } }, [
                          _vm._v(
                            "\n                Unikati artikli\n                "
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        _vm._l(_vm.getData, function(product) {
          return _c(
            "v-col",
            { key: product.itemName, attrs: { cols: "12", xl: "3" } },
            [
              _vm.currentlySelectedItemId == product.itemId
                ? _c(
                    "v-card",
                    [
                      _c(
                        "v-responsive",
                        { attrs: { "aspect-ratio": 4 / 5 } },
                        [
                          _c("v-card-title", [_vm._v("Selected")]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.selectItem(null)
                                }
                              }
                            },
                            [_vm._v("Izvej več")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.addToCart(product)
                                }
                              }
                            },
                            [_vm._v("Dodaj")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _c(
                    "v-card",
                    [
                      _c(
                        "v-responsive",
                        { attrs: { "aspect-ratio": 4 / 5 } },
                        [
                          _c("v-card-title", [_vm._v(_vm._s(product))]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.selectItem(product.itemId)
                                }
                              }
                            },
                            [_vm._v("Izvej več")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.addToCart(product)
                                }
                              }
                            },
                            [_vm._v("Dodaj")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/index.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0b5dcf8e&scoped=true& */ "./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtnToggle */ "./node_modules/vuetify/lib/components/VBtnToggle/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VResponsive */ "./node_modules/vuetify/lib/components/VResponsive/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b5dcf8e",
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VBtnToggle: vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_5__["VBtnToggle"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VExpandTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_9__["VExpandTransition"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_11__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0b5dcf8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);