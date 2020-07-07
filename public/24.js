(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_history_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/history.vue */ "./resources/js/pages/user/history.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
/* harmony import */ var _routes_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/router */ "./resources/js/routes/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    history: _user_history_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      changeRegion: '',
      changeHouseNumberAndStreet: '',
      changePostcode: '',
      changeName: '',
      changeSurname: '',
      changePhone: ''
    };
  },
  computed: {
    name: {
      get: function get() {
        this.changeName = this.$store.state.user.Name;
        return this.$store.state.user.Name;
      },
      set: function set(value) {
        this.changeName = value;
      }
    },
    surname: {
      get: function get() {
        this.changeSurname = this.$store.state.user.Surname;
        return this.$store.state.user.Surname;
      },
      set: function set(value) {
        this.changeSurname = value;
      }
    },
    phone: {
      get: function get() {
        this.changePhone = this.$store.state.user.Phone;
        return this.$store.state.user.Phone;
      },
      set: function set(value) {
        this.changePhone = value;
      }
    },
    region: {
      get: function get() {
        this.changeRegion = this.$store.state.user.Region;
        return this.$store.state.user.Region;
      },
      set: function set(value) {
        this.changeRegion = value;
      }
    },
    postcode: {
      get: function get() {
        this.postcode = this.$store.state.user.Postcode;
        return this.$store.state.user.Postcode;
      },
      set: function set(value) {
        this.changePostcode = value;
      }
    },
    houseNumberAndStreet: {
      get: function get() {
        this.changeHouseNumberAndStreet = this.$store.state.user.houseNumberAndStreet;
        return this.$store.state.user.houseNumberAndStreet;
      },
      set: function set(value) {
        this.changeHouseNumberAndStreet = value;
      }
    }
  },
  methods: {
    //Changes basic info about user such as name, surname and phone number
    changeBasicInfo: function changeBasicInfo() {
      var _this = this;

      //All credentials that are going to get changed
      var credentials = {
        name: this.changeName,
        surname: this.changeSurname,
        phone: this.changePhone,
        userId: this.$store.state.user.userId
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/user/change/basic', credentials).then(function (results) {
        return _this.$store.dispatch('storeUserData');
      });
    },
    //Changes the user's residence information
    changeResidenceInfo: function changeResidenceInfo() {
      var _this2 = this;

      //All credentials that are going to get changed
      var credentials = {
        postcode: this.changePostcode,
        houseNumberAndStreet: this.changeHouseNumberAndStreet,
        region: this.changeRegion,
        userId: this.$store.state.user.userId
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/user/change/residence', credentials).then(function (results) {
        return _this2.$store.dispatch('storeUserData');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/profile.vue?vue&type=template&id=4759e2ce&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/profile.vue?vue&type=template&id=4759e2ce&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", xl: "6" } },
            [
              _c(
                "v-card",
                { attrs: { height: "390" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n            Informacije u uporabniku\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("p", [
                      _c("span", { staticClass: "font-weight-black" }, [
                        _vm._v("Ime in priimek")
                      ]),
                      _vm._v(
                        " " +
                          _vm._s(this.$store.state.user.Name) +
                          " " +
                          _vm._s(this.$store.state.user.Surname)
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("span", { staticClass: "font-weight-black" }, [
                        _vm._v("E-naslov")
                      ]),
                      _vm._v(" " + _vm._s(this.$store.state.user.Email))
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("span", { staticClass: "font-weight-black" }, [
                        _vm._v("Telefonska št.")
                      ]),
                      _vm._v(" " + _vm._s(this.$store.state.user.Phone))
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", xl: "6" } },
            [
              _c(
                "v-card",
                { attrs: { height: "390" } },
                [
                  _c(
                    "v-expansion-panels",
                    [
                      _c(
                        "v-expansion-panel",
                        [
                          _c("v-expansion-panel-header", [
                            _vm._v("Spremeni naslov dostave")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-expansion-panel-content",
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
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Hišna številka in ulica" },
                                model: {
                                  value: _vm.houseNumberAndStreet,
                                  callback: function($$v) {
                                    _vm.houseNumberAndStreet = $$v
                                  },
                                  expression: "houseNumberAndStreet"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Poštna številka" },
                                model: {
                                  value: _vm.postcode,
                                  callback: function($$v) {
                                    _vm.postcode = $$v
                                  },
                                  expression: "postcode"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    width: "100%",
                                    rounded: "",
                                    color: "#6C3FB8",
                                    dark: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeResidenceInfo()
                                    }
                                  }
                                },
                                [_vm._v("Spremeni")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel",
                        [
                          _c("v-expansion-panel-header", [
                            _vm._v("Spremeni osnovne podatke")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-expansion-panel-content",
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
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Priimek" },
                                model: {
                                  value: _vm.surname,
                                  callback: function($$v) {
                                    _vm.surname = $$v
                                  },
                                  expression: "surname"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Tel. šteilka" },
                                model: {
                                  value: _vm.phone,
                                  callback: function($$v) {
                                    _vm.phone = $$v
                                  },
                                  expression: "phone"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    width: "100%",
                                    rounded: "",
                                    color: "#6C3FB8",
                                    dark: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeBasicInfo()
                                    }
                                  }
                                },
                                [_vm._v("Spremeni")]
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
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [_c("v-col", { attrs: { cols: "12" } }, [_c("history")], 1)],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/user/profile.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/user/profile.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_vue_vue_type_template_id_4759e2ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=4759e2ce&scoped=true& */ "./resources/js/pages/user/profile.vue?vue&type=template&id=4759e2ce&scoped=true&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_4759e2ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profile_vue_vue_type_template_id_4759e2ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4759e2ce",
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VExpansionPanel: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_7__["VExpansionPanel"],VExpansionPanelContent: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_7__["VExpansionPanelContent"],VExpansionPanelHeader: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_7__["VExpansionPanelHeader"],VExpansionPanels: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_7__["VExpansionPanels"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/user/profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/profile.vue?vue&type=template&id=4759e2ce&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/user/profile.vue?vue&type=template&id=4759e2ce&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_4759e2ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=template&id=4759e2ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/profile.vue?vue&type=template&id=4759e2ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_4759e2ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_4759e2ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);