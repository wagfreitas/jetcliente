import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { SettingService } from '../services/setting.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { DealService } from '../services/deal.service';
import { DriverService } from '../services/driver.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { TripService } from '../services/trip.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { DEAL_STATUS_PENDING, DEAL_STATUS_ACCEPTED, POSITION_INTERVAL, SHOW_VEHICLES_WITHIN, VEHICLE_LAST_ACTIVE_LIMIT, environment } from 'src/environments/environment.prod';
import { take } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

declare var google: any;
declare var Stripe: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  mapId = Math.random() + 'map';
  mapHeight: number = 480;
  showModalBg: boolean = false;
  showVehicles: boolean = false;
  vehicles: any = [];
  currentVehicle: any;
  note: any = '';
  promocode: any = '';
  map: any;
  origin: any;
  destination: any;
  distance: number = 0;
  duration: number = 0;
  currency: string;
  locality: any;
  paymentMethod: string = 'dinheiro';
  activeDrivers: Array<any> = [];
  driverMarkers: Array<any> = [];
  driverTracking: any;
  locateDriver: any = false;
  drivers: any;
  user: any = {};
  isTrackDriverEnabled = true;
  discount: any = 0;
  startLatLng: any;
  destLatLng: any;
  directionsService: any;
  directionsDisplay: any;
  bounds: any;
  cardNumber: any;
  settings: any = {};

  distanceText: any = '';
  durationText: any = '';

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private placeService: PlaceService,
    private geolocation: Geolocation,
    private chRef: ChangeDetectorRef,
    private settingService: SettingService,
    private tripService: TripService,
    private driverService: DriverService,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private dealService: DealService,
    private common: CommonService,
    private menuCtrl: MenuController,
    private db: AngularFireDatabase
  ) {

  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.afAuth.authState.subscribe(authData => {
      if (authData != null)
        this.authService.getUser(authData.uid).snapshotChanges().subscribe((snap: any) => {
          this.user = { key: snap.key, uid: snap.key, ...snap.payload.val() };

        })
    });
    this.settingService.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});

    this.origin = this.tripService.getOrigin();
    this.destination = this.tripService.getDestination();
    this.loadMap();
  }

  ngOnInit() {
    // console.log("calling");
  }

  ionViewDidLeave() {
    clearInterval(this.driverTracking);
  }

  // get current payment method from service
  getPaymentMethod() {
    this.paymentMethod = this.tripService.getPaymentMethod()
    return this.paymentMethod;
  }

  // choosePaymentMethod1() {
  //   this.alertCtrl.create({
  //     header: "Selecione a forma de pagamento",
  //     inputs: [
  //       { type: 'radio', label: "Card", value: 'card' }
  //     ],
  //     buttons: [{
  //       text: "Cancela"
  //     }, {
  //       text: "Seleciona",
  //       handler: (data) => {
  //         if (data == 'card') {
  //           this.authService.getCardSetting(this.user.uid).valueChanges().pipe(take(1)).subscribe((res: any) => {
  //             if (res != null) {
  //               this.tripService.setPaymentMethod(data);
  //               this.paymentMethod = data;

  //               const exp = res.exp.split('/');
  //               Stripe.card.createToken({
  //                 number: res.number,
  //                 exp_month: exp[0],
  //                 exp_year: exp[1],
  //                 cvc: res.cvv
  //               }, (status: number, response: any) => {
  //                 if (status == 200) {
  //                   console.log("Card Ready")
  //                   this.authService.updateCardSetting(res.number, res.exp, res.cvv, response.id, this.user.uid);
  //                 } else {
  //                   this.common.showToast(response.error.message);
  //                 }
  //               });
  //             }
  //             else
  //               this.common.showAlert("Cartão Inválido")
  //           })
  //         }
  //         else if (data == 'cash') {
  //           this.paymentMethod = data;
  //           this.tripService.setPaymentMethod(data);
  //         }
  //       }
  //     }]
  //   }).then(res => res.present());
  // }

  // toggle active vehicle
  chooseVehicle(index) {
    for (var i = 0; i < this.vehicles.length; i++) {
      this.vehicles[i].active = (i == index);
      // choose this vehicle type
      if (i == index) {
        this.tripService.setVehicle(this.vehicles[i]);
        this.currentVehicle = this.vehicles[i];
      }
    }
    // start tracking new driver type
    this.trackDrivers();
    this.toggleVehicles();
  }

  loadMap() {
    // this.common.showLoader("Loading..");

    // busca a localização corrente do cliente
    return this.geolocation.getCurrentPosition().then((resp) => {
      if (this.origin) this.startLatLng = new google.maps.LatLng(this.origin.location.lat, this.origin.location.lng);
      else this.startLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      let directionsDisplay;
      let directionsService = new google.maps.DirectionsService();
      directionsDisplay = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeColor: "black"
        }
      });

      var mapOptions: any = environment.mapOptions;
      mapOptions.center = this.startLatLng;
      mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;

      this.map = new google.maps.Map(document.getElementById(this.mapId), mapOptions);

      let mapx = this.map;
      directionsDisplay.setMap(mapx);

      // encontra o endereço no mapa
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'latLng': this.map.getCenter() }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (!this.origin) {
            // atribui o centro do mapa como a origin
            this.origin = this.placeService.formatAddress(results[0]);
            this.tripService.setOrigin(this.origin.vicinity, this.origin.location.lat, this.origin.location.lng);
            this.setOrigin();
            this.chRef.detectChanges();
          } else {
            this.setOrigin();
          }

          // salva a cidade
          let locality = this.placeService.setLocalityFromGeocoder(results);
          // carrega a lista de  veiculos por cidades
          this.settingService.getPrices().valueChanges().subscribe((snapshot: any) => {
            this.vehicles = [];
            let obj = snapshot[locality] ? snapshot[locality] : snapshot.default;
            this.currency = this.settings.currency;
            this.tripService.setCurrency(this.settings.currency);
            Object.keys(obj.vehicles).forEach(id => {
              obj.vehicles[id].id = id;
              this.vehicles.push(obj.vehicles[id]);
            });

            // set first device as default
            this.vehicles[0].active = true;
            this.currentVehicle = this.vehicles[0];

            this.locality = locality;
            if (this.isTrackDriverEnabled)
              this.trackDrivers();
          });
        }
      });

      // add destination to map
      if (this.destination) {
        this.destLatLng = new google.maps.LatLng(this.destination.location.lat, this.destination.location.lng);
        var bounds = new google.maps.LatLngBounds(); // limites
        bounds.extend(this.startLatLng);
        bounds.extend(this.destLatLng);

        mapx.fitBounds(bounds);
        var request = {
          origin: this.startLatLng,
          destination: this.destLatLng,
          travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(mapx);
          } else {
            console.log("error");
          }
        });
      }
      // this.common.hideLoader();
    }).catch((error) => {
      // this.common.hideLoader();
      console.log('Error getting location', error);
    });
  }
  
  showPromoPopup() {
    this.alertCtrl.create({
      header: 'Enter Promo code',
      inputs: [
        { name: 'promocode', placeholder: 'Enter Promo Code', value: this.promocode }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Apply',
          handler: (data) => {
            console.log(data.promocode);
            // verifying promocode
            let code = (data.promocode).toUpperCase();
            this.db.list("promocodes", ref => ref.orderByChild("code").equalTo(code)).snapshotChanges().pipe(take(1)).subscribe((promocodes) => {
              console.log(promocodes);
              if (promocodes.length > 0) {
                let promo: any = promocodes[0].payload.val();
                this.promocode = promo.code;
                this.discount = promo.discount;
                this.tripService.setPromo(promo.code);
                this.tripService.setDiscount(promo.discount);
                this.common.showToast(promo.code + " Applied with " + promo.discount + "% discount");
              }
              else {
                this.common.showToast("Invalid Promocode");
              }
            });
          }
        }
      ]
    }).then(prompt => prompt.present());

  }


  // Show note popup when click to 'Notes to user'
  showNotePopup() {
    this.alertCtrl.create({
      header: 'Dicas para o Técnico',
      message: "",
      inputs: [
        { name: 'note', placeholder: 'Dicas' },
      ],
      buttons: [
        { text: 'Cancela' },
        {
          text: 'Salva',
          handler: data => {
            this.note = data;
            this.tripService.setNote(data);
            console.log('Saved clicked');
          }
        }
      ]
    }).then(prompt => prompt.present());

  };

  // go to next view when the 'Book' button is clicked
  book() {

    this.locateDriver = true;


    // guarda detalhes do técnico
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
    this.tripService.setCommissionType(this.currentVehicle.commission_type)
    this.tripService.setCommissionValue(this.currentVehicle.commission_value)
    this.tripService.setCommission(this.currentVehicle.commission)
    // this.tripService.setPaymentMethod('');
    this.drivers = this.tripService.getAvailableDrivers();
    // ordena técnicos por avaliação e distancia
    this.drivers = this.dealService.sortDriversList(this.drivers);

    console.log(this.drivers)

    //aplica desconto

    if (this.tripService.getDiscount() != 0) {


      let feeAfterDiscount = this.tripService.getFee() - (this.tripService.getFee() * this.tripService.getDiscount() / 100);
      this.tripService.setFee(parseFloat(feeAfterDiscount.toFixed(2)));

      let feeTaxedAfterDiscount = feeAfterDiscount + (feeAfterDiscount * (this.tripService.getTax() / 100))

      this.tripService.setFeeTaxed(parseFloat(feeTaxedAfterDiscount.toFixed(2)));

    }


    if (this.drivers) {
      this.makeDeal(0);
    }

  }

  makeDeal(index) {
    let driver = this.drivers[index];
    console.log(driver)
    let dealAccepted = false;

    if (driver) {
      driver.status = 'Bidding';
      this.dealService.getDriverDeal(driver.key).valueChanges().pipe(take(1)).subscribe((snapshot: any) => {
        // if user is available
        console.log(snapshot);
        if (snapshot == null) {
          // create a record
          console.log(snapshot);
          console.log(this.user);

          this.dealService.makeDeal(
            this.user.uid,
            driver.key,
            this.tripService.getOrigin(),
            this.tripService.getDistance(),
            this.tripService.getFee(),
            this.tripService.getCurrency(),
            this.tripService.getPaymentMethod(),
          ).then(() => {
            let sub = this.dealService.getDriverDeal(driver.key).valueChanges().subscribe((snap: any) => {
              // if record doesn't exist or is accepted
              if (snap === null || snap.status != DEAL_STATUS_PENDING) {
                sub.unsubscribe();

                // if deal has been cancelled
                if (snap === null) {
                  this.nextDriver(index);
                } else if (snap.status == DEAL_STATUS_ACCEPTED) {
                  // if deal is accepted
                  console.log('accepted', snap.tripId);
                  dealAccepted = true;
                  this.locateDriver = false;

                  this.drivers = [];
                  this.tripService.setId(snap.tripId);
                  // go to user page
                  this.router.navigateByUrl('tracking');
                }
              }
            });
          });
        } else {
          this.nextDriver(index);
        }
      });
    } else {
      // show error & try again button
      this.locateDriver = false;
      this.common.showAlert("Nenhum técnico encontrado ou técnicos estão longe do seu endereço ");
    }
  }

  // aciona o outro técnico
  nextDriver(index) {
    this.drivers.splice(index, 1);
    this.makeDeal(index);
  }

  //seleciona o local do atendimento
  chooseOrigin() {
    this.router.navigate(['map'], {
      queryParams: {
        type: 'origin'
      }
    });
  }

  // choose destination place
  chooseDestination() {
    this.router.navigate(['map'], {
      queryParams: {
        type: 'destination'
      }
    });
  }

  choosePaymentMethod() {
    this.router.navigateByUrl('/payments');
  }

  //adiciona local do atendimento ao mapa
  setOrigin() {
    // add origin and destination marker
    let latLng = new google.maps.LatLng(this.origin.location.lat, this.origin.location.lng);
    let startMarker = new google.maps.Marker({ map: this.map, position: latLng });
    startMarker.setMap(this.map);
    if (this.destination)
      startMarker.setMap(null);
    // set map center to origin address
    this.map.setCenter(latLng);
  }

  // show or hide vehicles
  toggleVehicles() {
    this.showVehicles = !this.showVehicles;
    this.showModalBg = (this.showVehicles == true);
  }

  // track drivers
  trackDrivers() {
    this.showDriverOnMap(this.locality);
    clearInterval(this.driverTracking);

    this.driverTracking = setInterval(() => {
      this.showDriverOnMap(this.locality);
    }, POSITION_INTERVAL);
  }
  // show drivers on map
  showDriverOnMap(locality) {

    this.driverService.getActiveDriver(locality, this.currentVehicle.id).valueChanges().pipe(take(1)).subscribe((snapshot: any) => {
      // clear vehicles
      this.clearDrivers();
      if (snapshot != null) {
        // only show near vehicle
        snapshot.forEach(vehicle => {


          //calcula a distancia entre o solicitante e o tecnico
          let distance = this.placeService.calcCrow(vehicle.lat, vehicle.lng, this.origin.location.lat, this.origin.location.lng);

          // se a distancia for menor que o previsto ele sera adicionado ao mapa 
          if (distance < SHOW_VEHICLES_WITHIN ) {
            //&& Date.now() - vehicle.last_active < VEHICLE_LAST_ACTIVE_LIMIT
            // create or update
            let latLng = new google.maps.LatLng(vehicle.lat, vehicle.lng);

            let marker = new google.maps.Marker({
              map: this.map,
              position: latLng,
              icon: {
                url: this.currentVehicle.map_icon,
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16),
                scaledSize: new google.maps.Size(32, 32)
              },
            });

            // add vehicle and marker to the list
            vehicle.distance = distance;
            this.driverMarkers.push(marker);
            this.activeDrivers.push(vehicle);
          } else {
            console.log('Esse veiculo esta muito longe');
          }

        });
      }
    });
  }

  // clear expired drivers on the map
  clearDrivers() {
    this.activeDrivers = [];
    this.driverMarkers.forEach((vehicle) => {
      vehicle.setMap(null);
    });
  }

}
