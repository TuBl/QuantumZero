(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"060e":function(e,t,r){},"08be":function(e,t,r){e.exports=r.p+"img/about-bottom.a34a1992.jpg"},1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},"167b":function(e,t,r){e.exports=r.p+"img/pre-built-2.8184f3a1.jpg"},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7");function n(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(c){return void r(c)}u.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function u(e){n(o,a,i,u,s,"next",e)}function s(e){n(o,a,i,u,s,"throw",e)}u(void 0)}))}}},"1de9":function(e,t,r){},"209a":function(e,t,r){e.exports=r.p+"img/about-top.8f4ca0c6.jpg"},2368:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"main-container"},[e._m(0),e._m(1),r("button",{staticClass:"main-container__btn",on:{click:e.onClick}},[e._v("Back")])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-container__first"},[r("p",[e._v("Thank You!")]),r("p",[e._v("We have received your email.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-container__second"},[r("p",[e._v("You will hear from us")]),r("p",[e._v("in 3-5 business days.")])])}],i={methods:{onClick:function(){this.$router.push("/")}}},o=i,u=(r("e70c"),r("2877")),s=Object(u["a"])(o,n,a,!1,null,"2a5ad18a",null);t["default"]=s.exports},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=a},"2ed9":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"main-container"},[e._m(0),e._m(1),r("button",{staticClass:"main-container__btn",on:{click:e.onClick}},[e._v("Back")])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-container__first"},[r("p",[e._v("Oh Oh....")]),r("p",[e._v("Something went wrong")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-container__second"},[r("p",[e._v("Network Error")]),r("p",[e._v("Please try again in a bit.")])])}],i={methods:{onClick:function(){this.$router.push("/")}}},o=i,u=(r("d2bf"),r("2877")),s=Object(u["a"])(o,n,a,!1,null,"0055915e",null);t["default"]=s.exports},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=a},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("numeric",/^[0-9]*$/);t.default=a},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=a},"4e85":function(e,t,r){"use strict";var n=r("ad6e"),a=r.n(n);a.a},"4f5e":function(e,t,r){"use strict";var n=r("5aec"),a=r.n(n);a.a},"572d":function(e,t,r){"use strict";var n=r("8458"),a=r.n(n);a.a},"57e1":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"survey-container"},[r("BaseQuestion",{attrs:{question:e.questions[e.currentQuestion].question,options:e.questions[e.currentQuestion].options},on:{"update-answers":e.updateAnswers,"update-questions":e.updateQuestions}}),r("BasePaginate",{attrs:{pagesNumber:e.questions.length,questionsNumber:e.questions[e.currentQuestion].id}})],1)},a=[],i=r("5530"),o=r("2f62"),u={data:function(){return{currentQuestion:0,questions:[{question:"What is the main purpose of your build?",options:["Gaming","Work","Mixed"],id:1}],answers:[]}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["postAnswers"])),{},{updateQuestions:function(e){"Gaming"==e.option?this.questions=[{question:"What Budget do you have in mind?",options:["+ 10000$","5K - 10K","3K - 5K","Less than 2k"],id:1},{question:"What kind of games do you plan on playing?",options:["AAA (4K@60fps)","AAA (1080P@60fps)","MMORPGS","MOBAs"],id:2},{question:"Where do you want the PC to be delivered in the UAE?",options:["Abu Dhabi","Dubai","Sharjah","Ajman","Ras al-Khaimah","Umm Al Quwain","Fujirah"],id:3},{question:"Do you prefer Online or Bank transfer payment?",options:["Online","Bank transfer"],id:4}]:"Work"==e.option?this.questions=[{question:"What Budget do you have in mind?",options:["+ 10000$","5K - 10K","3K - 5K","Less than 2k"],id:1},{question:"What kind of activities do you do?",options:["Engineering Design","Graphic Design","Microsoft Office","Internet Browsing"],id:2},{question:"Where do you want the PC to be delivered in the UAE?",options:["Abu Dhabi","Dubai","Sharjah","Ajman","Ras al-Khaimah","Umm Al Quwain","Fujirah"],id:3},{question:"Do you prefer Online or Bank transfer payment?",options:["Online","Bank transfer"],id:4}]:this.questions=[{question:"What Budget do you have in mind?",options:["+ 10000$","5K - 10K","3K - 5K","Less than 2k"],id:1},{question:"What kind of activities do you do?",options:["Engineering Design","Graphic Design","Microsoft Office","Internet Browsing"],id:2},{question:"What kind of games do you plan on playing?",options:["AAA (4K@60fps)","AAA (1080P@60fps)","MMORPGS","MOBAs"],id:3},{question:"Where do you want the PC to be delivered in the UAE?",options:["Abu Dhabi","Dubai","Sharjah","Ajman","Ras al-Khaimah","Umm Al Quwain","Fujirah"],id:4},{question:"Do you prefer Online or Bank transfer payment?",options:["Online","Bank transfer"],id:5}],this.answers.push(e)},updateAnswers:function(e){this.currentQuestion===this.questions.length-1?(this.answers.push(e),this.postAnswers(this.answers),this.$router.push("survey-submit")):(this.answers.push(e),this.currentQuestion++)}})},s=u,c=(r("c52d"),r("2877")),l=Object(c["a"])(s,n,a,!1,null,"6c94f875",null);t["default"]=l.exports},"5aec":function(e,t,r){},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,i=(0,n.regex)("email",a);t.default=i},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=a},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=a},6809:function(e,t,r){"use strict";var n=r("e33f"),a=r.n(n);a.a},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,i=(0,n.regex)("url",a);t.default=i},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=a(r("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var u=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.len=u;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var c=function(e,t){return(0,n.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=c},"7a79":function(e,t,r){},8458:function(e,t,r){},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,a=n;t.default=a},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};t.default=a;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"92ea":function(e,t,r){"use strict";var n=r("1de9"),a=r.n(n);a.a},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(S){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),o=new C(n||[]);return i._invoke=P(e,r,o),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",m="completed",p={};function v(){}function b(){}function y(){}var g={};g[i]=function(){return this};var _=Object.getPrototypeOf,w=_&&_(_(k([])));w&&w!==r&&n.call(w,i)&&(g=w);var O=y.prototype=v.prototype=Object.create(g);function j(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function $(e,t){function r(a,i,o,u){var s=l(e[a],e,i);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,o,u)}),(function(e){r("throw",e,o,u)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,u)}))}u(s.arg)}var a;function i(e,n){function i(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function P(e,t,r){var n=f;return function(a,i){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw i;return A()}r.method=a,r.arg=i;while(1){var o=r.delegate;if(o){var u=x(o,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?m:d,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}function x(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,x(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=l(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function q(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function k(e){if(e){var r=e[i];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){while(++a<e.length)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:t,done:!0}}return b.prototype=O.constructor=y,y.constructor=b,b.displayName=s(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,u,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},j($.prototype),$.prototype[o]=function(){return this},e.AsyncIterator=$,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new $(c(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},j(O),s(O,u,"Generator"),O[i]=function(){return this},O.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return u.type="throw",u.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),q(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;q(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:k(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},9703:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"main-container"},[e._m(0),e._m(1),r("button",{staticClass:"main-container__btn",on:{click:e.onClick}},[e._v("Back")])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-container__first"},[r("p",[e._v("Oh Oh....")]),r("p",[e._v("Something went wrong")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-container__second"},[r("p",[e._v("404")]),r("p",[e._v("Page not found")])])}],i={methods:{onClick:function(){this.$router.push("/")}}},o=i,u=(r("92ea"),r("2877")),s=Object(u["a"])(o,n,a,!1,null,"e3b6a606",null);t["default"]=s.exports},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("d039"),i=r("e8b5"),o=r("861d"),u=r("7b0b"),s=r("50c4"),c=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),h=r("2d00"),m=d("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",b=h>=51||!a((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),y=f("concat"),g=function(e){if(!o(e))return!1;var t=e[m];return void 0!==t?!!t:i(e)},_=!b||!y;n({target:"Array",proto:!0,forced:_},{concat:function(e){var t,r,n,a,i,o=u(this),f=l(o,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(i=-1===t?o:arguments[t],g(i)){if(a=s(i.length),d+a>p)throw TypeError(v);for(r=0;r<a;r++,d++)r in i&&c(f,d,i[r])}else{if(d>=p)throw TypeError(v);c(f,d++,i)}return f.length=d,f}})},a696:function(e,t,r){e.exports=r.p+"img/pre-built.cb753847.jpg"},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},ad6e:function(e,t,r){},b0c0:function(e,t,r){var n=r("83ab"),a=r("9bf2").f,i=Function.prototype,o=i.toString,u=/^\s*function ([^ (]*)/,s="name";n&&!(s in i)&&a(i,s,{configurable:!0,get:function(){try{return o.call(this).match(u)[1]}catch(e){return""}}})},b5ae:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return $.default}}),t.helpers=void 0;var a=q(r("6235")),i=q(r("3a54")),o=q(r("45b8")),u=q(r("ec11")),s=q(r("5d75")),c=q(r("c99d")),l=q(r("91d3")),f=q(r("2a12")),d=q(r("5db3")),h=q(r("d4f4")),m=q(r("aa82")),p=q(r("e652")),v=q(r("b6cb")),b=q(r("772d")),y=q(r("d294")),g=q(r("3360")),_=q(r("6417")),w=q(r("eb66")),O=q(r("46bc")),j=q(r("1331")),$=q(r("c301")),P=E(r("78ef"));function x(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return x=function(){return e},e}function E(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=x();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function q(e){return e&&e.__esModule?e:{default:e}}t.helpers=P},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=a},b8fa:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"flex-container",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[e._m(0),e.$v.contact.name.$error?[e.$v.contact.name.required?e._e():r("p",{staticClass:"error-message"},[e._v(" Name is required. ")])]:e._e(),r("BaseInput",{attrs:{label:"Name",type:"text",placeholder:"Name",className:"input-container",error:e.$v.contact.name.$error},on:{blur:function(t){return e.$v.contact.name.$touch()}},model:{value:e.contact.name,callback:function(t){e.$set(e.contact,"name",t)},expression:"contact.name"}}),e.$v.contact.email.$error?[e.$v.contact.email.required?e.$v.contact.email.email?e._e():r("p",{staticClass:"error-message"},[e._v(" Invalid Email format ")]):r("p",{staticClass:"error-message"},[e._v(" Email is required. ")])]:e._e(),r("BaseInput",{attrs:{label:"Email",type:"email",placeholder:"Email",className:"input-container",error:e.$v.contact.email.$error},on:{blur:function(t){return e.$v.contact.email.$touch()}},model:{value:e.contact.email,callback:function(t){e.$set(e.contact,"email",t)},expression:"contact.email"}}),e.$v.contact.message.$error?[e.$v.contact.message.required?e._e():r("p",{staticClass:"error-message"},[e._v(" Message is required. ")])]:e._e(),r("div",{staticClass:"flex-container__text-area"},[r("label",{attrs:{for:"message"}},[e._v("Message")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.contact.message,expression:"contact.message"}],class:{error:e.$v.contact.message.$error},attrs:{name:"message",id:"message",placeholder:"Message"},domProps:{value:e.contact.message},on:{blur:function(t){return e.$v.contact.message.$touch()},input:function(t){t.target.composing||e.$set(e.contact,"message",t.target.value)}}})]),r("button",{staticClass:"btn",attrs:{type:"submit",disabled:e.$v.$anyError}},[e._v("Submit")]),e.$v.$anyError?r("p",{staticClass:"errorMessage"},[e._v(" Please fill out the required field(s). ")]):e._e()],2)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex-container__text"},[r("h1",[e._v("Questions? We are here to help")]),r("p",[e._v(" Got something on your mind? feel free to reach out to us with any inquiries and we will be glad to get back to you ASAP! ")])])}],i=(r("99af"),r("b0c0"),r("96cf"),r("1da1")),o=r("5530"),u=r("b5ae"),s=r("2f62"),c={data:function(){return{contact:this.createFreshContactObject()}},validations:{contact:{name:{required:u["required"]},email:{required:u["required"],email:u["email"]},message:{required:u["required"]}}},mounted:function(){var e=document.createElement("script");e.setAttribute("src","https://smtpjs.com/v3/smtp.js"),document.head.appendChild(e)},methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["setEmailStatus","setErrorStatus"])),{},{createFreshContactObject:function(){return{name:"",email:"",message:""}},formatedAnswer:function(){return"<html>\n\t\t\t\t</br>\n\t\t\t\t<h3>".concat(this.contact.message,"</h3>\n\t\t\t\t<h4>").concat(this.contact.name,"</h4> | <h4>").concat(this.contact.email,"</h4>\n\t\t\t</html>")},sendEmail:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.Email.send({SecureToken:"b35328d8-3add-4c6a-85b2-41d6092d28c3",Host:"mail.quantumzero.net",Username:"qz@quantumzero.net",Password:"*Mestream22591*",To:"qz@quantumzero.net",From:"qz@quantumzero.net",Subject:"Custom build inquiry",Body:e.formatedAnswer()}).then((function(t){t&&"OK"==t?(e.setEmailStatus(!0),e.$router.push({name:"thankyou"})):(e.setErrorStatus(!0),e.$router.push({name:"error"}))}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),t.t0.response&&404==t.t0.response.status?e.$router.push({name:"404"}):(e.setErrorStatus(!0),e.$router.push({name:"error"}));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}})},l=c,f=(r("6809"),r("2877")),d=Object(f["a"])(l,n,a,!1,null,"bd4fde62",null);t["default"]=d.exports},bc4b:function(e,t,r){},bce8:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"flex-container",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[e._m(0),e.$v.contact.phone.$error?[e.$v.contact.phone.required?e._e():r("p",{staticClass:"error-message"},[e._v(" Phone number is required. ")]),e.$v.contact.phone.numeric?e._e():r("p",{staticClass:"error-message"},[e._v(" Phone number must be numeric. ")])]:e._e(),r("BaseInput",{attrs:{label:"Phone",name:"phone",type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:"Phone",className:"input-container",error:e.$v.contact.phone.$error},on:{blur:function(t){return e.$v.contact.phone.$touch()}},model:{value:e.contact.phone,callback:function(t){e.$set(e.contact,"phone",t)},expression:"contact.phone"}}),e.$v.contact.email.$error?[e.$v.contact.email.required?e.$v.contact.email.email?e._e():r("p",{staticClass:"error-message"},[e._v(" Invalid Email format ")]):r("p",{staticClass:"error-message"},[e._v(" Email is required. ")])]:e._e(),r("BaseInput",{attrs:{label:"Email",name:"email",type:"email",placeholder:"Email",className:"input-container",error:e.$v.contact.email.$error},on:{blur:function(t){return e.$v.contact.email.$touch()}},model:{value:e.contact.email,callback:function(t){e.$set(e.contact,"email",t)},expression:"contact.email"}}),e.$v.contact.message.$error?[e.$v.contact.message.required?e._e():r("p",{staticClass:"error-message"},[e._v(" Message is required. ")])]:e._e(),r("div",{staticClass:"flex-container__text-area"},[r("label",{attrs:{for:"message"}},[e._v("Message")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.contact.message,expression:"contact.message"}],class:{error:e.$v.contact.message.$error},attrs:{name:"message",id:"message",placeholder:"Message"},domProps:{value:e.contact.message},on:{blur:function(t){return e.$v.contact.message.$touch()},input:function(t){t.target.composing||e.$set(e.contact,"message",t.target.value)}}})]),r("button",{staticClass:"btn",attrs:{type:"submit",disabled:e.$v.$anyError}},[e._v("Submit")]),e.$v.$anyError?r("p",{staticClass:"errorMessage"},[e._v(" Please fill out the required field(s). ")]):e._e()],2)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex-container__text"},[r("h1",[e._v(" Kindly leave us your UAE phone number and Email so we can get in touch! ")]),r("p",[e._v(" Any notes you want us to know? write it in the box below! ")])])}],i=(r("99af"),r("d81d"),r("96cf"),r("1da1")),o=r("5530"),u=r("b5ae"),s=r("2f62"),c={data:function(){return{contact:this.createFreshContactObject()}},created:function(){0===this.$store.state.answers.length&&this.$router.push("/")},computed:Object(o["a"])({},s["c"]["ANSWERS_GETTER"]),mounted:function(){var e=document.createElement("script");e.setAttribute("src","https://smtpjs.com/v3/smtp.js"),document.head.appendChild(e)},validations:{contact:{phone:{required:u["required"],numeric:u["numeric"]},email:{required:u["required"],email:u["email"]},message:{required:u["required"]}}},methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["setEmailStatus","setErrorStatus"])),{},{createFreshContactObject:function(){return{phone:"",email:"",message:""}},submitHandler:function(){this.$v.$touch()},formatedAnswer:function(){var e=this.$store.state.answers.map((function(e){return JSON.parse(JSON.stringify(e))})),t=e.map((function(e){return"<li>Question: ".concat(e.question," | Answer: ").concat(e.option,"</li>")}));return"<html><ul>".concat(t,"</ul>\n\t\t\t</br>\n\t\t\t<h3>").concat(this.contact.message,"</h3>\n\t\t\t<h4>").concat(this.contact.phone,"</h4> | <h4>").concat(this.contact.email,"</h4>\n\t\t\t</html>")},sendEmail:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.Email.send({SecureToken:"b35328d8-3add-4c6a-85b2-41d6092d28c3",Host:"mail.quantumzero.net",Username:"qz@quantumzero.net",Password:"*Mestream22591*",To:"qz@quantumzero.net",From:"qz@quantumzero.net",Subject:"Custom build inquiry",Body:e.formatedAnswer()}).then((function(t){t&&"OK"==t?(console.log(t),e.setEmailStatus(!0),e.$router.push({name:"thankyou"})):(console.log(t),e.setErrorStatus(!0),e.$router.push({name:"error"}))}));case 3:t.next=9;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0),t.t0.response&&404==t.t0.response.status?e.$router.push({name:"404"}):(e.setErrorStatus(!0),e.$router.push({name:"error"}));case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))()}})},l=c,f=(r("572d"),r("2877")),d=Object(f["a"])(l,n,a,!1,null,"bfa423e4",null);t["default"]=d.exports},bede:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grid-container"},[r("div",{staticClass:"grid-container__hero"},[e._m(0),r("router-link",{staticClass:"btn",attrs:{to:"/survey"}},[e._v("START")])],1),r("div",{staticClass:"grid-container__pre-built"},[r("BaseHeadline",{staticClass:"grid-container__pre-built__heading",attrs:{text:"PRE-BUILT"}}),e._m(1),e._m(2)],1),r("div",{staticClass:"grid-container__custom-built"},[r("BaseHeadline",{staticClass:"grid-container__custom-built__heading",attrs:{text:"CUSTOM-BUILT"}}),r("div",{staticClass:"grid-container__custom-built__text"},[e._v(" Do you wish to have something that is made just for you? Take our brief survey and you will be contacted within 1-3 Work days ")]),r("router-link",{staticClass:"btn",attrs:{to:"/survey"}},[e._v("Lets Get building")])],1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"grid-container__hero-text"},[e._v(" Your dream build starts "),r("br"),e._v("here ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image_1"},[n("img",{attrs:{src:r("a696"),alt:""}}),n("h2",[e._v("Gaming")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image_2"},[n("img",{attrs:{src:r("167b"),alt:""}}),n("h2",[e._v("Productivity")])])}],i={name:"Landing"},o=i,u=(r("4f5e"),r("2877")),s=Object(u["a"])(o,n,a,!1,null,"3a34f038",null);t["default"]=s.exports},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},c52d:function(e,t,r){"use strict";var n=r("060e"),a=r.n(n);a.a},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=a;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},i=n.vuelidate?n.vuelidate.withParams:a;t.withParams=i}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=a},d2bf:function(e,t,r){"use strict";var n=r("7a79"),a=r.n(n);a.a},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=a},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,i=r("1dde"),o=r("ae40"),u=i("map"),s=o("map");n({target:"Array",proto:!0,forced:!u||!s},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},e33f:function(e,t,r){},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},e70c:function(e,t,r){"use strict";var n=r("bc4b"),a=r.n(n);a.a},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=a},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=a},f820:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-container"},[n("div",{staticClass:"grid-container__top"},[n("div",{staticClass:"grid-container__text"},[n("h1",[e._v("Who we are...")]),n("p",[e._v(" We are a group of individuals who are driven by passion for helping others to be able to get the best out of their PC, wheter the use it for gaming, work or a mix of both... ")]),n("svg",{staticClass:"icon",attrs:{width:"220",height:"220",viewBox:"0 0 286 267",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("mask",{attrs:{id:"path-1-inside-1",fill:"white"}},[n("rect",{attrs:{width:"190.836",height:"173.227",rx:"20"}})]),n("rect",{attrs:{width:"190.836",height:"173.227",rx:"20",stroke:"#FE519E","stroke-width":"50",mask:"url(#path-1-inside-1)"}}),n("mask",{attrs:{id:"path-2-inside-2",fill:"white"}},[n("rect",{attrs:{x:"95.1637",y:"93.7734",width:"190.836",height:"173.227",rx:"20"}})]),n("rect",{attrs:{x:"95.1637",y:"93.7734",width:"190.836",height:"173.227",rx:"20",stroke:"#FE519E","stroke-width":"50",mask:"url(#path-2-inside-2)"}})])]),n("img",{attrs:{src:r("209a"),alt:""}})]),e._m(0)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-container__bottom"},[n("img",{attrs:{src:r("08be"),alt:""}})])}],i={name:"About"},o=i,u=(r("4e85"),r("2877")),s=Object(u["a"])(o,n,a,!1,null,"22716d1d",null);t["default"]=s.exports}}]);
//# sourceMappingURL=about.5c910a61.js.map