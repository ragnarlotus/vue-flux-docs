(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{12:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return a}));e(20),e(21),e(22);var r=e(23),o=e(24),i=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"generate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=[],e=1;e<=60;e++)n.push(e.toString().padStart(2,"0")+".jpg");for(var r,o,i=[],u=1;u<=t;u++)r=Math.floor(Math.random()*n.length),o=n.splice(r,1)[0],i.push(o);return i.length>1?i:i[0]}}]),t}(),u=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],a=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"generate",value:function(t){for(var n,e=[],r=1;r<=t;r++)n=Math.floor(Math.random()*u.length),e.push(u[n]);return e}}]),t}()},13:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},14:function(t,n,e){t.exports=!e(18)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},16:function(t,n,e){t.exports=!e(41)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},17:function(t,n,e){var r=e(19);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},18:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},19:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},20:function(t,n,e){"use strict";e(68);var r=e(17),o=e(40),i=e(14),u=/./.toString,a=function(t){e(25)(RegExp.prototype,"toString",t,!0)};e(18)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?a((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):"toString"!=u.name&&a((function(){return u.call(this)}))},21:function(t,n,e){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&e(25)(r,"toString",(function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"}))},22:function(t,n,e){"use strict";var r=e(36),o=e(69),i=e(71),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*u,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},23:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},24:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(72),o=e.n(r);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function u(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}},241:function(t,n,e){"use strict";e.r(n);var r=e(12),o=e(30),i={name:"demos-vue-flux-flux-preloader",components:{VueFlux:o.VueFlux,FluxPreloader:o.FluxPreloader,FluxControls:o.FluxControls,FluxPagination:o.FluxPagination},data:function(){return{options:{autoplay:!0,path:"../../img/slides/"},numImages:4,images:[],transitions:["blinds3d","blocks2","book","cube","warp","wave"]}},created:function(){this.updateImages()},methods:{updateImages:function(){this.images=r.b.generate(this.numImages)}}},u=e(1),a=Object(u.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("vue-flux",{attrs:{options:t.options,images:t.images,transitions:t.transitions},scopedSlots:t._u([{key:"preloader",fn:function(){return[e("flux-preloader")]},proxy:!0},{key:"controls",fn:function(){return[e("flux-controls")]},proxy:!0},{key:"pagination",fn:function(){return[e("flux-pagination")]},proxy:!0}])}),t._v(" "),e("button",{attrs:{type:"button"},on:{click:function(n){return t.updateImages()}}},[t._v("Update images")])],1)}),[],!1,null,null,null);n.default=a.exports},25:function(t,n,e){var r=e(13),o=e(32),i=e(43),u=e(53)("src"),a=e(65),c=(""+a).split("toString");e(29).inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,e,a){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(s&&(i(e,u)||o(e,u,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:a?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||a.call(this)}))},26:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},27:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},29:function(t,n){var e=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},31:function(t,n){var e=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},32:function(t,n,e){var r=e(34),o=e(51);t.exports=e(14)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},34:function(t,n,e){var r=e(17),o=e(59),i=e(55),u=Object.defineProperty;n.f=e(14)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},35:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},36:function(t,n,e){var r=e(13),o=e(29),i=e(32),u=e(25),a=e(50),c=function(t,n,e){var s,f,l,p,h=t&c.F,d=t&c.G,y=t&c.S,g=t&c.P,v=t&c.B,m=d?r:y?r[n]||(r[n]={}):(r[n]||{}).prototype,b=d?o:o[n]||(o[n]={}),w=b.prototype||(b.prototype={});for(s in d&&(e=n),e)l=((f=!h&&m&&void 0!==m[s])?m:e)[s],p=v&&f?a(l,r):g&&"function"==typeof l?a(Function.call,l):l,m&&u(m,s,l,t&c.U),b[s]!=l&&i(b,s,p),g&&w[s]!=l&&(w[s]=l)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},37:function(t,n,e){var r=e(45),o=e(66),i=e(67),u=Object.defineProperty;n.f=e(16)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},38:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},40:function(t,n,e){"use strict";var r=e(17);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},41:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},43:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},44:function(t,n,e){var r=e(37),o=e(58);t.exports=e(16)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},45:function(t,n,e){var r=e(27);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},47:function(t,n,e){var r=e(38),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},48:function(t,n,e){var r=e(26),o=e(31),i=e(54),u=e(44),a=e(49),c=function(t,n,e){var s,f,l,p=t&c.F,h=t&c.G,d=t&c.S,y=t&c.P,g=t&c.B,v=t&c.W,m=h?o:o[n]||(o[n]={}),b=m.prototype,w=h?r:d?r[n]:(r[n]||{}).prototype;for(s in h&&(e=n),e)(f=!p&&w&&void 0!==w[s])&&a(m,s)||(l=f?w[s]:e[s],m[s]=h&&"function"!=typeof w[s]?e[s]:g&&f?i(l,r):v&&w[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((m.virtual||(m.virtual={}))[s]=l,t&c.R&&b&&!b[s]&&u(b,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},49:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},50:function(t,n,e){var r=e(63);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},51:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},52:function(t,n,e){var r=e(29),o=e(13),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(61)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},53:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},54:function(t,n,e){var r=e(56);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},55:function(t,n,e){var r=e(19);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},56:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},57:function(t,n,e){var r=e(27),o=e(26).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},58:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},59:function(t,n,e){t.exports=!e(14)&&!e(18)((function(){return 7!=Object.defineProperty(e(60)("div"),"a",{get:function(){return 7}}).a}))},60:function(t,n,e){var r=e(19),o=e(13).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},61:function(t,n){t.exports=!1},63:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},65:function(t,n,e){t.exports=e(52)("native-function-to-string",Function.toString)},66:function(t,n,e){t.exports=!e(16)&&!e(41)((function(){return 7!=Object.defineProperty(e(57)("div"),"a",{get:function(){return 7}}).a}))},67:function(t,n,e){var r=e(27);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},68:function(t,n,e){e(14)&&"g"!=/./g.flags&&e(34).f(RegExp.prototype,"flags",{configurable:!0,get:e(40)})},69:function(t,n,e){var r=e(47),o=e(70),i=e(35);t.exports=function(t,n,e,u){var a=String(i(t)),c=a.length,s=void 0===e?" ":String(e),f=r(n);if(f<=c||""==s)return a;var l=f-c,p=o.call(s,Math.ceil(l/s.length));return p.length>l&&(p=p.slice(0,l)),u?p+a:a+p}},70:function(t,n,e){"use strict";var r=e(38),o=e(35);t.exports=function(t){var n=String(o(this)),e="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},71:function(t,n,e){var r=e(13).navigator;t.exports=r&&r.userAgent||""},72:function(t,n,e){t.exports=e(73)},73:function(t,n,e){e(74);var r=e(31).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},74:function(t,n,e){var r=e(48);r(r.S+r.F*!e(16),"Object",{defineProperty:e(37).f})}}]);