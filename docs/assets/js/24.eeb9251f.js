(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{147:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));n(155),n(154),n(14),n(153),n(156);var i=n(18),o=n(31),a=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"generate",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],n=1;n<=60;n++)t.push(n.toString().padStart(2,"0")+".jpg");for(var i,o,a=[],r=1;r<=e;r++)i=Math.floor(Math.random()*t.length),o=t.splice(i,1)[0],a.push(o);return a.length>1?a:a[0]}}]),e}(),r=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],s=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"generate",value:function(e){for(var t,n=[],i=1;i<=e;i++)t=Math.floor(Math.random()*r.length),n.push(r[t]);return n}}]),e}()},148:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},149:function(e,t,n){var i=n(17),o="["+n(148)+"]",a=RegExp("^"+o+o+"*"),r=RegExp(o+o+"*$"),s=function(e){return function(t){var n=String(i(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(r,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},150:function(e,t,n){n(1)({target:"Array",stat:!0},{isArray:n(44)})},151:function(e,t,n){"use strict";var i=n(7),o=n(4),a=n(65),r=n(13),s=n(5),l=n(21),u=n(101),c=n(32),f=n(3),h=n(22),m=n(45).f,d=n(20).f,p=n(8).f,g=n(149).trim,y=o.Number,v=y.prototype,b="Number"==l(h(v)),w=function(e){var t,n,i,o,a,r,s,l,u=c(e,!1);if("string"==typeof u&&u.length>2)if(43===(t=(u=g(u)).charCodeAt(0))||45===t){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+u}for(r=(a=u.slice(2)).length,s=0;s<r;s++)if((l=a.charCodeAt(s))<48||l>o)return NaN;return parseInt(a,i)}return+u};if(a("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(b?f((function(){v.valueOf.call(n)})):"Number"!=l(n))?u(new y(w(t)),n,_):w(t)},I=i?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;I.length>D;D++)s(y,x=I[D])&&!s(_,x)&&p(_,x,d(y,x));_.prototype=v,v.constructor=_,r(o,"Number",_)}},152:function(e,t,n){"use strict";n.r(t);n(150),n(151);var i=n(147),o=n(158),a={name:"Demo",components:{VueFlux:o.VueFlux,FluxPreloader:o.FluxPreloader,FluxCaption:o.FluxCaption,FluxControls:o.FluxControls,FluxPagination:o.FluxPagination,FluxIndex:o.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?i.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var e=this.images?this.images.length:this.numImages;return i.a.generate(e)}return[]}},methods:{transitionStart:function(e){this.$emit("transition-start",e)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},r=n(30),s=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-flux",{attrs:{options:e.options,images:e.finalImages,transitions:e.transitions,captions:e.finalCaptions},on:{"transition-start":e.transitionStart,"transition-cancel":e.transitionCancel,"transition-end":e.transitionEnd},scopedSlots:e._u([e.complements.preloader?{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}:null,e.complements.caption?{key:"caption",fn:function(){return[n("flux-caption")]},proxy:!0}:null,e.complements.controls?{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}:null,e.complements.pagination?{key:"pagination",fn:function(){return[n("flux-pagination")]},proxy:!0}:null,e.complements.index?{key:"index",fn:function(){return[n("flux-index")]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);t.default=s.exports},157:function(e,t,n){"use strict";n.r(t),n.d(t,"easings",(function(){return i})),n.d(t,"perspectiveOrigins",(function(){return o})),n.d(t,"minTileDuration",(function(){return a})),n.d(t,"maxTileDuration",(function(){return r})),n.d(t,"minTileDelay",(function(){return s})),n.d(t,"maxTileDelay",(function(){return l})),n.d(t,"minDuration",(function(){return u})),n.d(t,"maxDuration",(function(){return c}));var i=["ease","linear","ease-in","ease-out","ease-in-out"],o={lt:"left top",lc:"left center",lb:"left bottom",ct:"center top",cc:"center center",cb:"center bottom",rt:"right top",rc:"right center",rb:"right bottom"},a=50,r=4e3,s=10,l=3e3,u=100,c=4e3},233:function(e,t,n){"use strict";n.r(t);var i=n(152),o=n(160),a=n.n(o),r=n(157),s=n(159),l={name:"demos-transitions-explode",components:{Demo:i.default,VueSlider:a.a},data:function(){return{constants:r,rows:0,cols:11,tileDuration:300,tileDelay:100,easing:"linear",options:{autohideTime:0,path:"../../img/slides/"},complements:{preloader:!0,controls:!0}}},computed:{transitions:function(){return[{name:"explode",options:{rows:this.rows,cols:this.cols,tileDuration:this.tileDuration,tileDelay:this.tileDelay,easing:this.easing}}]},source:function(){var e="";return e+="const transitions = [{\n",e+="   name: 'explode',\n",e+="   options: {\n",e+="      rows: "+this.rows+",\n",e+="      cols: "+this.cols+",\n",e+="      tileDuration: "+this.tileDuration+",\n",e+="      tileDelay: "+this.tileDelay+",\n",e+="      easing: '"+this.easing+"',\n",e+="   }\n",e+="}]",s.highlight(e,s.languages.javascript,"javascript")}}},u=n(30),c=Object(u.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("demo",{attrs:{options:e.options,transitions:e.transitions,complements:e.complements,numImages:12}}),e._v(" "),n("h3",[e._v("Options")]),e._v(" "),n("label",[n("span",[e._v("Rows:")]),e._v(" "),n("vue-slider",{attrs:{min:0,max:20,tooltip:"always"},model:{value:e.rows,callback:function(t){e.rows=e._n(t)},expression:"rows"}})],1),e._v(" "),n("label",[n("span",[e._v("Columns:")]),e._v(" "),n("vue-slider",{attrs:{min:2,max:20,tooltip:"always"},model:{value:e.cols,callback:function(t){e.cols=e._n(t)},expression:"cols"}})],1),e._v(" "),n("label",[n("span",[e._v("Tile duration:")]),e._v(" "),n("vue-slider",{attrs:{min:e.constants.minTileDuration,max:e.constants.maxTileDuration,tooltip:"always"},model:{value:e.tileDuration,callback:function(t){e.tileDuration=e._n(t)},expression:"tileDuration"}})],1),e._v(" "),n("label",[n("span",[e._v("Tile delay:")]),e._v(" "),n("vue-slider",{attrs:{min:e.constants.minTileDelay,max:e.constants.maxTileDelay,tooltip:"always"},model:{value:e.tileDelay,callback:function(t){e.tileDelay=e._n(t)},expression:"tileDelay"}})],1),e._v(" "),n("label",[n("span",[e._v("Easing:")]),e._v(" "),n("vue-slider",{attrs:{data:e.constants.easings,marks:!0,tooltip:"always"},model:{value:e.easing,callback:function(t){e.easing=e._n(t)},expression:"easing"}})],1),e._v(" "),n("h3",[e._v("Source")]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{staticClass:"language-js",domProps:{innerHTML:e._s(e.source)}})])],1)}),[],!1,null,null,null);t.default=c.exports}}]);