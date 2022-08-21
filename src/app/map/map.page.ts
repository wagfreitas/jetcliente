import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, NgZone } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { TripService } from '../services/trip.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})


export class MapPage implements OnInit {

  @ViewChild('map',  {static: false}) mapElement: ElementRef;
  map: any;
  address:any;
  lat: string;
  lng: string;  
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  googleAutocomplete: any;



 
  marker: any;

  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };

  // geocoder options
  nativeGeocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(
    private router: Router,
    private geolocation: Geolocation,
    private chRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private tripService: TripService,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,) {
      this.googleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = { input: '' };
      this.autocompleteItems = [];
  }

  ngOnInit() {
   
  }

  // Load map only after view is initialized
  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    // set current location as map center
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      } 
     
      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
      this.marker = new google.maps.Marker({
        map: this.map,
        position: latLng
      });
      this.marker.setMap(this.map);

      // get center's address
    // this.findPlace(latLng);

      this.map.addListener('center_changed', () => {
        let center = this.map.getCenter();
        this.findPlace(center);
      })
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    var nativeHomeInputBox = document.getElementById('searchbar');
    this.googleAutocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox);
    
    google.maps.event.addListener(this.googleAutocomplete, 'place_changed', () => {
      this.lat = this.googleAutocomplete.getPlace().geometry.location.lat();
      this.lng = this.googleAutocomplete.getPlace().geometry.location.lng();

      console.log(this.lat, this.lng)
      this.map.panTo(new google.maps.LatLng(this.lat, this.lng));
      this.address =this.findPlace(new google.maps.LatLng(this.lat, this.lng));
     // this.findPlace(new google.maps.LatLng(this.lat, this.lng));
    });
  }

  
  // find address by LatLng
  findPlace(latLng) {
    let geocoder = new google.maps.Geocoder();

    this.marker.setMap(null);
    this.marker = new google.maps.Marker({ map: this.map, position: latLng });
    this.marker.setMap(this.map);

    geocoder.geocode({ 'latLng': latLng }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        this.address = results[0];
        this.chRef.detectChanges();
      }
    });
  }

  // Seleciona a origem do atendimento e retorna para a pagina de home
  selectPlace() {

    let address = this.placeService.formatAddress(this.address);
    this.route.queryParams.subscribe(data => {
      this.tripService.setOrigin(address.vicinity, address.location.lat, address.location.lng);
     
      this.router.navigateByUrl('/home');

    });


  }

}
