(window.webpackJsonp=window.webpackJsonp||[]).push([[18,46],{12:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));n(20),n(21),n(22);var a=n(23),i=n(24),r=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,null,[{key:"generate",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],n=1;n<=60;n++)t.push(n.toString().padStart(2,"0")+".jpg");for(var a,i,r=[],s=1;s<=e;s++)a=Math.floor(Math.random()*t.length),i=t.splice(a,1)[0],r.push(i);return r.length>1?r:r[0]}}]),e}(),s=["The early bird gets the worm, but the second mouse gets the cheese","Be on the alert to recognize your prime at whatever time of your life it may occur","Your road to glory will be rocky, but fulfilling","Courage is not simply one of the virtues, but the form of every virtue at the testing point","Patience is your alley at the moment, don’t worry!","Nothing is impossible to a willing heart","Don’t worry about money, the best things in life are free","Don’t pursue happiness – create it","Courage is not the absence of fear; it is the conquest of it","Nothing is so much to be feared as fear","All things are difficult before they are easy","The real kindness comes from within you","A ship in harbor is safe, but that’s not why ships are built","You don’t need strength to let go of something, what you really need is understanding","If you want the rainbow, you have to tolerate the rain","Fear is interest paid on a debt you may not owe","Hardly anyone knows how much is gained by ignoring the future","The wise man is the one that makes you think that he is dumb","The usefulness of a cup is in its emptiness","He who throws mud loses ground","Success lies in the hands of those who wants it","To avoid criticism, do nothing, say nothing, be nothing","One that would have the fruit must climb the tree","It takes less time to do a thing right than it does to explain why you did it wrong","Big journeys begin with a single step","Of all our human resources, the most precious is the desire to improve","Do the thing you fear and the death of fear is certain","You never show your vulnerability, you are always self assured and confident","People learn little from success, but much from failure","Be not afraid of growing slowly, be afraid only of standing still","We must always have old memories and young hopes","A person who won’t read has no advantage over a person who can’t read","He who expects no gratitude shall never be disappointed","I hear and I forget, I see and I remember, I do and I understand","The best way to get rid of an enemy is to make a friend","It’s amazing how much good you can do if you don’t care who gets the credit","Never forget that a half truth is a whole lie","Happiness isn’t an outside job, it’s an inside job","If you do no run your subconscious mind yourself, someone else will","Yes by calling full, you created emptiness"],o=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,null,[{key:"generate",value:function(e){for(var t,n=[],a=1;a<=e;a++)t=Math.floor(Math.random()*s.length),n.push(s[t]);return n}}]),e}()},15:function(e,t,n){"use strict";n.r(t);n(39),n(42);var a=n(12),i=n(30),r={name:"Demo",components:{VueFlux:i.VueFlux,FluxPreloader:i.FluxPreloader,FluxCaption:i.FluxCaption,FluxControls:i.FluxControls,FluxPagination:i.FluxPagination,FluxIndex:i.FluxIndex},props:{options:Object,transitions:{type:Array,required:!0},images:Array,numImages:{type:Number,default:8},captions:[String,Array],complements:{type:Object,default:function(){return{}}}},computed:{finalImages:function(){return Array.isArray(this.images)?this.images:this.numImages?a.b.generate(this.numImages):[]},finalCaptions:function(){if(Array.isArray(this.captions))return this.captions;if("fortune"===this.captions){var e=this.images?this.images.length:this.numImages;return a.a.generate(e)}return[]}},methods:{transitionStart:function(e){this.$emit("transition-start",e)},transitionCancel:function(){this.$emit("transition-cancel")},transitionEnd:function(){this.$emit("transition-end")}}},s=n(1),o=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-flux",{attrs:{options:e.options,images:e.finalImages,transitions:e.transitions,captions:e.finalCaptions},on:{"transition-start":e.transitionStart,"transition-cancel":e.transitionCancel,"transition-end":e.transitionEnd},scopedSlots:e._u([e.complements.preloader?{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}:null,e.complements.caption?{key:"caption",fn:function(){return[n("flux-caption")]},proxy:!0}:null,e.complements.controls?{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}:null,e.complements.pagination?{key:"pagination",fn:function(){return[n("flux-pagination")]},proxy:!0}:null,e.complements.index?{key:"index",fn:function(){return[n("flux-index")]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);t.default=o.exports},167:function(e,t,n){},221:function(e,t,n){"use strict";var a=n(167);n.n(a).a},242:function(e,t,n){"use strict";n.r(t);var a=n(12),i=n(30),r=n(15),s=n(33),o={name:"demos-vue-flux-flux-pagination",components:{Demo:r.default,VueFlux:i.VueFlux,FluxPreloader:i.FluxPreloader,FluxPagination:i.FluxPagination,FluxControls:i.FluxControls},data:function(){return{numImages:3,options:{autohideTime:0,path:"../../img/slides/"},transitions:["blinds3d","blocks2","book","cube","warp","wave"],complements:{pagination:!0,controls:!0,preloader:!0}}},computed:{images:function(){return a.b.generate(this.numImages)},captions:function(){return a.a.generate(this.numImages)},sourceHtml1:function(){return"<vue-flux\n",'   :images="images"\n','   :transitions="transitions"\n','   :captions="captions"\n',">\n","   <template v-slot:preloader>\n","      <flux-preloader />\n","   </template>\n\n","   <template v-slot:pagination>\n","      <flux-pagination />\n","   </template>\n\n","   <template v-slot:controls>\n","      <flux-controls />\n","   </template>\n","</vue-flux>",s.highlight('<vue-flux\n   :images="images"\n   :transitions="transitions"\n   :captions="captions"\n>\n   <template v-slot:preloader>\n      <flux-preloader />\n   </template>\n\n   <template v-slot:pagination>\n      <flux-pagination />\n   </template>\n\n   <template v-slot:controls>\n      <flux-controls />\n   </template>\n</vue-flux>',s.languages.html)},sourceJs1:function(){var e="";return e+="...\n",e+="data: () => ({\n",e+="   images: [ 'image-url-1', 'image-url-2', 'image-url-3' ],\n",e+="   transitions: [\n",e+="      '"+this.transitions.join("',\n      '")+"',\n",e+="   ],\n",e+="   captions: [\n",e+="      '"+this.captions.join("',\n      '")+"',\n",e+="   ],\n",e+="}),\n",e+="...\n",s.highlight(e,s.languages.javascript)},sourceHtml2:function(){return"<vue-flux\n",'   :images="images"\n','   :transitions="transitions"\n','   :captions="captions"\n',">\n","   <template v-slot:preloader>\n","      <flux-preloader />\n","   </template>\n\n","   <template v-slot:pagination>\n",'      <flux-pagination v-slot="itemProps">\n','         <div"\n',"            :class=\"itemProps.active? 'current' : ''\"\n",'            @click="itemProps.onClick(itemProps.item.index)"\n','            :title="itemProps.item.title"\n',"         />{{ itemProps.item.index + 1 }}</div>\n","      </flux-pagination>\n","   </template>\n\n","   <template v-slot:controls>\n","      <flux-controls />\n","   </template>\n","</vue-flux>",s.highlight('<vue-flux\n   :images="images"\n   :transitions="transitions"\n   :captions="captions"\n>\n   <template v-slot:preloader>\n      <flux-preloader />\n   </template>\n\n   <template v-slot:pagination>\n      <flux-pagination v-slot="itemProps">\n         <div"\n            :class="itemProps.active? \'current\' : \'\'"\n            @click="itemProps.onClick(itemProps.item.index)"\n            :title="itemProps.item.title"\n         />{{ itemProps.item.index + 1 }}</div>\n      </flux-pagination>\n   </template>\n\n   <template v-slot:controls>\n      <flux-controls />\n   </template>\n</vue-flux>',s.languages.html)},sourceJs2:function(){var e="";return e+="...\n",e+="data: () => ({\n",e+="   images: [ 'image-url-1', 'image-url-2', 'image-url-3' ],\n",e+="   transitions: [\n",e+="      '"+this.transitions.join("',\n      '")+"',\n",e+="   ],\n",e+="   captions: [\n",e+="      '"+this.captions.join("',\n      '")+"',\n",e+="   ],\n",e+="}),\n",e+="...\n",s.highlight(e,s.languages.javascript)},sourceScss2:function(){return".flux-pagination li {\n","   color: white;\n","   background-color: rgba(0, 0, 0, 0.8);\n","   padding: 0 8px 2px 8px;\n","   width: auto;\n","   height: auto;\n","   border-radius: 6px;\n","\n","   .current {\n","      color: yellow;\n","   }\n","}\n",s.highlight(".flux-pagination li {\n   color: white;\n   background-color: rgba(0, 0, 0, 0.8);\n   padding: 0 8px 2px 8px;\n   width: auto;\n   height: auto;\n   border-radius: 6px;\n\n   .current {\n      color: yellow;\n   }\n}\n",s.languages.css)}}},l=(n(221),n(1)),u=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Default pagination")]),e._v(" "),n("demo",{ref:"demo",attrs:{options:e.options,transitions:e.transitions,captions:e.captions,complements:e.complements,images:e.images}}),e._v(" "),n("h3",[e._v("Source")]),e._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.sourceHtml1)}})]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{staticClass:"language-js",domProps:{innerHTML:e._s(e.sourceJs1)}})]),e._v(" "),n("h2",[e._v("Custom pagination")]),e._v(" "),n("vue-flux",{staticClass:"flux-pagination-custom",attrs:{options:e.options,images:e.images,transitions:e.transitions,captions:e.captions},scopedSlots:e._u([{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0},{key:"pagination",fn:function(){return[n("flux-pagination",{scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{class:t.item.active?"current":"",attrs:{title:t.item.title},on:{click:function(e){return t.item.onClick(t.item.index)}}},[e._v(e._s(t.item.index+1))])]}}])})]},proxy:!0},{key:"controls",fn:function(){return[n("flux-controls")]},proxy:!0}])}),e._v(" "),n("h3",[e._v("Source")]),e._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.sourceHtml2)}})]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{staticClass:"language-js",domProps:{innerHTML:e._s(e.sourceJs2)}})]),e._v(" "),n("div",{staticClass:"language-scss extra-class"},[n("pre",{staticClass:"language-scss",domProps:{innerHTML:e._s(e.sourceScss2)}})])],1)}),[],!1,null,null,null);t.default=u.exports},33:function(e,t,n){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var i,r,s=a.util.type(t);switch(n=n||{},s){case"Object":if(r=a.util.objId(t),n[r])return n[r];for(var o in i={},n[r]=i,t)t.hasOwnProperty(o)&&(i[o]=e(t[o],n));return i;case"Array":return r=a.util.objId(t),n[r]?n[r]:(i=[],n[r]=i,t.forEach((function(t,a){i[a]=e(t,n)})),i);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){var r=(i=i||a.languages)[e],s={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=r[o])}var u=i[e];return i[e]=s,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,i,r){r=r||{};var s=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],i||o);var l=t[o],u=a.util.type(l);"Object"!==u||r[s(l)]?"Array"!==u||r[s(l)]||(r[s(l)]=!0,e(l,n,o,r)):(r[s(l)]=!0,e(l,n,null,r))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),a.hooks.run("before-all-elements-highlight",i);for(var r,s=0;r=i.elements[s++];)a.highlightElement(r,!0===t,i.callback)},highlightElement:function(n,i,r){var s=a.util.getLanguage(n),o=a.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var l=n.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var u={element:n,language:s,grammar:o,code:n.textContent};function c(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),r&&r.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(r&&r.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(i&&e.Worker){var g=new Worker(a.filename);g.onmessage=function(e){c(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(a.highlight(u.code,u.grammar,u.language));else c(a.util.encode(u.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,r,s,o,l){for(var u in n)if(n.hasOwnProperty(u)&&n[u]){var c=n[u];c=Array.isArray(c)?c:[c];for(var g=0;g<c.length;++g){if(l&&l==u+","+g)return;var p=c[g],d=p.inside,m=!!p.lookbehind,f=!!p.greedy,h=0,y=p.alias;if(f&&!p.pattern.global){var v=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,v+"g")}p=p.pattern||p;for(var x=r,b=s;x<t.length;b+=t[x].length,++x){var w=t[x];if(t.length>e.length)return;if(!(w instanceof i)){if(f&&x!=t.length-1){if(p.lastIndex=b,!(C=p.exec(e)))break;for(var F=C.index+(m&&C[1]?C[1].length:0),k=C.index+C[0].length,A=x,_=b,j=t.length;A<j&&(_<k||!t[A].type&&!t[A-1].greedy);++A)F>=(_+=t[A].length)&&(++x,b=_);if(t[x]instanceof i)continue;S=A-x,w=e.slice(b,_),C.index-=b}else{p.lastIndex=0;var C=p.exec(w),S=1}if(C){m&&(h=C[1]?C[1].length:0);k=(F=C.index+h)+(C=C[0].slice(h)).length;var P=w.slice(0,F),$=w.slice(k),I=[x,S];P&&(++x,b+=P.length,I.push(P));var O=new i(u,d?a.tokenize(C,d):C,y,C,f);if(I.push(O),$&&I.push($),Array.prototype.splice.apply(t,I),1!=S&&a.matchGrammar(e,t,n,x,b,!0,u+","+g),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var i,r=0;i=n[r++];)i(t)}},Token:i};function i(e,t,n,a,i){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!i}if(e.Prism=a,i.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return i.stringify(e,t)})).join("");var n={type:e.type,content:i.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,r)}a.hooks.run("wrap",n);var s=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(s?" "+s:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),i=n.language,r=n.code,s=n.immediateClose;e.postMessage(a.highlight(r,a.languages[i],i)),s&&e.close()}),!1),a):a;var r=a.util.currentScript();if(r&&(a.filename=r.src,r.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){function s(){a.manual||a.highlightAll()}var o=document.readyState;"loading"===o||"interactive"===o&&r&&r.defer?document.addEventListener("DOMContentLoaded",s):window.requestAnimationFrame?window.requestAnimationFrame(s):window.setTimeout(s,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",r)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*(?:$|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,i=e.getAttribute("data-src"),r=e,s=/\blang(?:uage)?-([\w-]+)\b/i;r&&!s.test(r.className);)r=r.parentNode;if(r&&(n=(e.className.match(s)||[,""])[1]),!n){var o=(i.match(/\.(\w+)$/)||[,""])[1];n=t[o]||o}var l=document.createElement("code");l.className="language-"+n,e.textContent="",l.textContent="Loading…",e.appendChild(l);var u=new XMLHttpRequest;u.open("GET",i,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,a.highlightElement(l),e.setAttribute("data-src-loaded","")):u.status>=400?l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:l.textContent="✖ Error: File does not exist or is empty")},u.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}}]);