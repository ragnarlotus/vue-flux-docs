(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{148:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));n(155),n(101),n(14),n(154),n(156);var i=n(18),o=n(31),r=function(){function t(){Object(i.a)(this,t)}return Object(o.a)(t,null,[{key:"generate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=[],n=1;n<=60;n++)e.push(n.toString().padStart(2,"0")+".jpg");for(var i,o,r=[],a=1;a<=t;a++)i=Math.floor(Math.random()*e.length),o=e.splice(i,1)[0],r.push(o);return r.length>1?r:r[0]}}]),t}(),a=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],s=function(){function t(){Object(i.a)(this,t)}return Object(o.a)(t,null,[{key:"generate",value:function(t){for(var e,n=[],i=1;i<=t;i++)e=Math.floor(Math.random()*a.length),n.push(a[e]);return n}}]),t}()},164:function(t,e,n){"use strict";var i=n(1),o=n(3),r=n(44),a=n(6),s=n(16),u=n(15),l=n(66),h=n(103),c=n(46),d=n(2),f=n(106),m=d("isConcatSpreadable"),g=f>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),v=c("concat"),p=function(t){if(!a(t))return!1;var e=t[m];return void 0!==e?!!e:r(t)};i({target:"Array",proto:!0,forced:!g||!v},{concat:function(t){var e,n,i,o,r,a=s(this),c=h(a,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?a:arguments[e],p(r)){if(d+(o=u(r.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,d++)n in r&&l(c,d,r[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(c,d++,r)}return c.length=d,c}})},208:function(t,e,n){n(1)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},209:function(t,e,n){var i=n(1),o=n(4),r=n(105),a=[].slice,s=function(t){return function(e,n){var i=arguments.length>2,o=i?a.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:s(o.setTimeout),setInterval:s(o.setInterval)})},222:function(t,e,n){"use strict";n.r(e);n(164),n(208),n(101),n(209);var i=n(160),o=n.n(i),r=n(148),a=n(158),s=n(159),u={name:"demos-flux-transition",components:{VueSlider:o.a,FluxTransition:a.FluxTransition},data:function(){return{transitionStart:void 0,duration:0,timing:0,timer:void 0,enabled:!0,size:{width:640,height:360},selectedTransition:"blinds2d",transitions:["blinds2d","blinds3d","blocks1","blocks2","book","camera","concentric","cube","explode","fade","fall","kenburn","round1","round2","slide","swipe","warp","waterfall","wave","zip"],from:void 0,to:void 0}},computed:{source:function(){var t="";return t+="<flux-transition\n",t+='   :size="{ width: '.concat(this.size.width,", height: ").concat(this.size.height,' }"\n'),t+='   transition="'.concat(this.selectedTransition,'"\n'),t+='   from="url"\n',t+='   to="url"\n',t+="/>\n",s.highlight(t,s.languages.html,"html")}},created:function(){var t=this,e=r.b.generate(2),n="../img/slides/";this.from=n+e[0],this.to=n+e[1],this.timer=setInterval((function(){t.updateTiming()}),80)},beforeDestroy:function(){clearInterval(this.timer)},methods:{updateTiming:function(){this.transitionStart?this.timing=this.transitionStart+this.duration-Date.now():this.timing=0},run:function(){var t=this.$refs.transition;this.transitionStart=Date.now(),this.duration=t.getDuration(),this.$refs.transition.start()},end:function(){this.transitionStart=void 0},reset:function(){var t=this;this.enabled=!1,this.$nextTick((function(){t.enabled=!0}))}}},l=n(30),h=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo demo-flux-transition"},[t.enabled?n("flux-transition",{ref:"transition",attrs:{size:t.size,transition:t.selectedTransition,from:t.from,to:t.to},on:{end:function(e){return t.end()}}}):t._e(),t._v(" "),n("span",[t._v("Timing: "+t._s(t.timing))]),t._v(" "),n("h3",[t._v("Playground")]),t._v(" "),n("label",[n("span",[t._v("Width:")]),t._v(" "),n("vue-slider",{attrs:{min:100,max:640,tooltip:"always"},model:{value:t.size.width,callback:function(e){t.$set(t.size,"width",t._n(e))},expression:"size.width"}})],1),t._v(" "),n("label",[n("span",[t._v("Height:")]),t._v(" "),n("vue-slider",{attrs:{min:100,max:640,tooltip:"always"},model:{value:t.size.height,callback:function(e){t.$set(t.size,"height",t._n(e))},expression:"size.height"}})],1),t._v(" "),n("label",[t._v("\n\t\tTransition:\n\t\t"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedTransition,expression:"selectedTransition"}],staticStyle:{"margin-left":"6px"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedTransition=e.target.multiple?n:n[0]},function(e){return t.reset()}]}},t._l(t.transitions,(function(e,i){return n("option",{key:"transition"+i},[t._v(t._s(e))])})),0)]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.run()}}},[t._v("Run")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.reset()}}},[t._v("Reset")]),t._v(" "),n("h3",[t._v("Source")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{staticClass:"language-html",domProps:{innerHTML:t._s(t.source)}})])],1)}),[],!1,null,null,null);e.default=h.exports}}]);