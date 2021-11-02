(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{'SETTINGS' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"{{user.photoURL}}\" onerror=\"this.src='./assets/img/default.png'\" />\n      </ion-avatar>\n      <ion-label>\n        <h3 style=\"font-weight: 500;\">{{user.name}}</h3>\n        <p>{{user.phoneNumber}}</p>\n      </ion-label>\n      <ion-button slot=\"end\" color=\"dark\" fill=\"outline\" routerLink=\"/profile\">{{'EDIT' | translate}}</ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n      <ion-label>\n        <h3>{{'LANGUAGE' | translate}}</h3>\n        <p>{{'CHANGE_LANGUAGE' | translate}}</p>\n      </ion-label>\n      <ion-select (ionChange)=\"changeLang()\" [(ngModel)]=\"lang\" slot=\"end\">\n        <ion-select-option *ngFor=\"let lang of langArr\" value=\"{{lang.code}}\">{{lang.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"notifications\"></ion-icon>\n      <ion-label>\n        <h3>{{'PUSH_NOTIFICATION' | translate}}</h3>\n        <p>{{'PUSH_NOTIFICATION_TEXT' | translate}}</p>\n      </ion-label>\n      <ion-toggle slot=\"end\" (click)=\"change()\" [(ngModel)]=\"user.isPushEnabled\"></ion-toggle>\n    </ion-item>\n    <ion-item (click)=\"openSupport()\">\n      <ion-icon slot=\"start\" name=\"help-buoy\"></ion-icon>\n      <ion-label>\n        {{'HELP' | translate}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/settings/settings-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/settings/settings-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SettingsPageRoutingModule */

    /***/
    function srcAppSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
        return SettingsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings.page */
      "./src/app/settings/settings.page.ts");

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
      }];

      var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/settings/settings.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.module.ts ***!
      \*********************************************/

    /*! exports provided: SettingsPageModule */

    /***/
    function srcAppSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
        return SettingsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings-routing.module */
      "./src/app/settings/settings-routing.module.ts");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings.page */
      "./src/app/settings/settings.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
      })], SettingsPageModule);
      /***/
    },

    /***/
    "./src/app/settings/settings.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/settings/settings.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/settings/settings.page.ts ***!
      \*******************************************/

    /*! exports provided: SettingsPage */

    /***/
    function srcAppSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
        return SettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "./node_modules/@ionic-native/firebase-x/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _services_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/setting.service */
      "./src/app/services/setting.service.ts");

      var SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(commonService, authService, db, fcm, ss) {
          var _this = this;

          _classCallCheck(this, SettingsPage);

          this.commonService = commonService;
          this.authService = authService;
          this.db = db;
          this.fcm = fcm;
          this.ss = ss;
          this.langArr = [];
          this.lang = 'en';
          this.user = {};
          this.settings = {};
          this.langArr = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].langArr;
          this.lang = this.commonService.getLang();
          this.ss.getSettings().subscribe(function (res) {
            return res != null ? _this.settings = res.payload.val() : _this.settings = {};
          });
        }

        _createClass(SettingsPage, [{
          key: "openSupport",
          value: function openSupport() {
            window.open(this.settings.riderSupportURL, "_blank");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.authService.getUserData().then(function (user) {
              _this2.authService.getUser(user.uid).snapshotChanges().subscribe(function (user) {
                return _this2.user = Object.assign({
                  uid: user.key
                }, user.payload.val());
              });
            });
          }
        }, {
          key: "changeLang",
          value: function changeLang() {
            this.commonService.changeLang(this.lang);
          }
        }, {
          key: "change",
          value: function change() {
            var _this3 = this;

            console.log(this.user);

            if (this.user.isPushEnabled == false || this.user.isPushEnabled == undefined) {
              this.fcm.getToken().then(function (token) {
                console.log(token);

                _this3.authService.getUser(_this3.user.uid).update({
                  isPushEnabled: true,
                  pushToken: token
                });
              })["catch"](function (err) {
                console.log(err);

                _this3.authService.getUser(_this3.user.uid).update({
                  isPushEnabled: false,
                  pushToken: null
                });
              });
            } else {
              this.authService.getUser(this.user.uid).update({
                isPushEnabled: false,
                pushToken: null
              });
            }
          }
        }]);

        return SettingsPage;
      }();

      SettingsPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]
        }, {
          type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_5__["FirebaseX"]
        }, {
          type: _services_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"]
        }];
      };

      SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./settings.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./settings.page.scss */
        "./src/app/settings/settings.page.scss"))["default"]]
      })], SettingsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=settings-settings-module-es5.js.map