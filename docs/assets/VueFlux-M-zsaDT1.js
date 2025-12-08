import{f as B,g as P,s as x,h as y,c as b,o as u,i as C,m as j,b as t,u as g,M as k,F as $,q as z,H as s,d as n,L as i,t as U,I as f,E as A}from"./app-BUcDOuik.js";import{P as d}from"./prism-CBfTwKG-.js";import{I as h,H as E,Y as M,j as H,X as I,N as R,W as N,A as W,M as D,B as K,V as O,O as G,F as X,E as Y,T as q,c as J,L as Z,_ as Q,P as _,C as ee}from"./vue-flux-BTJEro02.js";import{_ as te}from"./Demo.vue_vue_type_script_setup_true_lang-Ch53YRns.js";import"./Images-Cc17HLan.js";const le={class:"playground"},oe=["href"],ne={class:"transitions"},se=["value","onUpdate:modelValue"],ae=["href"],ie={class:"options"},re={class:"language-javascript","data-ext":"js"},ue=["innerHTML"],de={class:"language-html","data-ext":"html"},pe=["innerHTML"],xe=B({__name:"VueFlux",setup(me){const T=["Blinds3D","Blocks2","Book","Cube","Round2","Swipe","Warp","Wave"],p=P(!0),l=x({allowFullscreen:!1,allowToSkipTransition:!0,autohideTime:2500,autoplay:!1,bindKeys:!1,delay:5e3,enableGestures:!1,infinite:!0,lazyLoad:!0,lazyLoadAfter:3}),v={Fade:ee,Kenburn:_,Swipe:Q,Slide:Z,Waterfall:J,Zip:q,Blinds2D:Y,Blocks1:X,Blocks2:G,Concentric:O,Warp:K,Camera:D,Cube:W,Book:N,Fall:R,Wave:I,Blinds3D:H,Round1:M,Round2:E,Explode:h},m=Object.keys(v),r=x({});m.forEach(a=>r[a]=!1),T.forEach(a=>r[a]=!0);const w=y(()=>{const a=[];return m.forEach(e=>{r[e]&&a.push(v[e])}),a}),F={preloader:!0,controls:!0,pagination:!0},V=y(()=>{const a=`
import {
	VueFlux,
	FluxPreloader,
	FluxControls,
	FluxPagination,
	Img,
	${Object.entries(r).filter(e=>e[1]).map(e=>e[0]).join(`,
	`)},
} from 'vue-flux';

const options = reactive({
	allowFullscreen: ${l.allowFullscreen.toString()},
	allowToSkipTransition: ${l.allowToSkipTransition.toString()},
	autohideTime: ${l.autohideTime},
	autoplay: ${l.autoplay.toString()},
	bindKeys: ${l.bindKeys.toString()},
	delay: ${l.delay},
	enableGestures: ${l.enableGestures.toString()},
	infinite: ${l.infinite.toString()},
	lazyLoad: ${l.lazyLoad.toString()},
	lazyLoadAfter: ${l.lazyLoadAfter},
});

const rscs = shallowReactive([
	new Img('img-url-1'),
	new Img('img-url-2'),
	new Img('img-url-3'),
]);

const transitions = shallowReactive([
   ${Object.entries(r).filter(e=>e[1]).map(e=>e[0]).join(`,
   `)},
]);`;return d.highlight(a.trim(),d.languages.javascript,"javascript")}),L=y(()=>d.highlight(`
<VueFlux
   :options="options"
   :rscs="rscs"
   :transitions="transitions"
>
   <template #preloader="preloaderProps">
      <FluxPreloader v-bind="preloaderProps" />
   </template>

   <template #controls="controlsProps">
      <FluxControls v-bind="controlsProps" />
   </template>

   <template #pagination="paginationProps">
      <FluxPagination v-bind="paginationProps" />
   </template>
</VueFlux>`.trim(),d.languages.html,"html")),c=async()=>{p.value=!1,await A(),p.value=!0};return(a,e)=>(u(),b("div",null,[p.value?(u(),C(te,{key:0,options:l,transitions:w.value,complements:F,numRscs:12},null,8,["options","transitions"])):j("",!0),e[23]||(e[23]=t("h3",null,"Playground",-1)),t("div",le,[t("h4",null,[t("a",{href:g(k)("/documentation/v7/components/vue-flux.html#transitions")},"Transitions",8,oe)]),t("div",ne,[(u(!0),b($,null,z(g(m),o=>(u(),b("label",{key:o},[s(t("input",{type:"checkbox",value:o,"onUpdate:modelValue":S=>r[o]=S},null,8,se),[[i,r[o]]]),n(" "+U(o),1)]))),128))]),t("h4",null,[t("a",{href:g(k)("/documentation/v7/components/vue-flux.html#options")},"Options",8,ae)]),t("div",ie,[t("label",null,[s(t("input",{type:"checkbox",value:!0,"onUpdate:modelValue":e[0]||(e[0]=o=>l.allowFullscreen=o)},null,512),[[i,l.allowFullscreen]]),e[10]||(e[10]=n(" Allow full screen ",-1))]),t("label",null,[s(t("input",{type:"checkbox",value:!0,"onUpdate:modelValue":e[1]||(e[1]=o=>l.allowToSkipTransition=o)},null,512),[[i,l.allowToSkipTransition]]),e[11]||(e[11]=n(" Allow to skip transition ",-1))]),t("label",null,[e[12]||(e[12]=n(" Auto hide time: ",-1)),s(t("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>l.autohideTime=o),maxlength:"5"},null,512),[[f,l.autohideTime,void 0,{number:!0}]]),e[13]||(e[13]=n(" ms ",-1))]),t("label",null,[s(t("input",{type:"checkbox",value:!0,"onUpdate:modelValue":e[3]||(e[3]=o=>l.autoplay=o)},null,512),[[i,l.autoplay]]),e[14]||(e[14]=n(" Auto play ",-1))]),t("label",null,[s(t("input",{type:"checkbox",value:!0,"onUpdate:modelValue":e[4]||(e[4]=o=>l.bindKeys=o)},null,512),[[i,l.bindKeys]]),e[15]||(e[15]=n(" Bind keyboard keys ",-1))]),t("label",null,[e[16]||(e[16]=n(" Delay: ",-1)),s(t("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=o=>l.delay=o),maxlength:"5"},null,512),[[f,l.delay,void 0,{number:!0}]]),e[17]||(e[17]=n(" ms ",-1))]),t("label",null,[s(t("input",{type:"checkbox",value:!0,"onUpdate:modelValue":e[6]||(e[6]=o=>l.enableGestures=o)},null,512),[[i,l.enableGestures]]),e[18]||(e[18]=n(" Enable gestures ",-1))]),t("label",null,[s(t("input",{type:"checkbox",value:!0,"onUpdate:modelValue":e[7]||(e[7]=o=>l.infinite=o)},null,512),[[i,l.infinite]]),e[19]||(e[19]=n(" Infinite ",-1))]),t("label",null,[s(t("input",{type:"checkbox",value:!0,"onUpdate:modelValue":e[8]||(e[8]=o=>l.lazyLoad=o)},null,512),[[i,l.lazyLoad]]),e[20]||(e[20]=n(" Lazy load ",-1))]),t("label",null,[e[21]||(e[21]=n(" Lazy load after: ",-1)),s(t("input",{type:"text","onUpdate:modelValue":e[9]||(e[9]=o=>l.lazyLoadAfter=o),maxlength:"2"},null,512),[[f,l.lazyLoadAfter,void 0,{number:!0}]]),e[22]||(e[22]=n(" images ",-1))])]),t("button",{type:"button",onClick:c}," Reset slider to pretend just mounted (to test some options) ")]),e[24]||(e[24]=t("h3",null,"Source",-1)),t("div",re,[t("pre",{innerHTML:V.value,class:"language-javascript"},null,8,ue)]),t("div",de,[t("pre",{innerHTML:L.value,class:"language-html"},null,8,pe)])]))}});export{xe as default};
