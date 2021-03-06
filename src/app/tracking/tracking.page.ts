import { Component, OnInit } from '@angular/core';
import { POSITION_INTERVAL, TRIP_STATUS_GOING, TRIP_STATUS_CANCELED, TRIP_STATUS_FINISHED, environment } from 'src/environments/environment.prod';
import { DriverService } from '../services/driver.service';
import { MenuController, AlertController, ModalController } from '@ionic/angular';
import { TripService } from '../services/trip.service';
import { PlaceService } from '../services/place.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { RatingPage } from '../rating/rating.page';
import { SettingService } from '../services/setting.service';

declare var google: any;

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {



  driver: any;
  map: any;
  trip: any = {};
  driverTracking: any;
  marker: any;
  alertCnt: any = 0;
  rate: any = 5;
  distanceText: any = "-";
  durationText: any = "-";
  ref: any;
  settings: any = {};
  dbRef: any;

  constructor(
    private driverService: DriverService,
    private tripService: TripService,
    private placeService: PlaceService,
    private router: Router,
    private menuCtrl: MenuController,
    private afdb: AngularFireDatabase,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private ss: SettingService
  ) {
    this.ss.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});
  }

  ngOnInit() {
  }


  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    let tripId = this.tripService.getId();

    this.dbRef = this.tripService.getTrip(tripId).valueChanges().subscribe((snapshot: any) => {
      if (snapshot != null) {
        console.log(this.trip)
        this.trip = snapshot;

        console.log(this.trip);

        if (this.trip.status == TRIP_STATUS_CANCELED) {
          clearInterval(this.driverTracking);
          this.dbRef.unsubscribe();
          this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
        }
        else if (this.trip.status == TRIP_STATUS_FINISHED) {
          clearInterval(this.driverTracking);
          this.dbRef.unsubscribe();
          this.modalCtrl.create({
            component: RatingPage,
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


    let mapOptions: any = environment.mapOptions;
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
      } else {
        console.log("error");
      }
    });

    this.driverTracking = setInterval(() => {
      this.driverService.getDriver(this.trip.driverId).valueChanges().pipe(take(1)).subscribe(snap => {
        this.driver = snap;
        console.log(this.driver);
        this.showDriverOnMap(this.driver.lat, this.driver.lng);
      });
    }, POSITION_INTERVAL);
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
          })
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

    if (this.trip.status == TRIP_STATUS_GOING) this.map.setCenter(latLng);

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
    let request: any = {};

    if (this.trip.status == 'waiting') {
      request = {
        origin: latLng,
        destination: new google.maps.LatLng(this.trip.origin.location.lat, this.trip.origin.location.lng),
        travelMode: google.maps.TravelMode.DRIVING
      }
    }

    else {
      request = {
        origin: latLng,
        destination: new google.maps.LatLng(this.trip.destination.location.lat, this.trip.destination.location.lng),
        travelMode: google.maps.TravelMode.DRIVING
      }
    }

    directionsService.route(request, (response, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        console.log(response);
        this.distanceText = response.routes[0].legs[0].distance.text;
        this.durationText = response.routes[0].legs[0].duration.text;
      } else {
        console.log("error");
      }
    });
  }
}
