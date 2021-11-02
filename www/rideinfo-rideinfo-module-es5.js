(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rideinfo-rideinfo-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/rideinfo/rideinfo.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rideinfo/rideinfo.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRideinfoRideinfoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <h3>{{trip.createdAt | date: 'MMM dd, yyyy hh:mm a'}}</h3>\n      <p>#{{trip.createdAt}}</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\" *ngIf=\"trip.createdAt != null\">\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"{{driver.photoURL}}\" />\n      </ion-avatar>\n      <ion-label>\n        <p *ngIf=\"trip.rating\">{{ 'RATED' | translate }} {{trip.rating}}</p>\n        <h3>{{driver.name}}</h3>\n      </ion-label>\n      <ion-badge slot=\"end\" color=\"dark\">{{trip.status}}</ion-badge>\n    </ion-item>\n    <ion-item text-wrap>\n      <ion-icon style=\"margin-right:18px\" name=\"pin\" color=\"success\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>{{ trip.pickedUpAt | date: 'shortTime'}}</p>\n        <ion-text>\n          <h3>{{trip.origin.vicinity}}</h3>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n    <ion-item text-wrap>\n      <ion-icon style=\"margin-right:18px\" name=\"pin\" color=\"danger\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>{{ trip.droppedOffAt | date: 'shortTime'}}</p>\n        <ion-text>\n          <h3>{{trip.destination.vicinity}}</h3>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n    <ion-item-divider>\n      <h5>{{ 'BILLING_DETAILS' | translate }}</h5>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>{{ 'FEE' | translate }}</ion-label>\n      <ion-text slot=\"end\">{{ trip.currency }} {{trip.rawfee}}</ion-text>\n    </ion-item>\n    <ion-item *ngIf=\"trip.discount\">\n      <ion-label>\n        {{ 'DISCOUNT' | translate }}\n        <p>{{trip.promocode}} • {{trip.discount}} %</p>\n      </ion-label>\n      <ion-text slot=\"end\">{{ trip.currency }} {{ discount }}</ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        {{ 'TAX' | translate }}\n        <p> {{ trip.tax }} %</p>\n      </ion-label>\n      <ion-text slot=\"end\">\n        {{ trip.currency }} {{ tax }}\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        {{ 'FINAL' | translate }}\n        <p>{{trip.paymentMethod}}</p>\n      </ion-label>\n      <ion-text slot=\"end\">\n        {{ trip.currency }} {{trip.fee_taxed}}\n      </ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/rideinfo/rideinfo-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/rideinfo/rideinfo-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RideinfoPageRoutingModule */

    /***/
    function srcAppRideinfoRideinfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RideinfoPageRoutingModule", function () {
        return RideinfoPageRoutingModule;
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


      var _rideinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rideinfo.page */
      "./src/app/rideinfo/rideinfo.page.ts");

      var routes = [{
        path: '',
        component: _rideinfo_page__WEBPACK_IMPORTED_MODULE_3__["RideinfoPage"]
      }];

      var RideinfoPageRoutingModule = function RideinfoPageRoutingModule() {
        _classCallCheck(this, RideinfoPageRoutingModule);
      };

      RideinfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RideinfoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/rideinfo/rideinfo.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/rideinfo/rideinfo.module.ts ***!
      \*********************************************/

    /*! exports provided: RideinfoPageModule */

    /***/
    function srcAppRideinfoRideinfoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RideinfoPageModule", function () {
        return RideinfoPageModule;
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


      var _rideinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rideinfo-routing.module */
      "./src/app/rideinfo/rideinfo-routing.module.ts");
      /* harmony import */


      var _rideinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rideinfo.page */
      "./src/app/rideinfo/rideinfo.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var RideinfoPageModule = function RideinfoPageModule() {
        _classCallCheck(this, RideinfoPageModule);
      };

      RideinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _rideinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["RideinfoPageRoutingModule"]],
        declarations: [_rideinfo_page__WEBPACK_IMPORTED_MODULE_6__["RideinfoPage"]]
      })], RideinfoPageModule);
      /***/
    },

    /***/
    "./src/app/rideinfo/rideinfo.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/rideinfo/rideinfo.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppRideinfoRideinfoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title h3, ion-title p {\n  margin: 4px 0px;\n}\nion-title h3 {\n  font-size: 16px;\n}\nion-title p {\n  font-size: 12px;\n}\nion-text {\n  white-space: pre-wrap !important;\n}\nion-note {\n  font-size: 14px;\n  color: #333;\n  font-weight: 500;\n}\nh3 {\n  font-weight: 500 !important;\n}\n.datetime {\n  color: #777;\n  font-weight: 400;\n}\nion-badge {\n  text-transform: uppercase;\n  color: #ffffff;\n}\ntable {\n  width: 100%;\n}\ntr {\n  border: 1px solid #eee;\n}\ntd {\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlkZWluZm8vcmlkZWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7QUFBUjtBQUdBO0VBQ0ksZ0NBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0E7RUFDSSwyQkFBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHQTtFQUNJLFdBQUE7QUFBSjtBQUdBO0VBQ0ksc0JBQUE7QUFBSjtBQUdBO0VBQ0ksWUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcmlkZWluZm8vcmlkZWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIGgzLCBwe1xuICAgICAgICBtYXJnaW46IDRweCAwcHg7XG4gICAgfVxuICAgIGgze1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG5pb24tdGV4dHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbn1cblxuaW9uLW5vdGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmgze1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGV0aW1le1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlvbi1iYWRnZXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG50YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudHJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbn1cblxudGR7XG4gICAgcGFkZGluZzogNHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/rideinfo/rideinfo.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/rideinfo/rideinfo.page.ts ***!
      \*******************************************/

    /*! exports provided: RideinfoPage */

    /***/
    function srcAppRideinfoRideinfoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RideinfoPage", function () {
        return RideinfoPage;
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


      var _services_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/trip.service */
      "./src/app/services/trip.service.ts");
      /* harmony import */


      var _services_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/driver.service */
      "./src/app/services/driver.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var RideinfoPage = /*#__PURE__*/function () {
        function RideinfoPage(route, tripService, driverService) {
          _classCallCheck(this, RideinfoPage);

          this.route = route;
          this.tripService = tripService;
          this.driverService = driverService;
          this.trip = {};
          this.driver = {};
          this.tridId = this.route.snapshot.paramMap.get('id');
          console.log(this.tridId);
        }

        _createClass(RideinfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.tripService.getTrip(this.tridId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (snap) {
              _this.trip = snap;
              console.log(_this.trip);
              _this.discount = (_this.trip.rawfee * (_this.trip.discount / 100)).toFixed(2);
              _this.tax = (_this.trip.fee * (_this.trip.tax / 100)).toFixed(2);

              _this.driverService.getDriver(_this.trip.driverId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (snap) {
                _this.driver = snap;
              });
            });
          }
        }]);

        return RideinfoPage;
      }();

      RideinfoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"]
        }, {
          type: _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"]
        }];
      };

      RideinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rideinfo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./rideinfo.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/rideinfo/rideinfo.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./rideinfo.page.scss */
        "./src/app/rideinfo/rideinfo.page.scss"))["default"]]
      })], RideinfoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=rideinfo-rideinfo-module-es5.js.map