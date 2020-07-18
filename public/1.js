(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/credentials.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/kosarica/credentials.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kosarica_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kosarica/register */ "./resources/js/pages/kosarica/register.vue");
/* harmony import */ var _user_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/login */ "./resources/js/pages/user/login.vue");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
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
  components: {
    login: _user_login__WEBPACK_IMPORTED_MODULE_1__["default"],
    register: _kosarica_register__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      selectedOption: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/register.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/kosarica/register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _migration_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../migration.json */ "./migration.json");
var _migration_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../migration.json */ "./migration.json", 1);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
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
      migraiton: _migration_json__WEBPACK_IMPORTED_MODULE_1__,
      name: '',
      surname: '',
      email: '',
      telephonNumber: '',
      houseNumberAndStreet: '',
      postcode: '',
      region: '',
      error: ''
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      var credentials = {
        name: this.$store.state.user.Name ? this.$store.state.user.Name : this.name,
        surname: this.$store.state.user.Surname ? this.$store.state.user.Surname : this.surname,
        email: this.$store.state.user.Email ? this.$store.state.user.Email : this.email,
        region: this.region,
        phone: this.$store.state.user.Phone ? this.$store.state.user.Phone : this.telephonNumber,
        houseNumberAndStreet: this.houseNumberAndStreet,
        postcode: this.postcode,
        isAlreadyRegisterd: this.$store.state.user.LoginStatus ? 1 : 0
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('api/user/register/cart', credentials).then(function (results) {
        //Checks if user registerd as guest
        if (results.data.guest) {
          localStorage.setItem('guest', JSON.stringify(results.data.user));
        }

        if (results.data.response == "Ok") {
          _this.$store.dispatch('checkLocalStorageCart');

          if (_this.$router.currentRoute.path != "/kosarica") {
            window.location.href = _migration_json__WEBPACK_IMPORTED_MODULE_1__[0].redirectURL;
          } else {
            window.location.href = _migration_json__WEBPACK_IMPORTED_MODULE_1__[0].redirectURL + "kosarica";
          }
        }
      })["catch"](function (error) {
        _this.error = error.response.data.errors.postcode[0];
      });
    },

    /**
    * Checks if
    */
    checkIfGuest: function checkIfGuest() {
      if (localStorage.getItem('guest')) {
        var data = JSON.parse(localStorage.getItem('guest'));
        this.name = data.Name;
        this.surname = data.Surname;
        this.email = data.Email;
        this.telephonNumber = data.Phone;
        this.postcode = data.PostCode;
        this.region = data.Region;
        this.houseNumberAndStreet = data.houseNumberAndStreet;
      }
    }
  },
  mounted: function mounted() {
    this.checkIfGuest();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/credentials.vue?vue&type=template&id=0ae6aa5d&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/kosarica/credentials.vue?vue&type=template&id=0ae6aa5d& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
      !this.$store.state.user.LoginStatus
        ? _c(
            "v-card",
            [
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.selectedOption = 1
                        }
                      }
                    },
                    [_vm._v("\n                Prijavi se\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.selectedOption = 0
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                Podatki o dostavi\n            "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      this.$store.state.user.LoginStatus == true
        ? _c(
            "v-card",
            { staticClass: "mt-1", attrs: { "min-height": "600" } },
            [_c("v-card-actions", [_c("register")], 1)],
            1
          )
        : _c(
            "v-card",
            { staticClass: "mt-1", attrs: { "min-height": "600" } },
            [
              _vm.selectedOption == 1
                ? _c("v-card-actions", [_c("login")], 1)
                : _c("v-card-actions", [_c("register")], 1)
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/register.vue?vue&type=template&id=7aa94192&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/kosarica/register.vue?vue&type=template&id=7aa94192& ***!
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
        { attrs: { elevation: "0", width: "500" } },
        [
          _c(
            "v-form",
            [
              this.$store.state.user.LoginStatus
                ? _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Ime",
                              value: this.$store.state.user.Name
                                ? this.$store.state.user.Name
                                : "",
                              model: this.$store.state.user.Name
                                ? ""
                                : _vm.name,
                              disabled: this.$store.state.user.Name
                                ? true
                                : false
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Priimek",
                              value: this.$store.state.user.Surname
                                ? this.$store.state.user.Surname
                                : "",
                              model: this.$store.state.user.Surname
                                ? ""
                                : _vm.surname,
                              disabled: this.$store.state.user.Surname
                                ? true
                                : false
                            }
                          })
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
                        [
                          _c("v-text-field", {
                            attrs: { label: "Ime" },
                            model: {
                              value: _vm.name,
                              callback: function($$v) {
                                _vm.name = $$v
                              },
                              expression: "name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: { label: "Priimek" },
                            model: {
                              value: _vm.surname,
                              callback: function($$v) {
                                _vm.surname = $$v
                              },
                              expression: "surname"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  this.$store.state.user.Email
                    ? _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "email",
                              value: this.$store.state.user.Email,
                              disabled: ""
                            }
                          })
                        ],
                        1
                      )
                    : _c(
                        "v-col",
                        [
                          _c("v-text-field", {
                            attrs: { label: "email" },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
                            }
                          })
                        ],
                        1
                      )
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
                      this.$store.state.user.Phone
                        ? _c("v-text-field", {
                            attrs: {
                              value: this.$store.state.user.Phone,
                              model: this.$store.state.user.Phone,
                              disabled: ""
                            }
                          })
                        : _c("v-text-field", {
                            attrs: { label: "Tel. šteilka", maxLength: "9" },
                            model: {
                              value: _vm.telephonNumber,
                              callback: function($$v) {
                                _vm.telephonNumber = $$v
                              },
                              expression: "telephonNumber"
                            }
                          })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c("v-text-field", {
                        attrs: { label: "Kraj" },
                        model: {
                          value: _vm.region,
                          callback: function($$v) {
                            _vm.region = $$v
                          },
                          expression: "region"
                        }
                      })
                    ],
                    1
                  )
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
                      _c("v-text-field", {
                        attrs: { label: "Hišna številka in ulica" },
                        model: {
                          value: _vm.houseNumberAndStreet,
                          callback: function($$v) {
                            _vm.houseNumberAndStreet = $$v
                          },
                          expression: "houseNumberAndStreet"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c("v-text-field", {
                        attrs: { label: "Poštna številka", maxLength: "4" },
                        model: {
                          value: _vm.postcode,
                          callback: function($$v) {
                            _vm.postcode = $$v
                          },
                          expression: "postcode"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: { click: _vm.register }
                    },
                    [_vm._v("Oddaj podatke")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.error != ""
            ? _c("v-alert", { attrs: { type: "error" } }, [
                _vm._v("\n            " + _vm._s(_vm.error) + "\n        ")
              ])
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/kosarica/credentials.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/kosarica/credentials.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _credentials_vue_vue_type_template_id_0ae6aa5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credentials.vue?vue&type=template&id=0ae6aa5d& */ "./resources/js/pages/kosarica/credentials.vue?vue&type=template&id=0ae6aa5d&");
/* harmony import */ var _credentials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credentials.vue?vue&type=script&lang=js& */ "./resources/js/pages/kosarica/credentials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _credentials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _credentials_vue_vue_type_template_id_0ae6aa5d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _credentials_vue_vue_type_template_id_0ae6aa5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/kosarica/credentials.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/kosarica/credentials.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/kosarica/credentials.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_credentials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./credentials.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/credentials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_credentials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/kosarica/credentials.vue?vue&type=template&id=0ae6aa5d&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/kosarica/credentials.vue?vue&type=template&id=0ae6aa5d& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_credentials_vue_vue_type_template_id_0ae6aa5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./credentials.vue?vue&type=template&id=0ae6aa5d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/credentials.vue?vue&type=template&id=0ae6aa5d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_credentials_vue_vue_type_template_id_0ae6aa5d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_credentials_vue_vue_type_template_id_0ae6aa5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/kosarica/register.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/kosarica/register.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_7aa94192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=7aa94192& */ "./resources/js/pages/kosarica/register.vue?vue&type=template&id=7aa94192&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/pages/kosarica/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_7aa94192___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_7aa94192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/kosarica/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/kosarica/register.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/kosarica/register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/kosarica/register.vue?vue&type=template&id=7aa94192&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/kosarica/register.vue?vue&type=template&id=7aa94192& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_7aa94192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=7aa94192& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/register.vue?vue&type=template&id=7aa94192&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_7aa94192___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_7aa94192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);