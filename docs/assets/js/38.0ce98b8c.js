(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{147:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return r}));o(155),o(154),o(14),o(153),o(156);var n=o(18),i=o(31),a=function(){function e(){Object(n.a)(this,e)}return Object(i.a)(e,null,[{key:"generate",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],o=1;o<=60;o++)t.push(o.toString().padStart(2,"0")+".jpg");for(var n,i,a=[],s=1;s<=e;s++)n=Math.floor(Math.random()*t.length),i=t.splice(n,1)[0],a.push(i);return a.length>1?a:a[0]}}]),e}(),s=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],r=function(){function e(){Object(n.a)(this,e)}return Object(i.a)(e,null,[{key:"generate",value:function(e){for(var t,o=[],n=1;n<=e;n++)t=Math.floor(Math.random()*s.length),o.push(s[t]);return o}}]),e}()},164:function(e,t,o){"use strict";var n=o(1),i=o(3),a=o(44),s=o(6),r=o(16),l=o(15),u=o(66),h=o(102),c=o(46),d=o(2),f=o(105),g=d("isConcatSpreadable"),m=f>=51||!i((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),w=c("concat"),v=function(e){if(!s(e))return!1;var t=e[g];return void 0!==t?!!t:a(e)};n({target:"Array",proto:!0,forced:!m||!w},{concat:function(e){var t,o,n,i,a,s=r(this),c=h(s,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?s:arguments[t],v(a)){if(d+(i=l(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(o=0;o<i;o++,d++)o in a&&u(c,d,a[o])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(c,d++,a)}return c.length=d,c}})},179:function(e,t,o){},207:function(e,t,o){"use strict";var n=o(179);o.n(n).a},240:function(e,t,o){"use strict";o.r(t);o(164);var n=o(160),i=o.n(n),a=o(147),s=o(158),r=o(159),l={name:"demos-flux-grid",components:{VueSlider:i.a,FluxGrid:s.FluxGrid},data:function(){return{image:void 0,size:{width:640,height:360},rows:10,cols:10}},computed:{source:function(){var e="";return e+="<flux-grid\n",e+='   image="url"\n',e+='   :size="{ width: '.concat(this.size.width,", height: ").concat(this.size.height,' }"\n'),e+='   :rows="'.concat(this.rows,'"\n'),e+='   :cols="'.concat(this.cols,'"\n'),e+="/>\n",r.highlight(e,r.languages.html,"html")}},created:function(){this.image="../img/slides/"+a.b.generate(1)}},u=(o(207),o(30)),h=Object(u.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"demo demo-flux-grid"},[o("flux-grid",{attrs:{image:e.image,size:e.size,rows:e.rows,cols:e.cols}}),e._v(" "),o("h3",[e._v("Playground")]),e._v(" "),o("label",[o("span",[e._v("Width:")]),e._v(" "),o("vue-slider",{attrs:{min:100,max:640,tooltip:"always"},model:{value:e.size.width,callback:function(t){e.$set(e.size,"width",e._n(t))},expression:"size.width"}})],1),e._v(" "),o("label",[o("span",[e._v("Height:")]),e._v(" "),o("vue-slider",{attrs:{min:100,max:640,tooltip:"always"},model:{value:e.size.height,callback:function(t){e.$set(e.size,"height",e._n(t))},expression:"size.height"}})],1),e._v(" "),o("label",[o("span",[e._v("Rows:")]),e._v(" "),o("vue-slider",{attrs:{min:1,max:20,tooltip:"always"},model:{value:e.rows,callback:function(t){e.rows=e._n(t)},expression:"rows"}})],1),e._v(" "),o("label",[o("span",[e._v("Cols:")]),e._v(" "),o("vue-slider",{attrs:{min:1,max:20,tooltip:"always"},model:{value:e.cols,callback:function(t){e.cols=e._n(t)},expression:"cols"}})],1),e._v(" "),o("h3",[e._v("Source")]),e._v(" "),o("div",{staticClass:"language-html extra-class"},[o("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.source)}})])],1)}),[],!1,null,null,null);t.default=h.exports}}]);