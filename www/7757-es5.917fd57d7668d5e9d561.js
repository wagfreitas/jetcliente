!function(){function t(t,o,a){return o in t?Object.defineProperty(t,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[o]=a,t}function o(t,o){for(var a=0;a<o.length;a++){var e=o[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[7757],{7757:function(a,e,n){"use strict";n.r(e),n.d(e,{ion_backdrop:function(){return s}});var r=n(3150),i=n(7585),c=n(960),s=function(){function a(t){!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,a),(0,r.r)(this,t),this.ionBackdropTap=(0,r.e)(this,"ionBackdropTap",7),this.blocker=c.G.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}var e,n,s;return e=a,(n=[{key:"connectedCallback",value:function(){this.stopPropagation&&this.blocker.block()}},{key:"disconnectedCallback",value:function(){this.blocker.unblock()}},{key:"onMouseDown",value:function(t){this.emitTap(t)}},{key:"emitTap",value:function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}},{key:"render",value:function(){var o,a=(0,i.b)(this);return(0,r.h)(r.H,{tabindex:"-1","aria-hidden":"true",class:(o={},t(o,a,!0),t(o,"backdrop-hide",!this.visible),t(o,"backdrop-no-tappable",!this.tappable),o)})}}])&&o(e.prototype,n),s&&o(e,s),Object.defineProperty(e,"prototype",{writable:!1}),a}();s.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}])}();