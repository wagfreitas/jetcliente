!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[9097],{9097:function(e,i,o){"use strict";o.r(i),o.d(i,{LoginPageModule:function(){return b}});var r=o(8583),a=o(3679),s=o(2859),c=o(3025),l=o(9019),g=o(7716),u=o(7556),d=o(5469),p=o(5620),h=o(4207);function m(n,e){1&n&&(g.TgZ(0,"ion-button",11),g._uU(1," Registrar "),g.qZA())}var f,v,Z=[{path:"",component:(f=function(){function e(t,i,o,r,a,s){var c=this;n(this,e),this.authService=t,this.translate=i,this.commonService=o,this.router=r,this.menuCtrl=a,this.ss=s,this.langArr=[],this.lang="en",this.email="",this.password="",this.settings={},this.langArr=l.NZ.langArr,this.lang=this.commonService.getLang(),this.ss.getSettings().subscribe(function(n){return c.settings=null!=n?n.payload.val():{}})}return t(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewDidEnter",value:function(){this.menuCtrl.enable(!1)}},{key:"changeLang",value:function(){this.commonService.changeLang(this.lang)}},{key:"login",value:function(){var n=this,e=this.email.toLowerCase().trim();0==e.length||0==this.password.length?this.commonService.showAlert("Invalid Credentials"):(this.commonService.showLoader(),this.authService.login(e,this.password).then(function(e){n.commonService.hideLoader(),localStorage.setItem("isLoggedIn","true"),n.router.navigateByUrl("/home",{skipLocationChange:!0,replaceUrl:!0})},function(e){n.commonService.hideLoader(),n.commonService.showToast(e.message)}))}}]),e}(),f.\u0275fac=function(n){return new(n||f)(g.Y36(u.e),g.Y36(d.sK),g.Y36(p.v),g.Y36(c.F0),g.Y36(s._q),g.Y36(h.R))},f.\u0275cmp=g.Xpm({type:f,selectors:[["app-login"]],decls:22,vars:6,consts:[[1,"login-header"],["src","./assets/img/logo.png"],[1,"ion-padding"],["lines","none"],["position","stacked"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["color","dark","slot","end","fill","clear","routerLink","/forget"],[2,"padding","0px 16px"],["color","dark","expand","block",3,"click"],["color","dark","fill","clear","expand","block","routerLink","/register",4,"ngIf"],["color","dark","fill","clear","expand","block","routerLink","/register"]],template:function(n,e){1&n&&(g.TgZ(0,"ion-content"),g.TgZ(1,"div",0),g._UZ(2,"img",1),g.qZA(),g.TgZ(3,"div",2),g.TgZ(4,"ion-list",3),g.TgZ(5,"ion-item"),g.TgZ(6,"ion-label",4),g._uU(7,"Email"),g.qZA(),g.TgZ(8,"ion-input",5),g.NdJ("ngModelChange",function(n){return e.email=n}),g.qZA(),g.qZA(),g.TgZ(9,"ion-item"),g.TgZ(10,"ion-label",4),g._uU(11,"Senha"),g.qZA(),g.TgZ(12,"ion-input",6),g.NdJ("ngModelChange",function(n){return e.password=n}),g.qZA(),g.qZA(),g.TgZ(13,"ion-item"),g.TgZ(14,"ion-button",7),g._uU(15," Esqueceu a Senha? "),g.qZA(),g.qZA(),g.qZA(),g.TgZ(16,"div",8),g.TgZ(17,"ion-button",9),g.NdJ("click",function(){return e.login()}),g._uU(18),g.ALo(19,"translate"),g.qZA(),g._uU(20," \xa0\xa0 "),g.YNc(21,m,2,0,"ion-button",10),g.qZA(),g.qZA(),g.qZA()),2&n&&(g.xp6(8),g.Q6J("ngModel",e.email),g.xp6(4),g.Q6J("ngModel",e.password),g.xp6(6),g.Oqu(g.lcZ(19,4,"LOGIN")),g.xp6(3),g.Q6J("ngIf",e.settings.canRiderSignup))},directives:[s.W2,s.q_,s.Ie,s.Q$,s.pK,s.j9,a.JJ,a.On,s.YG,s.YI,c.rH,r.O5],pipes:[d.X$],styles:[".forget[_ngcontent-%COMP%]{text-align:right;padding:4px}.padding[_ngcontent-%COMP%]{padding:0 16px}ion-select[_ngcontent-%COMP%]{background:transparent!important;margin:auto!important;border:none!important}.header-md[_ngcontent-%COMP%]:after{background-image:none!important}"]}),f)}],k=function(){var e=t(function e(){n(this,e)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),e}(),b=((v=t(function e(){n(this,e)})).\u0275fac=function(n){return new(n||v)},v.\u0275mod=g.oAB({type:v}),v.\u0275inj=g.cJS({imports:[[r.ez,a.u5,s.Pc,d.aw,k]]}),v)}}])}();