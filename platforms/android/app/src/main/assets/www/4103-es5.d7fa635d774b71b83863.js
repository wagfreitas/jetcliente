!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function i(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[4103],{4103:function(n,e,o){"use strict";o.r(e),o.d(e,{RideinfoPageModule:function(){return _}});var r=o(8583),p=o(3679),c=o(2859),a=o(3025),s=o(5257),u=o(7716),Z=o(9997),g=o(4050),l=o(5469);function d(t,n){if(1&t&&(u.TgZ(0,"p"),u._uU(1),u.ALo(2,"translate"),u.qZA()),2&t){var i=u.oxw(2);u.xp6(1),u.AsE("",u.lcZ(2,2,"RATED")," ",i.trip.rating,"")}}function A(t,n){if(1&t&&(u.TgZ(0,"ion-item"),u.TgZ(1,"ion-label"),u._uU(2),u.ALo(3,"translate"),u.TgZ(4,"p"),u._uU(5),u.qZA(),u.qZA(),u.TgZ(6,"ion-text",10),u._uU(7),u.qZA(),u.qZA()),2&t){var i=u.oxw(2);u.xp6(2),u.hij(" ",u.lcZ(3,5,"DISCOUNT")," "),u.xp6(3),u.AsE("",i.trip.promocode," \u2022\xa0",i.trip.discount," %"),u.xp6(2),u.AsE("",i.trip.currency," ",i.discount,"")}}function f(t,n){if(1&t&&(u.TgZ(0,"ion-list",3),u.TgZ(1,"ion-item"),u.TgZ(2,"ion-avatar",1),u._UZ(3,"img",4),u.qZA(),u.TgZ(4,"ion-label"),u.YNc(5,d,3,4,"p",5),u.TgZ(6,"h3"),u._uU(7),u.qZA(),u.qZA(),u.TgZ(8,"ion-badge",6),u._uU(9),u.qZA(),u.qZA(),u.TgZ(10,"ion-item",7),u._UZ(11,"ion-icon",8),u.TgZ(12,"ion-label"),u.TgZ(13,"p"),u._uU(14),u.ALo(15,"date"),u.qZA(),u.TgZ(16,"ion-text"),u.TgZ(17,"h3"),u._uU(18),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(19,"ion-item",7),u._UZ(20,"ion-icon",9),u.TgZ(21,"ion-label"),u.TgZ(22,"p"),u._uU(23),u.ALo(24,"date"),u.qZA(),u.TgZ(25,"ion-text"),u.TgZ(26,"h3"),u._uU(27),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(28,"ion-item-divider"),u.TgZ(29,"h5"),u._uU(30),u.ALo(31,"translate"),u.qZA(),u.qZA(),u.TgZ(32,"ion-item"),u.TgZ(33,"ion-label"),u._uU(34),u.ALo(35,"translate"),u.qZA(),u.TgZ(36,"ion-text",10),u._uU(37),u.qZA(),u.qZA(),u.YNc(38,A,8,7,"ion-item",5),u.TgZ(39,"ion-item"),u.TgZ(40,"ion-label"),u._uU(41),u.ALo(42,"translate"),u.TgZ(43,"p"),u._uU(44),u.qZA(),u.qZA(),u.TgZ(45,"ion-text",10),u._uU(46),u.qZA(),u.qZA(),u.TgZ(47,"ion-item"),u.TgZ(48,"ion-label"),u._uU(49),u.ALo(50,"translate"),u.TgZ(51,"p"),u._uU(52),u.qZA(),u.qZA(),u.TgZ(53,"ion-text",10),u._uU(54),u.qZA(),u.qZA(),u.qZA()),2&t){var i=u.oxw();u.xp6(3),u.s9C("src",i.driver.photoURL,u.LSH),u.xp6(2),u.Q6J("ngIf",i.trip.rating),u.xp6(2),u.Oqu(i.driver.name),u.xp6(2),u.Oqu(i.trip.status),u.xp6(5),u.Oqu(u.xi3(15,21,i.trip.pickedUpAt,"shortTime")),u.xp6(4),u.Oqu(i.trip.origin.vicinity),u.xp6(5),u.Oqu(u.xi3(24,24,i.trip.droppedOffAt,"shortTime")),u.xp6(4),u.Oqu(i.trip.destination.vicinity),u.xp6(3),u.Oqu(u.lcZ(31,27,"BILLING_DETAILS")),u.xp6(4),u.Oqu(u.lcZ(35,29,"FEE")),u.xp6(3),u.AsE("",i.trip.currency," ",i.trip.rawfee,""),u.xp6(1),u.Q6J("ngIf",i.trip.discount),u.xp6(3),u.hij(" ",u.lcZ(42,31,"TAX")," "),u.xp6(3),u.hij(" ",i.trip.tax," %"),u.xp6(2),u.AsE(" ",i.trip.currency," ",i.tax," "),u.xp6(3),u.hij(" ",u.lcZ(50,33,"FINAL")," "),u.xp6(3),u.Oqu(i.trip.paymentMethod),u.xp6(2),u.AsE(" ",i.trip.currency," ",i.trip.fee_taxed," ")}}var x,q,h=[{path:"",component:(x=function(){function n(i,e,o){t(this,n),this.route=i,this.tripService=e,this.driverService=o,this.trip={},this.driver={},this.tridId=this.route.snapshot.paramMap.get("id"),console.log(this.tridId)}return i(n,[{key:"ngOnInit",value:function(){var t=this;this.tripService.getTrip(this.tridId).valueChanges().pipe((0,s.q)(1)).subscribe(function(n){t.trip=n,console.log(t.trip),t.discount=(t.trip.rawfee*(t.trip.discount/100)).toFixed(2),t.tax=(t.trip.fee*(t.trip.tax/100)).toFixed(2),t.driverService.getDriver(t.trip.driverId).valueChanges().pipe((0,s.q)(1)).subscribe(function(n){t.driver=n})})}}]),n}(),x.\u0275fac=function(t){return new(t||x)(u.Y36(a.gz),u.Y36(Z.a),u.Y36(g.F))},x.\u0275cmp=u.Xpm({type:x,selectors:[["app-rideinfo"]],decls:12,vars:6,consts:[["color","dark"],["slot","start"],["lines","none",4,"ngIf"],["lines","none"],[3,"src"],[4,"ngIf"],["slot","end","color","dark"],["text-wrap",""],["name","pin","color","success","slot","start",2,"margin-right","18px"],["name","pin","color","danger","slot","start",2,"margin-right","18px"],["slot","end"]],template:function(t,n){1&t&&(u.TgZ(0,"ion-header"),u.TgZ(1,"ion-toolbar",0),u.TgZ(2,"ion-buttons",1),u._UZ(3,"ion-back-button"),u.qZA(),u.TgZ(4,"ion-title"),u.TgZ(5,"h3"),u._uU(6),u.ALo(7,"date"),u.qZA(),u.TgZ(8,"p"),u._uU(9),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(10,"ion-content"),u.YNc(11,f,55,35,"ion-list",2),u.qZA()),2&t&&(u.xp6(6),u.Oqu(u.xi3(7,3,n.trip.createdAt,"MMM dd, yyyy hh:mm a")),u.xp6(3),u.hij("#",n.trip.createdAt,""),u.xp6(2),u.Q6J("ngIf",null!=n.trip.createdAt))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.wd,c.W2,r.O5,c.q_,c.Ie,c.BJ,c.Q$,c.yp,c.gu,c.yW,c.rH],pipes:[r.uU,l.X$],styles:["ion-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0}ion-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}ion-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}ion-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}ion-note[_ngcontent-%COMP%]{font-size:14px;color:#333;font-weight:500}h3[_ngcontent-%COMP%]{font-weight:500!important}.datetime[_ngcontent-%COMP%]{color:#777;font-weight:400}ion-badge[_ngcontent-%COMP%]{text-transform:uppercase;color:#fff}table[_ngcontent-%COMP%]{width:100%}tr[_ngcontent-%COMP%]{border:1px solid #eee}td[_ngcontent-%COMP%]{padding:4px}"]}),x)}],T=function(){var n=i(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),n}(),_=((q=i(function n(){t(this,n)})).\u0275fac=function(t){return new(t||q)},q.\u0275mod=u.oAB({type:q}),q.\u0275inj=u.cJS({imports:[[r.ez,p.u5,c.Pc,l.aw,T]]}),q)}}])}();