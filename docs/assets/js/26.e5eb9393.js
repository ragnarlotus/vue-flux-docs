(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{147:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));n(155),n(154),n(14),n(153),n(156);var o=n(18),i=n(31),a=function(){function t(){Object(o.a)(this,t)}return Object(i.a)(t,null,[{key:"generate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=[],n=1;n<=60;n++)e.push(n.toString().padStart(2,"0")+".jpg");for(var o,i,a=[],r=1;r<=t;r++)o=Math.floor(Math.random()*e.length),i=e.splice(o,1)[0],a.push(i);return a.length>1?a:a[0]}}]),t}(),r=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],s=function(){function t(){Object(o.a)(this,t)}return Object(i.a)(t,null,[{key:"generate",value:function(t){for(var e,n=[],o=1;o<=t;o++)e=Math.floor(Math.random()*r.length),n.push(r[e]);return n}}]),t}()},148:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},149:function(t,e,n){var o=n(17),i="["+n(148)+"]",a=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},150:function(t,e,n){n(1)({target:"Array",stat:!0},{isArray:n(44)})},151:function(t,e,n){"use strict";var o=n(7),i=n(4),a=n(65),r=n(13),s=n(5),u=n(21),l=n(101),c=n(32),f=n(3),h=n(22),m=n(45).f,d=n(20).f,p=n(8).f,g=n(149).trim,y=i.Number,b=y.prototype,v="Number"==u(h(b)),w=function(t){var e,n,o,i,a,r,s,u,l=c(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=g(l)).charCodeAt(0))||45===e){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+l}for(r=(a=l.slice(2)).length,s=0;s<r;s++)if((u=a.charCodeAt(s))<48||u>i)return NaN;return parseInt(a,o)}return+l};if(a("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(v?f((function(){b.valueOf.call(n)})):"Number"!=u(n))?l(new y(w(e)),n,I):w(e)},N=o?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;N.length>_;_++)s(y,x=N[_])&&!s(I,x)&&p(I,x,d(y,x));I.prototype=b,b.constructor=I,r(i,"Number",I)}},152:function(t,e,n){"use strict";n.r(e);n(150),n(151);var o=n(147),i=n(158),a={name:"Demo",components:{VueFlux:i.VueFlux,FluxPreloader:i.FluxPreloader,FluxCaption:i.FluxCaption,FluxControls:i.FluxControls,FluxPagination:i.FluxPagination,FluxIndex:i.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?o.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var t=this.images?this.images.length:this.numImages;return o.a.generate(t)}return[]}},methods:{transitionStart:function(t){this.$emit("transition-start",t)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},r=n(30),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-flux",{attrs:{options:t.options,images:t.finalImages,transitions:t.transitions,captions:t.finalCaptions},on:{"transition-start":t.transitionStart,"transition-cancel":t.transitionCancel,"transition-end":t.transitionEnd},scopedSlots:t._u([t.complements.preloader?{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}:null,t.complements.caption?{key:"caption",fn:function(){return[n("flux-caption")]},proxy:!0}:null,t.complements.controls?{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}:null,t.complements.pagination?{key:"pagination",fn:function(){return[n("flux-pagination")]},proxy:!0}:null,t.complements.index?{key:"index",fn:function(){return[n("flux-index")]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);e.default=s.exports},157:function(t,e,n){"use strict";n.r(e),n.d(e,"easings",(function(){return o})),n.d(e,"perspectiveOrigins",(function(){return i})),n.d(e,"minTileDuration",(function(){return a})),n.d(e,"maxTileDuration",(function(){return r})),n.d(e,"minTileDelay",(function(){return s})),n.d(e,"maxTileDelay",(function(){return u})),n.d(e,"minDuration",(function(){return l})),n.d(e,"maxDuration",(function(){return c}));var o=["ease","linear","ease-in","ease-out","ease-in-out"],i={lt:"left top",lc:"left center",lb:"left bottom",ct:"center top",cc:"center center",cb:"center bottom",rt:"right top",rc:"right center",rb:"right bottom"},a=50,r=4e3,s=10,u=3e3,l=100,c=4e3},231:function(t,e,n){"use strict";n.r(e);var o=n(152),i=n(160),a=n.n(i),r=n(157),s=n(159),u={name:"demos-transitions-fall",components:{Demo:o.default,VueSlider:a.a},data:function(){return{constants:r,totalDuration:1600,easing:"ease-in",options:{autohideTime:0,path:"../../img/slides/"},complements:{preloader:!0,controls:!0}}},computed:{transitions:function(){return[{name:"fall",options:{totalDuration:this.totalDuration,easing:this.easing}}]},source:function(){var t="";return t+="const transitions = [{\n",t+="   name: 'fall',\n",t+="   options: {\n",t+="      totalDuration: "+this.totalDuration+",\n",t+="      easing: '"+this.easing+"',\n",t+="   }\n",t+="}]",s.highlight(t,s.languages.javascript,"javascript")}}},l=n(30),c=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("demo",{attrs:{options:t.options,transitions:t.transitions,complements:t.complements,numImages:12}}),t._v(" "),n("h3",[t._v("Options")]),t._v(" "),n("label",[n("span",[t._v("Total duration:")]),t._v(" "),n("vue-slider",{attrs:{min:t.constants.minDuration,max:t.constants.maxDuration,tooltip:"always"},model:{value:t.totalDuration,callback:function(e){t.totalDuration=t._n(e)},expression:"totalDuration"}})],1),t._v(" "),n("label",[n("span",[t._v("Easing:")]),t._v(" "),n("vue-slider",{attrs:{data:t.constants.easings,marks:!0,tooltip:"always"},model:{value:t.easing,callback:function(e){t.easing=t._n(e)},expression:"easing"}})],1),t._v(" "),n("h3",[t._v("Source")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{staticClass:"language-js",domProps:{innerHTML:t._s(t.source)}})])],1)}),[],!1,null,null,null);e.default=c.exports}}]);