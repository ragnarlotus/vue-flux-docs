(window.webpackJsonp=window.webpackJsonp||[]).push([[26,32],{11:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));n(15),n(16),n(17);var i=n(18),o=n(19),a=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"generate",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],n=1;n<=60;n++)t.push(n.toString().padStart(2,"0")+".jpg");for(var i,o,a=[],s=1;s<=e;s++)i=Math.floor(Math.random()*t.length),o=t.splice(i,1)[0],a.push(o);return a.length>1?a:a[0]}}]),e}(),s=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],r=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"generate",value:function(e){for(var t,n=[],i=1;i<=e;i++)t=Math.floor(Math.random()*s.length),n.push(s[t]);return n}}]),e}()},12:function(e,t,n){"use strict";n.r(t);n(14),n(21);var i=n(11),o=n(20),a={name:"Demo",components:{VueFlux:o.VueFlux,FluxPreloader:o.FluxPreloader,FluxCaption:o.FluxCaption,FluxControls:o.FluxControls,FluxPagination:o.FluxPagination,FluxIndex:o.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?i.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var e=this.images?this.images.length:this.numImages;return i.a.generate(e)}return[]}},methods:{transitionStart:function(e){this.$emit("transition-start",e)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},s=n(1),r=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-flux",{attrs:{options:e.options,images:e.finalImages,transitions:e.transitions,captions:e.finalCaptions},on:{"transition-start":e.transitionStart,"transition-cancel":e.transitionCancel,"transition-end":e.transitionEnd},scopedSlots:e._u([e.complements.preloader?{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}:null,e.complements.caption?{key:"caption",fn:function(){return[n("flux-caption")]},proxy:!0}:null,e.complements.controls?{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}:null,e.complements.pagination?{key:"pagination",fn:function(){return[n("flux-pagination")]},proxy:!0}:null,e.complements.index?{key:"index",fn:function(){return[n("flux-index")]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);t.default=r.exports},13:function(e,t,n){"use strict";n.r(t),n.d(t,"easings",(function(){return i})),n.d(t,"minTileDuration",(function(){return o})),n.d(t,"maxTileDuration",(function(){return a})),n.d(t,"minTileDelay",(function(){return s})),n.d(t,"maxTileDelay",(function(){return r})),n.d(t,"minDuration",(function(){return l})),n.d(t,"maxDuration",(function(){return u}));var i=["ease","linear","ease-in","ease-out","ease-in-out"],o=50,a=4e3,s=10,r=3e3,l=100,u=4e3},213:function(e,t,n){"use strict";n.r(t);var i=n(12),o=n(26),a=n.n(o),s=(n(27),n(13)),r=n(24),l={name:"demos-transitions-waterfall",components:{Demo:i.default,VueSlider:a.a},data:function(){return{constants:s,cols:10,tileDuration:600,tileDelay:90,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",options:{autohideTime:0,path:"../../img/slides/"},complements:{preloader:!0,controls:!0}}},computed:{transitions:function(){return[{name:"waterfall",options:{cols:this.cols,tileDuration:this.tileDuration,tileDelay:this.tileDelay,easing:this.easing}}]},source:function(){var e="";return e+="const transitions = [{\n",e+="   name: 'waterfall',\n",e+="   options: {\n",e+="      cols: "+this.cols+",\n",e+="      tileDuration: "+this.tileDuration+",\n",e+="      tileDelay: "+this.tileDelay+",\n",e+="      easing: '"+this.easing+"',\n",e+="   }\n",e+="}]",r.highlight(e,r.languages.javascript,"javascript")}}},u=n(1),c=Object(u.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("demo",{attrs:{options:e.options,transitions:e.transitions,complements:e.complements,numImages:12}}),e._v(" "),n("h3",[e._v("Options")]),e._v(" "),n("label",[n("span",[e._v("Columns:")]),e._v(" "),n("vue-slider",{attrs:{min:4,max:30,tooltip:"always"},model:{value:e.cols,callback:function(t){e.cols=e._n(t)},expression:"cols"}})],1),e._v(" "),n("label",[n("span",[e._v("Tile duration:")]),e._v(" "),n("vue-slider",{attrs:{min:e.constants.minTileDuration,max:e.constants.maxTileDuration,tooltip:"always"},model:{value:e.tileDuration,callback:function(t){e.tileDuration=e._n(t)},expression:"tileDuration"}})],1),e._v(" "),n("label",[n("span",[e._v("Tile delay:")]),e._v(" "),n("vue-slider",{attrs:{min:e.constants.minTileDelay,max:e.constants.maxTileDelay,tooltip:"always"},model:{value:e.tileDelay,callback:function(t){e.tileDelay=e._n(t)},expression:"tileDelay"}})],1),e._v(" "),n("label",[n("span",[e._v("Easing:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.easing,expression:"easing"}],attrs:{type:"text"},domProps:{value:e.easing},on:{input:function(t){t.target.composing||(e.easing=t.target.value)}}})]),e._v(" "),n("h3",[e._v("Source")]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{staticClass:"language-js",domProps:{innerHTML:e._s(e.source)}})])],1)}),[],!1,null,null,null);t.default=c.exports}}]);