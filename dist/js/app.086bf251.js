(function(t){function e(e){for(var r,o,u=e[0],i=e[1],c=e[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a={app:0},s=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ae24b4dc"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"4a102634"}[t]+".css",a=i.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],p.parentNode.removeChild(p),n(s)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a22":function(t,e,n){},"41e9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.options?n("div",{staticClass:"question-container"},[t.question?n("h1",[t._v(t._s(t.question))]):t._e(),t._l(t.options,(function(e,r){return n("div",{key:"option-"+r,staticClass:"options"},[n("div",{staticClass:"option",on:{click:function(n){return t.addToAnswers(e)}}},[t._v(t._s(e))])])}))],2):t._e()},o=[],a={inheritAttrs:!1,props:{question:[String],options:{type:Array}},methods:{addToAnswers:function(t){"What is the main purpose of your build?"==this.question?this.$emit("update-questions",{question:this.question,option:t}):this.$emit("update-answers",{question:this.question,option:t})}}},s=a,u=(n("87e5"),n("2877")),i=Object(u["a"])(s,r,o,!1,null,"31469c64",null);e["default"]=i.exports},4833:function(t,e,n){"use strict";var r=n("903a"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("8103"),a=n.n(o),s=n("bba4"),u=n.n(s),i=n("1dce"),c=n.n(i),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav",{staticClass:"nav"}),n("router-view"),n("footer",[t._v("2020|Quantum Zero - All Rights Reserved")])],1)},f=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("img",{staticClass:"logo",attrs:{src:n("cf05"),alt:""}}),r("ul",{staticClass:"nav__links"},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),r("router-link",{attrs:{to:"/about"}},[t._v("About")]),r("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])},d=[],h={name:"Nav"},v=h,b=(n("832f"),n("2877")),m=Object(b["a"])(v,p,d,!1,null,"2e9872a1",null),g=m.exports,_={components:{Nav:g}},y=_,E=(n("5c0b"),Object(b["a"])(y,l,f,!1,null,null,null)),w=E.exports,S=n("8c4f"),k=n("2f62");r["a"].use(k["a"]);var x=new k["a"].Store({state:{answers:[],success:!1,error:!1},getters:{ANSWERS_GETTER:function(t){return t.answers}},actions:{postAnswers:function(t,e){var n=t.commit;n("SET_ANSWERS",e)},setEmailStatus:function(t,e){var n=t.commit;n("SET_SUCCESS",e)},setErrorStatus:function(t,e){var n=t.commit;n("SET_ERROR",e)}},mutations:{SET_ANSWERS:function(t,e){return t.answers=e},SET_SUCCESS:function(t,e){return t.success=e},SET_ERROR:function(t,e){return t.error=e}},modules:{}});r["a"].use(S["a"]);var C=[{path:"/",name:"Landing",component:function(){return n.e("about").then(n.bind(null,"bede"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/survey",name:"Survey",component:function(){return n.e("about").then(n.bind(null,"57e1"))}},{path:"/survey-submit",name:"SurveySubmit",component:function(){return n.e("about").then(n.bind(null,"bce8"))}},{path:"/404",name:"404",component:function(){return n.e("about").then(n.bind(null,"9703"))},props:!0},{path:"/error",name:"error",component:function(){return n.e("about").then(n.bind(null,"2ed9"))},props:!0,beforeEnter:function(t,e,n){x.state.error?n():n("/")},beforeLeave:function(t,e,n){x.dispatch("setErrorStatus",{success:!1}),n()}},{path:"/thankyou",name:"thankyou",component:function(){return n.e("about").then(n.bind(null,"2368"))},props:!0,beforeEnter:function(t,e,n){x.state.success?n():n("/")},beforeLeave:function(t,e,n){x.dispatch("setEmailStatus",{success:!1}),n()}},{path:"*",redirect:{name:"404"}}],O=new S["a"]({routes:C,mode:"history",scrollBehavior:function(t,e,n){return n||(t.hash?{selector:t.hash}:{x:0,y:0})}}),A=O;r["a"].use(c.a),r["a"].config.productionTip=!1;var j=n("ef13");j.keys().forEach((function(t){var e=j(t),n=a()(u()(t.replace(/^\.\/(.*)\.\w+$/,"$1")));r["a"].component(n,e.default||e)})),new r["a"]({router:A,store:x,render:function(t){return t(w)}}).$mount("#app")},"59f2":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"79a2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"headline-container"},[n("svg",{staticClass:"headline-container__svg1",attrs:{width:"85",height:"74",viewBox:"0 0 85 74",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("line",{attrs:{y1:"68",x2:"85",y2:"68",stroke:"#FE519E","stroke-width":"12"}}),n("line",{attrs:{x1:"79",y1:"74",x2:"79",stroke:"#FE519E","stroke-width":"12"}})]),n("h1",[t._v(t._s(t.text))]),n("svg",{staticClass:"headline-container__svg2",attrs:{width:"85",height:"74",viewBox:"0 0 85 74",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("line",{attrs:{y1:"68",x2:"85",y2:"68",stroke:"#FE519E","stroke-width":"12"}}),n("line",{attrs:{x1:"79",y1:"74",x2:"79",stroke:"#FE519E","stroke-width":"12"}})])])},o=[],a={inheritAttrs:!1,props:{text:[String]}},s=a,u=(n("bfdc"),n("2877")),i=Object(u["a"])(s,r,o,!1,null,"c01e98ee",null);e["default"]=i.exports},"832f":function(t,e,n){"use strict";var r=n("1a22"),o=n.n(r);o.a},"87e5":function(t,e,n){"use strict";var r=n("bc7b"),o=n.n(r);o.a},"903a":function(t,e,n){},"9c0c":function(t,e,n){},a30c:function(t,e,n){"use strict";var r=n("ca10"),o=n.n(r);o.a},b3b3:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-container"},[t.label?n("label",{staticClass:"input-container__label"},[t._v(t._s(t.label))]):t._e(),n("input",t._g(t._b({class:{error:t.error},attrs:{type:t.type},domProps:{value:t.value},on:{input:t.updateValue}},"input",t.$attrs,!1),t.listeners))])},o=[],a=(n("a9e3"),n("5530")),s={inheritAttrs:!1,props:{value:[String,Number],label:{type:String,default:""},type:String,error:Boolean},methods:{updateValue:function(t){this.$emit("input",t.target.value)}},computed:{listeners:function(){return Object(a["a"])(Object(a["a"])({},this.$listeners),{},{input:this.updateValue})}}},u=s,i=(n("a30c"),n("2877")),c=Object(i["a"])(u,r,o,!1,null,"cdd43114",null);e["default"]=c.exports},bc7b:function(t,e,n){},bfdc:function(t,e,n){"use strict";var r=n("59f2"),o=n.n(r);o.a},ca10:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.d3a78621.png"},ef13:function(t,e,n){var r={"./BaseHeadline.vue":"79a2","./BaseInput.vue":"b3b3","./BasePaginate.vue":"f040","./BaseQuestion.vue":"41e9"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="ef13"},f040:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paginate-container"},t._l(t.pagesNumber,(function(e,r){return n("div",{key:"page-"+r,staticClass:"circle",class:{active:t.isActive(r)}})})),0)},o=[],a=(n("a9e3"),{props:{pagesNumber:[Number],questionsNumber:[Number]},methods:{isActive:function(t){return t===this.questionsNumber-1}}}),s=a,u=(n("4833"),n("2877")),i=Object(u["a"])(s,r,o,!1,null,"22392c3e",null);e["default"]=i.exports}});
//# sourceMappingURL=app.086bf251.js.map