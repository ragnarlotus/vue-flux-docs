(window.webpackJsonp=window.webpackJsonp||[]).push([[30,43],{12:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}));n(17),n(18),n(19);var o=n(20),i=n(21),a=function(){function t(){Object(o.a)(this,t)}return Object(i.a)(t,null,[{key:"generate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=[],n=1;n<=60;n++)e.push(n.toString().padStart(2,"0")+".jpg");for(var o,i,a=[],s=1;s<=t;s++)o=Math.floor(Math.random()*e.length),i=e.splice(o,1)[0],a.push(i);return a.length>1?a:a[0]}}]),t}(),s=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],r=function(){function t(){Object(o.a)(this,t)}return Object(i.a)(t,null,[{key:"generate",value:function(t){for(var e,n=[],o=1;o<=t;o++)e=Math.floor(Math.random()*s.length),n.push(s[e]);return n}}]),t}()},13:function(t,e,n){"use strict";n.r(e);n(30),n(34);var o=n(12),i=n(22),a={name:"Demo",components:{VueFlux:i.VueFlux,FluxPreloader:i.FluxPreloader,FluxCaption:i.FluxCaption,FluxControls:i.FluxControls,FluxPagination:i.FluxPagination,FluxIndex:i.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?o.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var t=this.images?this.images.length:this.numImages;return o.a.generate(t)}return[]}},methods:{transitionStart:function(t){this.$emit("transition-start",t)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},s=n(1),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-flux",{attrs:{options:t.options,images:t.finalImages,transitions:t.transitions,captions:t.finalCaptions},on:{"transition-start":t.transitionStart,"transition-cancel":t.transitionCancel,"transition-end":t.transitionEnd},scopedSlots:t._u([t.complements.preloader?{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}:null,t.complements.caption?{key:"caption",fn:function(){return[n("flux-caption")]},proxy:!0}:null,t.complements.controls?{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}:null,t.complements.pagination?{key:"pagination",fn:function(){return[n("flux-pagination")]},proxy:!0}:null,t.complements.index?{key:"index",fn:function(){return[n("flux-index")]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);e.default=r.exports},16:function(t,e,n){"use strict";n.r(e),n.d(e,"easings",(function(){return o})),n.d(e,"perspectiveOrigins",(function(){return i})),n.d(e,"minTileDuration",(function(){return a})),n.d(e,"maxTileDuration",(function(){return s})),n.d(e,"minTileDelay",(function(){return r})),n.d(e,"maxTileDelay",(function(){return l})),n.d(e,"minDuration",(function(){return u})),n.d(e,"maxDuration",(function(){return c}));var o=["ease","linear","ease-in","ease-out","ease-in-out"],i={lt:"left top",lc:"left center",lb:"left bottom",ct:"center top",cc:"center center",cb:"center bottom",rt:"right top",rc:"right center",rb:"right bottom"},a=50,s=4e3,r=10,l=3e3,u=100,c=4e3},270:function(t,e,n){"use strict";n.r(e);var o=n(13),i=n(41),a=n.n(i),s=n(16),r=n(26),l={name:"demos-transitions-round2",components:{Demo:o.default,VueSlider:a.a},data:function(){return{constants:s,rows:0,cols:13,rotateX:-540,tileDuration:800,tileDelay:100,easing:"ease-out",options:{autohideTime:0,path:"../../img/slides/"},complements:{preloader:!0,controls:!0}}},computed:{transitions:function(){return[{name:"round2",options:{rows:this.rows,cols:this.cols,rotateX:this.rotateX,tileDuration:this.tileDuration,tileDelay:this.tileDelay,easing:this.easing}}]},source:function(){var t="";return t+="const transitions = [{\n",t+="   name: 'round2',\n",t+="   options: {\n",t+="      rows: "+this.rows+",\n",t+="      cols: "+this.cols+",\n",t+="      rotateX: "+this.rotateX+",\n",t+="      tileDuration: "+this.tileDuration+",\n",t+="      tileDelay: "+this.tileDelay+",\n",t+="      easing: '"+this.easing+"',\n",t+="   }\n",t+="}]",r.highlight(t,r.languages.javascript,"javascript")}}},u=n(1),c=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("demo",{attrs:{options:t.options,transitions:t.transitions,complements:t.complements,numImages:12}}),t._v(" "),n("h3",[t._v("Options")]),t._v(" "),n("label",[n("span",[t._v("Rows:")]),t._v(" "),n("vue-slider",{attrs:{min:0,max:20,tooltip:"always"},model:{value:t.rows,callback:function(e){t.rows=t._n(e)},expression:"rows"}})],1),t._v(" "),n("label",[n("span",[t._v("Columns:")]),t._v(" "),n("vue-slider",{attrs:{min:2,max:20,tooltip:"always"},model:{value:t.cols,callback:function(e){t.cols=t._n(e)},expression:"cols"}})],1),t._v(" "),n("label",[n("span",[t._v("Rotation X:")]),t._v(" "),n("vue-slider",{attrs:{min:-1e3,max:1e3,tooltip:"always"},model:{value:t.rotateX,callback:function(e){t.rotateX=t._n(e)},expression:"rotateX"}})],1),t._v(" "),n("label",[n("span",[t._v("Tile duration:")]),t._v(" "),n("vue-slider",{attrs:{min:t.constants.minTileDuration,max:t.constants.maxTileDuration,tooltip:"always"},model:{value:t.tileDuration,callback:function(e){t.tileDuration=t._n(e)},expression:"tileDuration"}})],1),t._v(" "),n("label",[n("span",[t._v("Tile delay:")]),t._v(" "),n("vue-slider",{attrs:{min:t.constants.minTileDelay,max:t.constants.maxTileDelay,tooltip:"always"},model:{value:t.tileDelay,callback:function(e){t.tileDelay=t._n(e)},expression:"tileDelay"}})],1),t._v(" "),n("label",[n("span",[t._v("Easing:")]),t._v(" "),n("vue-slider",{attrs:{data:t.constants.easings,marks:!0,tooltip:"always"},model:{value:t.easing,callback:function(e){t.easing=t._n(e)},expression:"easing"}})],1),t._v(" "),n("h3",[t._v("Source")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{staticClass:"language-js",domProps:{innerHTML:t._s(t.source)}})])],1)}),[],!1,null,null,null);e.default=c.exports}}]);