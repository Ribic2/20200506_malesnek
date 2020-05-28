(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/items.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/items.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      //Add new item data
      newItemName: '',
      newItemPrice: '',
      newQuantity: '',
      newDimension: '',
      newCategory: '',
      newColor: '',
      newImage: '',
      customCategory: '',
      newItemDescription: '',
      //Change item data
      itemName: '',
      quantity: '',
      itemPrice: '',
      description: '',
      discount: '',
      //Other variables
      selectedItemId: '',
      Search: '',
      change: false,
      addNewCategorie: false,
      deleteItem: false
    }, _defineProperty(_ref, "discount", false), _defineProperty(_ref, "success", false), _defineProperty(_ref, "successAdd", false), _defineProperty(_ref, "addItem", false), _defineProperty(_ref, "categories", ["Voščilnica"]), _defineProperty(_ref, "subCategorie", ["Unikat artikel", "Redni artikel"]), _defineProperty(_ref, "colors", ["Red", "Blue", "Purple"]), _ref;
  },
  methods: {
    getItemsForAdmin: function getItemsForAdmin() {
      return this.$store.dispatch('getItemsForAdmin');
    },
    searchForItems: function searchForItems() {
      return this.$store.dispatch('searchItems', this.Search);
    },
    changeItemData: function changeItemData(e) {
      return this.$store.dispatch('changeItemData', e);
    },
    changeData: function changeData() {
      var _this = this;

      var ChangedData = {
        "itemId": this.selectedItemId,
        "itemName": this.itemName,
        "količina": this.quantity,
        "cena": this.itemPrice,
        "Description": this.description
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/items/change', ChangedData).then(function (results) {
        if (results.data = 1) {
          _this.getItemsForAdmin();

          _this.success = true;
        }
      });
      this.selectedItemId = null;
      this.change = false;
    },
    deleteItemFunction: function deleteItemFunction() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/items/delete', {
        itemId: this.selectedItemId
      }).then(function (results) {
        if (results.data = 1) {
          _this2.getItemsForAdmin();
        }
      });
      this.selectedItemId = null;
      this.deleteItem = false;
    },
    getIdToDelete: function getIdToDelete(e) {
      this.deleteItem = true;
      this.selectedItemId = e.itemId;
    },
    getIdToChange: function getIdToChange(e) {
      this.change = true;
      this.selectedItemId = e.itemId;
      this.itemName = e.itemName;
      this.quantity = e.Quantity;
      this.itemPrice = e.itemPrice;
      this.description = e.itemDescription;
    },
    addNewItem: function addNewItem() {
      var _this3 = this;

      console.log(this.customCategory);
      var newItemData = {
        "itemName": this.newItemName,
        "cena": this.newItemPrice,
        "kolicina": this.newQuantity,
        "Dimensions": this.newDimension,
        "Categorie": this.addNewCategorie ? this.customCategory : this.newCategory,
        "Image": this.newImage,
        "Color": this.newColor,
        "Description": this.newItemDescription
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/items/add', newItemData).then(function (results) {
        if (results.data == 1) {
          _this3.getItemsForAdmin();

          _this3.addItem = false;
          _this3.successAdd = true;
        }
      });
    }
  },
  mounted: function mounted() {
    this.getItemsForAdmin();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/items.vue?vue&type=template&id=6aaa0a27&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/items.vue?vue&type=template&id=6aaa0a27& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
        "v-app-bar",
        [
          _c("v-toolbar-title", [_vm._v("Izdelki")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            staticClass: "mt-7",
            attrs: { label: "Išči izdelke", type: "text", solo: "" },
            on: {
              keyup: function($event) {
                return _vm.searchForItems()
              }
            },
            model: {
              value: _vm.Search,
              callback: function($$v) {
                _vm.Search = $$v
              },
              expression: "Search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-expansion-panels",
        _vm._l(this.$store.state.admin.items, function(i) {
          return _c(
            "v-expansion-panel",
            { key: i.itemId },
            [
              _c("v-expansion-panel-header", [
                _vm._v("\n        " + _vm._s(i.itemName) + "\n        ")
              ]),
              _vm._v(" "),
              _c(
                "v-expansion-panel-content",
                [
                  _vm._v(
                    "\n           " +
                      _vm._s(i.itemDescription) +
                      "\n            "
                  ),
                  _c(
                    "v-btn-toggle",
                    [
                      _c(
                        "v-btn",
                        {
                          on: {
                            click: function($event) {
                              return _vm.getIdToChange(i)
                            }
                          }
                        },
                        [_vm._v("Spremeni")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          on: {
                            click: function($event) {
                              return _vm.getIdToDelete(i)
                            }
                          }
                        },
                        [_vm._v("Izrbriši")]
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "500" },
          model: {
            value: _vm.change,
            callback: function($$v) {
              _vm.change = $$v
            },
            expression: "change"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Spremeni informacije o izdelku")
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-form",
                        {
                          staticClass: "ma-auto",
                          attrs: {
                            width: "500",
                            method: "post",
                            enctype: "multipart/form-data"
                          }
                        },
                        [
                          _vm._v(
                            "\n                    >\n                            "
                          ),
                          _c("v-text-field", {
                            attrs: { label: "Ime izdelka" },
                            model: {
                              value: _vm.itemName,
                              callback: function($$v) {
                                _vm.itemName = $$v
                              },
                              expression: "itemName"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Količina" },
                            model: {
                              value: _vm.quantity,
                              callback: function($$v) {
                                _vm.quantity = $$v
                              },
                              expression: "quantity"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Cena izdelka" },
                            model: {
                              value: _vm.itemPrice,
                              callback: function($$v) {
                                _vm.itemPrice = $$v
                              },
                              expression: "itemPrice"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-textarea", {
                            attrs: { label: "Opis", "no-resize": "" },
                            model: {
                              value: _vm.description,
                              callback: function($$v) {
                                _vm.description = $$v
                              },
                              expression: "description"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            attrs: { label: "Razprodaja" },
                            model: {
                              value: _vm.discount,
                              callback: function($$v) {
                                _vm.discount = $$v
                              },
                              expression: "discount"
                            }
                          }),
                          _vm._v(" "),
                          _vm.discount
                            ? _c(
                                "div",
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Znižanje v odstotkih" }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
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
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.changeData()
                        }
                      }
                    },
                    [_vm._v("\n            Spremeni\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.change = false
                        }
                      }
                    },
                    [_vm._v("\n            Preklici\n            ")]
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
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.deleteItem,
            callback: function($$v) {
              _vm.deleteItem = $$v
            },
            expression: "deleteItem"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Izbriši izdelek?")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Ali ste prepričani da želite izbrisati izdelek? Enkrat ko je izdelek izbrisan ga ni mogoče dobiti nazaj.\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.deleteItemFunction()
                        }
                      }
                    },
                    [_vm._v("\n            Izbriši\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.deleteItem = false
                        }
                      }
                    },
                    [_vm._v("\n            Preklic\n            ")]
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
        "v-dialog",
        {
          attrs: { width: "800", height: "600" },
          model: {
            value: _vm.addItem,
            callback: function($$v) {
              _vm.addItem = $$v
            },
            expression: "addItem"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Dodajanje izdelka")
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-form",
                        { staticClass: "ma-auto", attrs: { width: "500" } },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Ime izdelka" },
                                    model: {
                                      value: _vm.newItemName,
                                      callback: function($$v) {
                                        _vm.newItemName = $$v
                                      },
                                      expression: "newItemName"
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
                                    attrs: { label: "Cena izdelka" },
                                    model: {
                                      value: _vm.newItemPrice,
                                      callback: function($$v) {
                                        _vm.newItemPrice = $$v
                                      },
                                      expression: "newItemPrice"
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
                                    attrs: { label: "Količina" },
                                    model: {
                                      value: _vm.newQuantity,
                                      callback: function($$v) {
                                        _vm.newQuantity = $$v
                                      },
                                      expression: "newQuantity"
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
                                    attrs: { label: "Dimenzija" },
                                    model: {
                                      value: _vm.newDimension,
                                      callback: function($$v) {
                                        _vm.newDimension = $$v
                                      },
                                      expression: "newDimension"
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
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.colors,
                                      label: "Barva",
                                      dense: "",
                                      solo: ""
                                    },
                                    model: {
                                      value: _vm.newColor,
                                      callback: function($$v) {
                                        _vm.newColor = $$v
                                      },
                                      expression: "newColor"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.subCategorie,
                                      model: _vm.addNewCategorie
                                        ? ""
                                        : _vm.newCategory,
                                      label: "Kategorija",
                                      disabled: _vm.addNewCategorie
                                        ? true
                                        : false,
                                      dense: "",
                                      solo: ""
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            attrs: { label: "Dodaj novo kategorijo" },
                            model: {
                              value: _vm.addNewCategorie,
                              callback: function($$v) {
                                _vm.addNewCategorie = $$v
                              },
                              expression: "addNewCategorie"
                            }
                          }),
                          _vm._v(" "),
                          _vm.addNewCategorie
                            ? _c("v-text-field", {
                                attrs: { label: "Dodaj novo kategorijo" },
                                model: {
                                  value: _vm.customCategory,
                                  callback: function($$v) {
                                    _vm.customCategory = $$v
                                  },
                                  expression: "customCategory"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: { label: "File input" }
                          }),
                          _vm._v(" "),
                          _c("v-textarea", {
                            attrs: { label: "Opis", "no-resize": "" },
                            model: {
                              value: _vm.newItemDescription,
                              callback: function($$v) {
                                _vm.newItemDescription = $$v
                              },
                              expression: "newItemDescription"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.addNewItem()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    Dodaj\n                                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.addItem = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    Preklic\n                                    "
                                  )
                                ]
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
        "v-bottom-navigation",
        { attrs: { fixed: "" } },
        [
          _c(
            "v-btn",
            {
              on: {
                click: function($event) {
                  _vm.addItem = !_vm.addItem
                }
              }
            },
            [
              _c("span", [_vm._v("Dodaj")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("mdi-plus")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-bottom-sheet",
        {
          model: {
            value: _vm.success,
            callback: function($$v) {
              _vm.success = $$v
            },
            expression: "success"
          }
        },
        [
          _c(
            "v-sheet",
            { staticClass: "text-center", attrs: { height: "200px" } },
            [
              _c("div", { staticClass: "py-3" }, [
                _vm._v("Izdelek uspešno spremenjen!")
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-bottom-sheet",
        {
          model: {
            value: _vm.successAdd,
            callback: function($$v) {
              _vm.successAdd = $$v
            },
            expression: "successAdd"
          }
        },
        [
          _c(
            "v-sheet",
            { staticClass: "text-center", attrs: { height: "200px" } },
            [
              _c("div", { staticClass: "py-3" }, [
                _vm._v("Izdelek uspešno dodan!")
              ])
            ]
          )
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

/***/ "./resources/js/pages/admin/items.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/admin/items.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _items_vue_vue_type_template_id_6aaa0a27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.vue?vue&type=template&id=6aaa0a27& */ "./resources/js/pages/admin/items.vue?vue&type=template&id=6aaa0a27&");
/* harmony import */ var _items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/items.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/index.js");
/* harmony import */ var vuetify_lib_components_VBottomNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBottomNavigation */ "./node_modules/vuetify/lib/components/VBottomNavigation/index.js");
/* harmony import */ var vuetify_lib_components_VBottomSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBottomSheet */ "./node_modules/vuetify/lib/components/VBottomSheet/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VBtnToggle */ "./node_modules/vuetify/lib/components/VBtnToggle/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _items_vue_vue_type_template_id_6aaa0a27___WEBPACK_IMPORTED_MODULE_0__["render"],
  _items_vue_vue_type_template_id_6aaa0a27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAppBar: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_4__["VAppBar"],VBottomNavigation: vuetify_lib_components_VBottomNavigation__WEBPACK_IMPORTED_MODULE_5__["VBottomNavigation"],VBottomSheet: vuetify_lib_components_VBottomSheet__WEBPACK_IMPORTED_MODULE_6__["VBottomSheet"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__["VBtn"],VBtnToggle: vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_8__["VBtnToggle"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_9__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_9__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_9__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_9__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_10__["VCheckbox"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_12__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_13__["VDivider"],VExpansionPanel: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["VExpansionPanel"],VExpansionPanelContent: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["VExpansionPanelContent"],VExpansionPanelHeader: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["VExpansionPanelHeader"],VExpansionPanels: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_14__["VExpansionPanels"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_15__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_16__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_17__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_18__["VSelect"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_19__["VSheet"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_20__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_21__["VTextarea"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_22__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/items.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/items.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/admin/items.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./items.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/items.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/items.vue?vue&type=template&id=6aaa0a27&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/items.vue?vue&type=template&id=6aaa0a27& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_template_id_6aaa0a27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./items.vue?vue&type=template&id=6aaa0a27& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/items.vue?vue&type=template&id=6aaa0a27&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_template_id_6aaa0a27___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_template_id_6aaa0a27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);