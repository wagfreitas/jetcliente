(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[4402],{2401:function(e,t,i){"use strict";i.r(t),i.d(t,{HomePageModule:function(){return P}});var s=i(8583),o=i(3679),n=i(2859),r=i(3025),c=i(9019),a=i(5257),h=i(7716),l=i(7234),d=i(7152),g=i(4207),p=i(9997),u=i(4050),v=i(9829),m=i(7556),x=i(5469),f=i(7318);let S=(()=>{class e{constructor(e,t){this.db=e,this.authService=t}sortDriversList(e){return e.sort((e,t)=>e.rating-e.distance/5-(t.rating-t.distance/5))}makeDeal(e,t,i,s,o,n,r,a,h,l,d,g,p,u,v,m,x){return this.db.object("deals/"+t).set({passengerId:e,currency:r,origin:i,destination:s,distance:o,fee:n,note:a,paymentMethod:h,status:c.MN,createdAt:Date.now(),promocode:l,discount:d,tax:g,fee_taxed:p,rawfee:u,commission_type:v,commission_value:m,commission:x})}getDriverDeal(e){return this.db.object("deals/"+e)}removeDeal(e){return this.db.object("deals/"+e).remove()}}return e.\u0275fac=function(t){return new(t||e)(h.LFG(f.KQ),h.LFG(m.e))},e.\u0275prov=h.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=i(5620);function C(e,t){if(1&e&&(h.TgZ(0,"span"),h._uU(1),h.qZA()),2&e){const e=h.oxw();h.xp6(1),h.Oqu(e.distanceText)}}function y(e,t){if(1&e&&(h.TgZ(0,"span"),h._uU(1),h.qZA()),2&e){const e=h.oxw();h.xp6(1),h.hij("\xa0 ",e.durationText,"")}}const D=function(e){return{active:e}};function M(e,t){if(1&e){const e=h.EpF();h.TgZ(0,"ion-col",16),h.NdJ("click",function(){const t=h.CHM(e).index;return h.oxw().chooseVehicle(t)}),h.TgZ(1,"p",17),h._uU(2),h.qZA(),h._UZ(3,"img",18),h.TgZ(4,"p",19),h._uU(5),h.qZA(),h.qZA()}if(2&e){const e=t.$implicit,i=h.oxw();h.Q6J("ngClass",h.VKq(5,D,e.active)),h.xp6(2),h.Oqu(e.name),h.xp6(1),h.s9C("src",e.icon,h.LSH),h.xp6(2),h.AsE("",i.currency,"",e.fee_taxed,"")}}const k=function(){return{height:"100%"}},w=[{path:"",component:(()=>{class e{constructor(e,t,i,s,o,n,r,c,a,h,l,d,g,p,u){this.router=e,this.alertCtrl=t,this.placeService=i,this.geolocation=s,this.chRef=o,this.settingService=n,this.tripService=r,this.driverService=c,this.afAuth=a,this.authService=h,this.translate=l,this.dealService=d,this.common=g,this.menuCtrl=p,this.db=u,this.mapId=Math.random()+"map",this.mapHeight=480,this.showModalBg=!1,this.showVehicles=!1,this.vehicles=[],this.note="",this.promocode="",this.distance=0,this.duration=0,this.paymentMethod="dinheiro",this.activeDrivers=[],this.driverMarkers=[],this.locateDriver=!1,this.user={},this.isTrackDriverEnabled=!0,this.discount=0,this.settings={},this.distanceText="",this.durationText=""}ionViewDidEnter(){this.menuCtrl.enable(!0),this.afAuth.authState.subscribe(e=>{null!=e&&this.authService.getUser(e.uid).snapshotChanges().subscribe(e=>{this.user=Object.assign({key:e.key,uid:e.key},e.payload.val())})}),this.settingService.getSettings().subscribe(e=>this.settings=null!=e?e.payload.val():{}),this.origin=this.tripService.getOrigin(),this.destination=this.tripService.getDestination(),this.loadMap()}ngOnInit(){}ionViewDidLeave(){clearInterval(this.driverTracking)}getPaymentMethod(){return this.paymentMethod=this.tripService.getPaymentMethod(),this.paymentMethod}choosePaymentMethod1(){this.alertCtrl.create({header:"Selecione a forma de pagamento",inputs:[{type:"radio",label:"Card",value:"card"}],buttons:[{text:"Cancela"},{text:"Seleciona",handler:e=>{console.log(e),"card"==e?this.authService.getCardSetting(this.user.uid).valueChanges().pipe((0,a.q)(1)).subscribe(t=>{if(null!=t){this.tripService.setPaymentMethod(e),this.paymentMethod=e;const i=t.exp.split("/");Stripe.card.createToken({number:t.number,exp_month:i[0],exp_year:i[1],cvc:t.cvv},(e,i)=>{200==e?(console.log("Card Ready"),this.authService.updateCardSetting(t.number,t.exp,t.cvv,i.id,this.user.uid)):this.common.showToast(i.error.message)})}else this.common.showAlert("Cart\xe3o Inv\xe1lido")}):"cash"==e&&(this.paymentMethod=e,this.tripService.setPaymentMethod(e))}}]}).then(e=>e.present())}chooseVehicle(e){for(var t=0;t<this.vehicles.length;t++)this.vehicles[t].active=t==e,t==e&&(this.tripService.setVehicle(this.vehicles[t]),this.currentVehicle=this.vehicles[t]);this.trackDrivers(),this.toggleVehicles()}loadMap(){return this.geolocation.getCurrentPosition().then(e=>{let t;this.startLatLng=this.origin?new google.maps.LatLng(this.origin.location.lat,this.origin.location.lng):new google.maps.LatLng(e.coords.latitude,e.coords.longitude);let i=new google.maps.DirectionsService;t=new google.maps.DirectionsRenderer({polylineOptions:{strokeColor:"black"}});var s=c.NZ.mapOptions;s.center=this.startLatLng,s.mapTypeId=google.maps.MapTypeId.ROADMAP,this.map=new google.maps.Map(document.getElementById(this.mapId),s);let o=this.map;if(t.setMap(o),(new google.maps.Geocoder).geocode({latLng:this.map.getCenter()},(e,t)=>{if(t==google.maps.GeocoderStatus.OK){this.origin?this.setOrigin():(this.origin=this.placeService.formatAddress(e[0]),this.tripService.setOrigin(this.origin.vicinity,this.origin.location.lat,this.origin.location.lng),this.setOrigin(),this.chRef.detectChanges());let t=this.placeService.setLocalityFromGeocoder(e);this.settingService.getPrices().valueChanges().subscribe(e=>{this.vehicles=[];let s=e[t]?e[t]:e.default;this.currency=this.settings.currency,this.tripService.setCurrency(this.settings.currency),Object.keys(s.vehicles).forEach(e=>{s.vehicles[e].id=e,this.vehicles.push(s.vehicles[e])}),console.log("veiculos",this.vehicles),this.destination&&i.route(r,(e,t)=>{if(t==google.maps.DirectionsStatus.OK&&0!=e.routes.length){console.log(e),this.distance=e.routes[0].legs[0].distance.value/1e3,this.distanceText=e.routes[0].legs[0].distance.text,this.durationText=e.routes[0].legs[0].duration.text,console.log(this.distance);for(let e=0;e<this.vehicles.length;e++){if(this.distance<=parseInt(this.vehicles[e].base_km)){let t=parseFloat((this.distance*parseInt(this.vehicles[e].base_fare)).toFixed(2));this.vehicles[e].fee=t,this.vehicles[e].fee_taxed=parseFloat((t+t*(parseInt(this.vehicles[e].tax)/100)).toFixed(2))}else if(this.distance>parseInt(this.vehicles[e].base_km)){let t=this.distance-parseInt(this.vehicles[e].base_km),i=parseFloat((parseInt(this.vehicles[e].base_km)*parseInt(this.vehicles[e].base_fare)+t*parseInt(this.vehicles[e].per_km)).toFixed(2));this.vehicles[e].fee=i,this.vehicles[e].fee_taxed=parseFloat((i+i*(parseInt(this.vehicles[e].tax)/100)).toFixed(2))}this.vehicles[e].commission="percentage"==this.vehicles[e].commission_type?parseFloat((this.vehicles[e].fee*(parseInt(this.vehicles[e].commission_value)/100)).toFixed(2)):parseFloat(parseFloat(this.vehicles[e].commission_value).toFixed(2))}}else console.log("error")}),this.vehicles[0].active=!0,this.currentVehicle=this.vehicles[0],this.locality=t,this.isTrackDriverEnabled&&this.trackDrivers()})}}),this.destination){this.destLatLng=new google.maps.LatLng(this.destination.location.lat,this.destination.location.lng);var n=new google.maps.LatLngBounds;n.extend(this.startLatLng),n.extend(this.destLatLng),o.fitBounds(n);var r={origin:this.startLatLng,destination:this.destLatLng,travelMode:google.maps.TravelMode.DRIVING};i.route(r,function(e,i){i==google.maps.DirectionsStatus.OK?(console.log(e),t.setDirections(e),t.setMap(o)):console.log("error")})}}).catch(e=>{console.log("Error getting location",e)})}showPromoPopup(){this.alertCtrl.create({header:"Enter Promo code",inputs:[{name:"promocode",placeholder:"Enter Promo Code",value:this.promocode}],buttons:[{text:"Cancel"},{text:"Apply",handler:e=>{console.log(e.promocode);let t=e.promocode.toUpperCase();this.db.list("promocodes",e=>e.orderByChild("code").equalTo(t)).snapshotChanges().pipe((0,a.q)(1)).subscribe(e=>{if(console.log(e),e.length>0){let t=e[0].payload.val();this.promocode=t.code,this.discount=t.discount,this.tripService.setPromo(t.code),this.tripService.setDiscount(t.discount),this.common.showToast(t.code+" Applied with "+t.discount+"% discount")}else this.common.showToast("Invalid Promocode")})}}]}).then(e=>e.present())}showNotePopup(){this.alertCtrl.create({header:"Dicas para o T\xe9cnico",message:"",inputs:[{name:"note",placeholder:"Dicas"}],buttons:[{text:"Cancela"},{text:"Salva",handler:e=>{this.note=e,this.tripService.setNote(e),console.log("Saved clicked")}}]}).then(e=>e.present())}book(){if(this.locateDriver=!0,this.tripService.setAvailableDrivers(this.activeDrivers),this.tripService.setDistance(this.distance),this.tripService.setFee(this.currentVehicle.fee),this.tripService.setRawFee(this.currentVehicle.fee),this.tripService.setFeeTaxed(this.currentVehicle.fee_taxed),this.tripService.setIcon(this.currentVehicle.icon),this.tripService.setNote(this.note),this.tripService.setPromo(this.promocode),this.tripService.setDiscount(this.discount),this.tripService.setTax(this.currentVehicle.tax),this.tripService.setCommissionType(this.currentVehicle.commission_type),this.tripService.setCommissionValue(this.currentVehicle.commission_value),this.tripService.setCommission(this.currentVehicle.commission),this.drivers=this.tripService.getAvailableDrivers(),this.drivers=this.dealService.sortDriversList(this.drivers),console.log(this.tripService.getDiscount()),0!=this.tripService.getDiscount()){console.log(this.tripService.getFee());let e=this.tripService.getFee()-this.tripService.getFee()*this.tripService.getDiscount()/100;this.tripService.setFee(parseFloat(e.toFixed(2))),console.log(e.toFixed(2));let t=e+e*(this.tripService.getTax()/100);this.tripService.setFeeTaxed(parseFloat(t.toFixed(2))),console.log(t.toFixed(2))}this.drivers&&this.makeDeal(0)}makeDeal(e){let t=this.drivers[e],i=!1;t?(t.status="Bidding",this.dealService.getDriverDeal(t.key).valueChanges().pipe((0,a.q)(1)).subscribe(s=>{console.log(s),null==s?(console.log(s),console.log(this.user),this.dealService.makeDeal(this.user.uid,t.key,this.tripService.getOrigin(),this.tripService.getDestination(),this.tripService.getDistance(),this.tripService.getFee(),this.tripService.getCurrency(),this.tripService.getNote(),this.tripService.getPaymentMethod(),this.tripService.getPromo(),this.tripService.getDiscount(),this.tripService.getTax(),this.tripService.getFeeTaxed(),this.tripService.getRawFee(),this.tripService.getCommissionType(),this.tripService.getCommissionValue(),this.tripService.getCommission()).then(()=>{let s=this.dealService.getDriverDeal(t.key).valueChanges().subscribe(t=>{null!==t&&t.status==c.MN||(s.unsubscribe(),null===t?this.nextDriver(e):t.status==c.je&&(console.log("accepted",t.tripId),i=!0,this.locateDriver=!1,this.drivers=[],this.tripService.setId(t.tripId),this.router.navigateByUrl("tracking")))})})):this.nextDriver(e)})):(console.log("No user found"),this.locateDriver=!1,this.common.showAlert("Nenhum t\xe9cnico encontrado ou t\xe9cnicos est\xe3o longe do seu endere\xe7o "))}nextDriver(e){this.drivers.splice(e,1),this.makeDeal(e)}chooseOrigin(){this.router.navigate(["map"],{queryParams:{type:"origin"}})}chooseDestination(){this.router.navigate(["map"],{queryParams:{type:"destination"}})}choosePaymentMethod(){this.router.navigateByUrl("/payments")}setOrigin(){let e=new google.maps.LatLng(this.origin.location.lat,this.origin.location.lng),t=new google.maps.Marker({map:this.map,position:e});t.setMap(this.map),this.destination&&t.setMap(null),this.map.setCenter(e)}toggleVehicles(){this.showVehicles=!this.showVehicles,this.showModalBg=1==this.showVehicles}trackDrivers(){this.showDriverOnMap(this.locality),clearInterval(this.driverTracking),this.driverTracking=setInterval(()=>{this.showDriverOnMap(this.locality)},c.YL)}showDriverOnMap(e){console.log("Searching: "+this.currentVehicle.id+" under "+e),this.driverService.getActiveDriver(e,this.currentVehicle.id).valueChanges().pipe((0,a.q)(1)).subscribe(e=>{this.clearDrivers(),null!=e&&(console.log(e.length+" Drivers"),e.forEach(e=>{let t=this.placeService.calcCrow(e.lat,e.lng,this.origin.location.lat,this.origin.location.lng);if(console.log("Distancia:"+(t<c.Wt)+" \xfaltima atividade:"+(e.last_active<c.lI)),t<c.Wt&&Date.now()-e.last_active<c.lI){let i=new google.maps.LatLng(e.lat,e.lng),s=new google.maps.Marker({map:this.map,position:i,icon:{url:this.currentVehicle.map_icon,size:new google.maps.Size(32,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(16,16),scaledSize:new google.maps.Size(32,32)}});e.distance=t,this.driverMarkers.push(s),this.activeDrivers.push(e)}else console.log("Esse veiculo esta muito longe")}))})}clearDrivers(){this.activeDrivers=[],this.driverMarkers.forEach(e=>{e.setMap(null)})}}return e.\u0275fac=function(t){return new(t||e)(h.Y36(r.F0),h.Y36(n.Br),h.Y36(l.k),h.Y36(d.b),h.Y36(h.sBO),h.Y36(g.R),h.Y36(p.a),h.Y36(u.F),h.Y36(v.zQ),h.Y36(m.e),h.Y36(x.sK),h.Y36(S),h.Y36(b.v),h.Y36(n._q),h.Y36(f.KQ))},e.\u0275cmp=h.Xpm({type:e,selectors:[["app-home"]],decls:32,vars:19,consts:[["color","dark"],["slot","start"],[1,"locationinput-holder"],["placeholder","local do atendimento?","type","text",1,"locationinput",3,"value","click"],[1,"distanceText",3,"hidden"],[4,"ngIf"],[3,"id","ngStyle"],[2,"padding","8px"],[2,"background","#f5f5f5",3,"hidden"],["fill","clear","size","small","color","dark","expand","block",3,"click"],["slot","start",3,"name"],["slot","start","name","create"],[3,"hidden"],[3,"ngClass","click",4,"ngFor","ngForOf"],["expand","block","color","dark",3,"hidden","click"],["name","dots","color","light",3,"hidden"],[3,"ngClass","click"],[1,"carName"],[3,"src"],[1,"carPrice"]],template:function(e,t){1&e&&(h.TgZ(0,"ion-header"),h.TgZ(1,"ion-toolbar",0),h.TgZ(2,"ion-buttons",1),h._UZ(3,"ion-menu-button"),h.qZA(),h.TgZ(4,"ion-title"),h._uU(5," JetPort "),h.qZA(),h.qZA(),h.qZA(),h.TgZ(6,"ion-content"),h.TgZ(7,"div",2),h.TgZ(8,"input",3),h.NdJ("click",function(){return t.chooseOrigin()}),h.qZA(),h.TgZ(9,"p",4),h.YNc(10,C,2,1,"span",5),h.YNc(11,y,2,1,"span",5),h.qZA(),h.qZA(),h._UZ(12,"div",6),h.qZA(),h.TgZ(13,"ion-footer"),h.TgZ(14,"ion-toolbar",7),h.TgZ(15,"ion-row",8),h.TgZ(16,"ion-col"),h.TgZ(17,"ion-button",9),h.NdJ("click",function(){return t.choosePaymentMethod1()}),h._UZ(18,"ion-icon",10),h._uU(19),h.qZA(),h.qZA(),h.TgZ(20,"ion-col"),h.TgZ(21,"ion-button",9),h.NdJ("click",function(){return t.showPromoPopup()}),h._UZ(22,"ion-icon",11),h._uU(23),h.ALo(24,"translate"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(25,"ion-row",12),h.YNc(26,M,6,7,"ion-col",13),h.qZA(),h.TgZ(27,"ion-button",14),h.NdJ("click",function(){return t.chooseDestination()}),h._uU(28," Acionar T\xe9cnico"),h.qZA(),h.TgZ(29,"ion-button",14),h.NdJ("click",function(){return t.book()}),h._uU(30),h._UZ(31,"ion-spinner",15),h.qZA(),h.qZA(),h.qZA()),2&e&&(h.xp6(8),h.s9C("value",t.origin?t.origin.vicinity:""),h.xp6(1),h.Q6J("hidden",!t.destination),h.xp6(1),h.Q6J("ngIf",""!=t.distanceText),h.xp6(1),h.Q6J("ngIf",""!=t.durationText),h.xp6(1),h.s9C("id",t.mapId),h.Q6J("ngStyle",h.DdM(18,k)),h.xp6(3),h.Q6J("hidden",!t.destination),h.xp6(3),h.s9C("name",t.getPaymentMethod()),h.xp6(1),h.hij(" ",t.getPaymentMethod()," "),h.xp6(4),h.hij(" ",h.lcZ(24,16,"PROMO")," "),h.xp6(2),h.Q6J("hidden",!t.destination),h.xp6(1),h.Q6J("ngForOf",t.vehicles),h.xp6(1),h.Q6J("hidden",t.origin),h.xp6(2),h.Q6J("hidden",!t.origin),h.xp6(1),h.hij(" ",0==t.locateDriver?"Acionar T\xe9cnico":"Localizando T\xe9cnico"," "),h.xp6(1),h.Q6J("hidden",!t.locateDriver))},directives:[n.Gu,n.sr,n.Sm,n.fG,n.wd,n.W2,s.O5,s.PC,n.fr,n.Nd,n.wI,n.YG,n.gu,s.sg,n.PQ,s.mk],pipes:[x.X$],styles:["ion-title[_ngcontent-%COMP%]{text-align:center;margin-left:-40px!important;letter-spacing:4px}.header-md[_ngcontent-%COMP%]:after{background:none}.locationinput-holder[_ngcontent-%COMP%]{padding:.2rem 1rem;background:#222;top:0;width:100%}.locationinput[_ngcontent-%COMP%]{background:#fff;outline:0;width:100%;padding:.5rem;margin:2px 0;font-size:14px;border-radius:4px;border:none;color:#555}.distanceText[_ngcontent-%COMP%]{font-size:12px;color:#eee;margin:0}.align-bottom[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;padding:5px}.align-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14p}ion-col[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}ion-col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;padding:4px;border-radius:100%}ion-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px}ion-row[_ngcontent-%COMP%]{background:#fff}.list-md[_ngcontent-%COMP%]{margin:-1px 0 0}.label-md[_ngcontent-%COMP%]{margin:13px -50px 13px 0}.text-input-md[_ngcontent-%COMP%]{font-size:14px;margin:8px 5px}#map[_ngcontent-%COMP%]{width:100%}.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:3px solid #ffce00}.carName[_ngcontent-%COMP%]{font-size:12px;display:inline-block;background:#333;color:#fff;padding:2px 4px;border-radius:4px}.carSeats[_ngcontent-%COMP%]{color:#777;font-size:.7em}.carPrice[_ngcontent-%COMP%]{color:#777;font-size:.8em}"]}),e})()}];let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[r.Bz.forChild(w)],r.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[s.ez,o.u5,n.Pc,x.aw,_]]}),e})()}}]);