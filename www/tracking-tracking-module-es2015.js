(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tracking-tracking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tracking/tracking.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tracking/tracking.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>{{'ON_THE_WAY' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"danger\" fill=\"solid\" size=\"small\" *ngIf=\"trip.status == 'waiting'\" (click)=\"cancelTrip()\">\n        {{'CANCEL_TRIP' | translate}}\n      </ion-button>\n      <ion-button fill=\"solid\" color=\"danger\" href=\"tel:{{settings.sos}}\" *ngIf=\"trip.status == 'going'\">{{'SOS' |\n        translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map\" style=\"height:100%\"></div>\n  <ion-card>\n    <div style=\"text-align:right; color: #222\">\n      <span style=\"background:#ffff00\">{{ 'OTP' | translate}}: {{ (trip)?.otp }}</span>\n    </div>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{ (driver)?.photoURL }}\" onerror=\"this.src='./assets/img/default.png'\" />\n      </ion-avatar>\n      <ion-label>\n        <ion-text>\n          <h2>{{ (driver)?.name }} &nbsp; {{(driver)?.rating}} <ion-icon name=\"star\" color=\"yellow\"></ion-icon>\n          </h2>\n        </ion-text>\n        <ion-text>\n          <p>{{ (driver)?.plate }} &middot; {{ (driver)?.brand }}</p>\n        </ion-text>\n      </ion-label>\n      <ion-button color=\"dark\" slot=\"end\" href=\"tel: {{ (driver)?.phoneNumber }} \">\n        <ion-icon name=\"call\"></ion-icon>&nbsp;{{'CALL' | translate}}\n      </ion-button>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <p>{{'DISTANCE' | translate}}</p>\n        <h5>{{distanceText}}</h5>\n      </ion-col>\n      <ion-col>\n        <p>{{'ETA' | translate}}</p>\n        <h5>{{durationText}}</h5>\n      </ion-col>\n      <ion-col>\n        <p>{{'PRICE' | translate}}</p>\n        <h5>{{ trip.currency }} {{trip.fee}}</h5>\n      </ion-col>\n      <ion-col>\n        <p>{{'PAYMENT' | translate}}</p>\n        <h5>{{trip.paymentMethod}}</h5>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/tracking/tracking-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/tracking/tracking-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TrackingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPageRoutingModule", function() { return TrackingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tracking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracking.page */ "./src/app/tracking/tracking.page.ts");




const routes = [
    {
        path: '',
        component: _tracking_page__WEBPACK_IMPORTED_MODULE_3__["TrackingPage"]
    }
];
let TrackingPageRoutingModule = class TrackingPageRoutingModule {
};
TrackingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrackingPageRoutingModule);



/***/ }),

/***/ "./src/app/tracking/tracking.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.module.ts ***!
  \*********************************************/
/*! exports provided: TrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPageModule", function() { return TrackingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tracking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracking-routing.module */ "./src/app/tracking/tracking-routing.module.ts");
/* harmony import */ var _tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracking.page */ "./src/app/tracking/tracking.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let TrackingPageModule = class TrackingPageModule {
};
TrackingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _tracking_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrackingPageRoutingModule"]
        ],
        declarations: [_tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]]
    })
], TrackingPageModule);



/***/ }),

/***/ "./src/app/tracking/tracking.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col p, h5 {\n  margin: 0;\n  text-align: center;\n}\n\nion-col h5 {\n  font-size: 16px;\n  color: #333;\n}\n\nion-card {\n  position: absolute;\n  z-index: 999999;\n  background: #fff;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n}\n\n.footer-md:before {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2tpbmcvdHJhY2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQ0FBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvdHJhY2tpbmcvdHJhY2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCBwLCBoNXtcbiAgICBtYXJnaW46MDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29sIGg1e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuaW9uLWNhcmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLmZvb3Rlci1tZDpiZWZvcmV7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tracking/tracking.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tracking/tracking.page.ts ***!
  \*******************************************/
/*! exports provided: TrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPage", function() { return TrackingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/trip.service */ "./src/app/services/trip.service.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _rating_rating_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rating/rating.page */ "./src/app/rating/rating.page.ts");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/setting.service */ "./src/app/services/setting.service.ts");












let TrackingPage = class TrackingPage {
    constructor(driverService, tripService, placeService, router, menuCtrl, afdb, alertCtrl, modalCtrl, ss) {
        this.driverService = driverService;
        this.tripService = tripService;
        this.placeService = placeService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.afdb = afdb;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.ss = ss;
        this.trip = {};
        this.alertCnt = 0;
        this.rate = 5;
        this.distanceText = "-";
        this.durationText = "-";
        this.settings = {};
        this.ss.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(true);
        let tripId = this.tripService.getId();
        this.dbRef = this.tripService.getTrip(tripId).valueChanges().subscribe((snapshot) => {
            if (snapshot != null) {
                console.log(this.trip);
                this.trip = snapshot;
                console.log(this.trip);
                if (this.trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["TRIP_STATUS_CANCELED"]) {
                    clearInterval(this.driverTracking);
                    this.dbRef.unsubscribe();
                    this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
                }
                else if (this.trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["TRIP_STATUS_FINISHED"]) {
                    clearInterval(this.driverTracking);
                    this.dbRef.unsubscribe();
                    this.modalCtrl.create({
                        component: _rating_rating_page__WEBPACK_IMPORTED_MODULE_10__["RatingPage"],
                        componentProps: {
                            trip: this.trip,
                            driver: this.driver
                        }
                    }).then(m => m.present());
                }
                this.loadMap();
            }
        });
    }
    ionViewDidLeave() {
        console.log("ionViewDidLeave()");
        clearInterval(this.driverTracking);
        this.dbRef.unsubscribe();
    }
    loadMap() {
        console.log("load Map calling");
        let latLng = new google.maps.LatLng(this.trip.origin.location.lat, this.trip.origin.location.lng);
        let mapOptions = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].mapOptions;
        mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
        mapOptions.center = latLng;
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            icon: {
                url: 'assets/img/map-suv.png',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16),
                scaledSize: new google.maps.Size(32, 32)
            },
        });
        let directionsDisplay;
        let directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: "black"
            }
        });
        directionsDisplay.setMap(this.map);
        let origin = new google.maps.LatLng(this.trip.origin.location.lat, this.trip.origin.location.lng);
        let dest = new google.maps.LatLng(this.trip.destination.location.lat, this.trip.destination.location.lng);
        var request = {
            origin: origin,
            destination: dest,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                console.log(response);
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(this.map);
            }
            else {
                console.log("error");
            }
        });
        this.driverTracking = setInterval(() => {
            this.driverService.getDriver(this.trip.driverId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(snap => {
                this.driver = snap;
                console.log(this.driver);
                this.showDriverOnMap(this.driver.lat, this.driver.lng);
            });
        }, src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["POSITION_INTERVAL"]);
    }
    // make array with range is n
    range(n) {
        return new Array(Math.round(n));
    }
    cancelTrip() {
        this.alertCtrl.create({
            message: "Are you sure want to cancel the trip",
            buttons: [{
                    text: "Yes",
                    handler: () => {
                        this.tripService.cancelTrip(this.trip.key).then(data => {
                            console.log(data);
                        });
                    }
                }, {
                    text: "No"
                }]
        }).then(res => res.present());
    }
    // show user on map
    showDriverOnMap(lat, lng) {
        this.marker.setMap(null);
        let latLng = new google.maps.LatLng(lat, lng);
        if (this.trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["TRIP_STATUS_GOING"])
            this.map.setCenter(latLng);
        // show vehicle to map
        this.marker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            icon: {
                url: 'assets/img/map-suv.png',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16),
                scaledSize: new google.maps.Size(32, 32)
            },
        });
        let directionsService = new google.maps.DirectionsService();
        let request = {};
        if (this.trip.status == 'waiting') {
            request = {
                origin: latLng,
                destination: new google.maps.LatLng(this.trip.origin.location.lat, this.trip.origin.location.lng),
                travelMode: google.maps.TravelMode.DRIVING
            };
        }
        else {
            request = {
                origin: latLng,
                destination: new google.maps.LatLng(this.trip.destination.location.lat, this.trip.destination.location.lng),
                travelMode: google.maps.TravelMode.DRIVING
            };
        }
        directionsService.route(request, (response, status) => {
            if (status == google.maps.DirectionsStatus.OK) {
                console.log(response);
                this.distanceText = response.routes[0].legs[0].distance.text;
                this.durationText = response.routes[0].legs[0].duration.text;
            }
            else {
                console.log("error");
            }
        });
    }
};
TrackingPage.ctorParameters = () => [
    { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"] },
    { type: _services_trip_service__WEBPACK_IMPORTED_MODULE_5__["TripService"] },
    { type: _services_place_service__WEBPACK_IMPORTED_MODULE_6__["PlaceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_setting_service__WEBPACK_IMPORTED_MODULE_11__["SettingService"] }
];
TrackingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tracking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tracking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tracking/tracking.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tracking.page.scss */ "./src/app/tracking/tracking.page.scss")).default]
    })
], TrackingPage);



/***/ })

}]);
//# sourceMappingURL=tracking-tracking-module-es2015.js.map