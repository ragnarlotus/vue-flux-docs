(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{277:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));n(285),n(138),n(20),n(284),n(286);var i=n(21),o=n(36),a=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"generate",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],n=1;n<=60;n++)t.push(n.toString().padStart(2,"0")+".jpg");for(var i,o,a=[],r=1;r<=e;r++)i=Math.floor(Math.random()*t.length),o=t.splice(i,1)[0],a.push(o);return a.length>1?a:a[0]}}]),e}(),r=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],s=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"generate",value:function(e){for(var t,n=[],i=1;i<=e;i++)t=Math.floor(Math.random()*r.length),n.push(r[t]);return n}}]),e}()},278:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},279:function(e,t,n){var i=n(18),o="["+n(278)+"]",a=RegExp("^"+o+o+"*"),r=RegExp(o+o+"*$"),s=function(e){return function(t){var n=String(i(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(r,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},280:function(e,t,n){var i=n(6),o=n(140);e.exports=function(e,t,n){var a,r;return o&&"function"==typeof(a=t.constructor)&&a!==n&&i(r=a.prototype)&&r!==n.prototype&&o(e,r),e}},281:function(e,t,n){n(1)({target:"Array",stat:!0},{isArray:n(37)})},282:function(e,t,n){"use strict";var i=n(7),o=n(4),a=n(139),r=n(19),s=n(5),u=n(25),l=n(280),c=n(38),f=n(2),h=n(39),m=n(57).f,p=n(24).f,d=n(8).f,g=n(279).trim,y=o.Number,v=y.prototype,b="Number"==u(h(v)),w=function(e){var t,n,i,o,a,r,s,u,l=c(e,!1);if("string"==typeof l&&l.length>2)if(43===(t=(l=g(l)).charCodeAt(0))||45===t){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+l}for(r=(a=l.slice(2)).length,s=0;s<r;s++)if((u=a.charCodeAt(s))<48||u>o)return NaN;return parseInt(a,i)}return+l};if(a("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,I=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof I&&(b?f((function(){v.valueOf.call(n)})):"Number"!=u(n))?l(new y(w(t)),n,I):w(t)},_=i?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;_.length>D;D++)s(y,x=_[D])&&!s(I,x)&&d(I,x,p(y,x));I.prototype=v,v.constructor=I,r(o,"Number",I)}},283:function(e,t,n){"use strict";n.r(t);n(281),n(282);var i=n(277),o=n(288),a={name:"Demo",components:{VueFlux:o.VueFlux,FluxPreloader:o.FluxPreloader,FluxCaption:o.FluxCaption,FluxControls:o.FluxControls,FluxPagination:o.FluxPagination,FluxIndex:o.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?i.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var e=this.images?this.images.length:this.numImages;return i.a.generate(e)}return[]}},methods:{transitionStart:function(e){this.$emit("transition-start",e)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},r=n(35),s=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-flux",{attrs:{options:e.options,images:e.finalImages,transitions:e.transitions,captions:e.finalCaptions},on:{"transition-start":e.transitionStart,"transition-cancel":e.transitionCancel,"transition-end":e.transitionEnd},scopedSlots:e._u([e.complements.preloader?{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}:null,e.complements.caption?{key:"caption",fn:function(){return[n("flux-caption")]},proxy:!0}:null,e.complements.controls?{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}:null,e.complements.pagination?{key:"pagination",fn:function(){return[n("flux-pagination")]},proxy:!0}:null,e.complements.index?{key:"index",fn:function(){return[n("flux-index")]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);t.default=s.exports},287:function(e,t,n){"use strict";n.r(t),n.d(t,"easings",(function(){return i})),n.d(t,"perspectiveOrigins",(function(){return o})),n.d(t,"minTileDuration",(function(){return a})),n.d(t,"maxTileDuration",(function(){return r})),n.d(t,"minTileDelay",(function(){return s})),n.d(t,"maxTileDelay",(function(){return u})),n.d(t,"minDuration",(function(){return l})),n.d(t,"maxDuration",(function(){return c}));var i=["ease","linear","ease-in","ease-out","ease-in-out"],o={lt:"left top",lc:"left center",lb:"left bottom",ct:"center top",cc:"center center",cb:"center bottom",rt:"right top",rc:"right center",rb:"right bottom"},a=50,r=4e3,s=10,u=3e3,l=100,c=4e3},375:function(e,t,n){"use strict";n.r(t);var i=n(283),o=n(290),a=n.n(o),r=n(287),s=n(289),u={name:"demos-transitions-wave",components:{Demo:i.default,VueSlider:a.a},data:function(){return{constants:r,cols:8,tileDuration:900,tileDelay:110,easing:"cubic-bezier(0.3, -0.3, 0.735, 0.285)",options:{autohideTime:0,path:"../../img/slides/"},complements:{preloader:!0,controls:!0}}},computed:{transitions:function(){return[{name:"wave",options:{cols:this.cols,tileDuration:this.tileDuration,tileDelay:this.tileDelay,easing:this.easing}}]},source:function(){var e="";return e+="const transitions = [{\n",e+="   name: 'wave',\n",e+="   options: {\n",e+="      cols: "+this.cols+",\n",e+="      tileDuration: "+this.tileDuration+",\n",e+="      tileDelay: "+this.tileDelay+",\n",e+="      easing: '"+this.easing+"',\n",e+="   }\n",e+="}]",s.highlight(e,s.languages.javascript,"javascript")}}},l=n(35),c=Object(l.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("demo",{attrs:{options:e.options,transitions:e.transitions,complements:e.complements,numImages:12}}),e._v(" "),n("h3",[e._v("Options")]),e._v(" "),n("label",[n("span",[e._v("Columns:")]),e._v(" "),n("vue-slider",{attrs:{min:4,max:30,tooltip:"always"},model:{value:e.cols,callback:function(t){e.cols=e._n(t)},expression:"cols"}})],1),e._v(" "),n("label",[n("span",[e._v("Tile duration:")]),e._v(" "),n("vue-slider",{attrs:{min:e.constants.minTileDuration,max:e.constants.maxTileDuration,tooltip:"always"},model:{value:e.tileDuration,callback:function(t){e.tileDuration=e._n(t)},expression:"tileDuration"}})],1),e._v(" "),n("label",[n("span",[e._v("Tile delay:")]),e._v(" "),n("vue-slider",{attrs:{min:e.constants.minTileDelay,max:e.constants.maxTileDelay,tooltip:"always"},model:{value:e.tileDelay,callback:function(t){e.tileDelay=e._n(t)},expression:"tileDelay"}})],1),e._v(" "),n("label",[n("span",[e._v("Easing:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.easing,expression:"easing"}],attrs:{type:"text"},domProps:{value:e.easing},on:{input:function(t){t.target.composing||(e.easing=t.target.value)}}})]),e._v(" "),n("h3",[e._v("Source")]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{staticClass:"language-js",domProps:{innerHTML:e._s(e.source)}})])],1)}),[],!1,null,null,null);t.default=c.exports}}]);