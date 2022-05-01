import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  ngOnInit() {
  }

  map: any;

  // pin address
  address: any;
  marker: any;
  lat: any;
  lng: any;
  googleAutocomplete: any;

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
    private nativeGeocoder: NativeGeocoder) {
  }

  // Load map only after view is initialized
  ionViewDidEnter() {
   this.loadMap();
  }

  loadMap() {
    // set current location as map center
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions: any = environment.mapOptions;
      mapOptions.center = latLng;
      mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;

      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      this.marker = new google.maps.Marker({
        map: this.map,
        position: latLng
      });
      this.marker.setMap(this.map);

      // get center's address
     // this.findPlace(latLng);

      this.map.addListener('center_changed', (event) => {
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
      this.address = this.getAddress(this.lat, this.lng)
     // this.findPlace(new google.maps.LatLng(this.lat, this.lng));
    });
  }

  getAddress(lat,long){
    this.nativeGeocoder.reverseGeocode(lat, long, this.nativeGeocoderOptions)
    .then((res: NativeGeocoderResult[]) => {
      this.address = this.pretifyAddress(res[0]);
    })
    .catch((error: any) => {
      alert('Error getting location'+ JSON.stringify(error));
    });
  }
  // address
  pretifyAddress(address){
    let obj = [];
    let data = "";
    for (let key in address) {
      obj.push(address[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if(obj[val].length)
      data += obj[val]+', ';
    }
    return address.slice(0, -2);
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

  // choose address and go back to home page
  selectPlace() {

    let address = this.placeService.formatAddress(this.address);
   
    this.route.queryParams.subscribe(data => {
      this.tripService.setOrigin(address.vicinity, address.location.lat, address.location.lng);
     
      this.router.navigateByUrl('/home');

    });


  }

}
