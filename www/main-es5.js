(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list style=\"margin-top:60px\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\">\n              <ion-icon slot=\"start\" [md]=\"p.icon + '-outline'\"></ion-icon>\n              <ion-label>{{ p.title | translate}}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRatingRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'RATE_TRIP' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"skip()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"text-align: center;padding: 28px\">\n    <p>{{ 'TRIP_COMPLETED' | translate}}</p>\n    <h1 style=\"font-size:36px;color:#8BC34A;font-weight: 600;\"> {{ (trip)?.currency }} {{(trip)?.fee}}</h1>\n    <p>{{trip.paymentMethod}}</p>\n    <hr style=\"border-bottom: 1px solid #eee;margin-top: 24px;\" />\n  </div>\n  <div style=\"display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center \">\n    <img src=\"{{ (driver)?.photoURL }}\" onerror=\"this.src='./assets/img/default.png'\"\n      style=\"height:80px;width:80px;border-radius: 100px;\" />\n    <h3>{{(driver)?.name}}</h3>\n    <p style=\"margin:0\">{{ (driver)?.plate }} • {{ (driver)?.brand }}</p>\n    <ion-rating [rate]=\"rating\" (rateChange)=\"onRateChange($event)\"></ion-rating>\n    <div>\n      <ion-textarea rows=\"2\" [(ngModel)]=\"feedback\"></ion-textarea>\n    </div>\n    <br />\n    <ion-button color=\"dark\" size=\"small\" (click)=\"rateTrip()\">{{ 'RATE_TRIP' | translate}}</ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'forget',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forget-forget-module */
          "forget-forget-module").then(__webpack_require__.bind(null,
          /*! ./forget/forget.module */
          "./src/app/forget/forget.module.ts")).then(function (m) {
            return m.ForgetPageModule;
          });
        }
      }, {
        path: 'history',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | history-history-module */
          "history-history-module").then(__webpack_require__.bind(null,
          /*! ./history/history.module */
          "./src/app/history/history.module.ts")).then(function (m) {
            return m.HistoryPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'map',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | map-map-module */
          [__webpack_require__.e("common"), __webpack_require__.e("map-map-module")]).then(__webpack_require__.bind(null,
          /*! ./map/map.module */
          "./src/app/map/map.module.ts")).then(function (m) {
            return m.MapPageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notifications-notifications-module */
          "notifications-notifications-module").then(__webpack_require__.bind(null,
          /*! ./notifications/notifications.module */
          "./src/app/notifications/notifications.module.ts")).then(function (m) {
            return m.NotificationsPageModule;
          });
        }
      }, {
        path: 'payments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | payments-payments-module */
          "payments-payments-module").then(__webpack_require__.bind(null,
          /*! ./payments/payments.module */
          "./src/app/payments/payments.module.ts")).then(function (m) {
            return m.PaymentsPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'rating',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./rating/rating.module */
          "./src/app/rating/rating.module.ts")).then(function (m) {
            return m.RatingPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | register-register-module */
          [__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "./src/app/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'rideinfo',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | rideinfo-rideinfo-module */
          [__webpack_require__.e("common"), __webpack_require__.e("rideinfo-rideinfo-module")]).then(__webpack_require__.bind(null,
          /*! ./rideinfo/rideinfo.module */
          "./src/app/rideinfo/rideinfo.module.ts")).then(function (m) {
            return m.RideinfoPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | settings-settings-module */
          [__webpack_require__.e("common"), __webpack_require__.e("settings-settings-module")]).then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "./src/app/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'tracking',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tracking-tracking-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tracking-tracking-module")]).then(__webpack_require__.bind(null,
          /*! ./tracking/tracking.module */
          "./src/app/tracking/tracking.module.ts")).then(function (m) {
            return m.TrackingPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_trip_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/trip.service */
      "./src/app/services/trip.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, translate, afAuth, authService, router, tripService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.translate = translate;
          this.afAuth = afAuth;
          this.authService = authService;
          this.router = router;
          this.tripService = tripService;
          this.appPages = [{
            title: 'HOME',
            url: '/home',
            icon: 'home'
          }, {
            title: 'MY_RIDES',
            url: '/history',
            icon: 'time'
          }, {
            title: 'PAYMENTS',
            url: '/payments',
            icon: 'card'
          }, {
            title: 'NOTIFICATIONS',
            url: '/notifications',
            icon: 'notifications'
          }, {
            title: 'SETTINGS',
            url: '/settings',
            icon: 'settings'
          }];
          this.user = {};
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.splashScreen.hide();

              if (_this.platform.is("android")) _this.statusBar.styleLightContent();else _this.statusBar.styleDefault();

              _this.translate.setDefaultLang('en');

              var lang = localStorage.getItem('lang');
              console.log(lang);
              if (lang == null || lang == undefined) _this.translate.use('en');else _this.translate.use(lang);

              if (localStorage.getItem('isLoggedIn') === 'true') {
                _this.router.navigateByUrl('/home', {
                  skipLocationChange: true,
                  replaceUrl: true
                });

                _this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function (authData) {
                  if (authData != null) {
                    _this.authService.getUser(authData.uid).valueChanges().subscribe(function (user) {
                      console.log(user);
                      _this.user = user;
                    });

                    _this.tripService.getTrips(authData.uid).valueChanges().subscribe(function (trips) {
                      trips.forEach(function (trip) {
                        if (trip.status === 'waiting' || trip.status === 'accepted' || trip.status === 'going') {
                          _this.tripService.setId(trip.key);

                          _this.router.navigateByUrl('/tracking');
                        } else if (trip.status === 'finished') {
                          _this.router.navigateByUrl('/home', {
                            skipLocationChange: true,
                            replaceUrl: true
                          });
                        }
                      });
                    });

                    _this.router.navigateByUrl('/home', {
                      skipLocationChange: true,
                      replaceUrl: true
                    });
                  } else {
                    _this.router.navigateByUrl('/login', {
                      skipLocationChange: true,
                      replaceUrl: true
                    });
                  }
                });
              } else {
                _this.router.navigateByUrl('/login', {
                  skipLocationChange: true,
                  replaceUrl: true
                });
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services_trip_service__WEBPACK_IMPORTED_MODULE_9__["TripService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _rating_rating_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./rating/rating.module */
      "./src/app/rating/rating.module.ts");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "./node_modules/@ionic-native/firebase-x/__ivy_ngcc__/ngx/index.js");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/lang/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
          mode: 'md'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _rating_rating_module__WEBPACK_IMPORTED_MODULE_17__["RatingPageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
          }
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_19__["FirebaseX"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/rating/rating-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/rating/rating-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: RatingPageRoutingModule */

    /***/
    function srcAppRatingRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingPageRoutingModule", function () {
        return RatingPageRoutingModule;
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


      var _rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rating.page */
      "./src/app/rating/rating.page.ts");

      var routes = [{
        path: '',
        component: _rating_page__WEBPACK_IMPORTED_MODULE_3__["RatingPage"]
      }];

      var RatingPageRoutingModule = function RatingPageRoutingModule() {
        _classCallCheck(this, RatingPageRoutingModule);
      };

      RatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RatingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/rating/rating.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/rating/rating.module.ts ***!
      \*****************************************/

    /*! exports provided: RatingPageModule */

    /***/
    function srcAppRatingRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingPageModule", function () {
        return RatingPageModule;
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


      var _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rating-routing.module */
      "./src/app/rating/rating-routing.module.ts");
      /* harmony import */


      var ionic_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ionic-rating */
      "./node_modules/ionic-rating/__ivy_ngcc__/fesm2015/ionic-rating.js");
      /* harmony import */


      var _rating_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./rating.page */
      "./src/app/rating/rating.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var RatingPageModule = function RatingPageModule() {
        _classCallCheck(this, RatingPageModule);
      };

      RatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic_rating__WEBPACK_IMPORTED_MODULE_6__["IonicRatingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatingPageRoutingModule"]],
        declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_7__["RatingPage"]]
      })], RatingPageModule);
      /***/
    },

    /***/
    "./src/app/rating/rating.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/rating/rating.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppRatingRatingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pricing {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n}\n\ntable {\n  width: 70%;\n}\n\ntr {\n  border: 1px solid #eee;\n}\n\ntd {\n  padding: 4px;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0aW5nL3JhdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFBbUIsaUNBQUE7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9yYXRpbmcvcmF0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG5cbnRhYmxle1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbnRye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbnRke1xuICAgIHBhZGRpbmc6IDRweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7IGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudCB9Il19 */";
      /***/
    },

    /***/
    "./src/app/rating/rating.page.ts":
    /*!***************************************!*\
      !*** ./src/app/rating/rating.page.ts ***!
      \***************************************/

    /*! exports provided: RatingPage */

    /***/
    function srcAppRatingRatingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingPage", function () {
        return RatingPage;
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


      var _services_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/trip.service */
      "./src/app/services/trip.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var RatingPage = /*#__PURE__*/function () {
        function RatingPage(tripService, common, navParams, modalCtrl) {
          _classCallCheck(this, RatingPage);

          this.tripService = tripService;
          this.common = common;
          this.navParams = navParams;
          this.modalCtrl = modalCtrl;
          this.trip = {};
          this.driver = {};
          this.rating = 5;
          this.feedback = '';
          console.log(this.navParams.data);
          this.driver = this.navParams.get('driver');
          this.trip = this.navParams.get('trip');
        }

        _createClass(RatingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onRateChange",
          value: function onRateChange(event) {
            console.log(event);
            this.rating = event;
          }
        }, {
          key: "rateTrip",
          value: function rateTrip() {
            var _this2 = this;

            console.log(this.rating);
            this.tripService.rateTrip(this.trip.key, this.rating, this.feedback).then(function () {
              _this2.common.showToast("Thanks for your rating");

              _this2.tripService.finishTrip(_this2.trip.key);

              _this2.modalCtrl.dismiss();
            })["catch"](function (err) {
              console.log(err);

              _this2.common.showToast("Something went wrong");

              _this2.modalCtrl.dismiss();
            });
          }
        }, {
          key: "skip",
          value: function skip() {
            this.tripService.finishTrip(this.trip.key);
            this.modalCtrl.dismiss();
          }
        }]);

        return RatingPage;
      }();

      RatingPage.ctorParameters = function () {
        return [{
          type: _services_trip_service__WEBPACK_IMPORTED_MODULE_2__["TripService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      RatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./rating.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./rating.page.scss */
        "./src/app/rating/rating.page.scss"))["default"]]
      })], RatingPage);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(afAuth, db) {
          _classCallCheck(this, AuthService);

          this.afAuth = afAuth;
          this.db = db;
        } // get current user data from firebase


        _createClass(AuthService, [{
          key: "getUserData",
          value: function getUserData() {
            return this.afAuth.currentUser;
          } // get passenger by id

        }, {
          key: "getUser",
          value: function getUser(id) {
            return this.db.object('passengers/' + id);
          } // login by email and password

        }, {
          key: "login",
          value: function login(email, password) {
            return this.afAuth.signInWithEmailAndPassword(email, password);
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            return this.afAuth.sendPasswordResetEmail(email);
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.afAuth.signOut();
          } // register new account

        }, {
          key: "register",
          value: function register(email, password, name, phoneNumber) {
            var _this3 = this;

            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
              _this3.afAuth.createUserWithEmailAndPassword(email, password).then(function (authData) {
                var userInfo = {
                  uid: authData.user.uid,
                  name: name,
                  phoneNumber: phoneNumber,
                  isPhoneVerified: false,
                  email: email,
                  createdAt: Date.now()
                };

                _this3.updateUserProfile(userInfo);

                observer.next();
              })["catch"](function (error) {
                if (error) {
                  observer.error(error);
                }
              });
            });
          } // update user display name and photo

        }, {
          key: "updateUserProfile",
          value: function updateUserProfile(user) {
            console.log(user);
            var name = user.name ? user.name : user.email;
            var photoUrl = user.photoURL ? user.photoURL : 'DEFAULT_AVATAR';
            this.getUserData().then(function (user) {
              return user.updateProfile({
                displayName: name,
                photoURL: photoUrl
              });
            }); // create or update passenger

            this.db.object('passengers/' + user.uid).update({
              name: name,
              photoURL: photoUrl,
              email: user.email,
              phoneNumber: user.phoneNumber ? user.phoneNumber : '',
              isPhoneVerified: user.isPhoneVerified,
              createdAt: Date.now()
            });
          } // create new user if not exist

        }, {
          key: "createUserIfNotExist",
          value: function createUserIfNotExist(user) {
            var _this4 = this;

            this.getUser(user.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (snapshot) {
              if (snapshot === null) {
                _this4.updateUserProfile(user);
              }
            });
          } // update card setting

        }, {
          key: "updateCardSetting",
          value: function updateCardSetting(number, exp, cvv, token, uid) {
            this.db.object('passengers/' + uid + '/card').update({
              number: number,
              exp: exp,
              cvv: cvv,
              token: token
            });
          } // get card setting

        }, {
          key: "getCardSetting",
          value: function getCardSetting(uid) {
            return this.db.object('passengers/' + uid + '/card');
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/services/common.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/common.service.ts ***!
      \********************************************/

    /*! exports provided: CommonService */

    /***/
    function srcAppServicesCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var CommonService = /*#__PURE__*/function () {
        function CommonService(toastCtrl, loadCtrl, alertCtrl, translate) {
          _classCallCheck(this, CommonService);

          this.toastCtrl = toastCtrl;
          this.loadCtrl = loadCtrl;
          this.alertCtrl = alertCtrl;
          this.translate = translate;
          this.loader = null;
        }

        _createClass(CommonService, [{
          key: "showToast",
          value: function showToast(message) {
            this.toastCtrl.create({
              message: message,
              duration: 3000
            }).then(function (res) {
              return res.present();
            });
          }
        }, {
          key: "showAlert",
          value: function showAlert(message) {
            this.alertCtrl.create({
              message: message,
              buttons: ['ok']
            }).then(function (res) {
              return res.present();
            });
          }
        }, {
          key: "showLoader",
          value: function showLoader() {
            var _this5 = this;

            if (this.loader == null) {
              this.loadCtrl.create({
                spinner: 'circles',
                duration: 5000
              }).then(function (res) {
                _this5.loader = res;

                _this5.loader.present();
              });
            }
          }
        }, {
          key: "hideLoader",
          value: function hideLoader() {
            if (this.loader != null) {
              this.loader.dismiss();
              this.loader = null;
            }
          }
        }, {
          key: "changeLang",
          value: function changeLang(lang) {
            this.translate.use(lang);
            localStorage.setItem('lang', lang);
          }
        }, {
          key: "getLang",
          value: function getLang() {
            var lang = localStorage.getItem('lang');
            if (lang == null || lang == undefined) return 'en';else return lang;
          }
        }]);

        return CommonService;
      }();

      CommonService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      };

      CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CommonService);
      /***/
    },

    /***/
    "./src/app/services/place.ts":
    /*!***********************************!*\
      !*** ./src/app/services/place.ts ***!
      \***********************************/

    /*! exports provided: Place */

    /***/
    function srcAppServicesPlaceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Place", function () {
        return Place;
      });

      var Place = /*#__PURE__*/function () {
        function Place(vicinity, lat, lng) {
          _classCallCheck(this, Place);

          this.lat = lat;
          this.lng = lng;
          this.vicinity = vicinity;
        } // get place object with formatted data


        _createClass(Place, [{
          key: "getFormatted",
          value: function getFormatted() {
            return {
              location: {
                lat: this.lat,
                lng: this.lng
              },
              vicinity: this.vicinity
            };
          }
        }]);

        return Place;
      }();
      /***/

    },

    /***/
    "./src/app/services/trip.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/trip.service.ts ***!
      \******************************************/

    /*! exports provided: TripService */

    /***/
    function srcAppServicesTripServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TripService", function () {
        return TripService;
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _place__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./place */
      "./src/app/services/place.ts");

      var TripService = /*#__PURE__*/function () {
        function TripService(db, authService) {
          _classCallCheck(this, TripService);

          this.db = db;
          this.authService = authService;
          this.paymentMethod = 'cash';
          this.discount = 0;
          this.availableDrivers = [];
        }

        _createClass(TripService, [{
          key: "getAll",
          value: function getAll() {
            return this.trips;
          }
        }, {
          key: "setId",
          value: function setId(id) {
            return this.id = id;
          }
        }, {
          key: "getId",
          value: function getId() {
            return this.id;
          }
        }, {
          key: "setCurrency",
          value: function setCurrency(currency) {
            return this.currency = currency;
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            return this.currency;
          }
        }, {
          key: "setOrigin",
          value: function setOrigin(vicinity, lat, lng) {
            var place = new _place__WEBPACK_IMPORTED_MODULE_4__["Place"](vicinity, lat, lng);
            return this.origin = place.getFormatted();
          }
        }, {
          key: "getOrigin",
          value: function getOrigin() {
            return this.origin;
          }
        }, {
          key: "setDestination",
          value: function setDestination(vicinity, lat, lng) {
            var place = new _place__WEBPACK_IMPORTED_MODULE_4__["Place"](vicinity, lat, lng);
            return this.destination = place.getFormatted();
          }
        }, {
          key: "getDestination",
          value: function getDestination() {
            return this.destination;
          }
        }, {
          key: "setDistance",
          value: function setDistance(distance) {
            return this.distance = distance;
          }
        }, {
          key: "getDistance",
          value: function getDistance() {
            return this.distance;
          }
        }, {
          key: "setFee",
          value: function setFee(fee) {
            return this.fee = fee;
          }
        }, {
          key: "getFee",
          value: function getFee() {
            return this.fee;
          }
        }, {
          key: "setRawFee",
          value: function setRawFee(fee) {
            return this.rawfee = fee;
          }
        }, {
          key: "getRawFee",
          value: function getRawFee() {
            return this.rawfee;
          }
        }, {
          key: "setTax",
          value: function setTax(tax) {
            return this.tax = tax;
          }
        }, {
          key: "getTax",
          value: function getTax() {
            return this.tax;
          }
        }, {
          key: "setFeeTaxed",
          value: function setFeeTaxed(fee_taxed) {
            return this.fee_taxed = fee_taxed;
          }
        }, {
          key: "getFeeTaxed",
          value: function getFeeTaxed() {
            return this.fee_taxed;
          }
        }, {
          key: "setCommissionType",
          value: function setCommissionType(commission_type) {
            return this.commission_type = commission_type;
          }
        }, {
          key: "getCommissionType",
          value: function getCommissionType() {
            return this.commission_type;
          }
        }, {
          key: "setCommission",
          value: function setCommission(commission) {
            return this.commission = commission;
          }
        }, {
          key: "getCommission",
          value: function getCommission() {
            return this.commission;
          }
        }, {
          key: "setCommissionValue",
          value: function setCommissionValue(commission_value) {
            return this.commission_value = commission_value;
          }
        }, {
          key: "getCommissionValue",
          value: function getCommissionValue() {
            return this.commission_value;
          }
        }, {
          key: "setNote",
          value: function setNote(note) {
            return this.note = note;
          }
        }, {
          key: "getNote",
          value: function getNote() {
            return this.note;
          }
        }, {
          key: "setPromo",
          value: function setPromo(promocode) {
            return this.promocode = promocode;
          }
        }, {
          key: "getPromo",
          value: function getPromo() {
            return this.promocode;
          }
        }, {
          key: "setDiscount",
          value: function setDiscount(discount) {
            return this.discount = discount;
          }
        }, {
          key: "getDiscount",
          value: function getDiscount() {
            return this.discount;
          }
        }, {
          key: "setPaymentMethod",
          value: function setPaymentMethod(method) {
            return this.paymentMethod = method;
          }
        }, {
          key: "getPaymentMethod",
          value: function getPaymentMethod() {
            return this.paymentMethod;
          }
        }, {
          key: "setVehicle",
          value: function setVehicle(vehicle) {
            return this.vehicle = vehicle;
          }
        }, {
          key: "getVehicle",
          value: function getVehicle() {
            return this.vehicle;
          }
        }, {
          key: "setIcon",
          value: function setIcon(icon) {
            return this.icon = icon;
          }
        }, {
          key: "getIcon",
          value: function getIcon() {
            return this.icon;
          }
        }, {
          key: "setAvailableDrivers",
          value: function setAvailableDrivers(vehicles) {
            console.log(vehicles);
            this.availableDrivers = vehicles;
          }
        }, {
          key: "getAvailableDrivers",
          value: function getAvailableDrivers() {
            return this.availableDrivers;
          }
        }, {
          key: "getTrip",
          value: function getTrip(id) {
            return this.db.object('trips/' + id);
          }
        }, {
          key: "getTrips",
          value: function getTrips(uid) {
            return this.db.list('trips', function (res) {
              return res.orderByChild('passengerId').equalTo(uid);
            });
          }
        }, {
          key: "cancelTrip",
          value: function cancelTrip(id) {
            return this.db.object('trips/' + id).update({
              status: 'canceled'
            });
          }
        }, {
          key: "finishTrip",
          value: function finishTrip(id) {
            return this.db.object('trips/' + id).update({
              status: 'finished'
            });
          }
        }, {
          key: "rateTrip",
          value: function rateTrip(tripId, stars, feedback) {
            return this.db.object('trips/' + tripId).update({
              rating: parseInt(stars),
              feedback: feedback
            });
          }
        }]);

        return TripService;
      }();

      TripService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      TripService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TripService);
      /***/
    },

    /***/
    "./src/environments/environment.prod.ts":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: SHOW_VEHICLES_WITHIN, POSITION_INTERVAL, VEHICLE_LAST_ACTIVE_LIMIT, DEAL_STATUS_PENDING, DEAL_STATUS_ACCEPTED, TRIP_STATUS_GOING, TRIP_STATUS_FINISHED, TRIP_STATUS_CANCELED, DEAL_TIMEOUT, DEFAULT_AVATAR, environment */

    /***/
    function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SHOW_VEHICLES_WITHIN", function () {
        return SHOW_VEHICLES_WITHIN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "POSITION_INTERVAL", function () {
        return POSITION_INTERVAL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VEHICLE_LAST_ACTIVE_LIMIT", function () {
        return VEHICLE_LAST_ACTIVE_LIMIT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEAL_STATUS_PENDING", function () {
        return DEAL_STATUS_PENDING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEAL_STATUS_ACCEPTED", function () {
        return DEAL_STATUS_ACCEPTED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TRIP_STATUS_GOING", function () {
        return TRIP_STATUS_GOING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TRIP_STATUS_FINISHED", function () {
        return TRIP_STATUS_FINISHED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TRIP_STATUS_CANCELED", function () {
        return TRIP_STATUS_CANCELED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEAL_TIMEOUT", function () {
        return DEAL_TIMEOUT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_AVATAR", function () {
        return DEFAULT_AVATAR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var SHOW_VEHICLES_WITHIN = 20;
      var POSITION_INTERVAL = 10 * 1000;
      var VEHICLE_LAST_ACTIVE_LIMIT = 2 * 60 * 1000; // 2 mins

      var DEAL_STATUS_PENDING = 'pending';
      var DEAL_STATUS_ACCEPTED = 'accepted';
      var TRIP_STATUS_GOING = 'going';
      var TRIP_STATUS_FINISHED = 'finished';
      var TRIP_STATUS_CANCELED = 'canceled';
      var DEAL_TIMEOUT = 20 * 1000; // 20s

      var DEFAULT_AVATAR = "./assets/img/default.png";
      var environment = {
        production: true,
        appName: 'jetport',
        firebase: {
          apiKey: "AIzaSyAyuwOuzS7zEPRGYazFkSg0kkcUdJC3rD0",
          authDomain: "appjetport.firebaseapp.com",
          projectId: "appjetport",
          storageBucket: "appjetport.appspot.com",
          messagingSenderId: "1012648687100",
          appId: "1:1012648687100:web:1d92a9978bd6963eadee79",
          measurementId: "G-KKPVFVGG77"
        },
        langArr: [{
          name: 'English',
          code: 'en'
        }, {
          name: 'española',
          code: 'es'
        }, {
          name: 'عربى',
          code: 'ar'
        }, {
          name: '中文',
          code: 'cn'
        }],
        mapOptions: {
          zoom: 12,
          mapTypeControl: false,
          zoomControl: false,
          fullscreenControl: false,
          streetViewControl: false
        }
      };
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: true,
        appName: 'jetport',
        firebase: {
          apiKey: "AIzaSyAyuwOuzS7zEPRGYazFkSg0kkcUdJC3rD0",
          authDomain: "appjetport.firebaseapp.com",
          projectId: "appjetport",
          storageBucket: "appjetport.appspot.com",
          messagingSenderId: "1012648687100",
          appId: "1:1012648687100:web:1d92a9978bd6963eadee79",
          measurementId: "G-KKPVFVGG77"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/wagner/Projetos /JetPort/Jetjulho2021/ionic.config/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map