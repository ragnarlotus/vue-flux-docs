(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{228:function(t,e,n){var o=n(1);o(o.S,"Array",{isArray:n(135)})},229:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return s});n(235),n(236),n(237);var o=n(23),i=n(42),r=function(){function t(){Object(o.a)(this,t)}return Object(i.a)(t,null,[{key:"generate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=[],n=1;n<=60;n++)e.push(n.toString().padStart(2,"0")+".jpg");for(var o,i,r=[],a=1;a<=t;a++)o=Math.floor(Math.random()*e.length),i=e.splice(o,1)[0],r.push(i);return r.length>1?r:r[0]}}]),t}(),a=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],s=function(){function t(){Object(o.a)(this,t)}return Object(i.a)(t,null,[{key:"generate",value:function(t){for(var e,n=[],o=1;o<=t;o++)e=Math.floor(Math.random()*a.length),n.push(a[e]);return n}}]),t}()},231:function(t,e,n){"use strict";var o=n(7),i=n(21),r=n(40),a=n(137),s=n(89),u=n(16),l=n(136).f,c=n(90).f,f=n(13).f,h=n(232).trim,d=o.Number,p=d,m=d.prototype,g="Number"==r(n(57)(m)),y="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,o,i,r=(e=y?e.trim():h(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+e}for(var a,u=e.slice(2),l=0,c=u.length;l<c;l++)if((a=u.charCodeAt(l))<48||a>i)return NaN;return parseInt(u,o)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(g?u(function(){m.valueOf.call(n)}):"Number"!=r(n))?a(new p(b(e)),n,d):b(e)};for(var v,w=n(12)?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)i(p,v=w[x])&&!i(d,v)&&f(d,v,c(p,v));d.prototype=m,m.constructor=d,n(20)(o,"Number",d)}},232:function(t,e,n){var o=n(1),i=n(28),r=n(16),a=n(233),s="["+a+"]",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),c=function(t,e,n){var i={},s=r(function(){return!!a[t]()||"​"!="​"[t]()}),u=i[t]=s?e(f):a[t];n&&(i[n]=u),o(o.P+o.F*s,"String",i)},f=c.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=c},233:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},234:function(t,e,n){"use strict";n.r(e);n(228),n(231);var o=n(229),i=n(238),r={name:"Demo",components:{VueFlux:i.VueFlux,FluxPreloader:i.FluxPreloader,FluxCaption:i.FluxCaption,FluxControls:i.FluxControls,FluxPagination:i.FluxPagination,FluxIndex:i.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?o.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var t=this.images?this.images.length:this.numImages;return o.a.generate(t)}return[]}},methods:{transitionStart:function(t){this.$emit("transition-start",t)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},a=n(39),s=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-flux",{attrs:{options:t.options,images:t.finalImages,transitions:t.transitions,captions:t.finalCaptions},on:{"transition-start":t.transitionStart,"transition-cancel":t.transitionCancel,"transition-end":t.transitionEnd},scopedSlots:t._u([t.complements.preloader?{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}:null,t.complements.caption?{key:"caption",fn:function(){return[n("flux-caption")]},proxy:!0}:null,t.complements.controls?{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}:null,t.complements.pagination?{key:"pagination",fn:function(){return[n("flux-pagination")]},proxy:!0}:null,t.complements.index?{key:"index",fn:function(){return[n("flux-index")]},proxy:!0}:null],null,!0)})},[],!1,null,null,null);e.default=s.exports},249:function(t,e,n){},273:function(t,e,n){"use strict";var o=n(249);n.n(o).a},278:function(t,e,n){"use strict";n.r(e);var o={name:"demos-index-1",components:{Demo:n(234).default},data:function(){return{slider:void 0,currentTransition:void 0,options:{autoplay:!0,path:"../img/slides/",delay:3e3},transitions:["fade","kenburn","swipe","slide","waterfall","zip","blinds2d","blocks1","blocks2","concentric","warp","camera","cube","book","fall","wave","blinds3d","round1","round2","explode"],complements:{preloader:!0,controls:!0}}},mounted:function(){this.slider=this.$refs.demo.$children[0]},methods:{getTransitionClass:function(t){return t===this.currentTransition?"active":""},runTransition:function(t){this.slider.showImage("next",t)},updateCurrentTransition:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.currentTransition=t}}},i=(n(273),n(39)),r=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("demo",{ref:"demo",attrs:{options:t.options,transitions:t.transitions,captions:"fortune",complements:t.complements,numImages:12},on:{"transition-start":t.updateCurrentTransition,"transition-cancel":t.updateCurrentTransition,"transition-end":t.updateCurrentTransition}}),t._v(" "),n("p",[t._v("Transitions: \n\t\t"),t._l(t.transitions,function(e){return n("button",{class:t.getTransitionClass(e),attrs:{type:"button"},on:{click:function(n){return t.runTransition(e)}}},[t._v("\n\n\t\t\t"+t._s(e)+"\n\t\t")])})],2)],1)},[],!1,null,"733f7f42",null);e.default=r.exports}}]);