export let SHOW_VEHICLES_WITHIN = 20;
export let POSITION_INTERVAL = 10 * 1000;
export let VEHICLE_LAST_ACTIVE_LIMIT = 2 * 60 * 1000; // 2 mins

export let DEAL_STATUS_PENDING = 'pending';
export let DEAL_STATUS_ACCEPTED = 'accepted';
export let TRIP_STATUS_GOING = 'going';
export let TRIP_STATUS_FINISHED = 'finished';
export let TRIP_STATUS_CANCELED = 'canceled';
export let DEAL_TIMEOUT = 20 * 1000; // 20s

export let DEFAULT_AVATAR = "./assets/img/default.png";

export const environment = {
  production: true,
  appName: 'jetport',
  apiUrl: "https://appjetport.uc.r.appspot.com",
  firebase: {
    apiKey: "AIzaSyAyuwOuzS7zEPRGYazFkSg0kkcUdJC3rD0",
    authDomain: "appjetport.firebaseapp.com",
    projectId: "appjetport",
    storageBucket: "appjetport.appspot.com",
    messagingSenderId: "1012648687100",
    appId: "1:1012648687100:web:1d92a9978bd6963eadee79",
    measurementId: "G-KKPVFVGG77"
  },
  langArr: [
    { name: 'English', code: 'en' },
    { name: 'española', code: 'es' },
    { name: 'عربى', code: 'ar' },
    { name: '中文', code: 'cn' }
  ], mapOptions: {
    zoom: 12,
    mapTypeControl: false,
    zoomControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  }
};
