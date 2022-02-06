(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[8128],{8128:function(t,e,i){"use strict";i.r(e),i.d(e,{TrackingPageModule:function(){return q}});var n=i(8583),o=i(3679),r=i(2859),s=i(3025),l=i(9019),a=i(5257),g=i(3465),c=i(7716),p=i(4050),u=i(9997),h=i(7234),d=i(7318),m=i(4207),Z=i(5469);function v(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"ion-button",13),c.NdJ("click",function(){return c.CHM(t),c.oxw().cancelTrip()}),c._uU(1),c.ALo(2,"translate"),c.qZA()}2&t&&(c.xp6(1),c.hij(" ",c.lcZ(2,1,"CANCEL_TRIP")," "))}function A(t,e){if(1&t&&(c.TgZ(0,"ion-button",14),c._uU(1),c.ALo(2,"translate"),c.qZA()),2&t){const t=c.oxw();c.MGl("href","tel:",t.settings.sos,""),c.xp6(1),c.hij("",c.lcZ(2,2,"SOS")," ")}}const T=[{path:"",component:(()=>{class t{constructor(t,e,i,n,o,r,s,l,a){this.driverService=t,this.tripService=e,this.placeService=i,this.router=n,this.menuCtrl=o,this.afdb=r,this.alertCtrl=s,this.modalCtrl=l,this.ss=a,this.trip={},this.alertCnt=0,this.rate=5,this.distanceText="-",this.durationText="-",this.settings={},this.ss.getSettings().subscribe(t=>this.settings=null!=t?t.payload.val():{})}ngOnInit(){}ionViewDidEnter(){this.menuCtrl.enable(!0);let t=this.tripService.getId();this.dbRef=this.tripService.getTrip(t).valueChanges().subscribe(t=>{null!=t&&(console.log(this.trip),this.trip=t,console.log(this.trip),this.trip.status==l.zb?(clearInterval(this.driverTracking),this.dbRef.unsubscribe(),this.router.navigateByUrl("/home",{skipLocationChange:!0,replaceUrl:!0})):this.trip.status==l.gP&&(clearInterval(this.driverTracking),this.dbRef.unsubscribe(),this.router.navigateByUrl("/home",{skipLocationChange:!0,replaceUrl:!0}),this.modalCtrl.create({component:g.L,componentProps:{trip:this.trip,driver:this.driver}}).then(t=>t.present())),this.loadMap())})}ionViewDidLeave(){console.log("ionViewDidLeave()"),clearInterval(this.driverTracking),this.dbRef.unsubscribe()}loadMap(){console.log("load Map calling");let t,e=new google.maps.LatLng(this.trip.origin.location.lat,this.trip.origin.location.lng),i=l.NZ.mapOptions;i.mapTypeId=google.maps.MapTypeId.ROADMAP,i.center=e,this.map=new google.maps.Map(document.getElementById("map"),i),this.marker=new google.maps.Marker({map:this.map,position:e,icon:{url:"assets/img/map-suv.png",size:new google.maps.Size(32,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(16,16),scaledSize:new google.maps.Size(32,32)}});let n=new google.maps.DirectionsService;t=new google.maps.DirectionsRenderer({polylineOptions:{strokeColor:"black"}}),t.setMap(this.map);var o={origin:new google.maps.LatLng(this.trip.origin.location.lat,this.trip.origin.location.lng),destination:new google.maps.LatLng(this.trip.destination.location.lat,this.trip.destination.location.lng),travelMode:google.maps.TravelMode.DRIVING};n.route(o,function(e,i){i==google.maps.DirectionsStatus.OK?(console.log(e),t.setDirections(e),t.setMap(this.map)):console.log("error")}),this.driverTracking=setInterval(()=>{this.driverService.getDriver(this.trip.driverId).valueChanges().pipe((0,a.q)(1)).subscribe(t=>{this.driver=t,console.log(this.driver),this.showDriverOnMap(this.driver.lat,this.driver.lng)})},l.YL)}range(t){return new Array(Math.round(t))}cancelTrip(){this.alertCtrl.create({message:"Are you sure want to cancel the trip",buttons:[{text:"Yes",handler:()=>{this.tripService.cancelTrip(this.trip.key).then(t=>{console.log(t)})}},{text:"No"}]}).then(t=>t.present())}showDriverOnMap(t,e){this.marker.setMap(null);let i=new google.maps.LatLng(t,e);this.trip.status==l.MA&&this.map.setCenter(i),this.marker=new google.maps.Marker({map:this.map,position:i,icon:{url:"assets/img/map-suv.png",size:new google.maps.Size(32,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(16,16),scaledSize:new google.maps.Size(32,32)}});let n=new google.maps.DirectionsService,o={};o="waiting"==this.trip.status?{origin:i,destination:new google.maps.LatLng(this.trip.origin.location.lat,this.trip.origin.location.lng),travelMode:google.maps.TravelMode.DRIVING}:{origin:i,destination:new google.maps.LatLng(this.trip.destination.location.lat,this.trip.destination.location.lng),travelMode:google.maps.TravelMode.DRIVING},n.route(o,(t,e)=>{e==google.maps.DirectionsStatus.OK?(console.log(t),this.distanceText=t.routes[0].legs[0].distance.text,this.durationText=t.routes[0].legs[0].duration.text):console.log("error")})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(p.F),c.Y36(u.a),c.Y36(h.k),c.Y36(s.F0),c.Y36(r._q),c.Y36(d.KQ),c.Y36(r.Br),c.Y36(r.IN),c.Y36(m.R))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-tracking"]],decls:55,vars:35,consts:[["color","dark"],["slot","end"],["color","danger","fill","solid","size","small",3,"click",4,"ngIf"],["fill","solid","color","danger",3,"href",4,"ngIf"],["id","map",2,"height","100%"],[2,"text-align","right","color","#222"],[2,"background","#ffff00"],["lines","none"],["slot","start"],["onerror","this.src='./assets/img/default.png'",3,"src"],["name","star","color","yellow"],["color","dark","slot","end",3,"href"],["name","call"],["color","danger","fill","solid","size","small",3,"click"],["fill","solid","color","danger",3,"href"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-title"),c._uU(3),c.ALo(4,"translate"),c.qZA(),c.TgZ(5,"ion-buttons",1),c.YNc(6,v,3,3,"ion-button",2),c.YNc(7,A,3,4,"ion-button",3),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"ion-content"),c._UZ(9,"div",4),c.TgZ(10,"ion-card"),c.TgZ(11,"div",5),c.TgZ(12,"span",6),c._uU(13),c.ALo(14,"translate"),c.qZA(),c.qZA(),c.TgZ(15,"ion-item",7),c.TgZ(16,"ion-avatar",8),c._UZ(17,"img",9),c.qZA(),c.TgZ(18,"ion-label"),c.TgZ(19,"ion-text"),c.TgZ(20,"h2"),c._uU(21),c._UZ(22,"ion-icon",10),c.qZA(),c.qZA(),c.TgZ(23,"ion-text"),c.TgZ(24,"p"),c._uU(25),c.qZA(),c.qZA(),c.qZA(),c.TgZ(26,"ion-button",11),c._UZ(27,"ion-icon",12),c._uU(28),c.ALo(29,"translate"),c.qZA(),c.qZA(),c.TgZ(30,"ion-row"),c.TgZ(31,"ion-col"),c.TgZ(32,"p"),c._uU(33),c.ALo(34,"translate"),c.qZA(),c.TgZ(35,"h5"),c._uU(36),c.qZA(),c.qZA(),c.TgZ(37,"ion-col"),c.TgZ(38,"p"),c._uU(39),c.ALo(40,"translate"),c.qZA(),c.TgZ(41,"h5"),c._uU(42),c.qZA(),c.qZA(),c.TgZ(43,"ion-col"),c.TgZ(44,"p"),c._uU(45),c.ALo(46,"translate"),c.qZA(),c.TgZ(47,"h5"),c._uU(48),c.qZA(),c.qZA(),c.TgZ(49,"ion-col"),c.TgZ(50,"p"),c._uU(51),c.ALo(52,"translate"),c.qZA(),c.TgZ(53,"h5"),c._uU(54),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(3),c.Oqu(c.lcZ(4,21,"ON_THE_WAY")),c.xp6(3),c.Q6J("ngIf","waiting"==e.trip.status),c.xp6(1),c.Q6J("ngIf","going"==e.trip.status),c.xp6(6),c.AsE("",c.lcZ(14,23,"OTP"),": ",null==e.trip?null:e.trip.otp,""),c.xp6(4),c.s9C("src",null==e.driver?null:e.driver.photoURL,c.LSH),c.xp6(4),c.AsE("",null==e.driver?null:e.driver.name," \xa0 ",null==e.driver?null:e.driver.rating," "),c.xp6(4),c.AsE("",null==e.driver?null:e.driver.plate," \xb7 ",null==e.driver?null:e.driver.brand,""),c.xp6(1),c.MGl("href","tel: ",null==e.driver?null:e.driver.phoneNumber," "),c.xp6(2),c.hij("\xa0",c.lcZ(29,25,"CALL")," "),c.xp6(5),c.Oqu(c.lcZ(34,27,"DISTANCE")),c.xp6(3),c.Oqu(e.distanceText),c.xp6(3),c.Oqu(c.lcZ(40,29,"ETA")),c.xp6(3),c.Oqu(e.durationText),c.xp6(3),c.Oqu(c.lcZ(46,31,"PRICE")),c.xp6(3),c.AsE("",e.trip.currency," ",e.trip.fee,""),c.xp6(3),c.Oqu(c.lcZ(52,33,"PAYMENT")),c.xp6(3),c.Oqu(e.trip.paymentMethod))},directives:[r.Gu,r.sr,r.wd,r.Sm,n.O5,r.W2,r.PM,r.Ie,r.BJ,r.Q$,r.yW,r.gu,r.YG,r.Nd,r.wI],pipes:[Z.X$],styles:["h5[_ngcontent-%COMP%], ion-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}ion-col[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;color:#333}ion-card[_ngcontent-%COMP%]{position:absolute;z-index:999999;background:#fff;bottom:0;left:0;right:0;padding:8px}.footer-md[_ngcontent-%COMP%]:before{background-image:none!important}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.Bz.forChild(T)],s.Bz]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.ez,o.u5,r.Pc,Z.aw,f]]}),t})()}}]);