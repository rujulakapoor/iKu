(function(t){function A(A){for(var n,a,i=A[0],c=A[1],u=A[2],s=0,l=[];s<i.length;s++)a=i[s],r[a]&&l.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(A);while(l.length)l.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,A=0;A<o.length;A++){for(var e=o[A],n=!0,a=1;a<e.length;a++){var i=e[a];0!==r[i]&&(n=!1)}n&&(o.splice(A--,1),t=c(c.s=e[0]))}return t}var n={},a={app:0},r={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1d8a4398":"e6efc066","chunk-73d8080d":"15c3e5e0","chunk-9366b1c2":"5727c310"}[t]+".js"}function c(A){if(n[A])return n[A].exports;var e=n[A]={i:A,l:!1,exports:{}};return t[A].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var A=[],e={"chunk-1d8a4398":1,"chunk-73d8080d":1,"chunk-9366b1c2":1};a[t]?A.push(a[t]):0!==a[t]&&e[t]&&A.push(a[t]=new Promise(function(A,e){for(var n="css/"+({}[t]||t)+"."+{"chunk-1d8a4398":"0d15d53c","chunk-73d8080d":"0f3d7051","chunk-9366b1c2":"7b8e5e61"}[t]+".css",r=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===n||s===r))return A()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],s=u.getAttribute("data-href");if(s===n||s===r)return A()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=A,d.onerror=function(A){var n=A&&A.target&&A.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[t],d.parentNode.removeChild(d),e(o)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){a[t]=0}));var n=r[t];if(0!==n)if(n)A.push(n[2]);else{var o=new Promise(function(A,e){n=r[t]=[A,e]});A.push(n[2]=o);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t),u=function(A){s.onerror=s.onload=null,clearTimeout(l);var e=r[t];if(0!==e){if(e){var n=A&&("load"===A.type?"missing":A.type),a=A&&A.target&&A.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,e[1](o)}r[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:s})},12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(A)},c.m=t,c.c=n,c.d=function(t,A,e){c.o(t,A)||Object.defineProperty(t,A,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,A){if(1&A&&(t=c(t)),8&A)return t;if(4&A&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&A&&"string"!=typeof t)for(var n in t)c.d(e,n,function(A){return t[A]}.bind(null,n));return e},c.n=function(t){var A=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(A,"a",A),A},c.o=function(t,A){return Object.prototype.hasOwnProperty.call(t,A)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=A,u=u.slice();for(var l=0;l<u.length;l++)A(u[l]);var d=s;o.push([0,"chunk-vendors"]),e()})({0:function(t,A,e){t.exports=e("56d7")},"034f":function(t,A,e){"use strict";var n=e("64a9"),a=e.n(n);a.a},1:function(t,A){},"261c":function(t,A,e){},"2f41":function(t,A){t.exports="data:image/png;base64,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"},3691:function(t,A,e){t.exports=e.p+"img/home_graphic_circle.1b41f7a6.png"},4108:function(t,A,e){"use strict";var n=e("eeeb"),a=e.n(n);a.a},"4cc9":function(t,A,e){"use strict";var n=e("f6cc"),a=e.n(n);a.a},"56d7":function(t,A,e){"use strict";e.r(A);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),a=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{attrs:{id:"app"}},[e("Navigation"),e("router-view")],1)},r=[],o=function(){var t=this,A=t.$createElement,n=t._self._c||A;return n("div",[n("div",{staticClass:"header"},[n("v-toolbar",{attrs:{dark:"",flat:"",id:"toolbar","align-center":""}},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{alt:"logo",src:e("2f41")}})]),n("v-toolbar-title",[n("router-link",{attrs:{to:"/"}},[n("h3",{attrs:{id:"title"}})])],1),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{to:"/",flat:""}},[n("h4",[t._v("Home")])]),n("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{to:"/create",flat:""}},[n("h4",[t._v("Create")])]),n("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{to:"/about",flat:""}},[n("h4",[t._v("About")])])],1)],1)],1)])},i=[],c={name:"Navigation",components:{},data:function(){return{}}},u=c,s=(e("4108"),e("2877")),l=Object(s["a"])(u,o,i,!1,null,"598369c6",null),d=l.exports,f={name:"app",components:{Navigation:d},props:{msg:String},data:function(){return{authenticated:!1}},mounted:function(){this.authenticated},methods:{setAuthenticated:function(t){this.authenticated=t},logout:function(){this.authenticated=!1}}},p=f,h=(e("034f"),Object(s["a"])(p,a,r,!1,null,null,null)),v=h.exports,m=e("9f7b"),g=e.n(m),b=(e("f9e3"),e("2dd8"),e("e571")),k=e.n(b),w=e("28dd"),x=(e("bf40"),e("8c4f")),C=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col"},[e("h1",[t._v("iKu")]),e("Intro")],1),t._m(0)])]),e("HaikuList")],1)},y=[function(){var t=this,A=t.$createElement,n=t._self._c||A;return n("div",{staticClass:"col"},[n("img",{staticClass:"homeGraphic",attrs:{alt:"iKu waterfall",src:e("3691")}})])}],O=function(){var t=this,A=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"hello"},[e("div",{staticStyle:{margin:"50px 0 50px 0"}},[e("h3",[t._v("Take a break from life")]),e("h3",[t._v("Sit down and share wisdom of")]),e("h3",[t._v("Haiku with iKu")])]),e("p",[t._v("Haiku is a traditional form of Japanese poetry with 3 lines.")]),e("p",[t._v("Each line has 5, 7, and 5 syllables respectively. ")]),e("p",[t._v("Compose, share, and learn about Haiku with iKu.")])])}],Q={name:"Intro",props:{msg:String}},j=Q,Y=(e("9ce4"),Object(s["a"])(j,O,E,!1,null,"3463d207",null)),P=Y.exports,S=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"haikulist"},[e("h3",[t._v("Explore")]),e("div",{staticClass:"posts-container"},t._l(t.haikus,function(A,n){return e("div",{key:A._id,staticClass:"post",attrs:{item:A,index:n}},[e("p",{staticClass:"text"},[t._v(t._s(A.username))]),e("p",{staticClass:"score"},[t._v(t._s(A.line1))]),e("p",{staticClass:"score"},[t._v(t._s(A.line2))]),e("p",{staticClass:"score"},[t._v(t._s(A.line3))])])}),0)])},M=[],T=(e("96cf"),e("3b8d")),F=e("d5b5"),K={name:"HaikuList",data:function(){return{haikus:[]}},created:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F["a"].getPosts();case 3:this.haikus=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function A(){return t.apply(this,arguments)}return A}()},U=K,I=(e("4cc9"),Object(s["a"])(U,S,M,!1,null,"0ef54fb2",null)),B=I.exports,L={name:"home",components:{Intro:P,HaikuList:B},data:function(){return{authenticated:!1}},mounted:function(){this.authenticated},methods:{setAuthenticated:function(t){this.authenticated=t},logout:function(){this.authenticated=!1}}},Z=L,q=(e("cccb"),Object(s["a"])(Z,C,y,!1,null,null,null)),z=q.exports;n["default"].use(x["a"]);var R=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:z},{path:"/create",name:"create",component:function(){return e.e("chunk-1d8a4398").then(e.bind(null,"d879"))}},{path:"/about",name:"About",component:function(){return e.e("chunk-73d8080d").then(e.bind(null,"f820"))}},{path:"*",name:"error",component:function(){return e.e("chunk-9366b1c2").then(e.bind(null,"dda8"))}}]}),J=e("ce5b"),D=e.n(J);n["default"].config.productionTip=!1,n["default"].use(g.a),n["default"].component("GoogleLogin",k.a),n["default"].use(w["a"]),n["default"].http.headers.common["Access-Control-Allow-Origin"]="*",n["default"].config.productionTip=!1,n["default"].use(g.a),n["default"].use(D.a),n["default"].component("GoogleLogin",k.a),new n["default"]({router:R,render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,A,e){},"9ce4":function(t,A,e){"use strict";var n=e("261c"),a=e.n(n);a.a},cccb:function(t,A,e){"use strict";var n=e("d563"),a=e.n(n);a.a},d563:function(t,A,e){},d5b5:function(t,A,e){"use strict";var n=e("cebc"),a=(e("96cf"),e("3b8d")),r=e("795b"),o=e.n(r),i=e("d225"),c=e("b0b4"),u=e("bc3a"),s=e.n(u),l="api/posts/",d=function(){function t(){Object(i["a"])(this,t)}return Object(c["a"])(t,null,[{key:"getPosts",value:function(){return new o.a(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(A,e){var a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get(l);case 3:a=t.sent,r=a.data,A(r.map(function(t){return Object(n["a"])({},t,{createdAt:new Date(t.createdAt)})})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(A,e){return t.apply(this,arguments)}}())}},{key:"insertPost",value:function(t,A,e,n){return s.a.post(l,{username:t,line1:A,line2:e,line3:n})}},{key:"deletePost",value:function(t){return s.a.delete("".concat(l).concat(t))}}]),t}();A["a"]=d},eeeb:function(t,A,e){},f6cc:function(t,A,e){}});
//# sourceMappingURL=app.9b1e21b5.js.map