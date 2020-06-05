(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/item.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/item.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes/router.js */ "./resources/js/routes/router.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ "./resources/js/store/index.js");
/* harmony import */ var _services_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.js */ "./resources/js/services/api.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
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
      product: '',
      allReviews: '',
      images: [],
      currentIndex: '',
      rating: 0,
      comment: ''
    };
  },
  methods: {
    getItemData: function getItemData() {
      var _this = this;

      var id = this.$route.params.id;
      _services_api_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProductData(id).then(function (results) {
        _this.product = results.data.data[0];
      });
    },

    /**
     * Calls function in vuex that adds item to cart
     * @param {Object} e selected product
     */
    addToCart: function addToCart(e) {
      //If cart is empty adds item
      if (this.$store.state.cart.cart.length < 1) {
        return this.$store.dispatch('addProduct', {
          product: e[0],
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
            product: e[0],
            quantity: 1
          });
        }
    },

    /**
     * Get all review for this item
     */
    getReviews: function getReviews() {
      var _this2 = this;

      var id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/item/' + id + '/reviews').then(function (results) {
        _this2.allReviews = results.data.data;
      });
    },
    //Removes first primary image and re-adds it to first place of the array
    getImages: function getImages() {
      var _this3 = this;

      var id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/item/' + id + "/images").then(function (results) {
        _this3.images = results.data;

        if (!_this3.images.length < 2) {
          var primaryImageIndex = _this3.images.indexOf("products/" + _this3.product.dir + "/" + _this3.product.primaryImg);

          _this3.images.splice(primaryImageIndex);

          _this3.images.unshift("products/" + _this3.product.dir + "/" + _this3.product.primaryImg);
        }
      });
    },
    //Selects the image
    selectImage: function selectImage(e) {
      this.currentIndex = e;
    },
    addReviews: function addReviews(e) {
      var _this4 = this;

      var credentials = {
        "Comment": this.comment,
        "Rating": this.rating,
        "productId": e.itemId,
        "Name": this.$store.state.user.Name,
        "Surname": this.$store.state.user.Surname,
        "Email": this.$store.state.user.Email
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/review/add', credentials).then(function (results) {
        if (results.data) {
          _this4.getReviews();

          _this4.getItemData();
        }
      });
    }
  },
  mounted: function mounted() {
    this.getItemData(), this.getReviews(), this.getImages();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/item.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/item.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#container{\n    width: 80%;\n}\n.product_image{\n    height: 100%;\n    width: 100px;\n}\n#itemDescription{\n    height: 500px;\n}\n.selected_image_in_carousel{\n    transition: 0.1s;\n    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/item.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/item.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/item.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/item.vue?vue&type=template&id=056d007c&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/item.vue?vue&type=template&id=056d007c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "container" } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            {
              staticClass: "test",
              attrs: { cols: "12", xs: "12", sm: "12", md: "6", lg: "6" }
            },
            [
              _c("h1", { staticClass: "font-weight-bold ma-2 display-1" }, [
                _vm._v(_vm._s(_vm.product.itemName))
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "d-inline-flex ml-2" },
                [
                  _c("v-rating", {
                    model: {
                      value: _vm.product.OverAllrating,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "OverAllrating", _vm._n($$v))
                      },
                      expression: "product.OverAllrating"
                    }
                  }),
                  _vm._v(" "),
                  _vm.allReviews.length == 1
                    ? _c("p", { staticClass: "overline mt-3 ml-2" }, [
                        _vm._v(_vm._s(_vm.allReviews.length) + " ocena")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.allReviews.length == 2
                    ? _c("p", { staticClass: "overline mt-3 ml-2" }, [
                        _vm._v(_vm._s(_vm.allReviews.length) + " oceni")
                      ])
                    : _c("p", { staticClass: "overline mt-3 ml-2" }, [
                        _vm._v(_vm._s(_vm.allReviews.length) + " ocen")
                      ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-responsive",
                        { attrs: { "aspect-ratio": 16 / 9 } },
                        [
                          _c(
                            "v-carousel",
                            {
                              attrs: {
                                "hide-delimiters": "",
                                "show-arrows-on-hover": "",
                                "hide-delimiter-background": ""
                              },
                              model: {
                                value: _vm.currentIndex,
                                callback: function($$v) {
                                  _vm.currentIndex = $$v
                                },
                                expression: "currentIndex"
                              }
                            },
                            _vm._l(_vm.images, function(image, i) {
                              return _c("v-carousel-item", {
                                key: i,
                                attrs: {
                                  src: "http://127.0.0.1:8000/storage/" + image
                                }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                _vm._l(_vm.images, function(image, i) {
                  return _c("v-col", { key: i, attrs: { cols: "2" } }, [
                    _vm.currentIndex == i
                      ? _c("img", {
                          staticClass: "selected_image_in_carousel",
                          attrs: {
                            height: "100",
                            width: "100",
                            src: "http://127.0.0.1:8000/storage/" + image
                          }
                        })
                      : _c("img", {
                          attrs: {
                            height: "100",
                            width: "100",
                            src: "http://127.0.0.1:8000/storage/" + image
                          },
                          on: {
                            click: function($event) {
                              return _vm.selectImage(i)
                            }
                          }
                        })
                  ])
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "test" },
            [
              _c(
                "v-card",
                { attrs: { "min-height": "400", height: "100%" } },
                [
                  _c("h2", { staticClass: "headline font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.product.itemName))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { rounded: "", color: "error" },
                      on: {
                        click: function($event) {
                          return _vm.addToCart(_vm.product)
                        }
                      }
                    },
                    [_vm._v("V košarico")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "test", attrs: { id: "itemDescription" } },
            [
              _c(
                "v-card",
                { attrs: { height: "100%" } },
                [
                  _c("h1", [_vm._v("Opis izdelka")]),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("v-list-item", [
                        _vm._v(
                          "\n                    Opis: " +
                            _vm._s(_vm.product.itemDescription) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("v-list-item", [
                        _vm._v(
                          "\n                    Cena: " +
                            _vm._s(_vm.product.itemPrice) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("v-list-item", [
                        _vm._v(
                          "\n                    Dimenzija: " +
                            _vm._s(_vm.product.dimensions) +
                            "\n                    "
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
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _vm.$store.state.user.LoginStatus == true
        ? _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-card",
                    { attrs: { height: "350" } },
                    [
                      _c("h3", { staticClass: "ma-5" }, [
                        _vm._v("Dodaj oceno")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-form",
                        { staticClass: "ma-5", attrs: { method: "POST" } },
                        [
                          _c(
                            "div",
                            [
                              _c("v-rating", {
                                model: {
                                  value: _vm.rating,
                                  callback: function($$v) {
                                    _vm.rating = $$v
                                  },
                                  expression: "rating"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-textarea", {
                            attrs: { outlined: "", "no-resize": "" },
                            model: {
                              value: _vm.comment,
                              callback: function($$v) {
                                _vm.comment = $$v
                              },
                              expression: "comment"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "float-right",
                              on: {
                                click: function($event) {
                                  return _vm.addReviews(_vm.product)
                                }
                              }
                            },
                            [_vm._v("Oddaj oceno")]
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
            ],
            1
          )
        : _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("v-card", [
                    _c("h3", [
                      _vm._v("Če hočes oddati oceno se moraš registrirati!")
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
      _vm._v(" "),
      _vm.allReviews.length == 0
        ? _c("v-card", [_c("h1", [_vm._v("Ta izdelek nima nobenih ocen.")])])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "test" },
        _vm._l(_vm.allReviews, function(review) {
          return _c(
            "v-col",
            { key: review.id, attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                { attrs: { height: "200" } },
                [
                  _c(
                    "v-card-actions",
                    [
                      _c("p", [
                        _vm._v(
                          _vm._s(review.Name) + " " + _vm._s(review.Surname)
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-rating", {
                        attrs: { readonly: "" },
                        model: {
                          value: review.rating,
                          callback: function($$v) {
                            _vm.$set(review, "rating", $$v)
                          },
                          expression: "review.rating"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(
                    "\n            " +
                      _vm._s(review.postTime) +
                      "\n            "
                  ),
                  _c("br"),
                  _vm._v(
                    "\n            " + _vm._s(review.comment) + "\n            "
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

/***/ "./resources/js/pages/item.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/item.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_vue_vue_type_template_id_056d007c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue?vue&type=template&id=056d007c& */ "./resources/js/pages/item.vue?vue&type=template&id=056d007c&");
/* harmony import */ var _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.vue?vue&type=script&lang=js& */ "./resources/js/pages/item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/item.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCarousel */ "./node_modules/vuetify/lib/components/VCarousel/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VRating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VRating */ "./node_modules/vuetify/lib/components/VRating/index.js");
/* harmony import */ var vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VResponsive */ "./node_modules/vuetify/lib/components/VResponsive/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _item_vue_vue_type_template_id_056d007c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _item_vue_vue_type_template_id_056d007c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCarousel: vuetify_lib_components_VCarousel__WEBPACK_IMPORTED_MODULE_7__["VCarousel"],VCarouselItem: vuetify_lib_components_VCarousel__WEBPACK_IMPORTED_MODULE_7__["VCarouselItem"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VRating: vuetify_lib_components_VRating__WEBPACK_IMPORTED_MODULE_12__["VRating"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_13__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_14__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/item.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/item.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/item.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/item.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/item.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/item.vue?vue&type=template&id=056d007c&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/item.vue?vue&type=template&id=056d007c& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_056d007c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=template&id=056d007c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/item.vue?vue&type=template&id=056d007c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_056d007c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_056d007c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);