(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n     JetPort\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"locationinput-holder\">\n    <input class=\"locationinput\" (click)=\"chooseOrigin()\" placeholder=\"local do atendimento?\" type=\"text\"\n      value=\"{{origin ? origin.vicinity : '' }}\">\n    <!--input class=\"locationinput\" (click)=\"chooseDestination()\" placeholder=\"Where do you want to drop?\" type=\"text\"\n      value=\"{{ destination ? destination.vicinity : '' }}\"-->\n    <p class=\"distanceText\" [hidden]=\"!destination\">\n      <span *ngIf=\"distanceText!=''\">{{ distanceText }}</span>\n      <span *ngIf=\"durationText!=''\">&nbsp; {{durationText}}</span>\n    </p>\n  </div>\n\n  <div id=\"{{ mapId }}\" [ngStyle]=\"{height: '100%'}\"></div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style=\"padding: 8px;\">\n    <ion-row [hidden]=\"!destination\" style=\"background: #f5f5f5;\">\n      <ion-col>\n        <ion-button fill=\"clear\" size=\"small\" color=\"dark\" expand=\"block\" (click)=\"choosePaymentMethod1()\">\n          <ion-icon slot=\"start\" name=\"{{ getPaymentMethod() }}\"></ion-icon>\n          {{ getPaymentMethod() }}\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" size=\"small\" color=\"dark\" expand=\"block\" (click)=\"showPromoPopup()\">\n          <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n          {{'PROMO' | translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row [hidden]=\"!destination\">\n\n      <ion-col *ngFor=\"let vehicle of vehicles; let i = index\" [ngClass]=\"{'active': vehicle.active}\"\n        (click)=\"chooseVehicle(i)\">\n        <p class=\"carName\">{{ vehicle.name }}</p>\n        <img src=\"{{ vehicle.icon }}\">\n        <!-- <p class=\"carSeats\">{{ vehicle.seats }} seats</p> -->\n        <p class=\"carPrice\">{{currency }}{{ vehicle.fee_taxed }}</p>\n      </ion-col>\n\n    </ion-row>\n\n\n    <ion-button expand=\"block\" color=\"dark\" [hidden]=\"origin\" (click)=\"chooseDestination()\">\n     Acionar Técnico</ion-button>\n    <ion-button expand=\"block\" color=\"dark\" [hidden]=\"!origin\" (click)=\"book()\">\n      {{ locateDriver == false ? 'Acionar Técnico':'Localizando Técnico'}} <ion-spinner name=\"dots\" color=\"light\"\n        [hidden]=\"!locateDriver\"></ion-spinner>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  text-align: center;\n  margin-left: -40px !important;\n  letter-spacing: 4px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.locationinput-holder {\n  padding: 0.2rem 1rem;\n  background: #222222;\n  top: 0;\n  width: 100%;\n}\n\n.locationinput {\n  background: #fff;\n  outline: 0;\n  width: 100%;\n  padding: 0.5rem;\n  margin: 2px 0px;\n  font-size: 14px;\n  border-radius: 4px;\n  border: none;\n  color: #555;\n}\n\n.distanceText {\n  font-size: 12px;\n  color: #eeeeee;\n  margin: 0;\n}\n\n.align-bottom {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 5px;\n}\n\n.align-bottom p {\n  font-size: 14p;\n}\n\nion-col {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-col img {\n  width: 40px;\n  height: 40px;\n  padding: 4px;\n  border-radius: 100%;\n}\n\nion-col p {\n  margin: 2px;\n}\n\nion-row {\n  background: #fff;\n}\n\n.list-md {\n  margin: -1px 0 0px;\n}\n\n.label-md {\n  margin: 13px -50px 13px 0;\n}\n\n.text-input-md {\n  font-size: 14px;\n  margin: 8px 5px;\n}\n\n#map {\n  width: 100%;\n}\n\n.active img {\n  border: 3px solid #ffce00;\n}\n\n.carName {\n  font-size: 12px;\n  display: inline-block;\n  background: #333;\n  color: #fff;\n  padding: 2px 4px;\n  border-radius: 4px;\n}\n\n.carSeats {\n  color: #777;\n  font-size: 0.7em;\n}\n\n.carPrice {\n  color: #777;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFJSjs7QUFERTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUlKOztBQUZFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUZFO0VBQ0UsY0FBQTtBQUtKOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpFO0VBQVksV0FBQTtBQVFkOztBQVBFO0VBQ0UsZ0JBQUE7QUFVSjs7QUFSRTtFQUNFLGtCQUFBO0FBV0o7O0FBVEU7RUFDRSx5QkFBQTtBQVlKOztBQVZFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFhSjs7QUFYRTtFQUNFLFdBQUE7QUFjSjs7QUFYRTtFQUNFLHlCQUFBO0FBY0o7O0FBWEU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBY0o7O0FBWkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQWdCSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweCAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIH1cbiAgLmhlYWRlci1tZDphZnRlcntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIC5sb2NhdGlvbmlucHV0LWhvbGRlcntcbiAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xuICAgIHRvcDowO1xuICAgIHdpZHRoOjEwMCU7XG4gIH1cbiAgLmxvY2F0aW9uaW5wdXR7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBvdXRsaW5lOjA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmRpc3RhbmNlVGV4dHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNlZWVlZWU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5hbGlnbi1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIFxuICAuYWxpZ24tYm90dG9tIHB7XG4gICAgZm9udC1zaXplOiAxNHBcbiAgfVxuICBcbiAgaW9uLWNvbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgaW9uLWNvbCBpbWd7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB9XG4gIGlvbi1jb2wgcCB7IG1hcmdpbjogMnB4IH1cbiAgaW9uLXJvd3tcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIC5saXN0LW1kIHtcbiAgICBtYXJnaW46IC0xcHggMCAwcHg7XG4gIH1cbiAgLmxhYmVsLW1ke1xuICAgIG1hcmdpbjogMTNweCAtNTBweCAxM3B4IDA7XG4gIH1cbiAgLnRleHQtaW5wdXQtbWR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogOHB4IDVweDtcbiAgfVxuICAjbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmFjdGl2ZSBpbWd7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmY2UwMDtcbiAgfVxuICBcbiAgLmNhck5hbWV7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5jYXJTZWF0c3tcbiAgICBjb2xvcjogIzc3NztcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICB9XG4gIC5jYXJQcmljZXtcbiAgICBjb2xvcjogIzc3NztcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _services_place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/place.service */
      "./src/app/services/place.service.ts");
      /* harmony import */


      var _services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/setting.service */
      "./src/app/services/setting.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_deal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/deal.service */
      "./src/app/services/deal.service.ts");
      /* harmony import */


      var _services_driver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/driver.service */
      "./src/app/services/driver.service.ts");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _services_trip_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/trip.service */
      "./src/app/services/trip.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(router, alertCtrl, placeService, geolocation, chRef, settingService, tripService, driverService, afAuth, authService, translate, dealService, common, menuCtrl, db) {
          _classCallCheck(this, HomePage);

          this.router = router;
          this.alertCtrl = alertCtrl;
          this.placeService = placeService;
          this.geolocation = geolocation;
          this.chRef = chRef;
          this.settingService = settingService;
          this.tripService = tripService;
          this.driverService = driverService;
          this.afAuth = afAuth;
          this.authService = authService;
          this.translate = translate;
          this.dealService = dealService;
          this.common = common;
          this.menuCtrl = menuCtrl;
          this.db = db;
          this.mapId = Math.random() + 'map';
          this.mapHeight = 480;
          this.showModalBg = false;
          this.showVehicles = false;
          this.vehicles = [];
          this.note = '';
          this.promocode = '';
          this.distance = 0;
          this.duration = 0;
          this.paymentMethod = 'dinheiro';
          this.activeDrivers = [];
          this.driverMarkers = [];
          this.locateDriver = false;
          this.user = {};
          this.isTrackDriverEnabled = true;
          this.discount = 0;
          this.settings = {};
          this.distanceText = '';
          this.durationText = '';
        }

        _createClass(HomePage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.menuCtrl.enable(true);
            this.afAuth.authState.subscribe(function (authData) {
              if (authData != null) _this.authService.getUser(authData.uid).snapshotChanges().subscribe(function (snap) {
                _this.user = Object.assign({
                  key: snap.key,
                  uid: snap.key
                }, snap.payload.val()); //console.log('usuario', this.user);
              });
            });
            this.settingService.getSettings().subscribe(function (res) {
              return res != null ? _this.settings = res.payload.val() : _this.settings = {};
            }); // console.log("calling",);

            this.origin = this.tripService.getOrigin();
            this.destination = this.tripService.getDestination();
            this.loadMap();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// console.log("calling");
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            clearInterval(this.driverTracking);
          } // get current payment method from service

        }, {
          key: "getPaymentMethod",
          value: function getPaymentMethod() {
            this.paymentMethod = this.tripService.getPaymentMethod();
            return this.paymentMethod;
          }
        }, {
          key: "choosePaymentMethod1",
          value: function choosePaymentMethod1() {
            var _this2 = this;

            this.alertCtrl.create({
              header: "Selecione a forma de pagamento",
              inputs: [{
                type: 'radio',
                label: "Card",
                value: 'card'
              }],
              buttons: [{
                text: "Cancela"
              }, {
                text: "Seleciona",
                handler: function handler(data) {
                  console.log(data);

                  if (data == 'card') {
                    _this2.authService.getCardSetting(_this2.user.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function (res) {
                      if (res != null) {
                        _this2.tripService.setPaymentMethod(data);

                        _this2.paymentMethod = data;
                        var exp = res.exp.split('/');
                        Stripe.card.createToken({
                          number: res.number,
                          exp_month: exp[0],
                          exp_year: exp[1],
                          cvc: res.cvv
                        }, function (status, response) {
                          if (status == 200) {
                            console.log("Card Ready");

                            _this2.authService.updateCardSetting(res.number, res.exp, res.cvv, response.id, _this2.user.uid);
                          } else {
                            _this2.common.showToast(response.error.message);
                          }
                        });
                      } else _this2.common.showAlert("Cartão Inválido");
                    });
                  } else if (data == 'cash') {
                    _this2.paymentMethod = data;

                    _this2.tripService.setPaymentMethod(data);
                  }
                }
              }]
            }).then(function (res) {
              return res.present();
            });
          } // toggle active vehicle

        }, {
          key: "chooseVehicle",
          value: function chooseVehicle(index) {
            for (var i = 0; i < this.vehicles.length; i++) {
              this.vehicles[i].active = i == index; // choose this vehicle type

              if (i == index) {
                this.tripService.setVehicle(this.vehicles[i]);
                this.currentVehicle = this.vehicles[i];
              }
            } // start tracking new driver type


            this.trackDrivers();
            this.toggleVehicles();
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
            var _this3 = this;

            // this.common.showLoader("Loading..");
            // busca a localização corrente do cliente
            return this.geolocation.getCurrentPosition().then(function (resp) {
              if (_this3.origin) _this3.startLatLng = new google.maps.LatLng(_this3.origin.location.lat, _this3.origin.location.lng);else _this3.startLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
              var directionsDisplay;
              var directionsService = new google.maps.DirectionsService();
              directionsDisplay = new google.maps.DirectionsRenderer({
                polylineOptions: {
                  strokeColor: "black"
                }
              });
              var mapOptions = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["environment"].mapOptions;
              mapOptions.center = _this3.startLatLng;
              mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
              _this3.map = new google.maps.Map(document.getElementById(_this3.mapId), mapOptions);
              var mapx = _this3.map;
              directionsDisplay.setMap(mapx); // encontra o endereço no mapa

              var geocoder = new google.maps.Geocoder();
              geocoder.geocode({
                'latLng': _this3.map.getCenter()
              }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                  if (!_this3.origin) {
                    // atribui o centro do mapa como a origin
                    _this3.origin = _this3.placeService.formatAddress(results[0]);

                    _this3.tripService.setOrigin(_this3.origin.vicinity, _this3.origin.location.lat, _this3.origin.location.lng);

                    _this3.setOrigin();

                    _this3.chRef.detectChanges();
                  } else {
                    _this3.setOrigin();
                  } // salva a cidade


                  var locality = _this3.placeService.setLocalityFromGeocoder(results); // console.log('cidade', locality);
                  // carrega a lista de veiculos e veiculos por cidades


                  _this3.settingService.getPrices().valueChanges().subscribe(function (snapshot) {
                    _this3.vehicles = []; // console.log('veiculos', snapshot);

                    var obj = snapshot[locality] ? snapshot[locality] : snapshot["default"]; // console.log('objetos', obj)

                    _this3.currency = _this3.settings.currency;

                    _this3.tripService.setCurrency(_this3.settings.currency); // calculate price


                    Object.keys(obj.vehicles).forEach(function (id) {
                      obj.vehicles[id].id = id;

                      _this3.vehicles.push(obj.vehicles[id]);
                    });
                    console.log('veiculos', _this3.vehicles); // calculate distance between origin adn destination

                    if (_this3.destination) {
                      directionsService.route(request, function (result, status) {
                        if (status == google.maps.DirectionsStatus.OK && result.routes.length != 0) {
                          console.log(result);
                          _this3.distance = result.routes[0].legs[0].distance.value / 1000;
                          _this3.distanceText = result.routes[0].legs[0].distance.text;
                          _this3.durationText = result.routes[0].legs[0].duration.text;
                          console.log(_this3.distance);

                          for (var i = 0; i < _this3.vehicles.length; i++) {
                            // Calculating base fare if distance between base km
                            if (_this3.distance <= parseInt(_this3.vehicles[i].base_km)) {
                              var fee = parseFloat((_this3.distance * parseInt(_this3.vehicles[i].base_fare)).toFixed(2));
                              _this3.vehicles[i].fee = fee;
                              _this3.vehicles[i].fee_taxed = parseFloat((fee + fee * (parseInt(_this3.vehicles[i].tax) / 100)).toFixed(2));
                            } // Calculating base fare if distance above base km
                            else if (_this3.distance > parseInt(_this3.vehicles[i].base_km)) {
                                var extraKm = _this3.distance - parseInt(_this3.vehicles[i].base_km);

                                var _fee = parseFloat((parseInt(_this3.vehicles[i].base_km) * parseInt(_this3.vehicles[i].base_fare) + extraKm * parseInt(_this3.vehicles[i].per_km)).toFixed(2));

                                _this3.vehicles[i].fee = _fee;
                                _this3.vehicles[i].fee_taxed = parseFloat((_fee + _fee * (parseInt(_this3.vehicles[i].tax) / 100)).toFixed(2));
                              }

                            if (_this3.vehicles[i].commission_type == 'percentage') {
                              _this3.vehicles[i].commission = parseFloat((_this3.vehicles[i].fee * (parseInt(_this3.vehicles[i].commission_value) / 100)).toFixed(2));
                            } else {
                              _this3.vehicles[i].commission = parseFloat(parseFloat(_this3.vehicles[i].commission_value).toFixed(2));
                            }
                          }
                        } else {
                          console.log("error");
                        }
                      });
                    } // set first device as default


                    _this3.vehicles[0].active = true;
                    _this3.currentVehicle = _this3.vehicles[0];
                    _this3.locality = locality;
                    if (_this3.isTrackDriverEnabled) _this3.trackDrivers();
                  });
                }
              }); // add destination to map

              if (_this3.destination) {
                _this3.destLatLng = new google.maps.LatLng(_this3.destination.location.lat, _this3.destination.location.lng);
                var bounds = new google.maps.LatLngBounds();
                bounds.extend(_this3.startLatLng);
                bounds.extend(_this3.destLatLng);
                mapx.fitBounds(bounds);
                var request = {
                  origin: _this3.startLatLng,
                  destination: _this3.destLatLng,
                  travelMode: google.maps.TravelMode.DRIVING
                };
                directionsService.route(request, function (response, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                    console.log(response);
                    directionsDisplay.setDirections(response);
                    directionsDisplay.setMap(mapx);
                  } else {
                    console.log("error");
                  }
                });
              } // this.common.hideLoader();

            })["catch"](function (error) {
              // this.common.hideLoader();
              console.log('Error getting location', error);
            });
          }
        }, {
          key: "showPromoPopup",
          value: function showPromoPopup() {
            var _this4 = this;

            this.alertCtrl.create({
              header: 'Enter Promo code',
              inputs: [{
                name: 'promocode',
                placeholder: 'Enter Promo Code',
                value: this.promocode
              }],
              buttons: [{
                text: 'Cancel'
              }, {
                text: 'Apply',
                handler: function handler(data) {
                  console.log(data.promocode); // verifying promocode

                  var code = data.promocode.toUpperCase();

                  _this4.db.list("promocodes", function (ref) {
                    return ref.orderByChild("code").equalTo(code);
                  }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function (promocodes) {
                    console.log(promocodes);

                    if (promocodes.length > 0) {
                      var promo = promocodes[0].payload.val();
                      _this4.promocode = promo.code;
                      _this4.discount = promo.discount;

                      _this4.tripService.setPromo(promo.code);

                      _this4.tripService.setDiscount(promo.discount);

                      _this4.common.showToast(promo.code + " Applied with " + promo.discount + "% discount");
                    } else {
                      _this4.common.showToast("Invalid Promocode");
                    }
                  });
                }
              }]
            }).then(function (prompt) {
              return prompt.present();
            });
          } // Show note popup when click to 'Notes to user'

        }, {
          key: "showNotePopup",
          value: function showNotePopup() {
            var _this5 = this;

            this.alertCtrl.create({
              header: 'Dicas para o Técnico',
              message: "",
              inputs: [{
                name: 'note',
                placeholder: 'Dicas'
              }],
              buttons: [{
                text: 'Cancela'
              }, {
                text: 'Salva',
                handler: function handler(data) {
                  _this5.note = data;

                  _this5.tripService.setNote(data);

                  console.log('Saved clicked');
                }
              }]
            }).then(function (prompt) {
              return prompt.present();
            });
          }
        }, {
          key: "book",
          // go to next view when the 'Book' button is clicked
          value: function book() {
            this.locateDriver = true; // guarda detalhes do técnico

            this.tripService.setAvailableDrivers(this.activeDrivers);
            this.tripService.setDistance(this.distance);
            this.tripService.setFee(this.currentVehicle.fee);
            this.tripService.setRawFee(this.currentVehicle.fee);
            this.tripService.setFeeTaxed(this.currentVehicle.fee_taxed);
            this.tripService.setIcon(this.currentVehicle.icon);
            this.tripService.setNote(this.note);
            this.tripService.setPromo(this.promocode);
            this.tripService.setDiscount(this.discount);
            this.tripService.setTax(this.currentVehicle.tax);
            this.tripService.setCommissionType(this.currentVehicle.commission_type);
            this.tripService.setCommissionValue(this.currentVehicle.commission_value);
            this.tripService.setCommission(this.currentVehicle.commission); // this.tripService.setPaymentMethod('');

            this.drivers = this.tripService.getAvailableDrivers(); // ordena técnicos por avaliação e distancia

            this.drivers = this.dealService.sortDriversList(this.drivers); //aplica desconto

            console.log(this.tripService.getDiscount());

            if (this.tripService.getDiscount() != 0) {
              console.log(this.tripService.getFee());
              var feeAfterDiscount = this.tripService.getFee() - this.tripService.getFee() * this.tripService.getDiscount() / 100;
              this.tripService.setFee(parseFloat(feeAfterDiscount.toFixed(2)));
              console.log(feeAfterDiscount.toFixed(2));
              var feeTaxedAfterDiscount = feeAfterDiscount + feeAfterDiscount * (this.tripService.getTax() / 100);
              this.tripService.setFeeTaxed(parseFloat(feeTaxedAfterDiscount.toFixed(2)));
              console.log(feeTaxedAfterDiscount.toFixed(2));
            }

            if (this.drivers) {
              this.makeDeal(0);
            }
          }
        }, {
          key: "makeDeal",
          value: function makeDeal(index) {
            var _this6 = this;

            var driver = this.drivers[index];
            var dealAccepted = false;

            if (driver) {
              driver.status = 'Bidding';
              this.dealService.getDriverDeal(driver.key).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function (snapshot) {
                // if user is available
                console.log(snapshot);

                if (snapshot == null) {
                  // create a record
                  console.log(snapshot);
                  console.log(_this6.user);

                  _this6.dealService.makeDeal(_this6.user.uid, driver.key, _this6.tripService.getOrigin(), _this6.tripService.getDestination(), _this6.tripService.getDistance(), _this6.tripService.getFee(), _this6.tripService.getCurrency(), _this6.tripService.getNote(), _this6.tripService.getPaymentMethod(), _this6.tripService.getPromo(), _this6.tripService.getDiscount(), _this6.tripService.getTax(), _this6.tripService.getFeeTaxed(), _this6.tripService.getRawFee(), _this6.tripService.getCommissionType(), _this6.tripService.getCommissionValue(), _this6.tripService.getCommission()).then(function () {
                    var sub = _this6.dealService.getDriverDeal(driver.key).valueChanges().subscribe(function (snap) {
                      // if record doesn't exist or is accepted
                      if (snap === null || snap.status != src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["DEAL_STATUS_PENDING"]) {
                        sub.unsubscribe(); // if deal has been cancelled

                        if (snap === null) {
                          _this6.nextDriver(index);
                        } else if (snap.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["DEAL_STATUS_ACCEPTED"]) {
                          // if deal is accepted
                          console.log('accepted', snap.tripId);
                          dealAccepted = true;
                          _this6.locateDriver = false;
                          _this6.drivers = [];

                          _this6.tripService.setId(snap.tripId); // go to user page


                          _this6.router.navigateByUrl('tracking');
                        }
                      }
                    });
                  });
                } else {
                  _this6.nextDriver(index);
                }
              });
            } else {
              // show error & try again button
              console.log('No user found');
              this.locateDriver = false;
              this.common.showAlert("Nenhum técnico encontrado ou técnicos estão longe do seu endereço ");
            }
          } // aciona o outro técnico

        }, {
          key: "nextDriver",
          value: function nextDriver(index) {
            this.drivers.splice(index, 1);
            this.makeDeal(index);
          } //seleciona o local do atendimento

        }, {
          key: "chooseOrigin",
          value: function chooseOrigin() {
            this.router.navigate(['map'], {
              queryParams: {
                type: 'origin'
              }
            });
          } // choose destination place

        }, {
          key: "chooseDestination",
          value: function chooseDestination() {
            this.router.navigate(['map'], {
              queryParams: {
                type: 'destination'
              }
            });
          }
        }, {
          key: "choosePaymentMethod",
          value: function choosePaymentMethod() {
            this.router.navigateByUrl('/payments');
          } //adiciona local do atendimento ao mapa

        }, {
          key: "setOrigin",
          value: function setOrigin() {
            // add origin and destination marker
            var latLng = new google.maps.LatLng(this.origin.location.lat, this.origin.location.lng);
            var startMarker = new google.maps.Marker({
              map: this.map,
              position: latLng
            });
            startMarker.setMap(this.map);
            if (this.destination) startMarker.setMap(null); // set map center to origin address

            this.map.setCenter(latLng);
          } // show or hide vehicles

        }, {
          key: "toggleVehicles",
          value: function toggleVehicles() {
            this.showVehicles = !this.showVehicles;
            this.showModalBg = this.showVehicles == true;
          } // track drivers

        }, {
          key: "trackDrivers",
          value: function trackDrivers() {
            var _this7 = this;

            this.showDriverOnMap(this.locality);
            clearInterval(this.driverTracking);
            this.driverTracking = setInterval(function () {
              _this7.showDriverOnMap(_this7.locality);
            }, src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["POSITION_INTERVAL"]);
          } // show drivers on map

        }, {
          key: "showDriverOnMap",
          value: function showDriverOnMap(locality) {
            var _this8 = this;

            console.log("Searching: " + this.currentVehicle.id + " under " + locality);
            this.driverService.getActiveDriver(locality, this.currentVehicle.id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function (snapshot) {
              // clear vehicles
              _this8.clearDrivers();

              if (snapshot != null) {
                console.log(snapshot.length + " Drivers"); // only show near vehicle

                snapshot.forEach(function (vehicle) {
                  var distance = _this8.placeService.calcCrow(vehicle.lat, vehicle.lng, _this8.origin.location.lat, _this8.origin.location.lng);

                  console.log("Distancia:" + (distance < src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["SHOW_VEHICLES_WITHIN"]) + " última atividade:" + (vehicle.last_active < src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["VEHICLE_LAST_ACTIVE_LIMIT"])); // checking last active time and distance

                  if (distance < src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["SHOW_VEHICLES_WITHIN"] && Date.now() - vehicle.last_active < src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["VEHICLE_LAST_ACTIVE_LIMIT"]) {
                    // create or update
                    var latLng = new google.maps.LatLng(vehicle.lat, vehicle.lng);
                    var marker = new google.maps.Marker({
                      map: _this8.map,
                      position: latLng,
                      icon: {
                        url: _this8.currentVehicle.map_icon,
                        size: new google.maps.Size(32, 32),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(16, 16),
                        scaledSize: new google.maps.Size(32, 32)
                      }
                    }); // add vehicle and marker to the list

                    vehicle.distance = distance;

                    _this8.driverMarkers.push(marker);

                    _this8.activeDrivers.push(vehicle);
                  } else {
                    console.log('Esse veiculo esta muito longe');
                  }
                });
              }
            });
          } // clear expired drivers on the map

        }, {
          key: "clearDrivers",
          value: function clearDrivers() {
            this.activeDrivers = [];
            this.driverMarkers.forEach(function (vehicle) {
              vehicle.setMap(null);
            });
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]
        }, {
          type: _services_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"]
        }, {
          type: _services_trip_service__WEBPACK_IMPORTED_MODULE_9__["TripService"]
        }, {
          type: _services_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _services_deal_service__WEBPACK_IMPORTED_MODULE_6__["DealService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_15__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabase"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    },

    /***/
    "./src/app/services/deal.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/deal.service.ts ***!
      \******************************************/

    /*! exports provided: DealService */

    /***/
    function srcAppServicesDealServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealService", function () {
        return DealService;
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/services/auth.service.ts");

      var DealService = /*#__PURE__*/function () {
        function DealService(db, authService) {
          _classCallCheck(this, DealService);

          this.db = db;
          this.authService = authService;
        } // ordena os técnicos pela avaliação


        _createClass(DealService, [{
          key: "sortDriversList",
          value: function sortDriversList(drivers) {
            return drivers.sort(function (a, b) {
              return a.rating - a.distance / 5 - (b.rating - b.distance / 5);
            });
          } // make deal to driver

        }, {
          key: "makeDeal",
          value: function makeDeal(userId, driverId, origin, destination, distance, fee, currency, note, paymentMethod, promocode, discount, tax, fee_taxed, rawfee, commission_type, commission_value, commission) {
            return this.db.object('deals/' + driverId).set({
              passengerId: userId,
              currency: currency,
              origin: origin,
              destination: destination,
              distance: distance,
              fee: fee,
              note: note,
              paymentMethod: paymentMethod,
              status: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["DEAL_STATUS_PENDING"],
              createdAt: Date.now(),
              promocode: promocode,
              discount: discount,
              tax: tax,
              fee_taxed: fee_taxed,
              rawfee: rawfee,
              commission_type: commission_type,
              commission_value: commission_value,
              commission: commission
            });
          } // get deal by driverId

        }, {
          key: "getDriverDeal",
          value: function getDriverDeal(driverId) {
            return this.db.object('deals/' + driverId);
          } // remove deal

        }, {
          key: "removeDeal",
          value: function removeDeal(driverId) {
            return this.db.object('deals/' + driverId).remove();
          }
        }]);

        return DealService;
      }();

      DealService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      DealService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DealService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map