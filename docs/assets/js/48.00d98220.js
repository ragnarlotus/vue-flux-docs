(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{277:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return l}));i(285),i(138),i(20),i(284),i(286);var a=i(21),o=i(36),n=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"generate",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],i=1;i<=60;i++)t.push(i.toString().padStart(2,"0")+".jpg");for(var a,o,n=[],s=1;s<=e;s++)a=Math.floor(Math.random()*t.length),o=t.splice(a,1)[0],n.push(o);return n.length>1?n:n[0]}}]),e}(),s=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],l=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"generate",value:function(e){for(var t,i=[],a=1;a<=e;a++)t=Math.floor(Math.random()*s.length),i.push(s[t]);return i}}]),e}()},349:function(e,t,i){"use strict";i.r(t);i(143);var a=i(290),o=i.n(a),n=i(277),s=i(288),l=i(289),r={name:"demos-flux-image",components:{VueSlider:o.a,FluxImage:s.FluxImage},data:function(){return{color:"#333333",image:void 0,size:{width:640,height:360},viewSizeEnabled:!1,viewSize:{width:640,height:360},offsetEnabled:!1,offset:{top:0,left:0}}},computed:{source:function(){var e="";return e+="<flux-image\n",e+='   color="'.concat(this.color,'"\n'),e+='   image="url"\n',e+='   :size="{ width: '.concat(this.size.width,", height: ").concat(this.size.height,' }"\n'),this.viewSizeEnabled&&(e+='   :view-size="{ width: '.concat(this.viewSize.width,", height: ").concat(this.viewSize.height,' }"\n')),this.offsetEnabled&&(e+='   :offset="{ top: '.concat(this.offset.top,", left: ").concat(this.offset.left,' }"\n')),e+="/>\n",l.highlight(e,l.languages.html,"html")}},created:function(){this.image="../img/slides/"+n.b.generate(1)}},h=i(35),u=Object(h.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo demo-flux-image"},[i("flux-image",{attrs:{color:e.color,image:e.image,size:e.size,"view-size":e.viewSizeEnabled?e.viewSize:void 0,offset:e.offsetEnabled?e.offset:void 0}}),e._v(" "),i("h3",[e._v("Playground")]),e._v(" "),i("label",[i("span",[e._v("Size width:")]),e._v(" "),i("vue-slider",{attrs:{min:100,max:640,tooltip:"always"},model:{value:e.size.width,callback:function(t){e.$set(e.size,"width",e._n(t))},expression:"size.width"}})],1),e._v(" "),i("label",[i("span",[e._v("Size height:")]),e._v(" "),i("vue-slider",{attrs:{min:56,max:360,tooltip:"always"},model:{value:e.size.height,callback:function(t){e.$set(e.size,"height",e._n(t))},expression:"size.height"}})],1),e._v(" "),i("label",{staticClass:"checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.viewSizeEnabled,expression:"viewSizeEnabled"}],attrs:{type:"checkbox"},domProps:{value:!0,checked:Array.isArray(e.viewSizeEnabled)?e._i(e.viewSizeEnabled,!0)>-1:e.viewSizeEnabled},on:{change:function(t){var i=e.viewSizeEnabled,a=t.target,o=!!a.checked;if(Array.isArray(i)){var n=e._i(i,!0);a.checked?n<0&&(e.viewSizeEnabled=i.concat([!0])):n>-1&&(e.viewSizeEnabled=i.slice(0,n).concat(i.slice(n+1)))}else e.viewSizeEnabled=o}}}),e._v(" View size enabled\n\t")]),e._v(" "),i("label",[i("span",[e._v("View size width:")]),e._v(" "),i("vue-slider",{attrs:{min:100,max:640,tooltip:"always"},model:{value:e.viewSize.width,callback:function(t){e.$set(e.viewSize,"width",e._n(t))},expression:"viewSize.width"}})],1),e._v(" "),i("label",[i("span",[e._v("View size height:")]),e._v(" "),i("vue-slider",{attrs:{min:56,max:360,tooltip:"always"},model:{value:e.viewSize.height,callback:function(t){e.$set(e.viewSize,"height",e._n(t))},expression:"viewSize.height"}})],1),e._v(" "),i("label",{staticClass:"checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.offsetEnabled,expression:"offsetEnabled"}],attrs:{type:"checkbox"},domProps:{value:!0,checked:Array.isArray(e.offsetEnabled)?e._i(e.offsetEnabled,!0)>-1:e.offsetEnabled},on:{change:function(t){var i=e.offsetEnabled,a=t.target,o=!!a.checked;if(Array.isArray(i)){var n=e._i(i,!0);a.checked?n<0&&(e.offsetEnabled=i.concat([!0])):n>-1&&(e.offsetEnabled=i.slice(0,n).concat(i.slice(n+1)))}else e.offsetEnabled=o}}}),e._v(" Offset enabled\n\t")]),e._v(" "),i("label",[i("span",[e._v("Offset top:")]),e._v(" "),i("vue-slider",{attrs:{min:-320,max:320,tooltip:"always"},model:{value:e.offset.top,callback:function(t){e.$set(e.offset,"top",e._n(t))},expression:"offset.top"}})],1),e._v(" "),i("label",[i("span",[e._v("Offset left:")]),e._v(" "),i("vue-slider",{attrs:{min:-320,max:320,tooltip:"always"},model:{value:e.offset.left,callback:function(t){e.$set(e.offset,"left",e._n(t))},expression:"offset.left"}})],1),e._v(" "),i("h3",[e._v("Source")]),e._v(" "),i("div",{staticClass:"language-html extra-class"},[i("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.source)}})])],1)}),[],!1,null,null,null);t.default=u.exports}}]);