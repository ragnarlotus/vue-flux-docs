(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{306:function(e,t,o){"use strict";o.d(t,"b",(function(){return s})),o.d(t,"a",(function(){return r}));o(312),o(69),o(10),o(97),o(313);var i=o(25),n=o(46),s=function(){function e(){Object(i.a)(this,e)}return Object(n.a)(e,null,[{key:"generate",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],o=1;o<=60;o++)t.push(o.toString().padStart(2,"0")+".jpg");for(var i,n,s=[],a=1;a<=e;a++)i=Math.floor(Math.random()*t.length),n=t.splice(i,1)[0],s.push(n);return s.length>1?s:s[0]}}]),e}(),a=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],r=function(){function e(){Object(i.a)(this,e)}return Object(n.a)(e,null,[{key:"generate",value:function(e){for(var t,o=[],i=1;i<=e;i++)t=Math.floor(Math.random()*a.length),o.push(a[t]);return o}}]),e}()},334:function(e,t,o){},361:function(e,t,o){"use strict";var i=o(334);o.n(i).a},373:function(e,t,o){"use strict";o.r(t);o(169);var i=o(317),n=o.n(i),s=o(306),a=o(315),r=o(316),l={name:"demos-flux-grid",components:{VueSlider:n.a,FluxGrid:a.FluxGrid},data:function(){return{image:void 0,size:{width:640,height:360},rows:10,cols:10}},computed:{source:function(){var e="";return e+="<flux-grid\n",e+='   image="url"\n',e+='   :size="{ width: '.concat(this.size.width,", height: ").concat(this.size.height,' }"\n'),e+='   :rows="'.concat(this.rows,'"\n'),e+='   :cols="'.concat(this.cols,'"\n'),e+="/>\n",r.highlight(e,r.languages.html,"html")}},created:function(){this.image="../img/slides/"+s.b.generate(1)}},u=(o(361),o(45)),h=Object(u.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"demo demo-flux-grid"},[o("flux-grid",{attrs:{image:e.image,size:e.size,rows:e.rows,cols:e.cols}}),e._v(" "),o("h3",[e._v("Playground")]),e._v(" "),o("label",[o("span",[e._v("Width:")]),e._v(" "),o("vue-slider",{attrs:{min:100,max:640,tooltip:"always"},model:{value:e.size.width,callback:function(t){e.$set(e.size,"width",e._n(t))},expression:"size.width"}})],1),e._v(" "),o("label",[o("span",[e._v("Height:")]),e._v(" "),o("vue-slider",{attrs:{min:100,max:640,tooltip:"always"},model:{value:e.size.height,callback:function(t){e.$set(e.size,"height",e._n(t))},expression:"size.height"}})],1),e._v(" "),o("label",[o("span",[e._v("Rows:")]),e._v(" "),o("vue-slider",{attrs:{min:1,max:20,tooltip:"always"},model:{value:e.rows,callback:function(t){e.rows=e._n(t)},expression:"rows"}})],1),e._v(" "),o("label",[o("span",[e._v("Cols:")]),e._v(" "),o("vue-slider",{attrs:{min:1,max:20,tooltip:"always"},model:{value:e.cols,callback:function(t){e.cols=e._n(t)},expression:"cols"}})],1),e._v(" "),o("h3",[e._v("Source")]),e._v(" "),o("div",{staticClass:"language-html extra-class"},[o("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.source)}})])],1)}),[],!1,null,null,null);t.default=h.exports}}]);