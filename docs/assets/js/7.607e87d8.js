(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{12:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return a}));e(18),e(19),e(20);var r=e(21),o=e(22),i=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"generate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=[],e=1;e<=60;e++)n.push(e.toString().padStart(2,"0")+".jpg");for(var r,o,i=[],u=1;u<=t;u++)r=Math.floor(Math.random()*n.length),o=n.splice(r,1)[0],i.push(o);return i.length>1?i:i[0]}}]),t}(),u=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],a=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"generate",value:function(t){for(var n,e=[],r=1;r<=t;r++)n=Math.floor(Math.random()*u.length),e.push(u[n]);return e}}]),t}()},155:function(t,n,e){e(25)&&"g"!=/./g.flags&&e(38).f(RegExp.prototype,"flags",{configurable:!0,get:e(59)})},156:function(t,n,e){var r=e(47),o=e(157),i=e(39);t.exports=function(t,n,e,u){var a=String(i(t)),c=a.length,f=void 0===e?" ":String(e),s=r(n);if(s<=c||""==f)return a;var l=s-c,p=o.call(f,Math.ceil(l/f.length));return p.length>l&&(p=p.slice(0,l)),u?p+a:a+p}},157:function(t,n,e){"use strict";var r=e(48),o=e(39);t.exports=function(t){var n=String(o(this)),e="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},158:function(t,n,e){var r=e(24).navigator;t.exports=r&&r.userAgent||""},159:function(t,n,e){t.exports=e(160)},160:function(t,n,e){e(161);var r=e(34).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},161:function(t,n,e){var r=e(49);r(r.S+r.F*!e(37),"Object",{defineProperty:e(43).f})},18:function(t,n,e){"use strict";e(155);var r=e(28),o=e(59),i=e(25),u=/./.toString,a=function(t){e(36)(RegExp.prototype,"toString",t,!0)};e(31)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?a((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):"toString"!=u.name&&a((function(){return u.call(this)}))},19:function(t,n,e){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&e(36)(r,"toString",(function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"}))},20:function(t,n,e){"use strict";var r=e(29),o=e(156),i=e(158),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*u,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},21:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},22:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(159),o=e.n(r);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function u(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}},24:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},25:function(t,n,e){t.exports=!e(31)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},26:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},260:function(t,n,e){"use strict";e.r(n);var r=e(12),o={name:"demos-index-2",components:{FluxParallax:e(15).FluxParallax},data:function(){return{src:"../img/slides/"}},created:function(){this.src+=r.b.generate()}},i=e(1),u=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("flux-parallax",{staticStyle:{height:"250px"},attrs:{src:this.src,type:"fixed"}})}),[],!1,null,null,null);n.default=u.exports},28:function(t,n,e){var r=e(33);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},29:function(t,n,e){var r=e(24),o=e(45),i=e(35),u=e(36),a=e(51),c=function(t,n,e){var f,s,l,p,h=t&c.F,d=t&c.G,y=t&c.S,g=t&c.P,v=t&c.B,w=d?r:y?r[n]||(r[n]={}):(r[n]||{}).prototype,b=d?o:o[n]||(o[n]={}),m=b.prototype||(b.prototype={});for(f in d&&(e=n),e)l=((s=!h&&w&&void 0!==w[f])?w:e)[f],p=v&&s?a(l,r):g&&"function"==typeof l?a(Function.call,l):l,w&&u(w,f,l,t&c.U),b[f]!=l&&i(b,f,p),g&&m[f]!=l&&(m[f]=l)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},31:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},33:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},34:function(t,n){var e=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},35:function(t,n,e){var r=e(38),o=e(52);t.exports=e(25)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},36:function(t,n,e){var r=e(24),o=e(35),i=e(40),u=e(55)("src"),a=e(85),c=(""+a).split("toString");e(45).inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,e,a){var f="function"==typeof e;f&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(f&&(i(e,u)||o(e,u,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:a?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||a.call(this)}))},37:function(t,n,e){t.exports=!e(61)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},38:function(t,n,e){var r=e(28),o=e(67),i=e(58),u=Object.defineProperty;n.f=e(25)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},39:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},40:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},41:function(t,n,e){var r=e(43),o=e(63);t.exports=e(37)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},42:function(t,n,e){var r=e(44);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},43:function(t,n,e){var r=e(42),o=e(86),i=e(87),u=Object.defineProperty;n.f=e(37)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},44:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},45:function(t,n){var e=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},47:function(t,n,e){var r=e(48),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},48:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},49:function(t,n,e){var r=e(26),o=e(34),i=e(56),u=e(41),a=e(50),c=function(t,n,e){var f,s,l,p=t&c.F,h=t&c.G,d=t&c.S,y=t&c.P,g=t&c.B,v=t&c.W,w=h?o:o[n]||(o[n]={}),b=w.prototype,m=h?r:d?r[n]:(r[n]||{}).prototype;for(f in h&&(e=n),e)(s=!p&&m&&void 0!==m[f])&&a(w,f)||(l=s?m[f]:e[f],w[f]=h&&"function"!=typeof m[f]?e[f]:g&&s?i(l,r):v&&m[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((w.virtual||(w.virtual={}))[f]=l,t&c.R&&b&&!b[f]&&u(b,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},50:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},51:function(t,n,e){var r=e(79);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},52:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},54:function(t,n,e){var r=e(45),o=e(24),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(70)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},55:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},56:function(t,n,e){var r=e(60);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},58:function(t,n,e){var r=e(33);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},59:function(t,n,e){"use strict";var r=e(28);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},60:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},61:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},62:function(t,n,e){var r=e(44),o=e(26).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},63:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},67:function(t,n,e){t.exports=!e(25)&&!e(31)((function(){return 7!=Object.defineProperty(e(68)("div"),"a",{get:function(){return 7}}).a}))},68:function(t,n,e){var r=e(33),o=e(24).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},70:function(t,n){t.exports=!1},79:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},85:function(t,n,e){t.exports=e(54)("native-function-to-string",Function.toString)},86:function(t,n,e){t.exports=!e(37)&&!e(61)((function(){return 7!=Object.defineProperty(e(62)("div"),"a",{get:function(){return 7}}).a}))},87:function(t,n,e){var r=e(44);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}}}]);