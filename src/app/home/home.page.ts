import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { SettingService } from '../services/setting.service';
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

  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };

  constructor(
    private router: Router,
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
    //PEGA OS DADOS DO CLIENTE QUE ESTA LOGADO
    this.afAuth.authState.subscribe(authData => {
      if (authData != null)
        this.authService.getUser(authData.uid).snapshotChanges().subscribe((snap: any) => {
          this.user = { key: snap.key, uid: snap.key, ...snap.payload.val() };
        })
    });

    //PEGA ALGUNS DADOS DE CONFIGURAÇAO DO SISTEMA COMO TIPO DE MOEDA, ALGUMAS URLS, FONE DE EMERGENCIA, ETC....
    this.settingService.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});

    // FAZ UM GET NA ORIGEM QUE POR VENTURA JA TENHA SIDO SETADA
    this.origin = this.tripService.getOrigin();
    console.log(this.origin)
 
    //CARREGA O MAPA
    this.loadMap();
  }

  ngOnInit() {
    // console.log("calling");
  }

  // QUANDO SAI DA APLICAÇAO PRA DE FAZER O TRACKING
  ionViewDidLeave() {
    clearInterval(this.driverTracking);
  }

  // get current payment method from service
  getPaymentMethod() {
    this.paymentMethod = this.tripService.getPaymentMethod()
    return this.paymentMethod;
  }


  loadMap() {
    // busca a localização corrente do cliente
    return this.geolocation.getCurrentPosition().then((resp) => {
      // se um origem for determinada ele a usa como referencia, caso contrario ele usa a localizaçao atual do cliente
      if (this.origin) this.startLatLng = new google.maps.LatLng(this.origin.location.lat, this.origin.location.lng);
      else this.startLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

    
      //aqui é criado alguns parametros para o mapa, como o ponto central do icone da posiçao inicial e o tipo do mapa no caso Roadmap
      var mapOptions: any = environment.mapOptions;
      mapOptions.center = this.startLatLng;
      mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;

      // atribuimos ao mapa esses parametros
      this.map = new google.maps.Map(document.getElementById(this.mapId), mapOptions);

      let mapx = this.map;
   
      //determina uma origem caso nao exista uma e seta esse valor para o Set do Origin
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

          // carrega a lista de  veiculos por cidades, isso para quando tiver mais uma cidade cadastrada no sistema a aplicaçao 
          // ira carregar somente os veiculos da cidade que o usuario estiver chamando. Caso nao existam outras cidades cadastradas
          // ele ira carregar uma default 

          this.settingService.getPrices().valueChanges().subscribe((snapshot: any) => {
           
            this.vehicles = [];
            let obj = snapshot[locality] ? snapshot[locality] : snapshot.default;
            this.currency = this.settings.currency;
            this.tripService.setCurrency(this.settings.currency);
            Object.keys(obj.vehicles).forEach(id => {
              obj.vehicles[id].id = id;
              this.vehicles.push(obj.vehicles[id]);
            });


            // pega os dados do tipo de veiculo, TALVEZ NAO VAMOS USAR ESSA INFORMAÇAO 
            this.vehicles[0].active = true;
            this.currentVehicle = this.vehicles[0];

            
            // ATRIBUI O LOCALITY PARA A VARIAVEL GLOBAL THIS.LOCALITY
            this.locality = locality;

            // se o tracking do motorista estiver habilitado... ele avisa 
            if (this.isTrackDriverEnabled)
              this.trackDrivers();
          });
        }
      });            
      // this.common.hideLoader();
    }).catch((error) => {
      // this.common.hideLoader();
      console.log('Erro buscando a localizaçao', error);
    });
  }


  // go to next view when the 'Book' button is clicked
  book() {

    this.locateDriver = true;
    console.log(this.activeDrivers)
    // guarda detalhes do técnico
    this.tripService.setAvailableDrivers(this.activeDrivers);
   // this.tripService.setDistance(this.distance);
    this.tripService.setIcon(this.currentVehicle.icon);
    this.drivers = this.tripService.getAvailableDrivers();

    // ordena técnicos por avaliação e distancia
    this.drivers = this.dealService.sortDriversList(this.drivers);

  

    if (this.drivers) {
      this.makeDeal(0);
    }

  }

  makeDeal(index) {
   
    let driver = this.drivers[index];
   
    let dealAccepted = false;

    if (driver) {
      console.log(driver.distance)
      this.distance = driver.distance
      driver.status = 'Bidding';
      this.dealService.getDriverDeal(driver.key).valueChanges().pipe(take(1)).subscribe((snapshot: any) => {
        // if user is available
        if (snapshot == null) {

          this.dealService.makeDeal(
            this.user.uid,
            driver.key,
            this.tripService.getOrigin(),
            this.distance,
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
      if (snapshot !== null) {
        // only show near vehicle
        snapshot.forEach(vehicle => {
         
          //calcula a distancia entre o solicitante e o tecnico
          let distance = this.placeService.calcCrow(vehicle.lat, vehicle.lng, this.origin.location.lat, this.origin.location.lng);
          

          // se a distancia for menor que o previsto ele sera adicionado ao mapa 
          if (distance < SHOW_VEHICLES_WITHIN && Date.now() - vehicle.last_active < VEHICLE_LAST_ACTIVE_LIMIT) {
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
            console.log('Esse veiculo esta muito longe', vehicle);
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
