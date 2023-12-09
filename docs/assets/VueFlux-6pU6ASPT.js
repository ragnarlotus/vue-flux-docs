import{g as S,h as _,m as g,i as c,o as r,c as y,j as B,f as U,d as e,u as b,O as h,F as P,q as j,H as s,L as i,e as n,B as z,I as f,D as C,_ as $}from"./app-50w0ji3D.js";import{P as d}from"./prism-cS1PeyxU.js";import{G as A,K as D,U as K,J as G,Z as R,k as E,Q as H,t as I,e as M,s as N,o as O,n as W,r as J,i as Z,l as q,a as Q,c as X,u as Y,p as ee,m as te}from"./vue-flux-mVziyI42.js";import le from"./Demo-k85ewrlh.js";import"./Images-9SQftBuZ.js";const oe=e("h3",null,"Playground",-1),ne={class:"playground"},ae=["href"],se={class:"transitions"},ie=["value","onUpdate:modelValue"],ue=["href"],re={class:"options"},de=e("h3",null,"Source",-1),pe={class:"language-javascript","data-ext":"js"},me=["innerHTML"],ce={class:"language-html","data-ext":"html"},ye=["innerHTML"],be=S({__name:"VueFlux",setup(fe){const x=["Blinds3D","Blocks2","Book","Cube","Round2","Swipe","Warp","Wave"],p=_(!0),t=g({allowFullscreen:!1,allowToSkipTransition:!0,autohideTime:2500,autoplay:!1,bindKeys:!1,delay:5e3,enableGestures:!1,infinite:!0,lazyLoad:!0,lazyLoadAfter:3}),v={Fade:A,Kenburn:D,Swipe:K,Slide:G,Waterfall:R,Zip:E,Blinds2D:H,Blocks1:I,Blocks2:M,Concentric:N,Warp:O,Camera:W,Cube:J,Book:Z,Fall:q,Wave:Q,Blinds3D:X,Round1:Y,Round2:ee,Explode:te},m=Object.keys(v),u=g({});m.forEach(a=>u[a]=!1),x.forEach(a=>u[a]=!0);const k=c(()=>{const a=[];return m.forEach(l=>{u[l]&&a.push(v[l])}),a}),T={preloader:!0,controls:!0,pagination:!0},w=c(()=>{const a=`
import {
	VueFlux,
	FluxPreloader,
	FluxControls,
	FluxPagination,
	Img,
	${Object.entries(u).filter(l=>l[1]).map(l=>l[0]).join(`,
	`)},
} from 'vue-flux';

const options = reactive({
	allowFullscreen: ${t.allowFullscreen.toString()},
	allowToSkipTransition: ${t.allowToSkipTransition.toString()},
	autohideTime: ${t.autohideTime},
	autoplay: ${t.autoplay.toString()},
	bindKeys: ${t.bindKeys.toString()},
	delay: ${t.delay},
	enableGestures: ${t.enableGestures.toString()},
	infinite: ${t.infinite.toString()},
	lazyLoad: ${t.lazyLoad.toString()},
	lazyLoadAfter: ${t.lazyLoadAfter},
});

const rscs = shallowReactive([
	new Img('img-url-1'),
	new Img('img-url-2'),
	new Img('img-url-3'),
]);

const transitions = shallowReactive([
   ${Object.entries(u).filter(l=>l[1]).map(l=>l[0]).join(`,
   `)},
]);`;return d.highlight(a.trim(),d.languages.javascript,"javascript")}),F=c(()=>{const a=`
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
</VueFlux>`;return d.highlight(a.trim(),d.languages.html,"html")}),V=async()=>{p.value=!1,await C(),p.value=!0};return(a,l)=>(r(),y("div",null,[p.value?(r(),B(le,{key:0,options:t,transitions:k.value,complements:T,numRscs:12},null,8,["options","transitions"])):U("v-if",!0),oe,e("div",ne,[e("h4",null,[e("a",{href:b(h)("/documentation/v7/components/vue-flux.html#transitions")},"Transitions",8,ae)]),e("div",se,[(r(!0),y(P,null,j(b(m),o=>(r(),y("label",{key:o},[s(e("input",{type:"checkbox",value:o,"onUpdate:modelValue":L=>u[o]=L},null,8,ie),[[i,u[o]]]),n(" "+z(o),1)]))),128))]),e("h4",null,[e("a",{href:b(h)("/documentation/v7/components/vue-flux.html#options")},"Options",8,ue)]),e("div",re,[e("label",null,[s(e("input",{type:"checkbox",value:!0,"onUpdate:modelValue":l[0]||(l[0]=o=>t.allowFullscreen=o)},null,512),[[i,t.allowFullscreen]]),n(" Allow full screen ")]),e("label",null,[s(e("input",{type:"checkbox",value:!0,"onUpdate:modelValue":l[1]||(l[1]=o=>t.allowToSkipTransition=o)},null,512),[[i,t.allowToSkipTransition]]),n(" Allow to skip transition ")]),e("label",null,[n(" Auto hide time: "),s(e("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=o=>t.autohideTime=o),maxlength:"5"},null,512),[[f,t.autohideTime,void 0,{number:!0}]]),n(" ms ")]),e("label",null,[s(e("input",{type:"checkbox",value:!0,"onUpdate:modelValue":l[3]||(l[3]=o=>t.autoplay=o)},null,512),[[i,t.autoplay]]),n(" Auto play ")]),e("label",null,[s(e("input",{type:"checkbox",value:!0,"onUpdate:modelValue":l[4]||(l[4]=o=>t.bindKeys=o)},null,512),[[i,t.bindKeys]]),n(" Bind keyboard keys ")]),e("label",null,[n(" Delay: "),s(e("input",{type:"text","onUpdate:modelValue":l[5]||(l[5]=o=>t.delay=o),maxlength:"5"},null,512),[[f,t.delay,void 0,{number:!0}]]),n(" ms ")]),e("label",null,[s(e("input",{type:"checkbox",value:!0,"onUpdate:modelValue":l[6]||(l[6]=o=>t.enableGestures=o)},null,512),[[i,t.enableGestures]]),n(" Enable gestures ")]),e("label",null,[s(e("input",{type:"checkbox",value:!0,"onUpdate:modelValue":l[7]||(l[7]=o=>t.infinite=o)},null,512),[[i,t.infinite]]),n(" Infinite ")]),e("label",null,[s(e("input",{type:"checkbox",value:!0,"onUpdate:modelValue":l[8]||(l[8]=o=>t.lazyLoad=o)},null,512),[[i,t.lazyLoad]]),n(" Lazy load ")]),e("label",null,[n(" Lazy load after: "),s(e("input",{type:"text","onUpdate:modelValue":l[9]||(l[9]=o=>t.lazyLoadAfter=o),maxlength:"2"},null,512),[[f,t.lazyLoadAfter,void 0,{number:!0}]]),n(" images ")])]),e("button",{type:"button",onClick:V}," Reset slider to pretend just mounted (to test some options) ")]),de,e("div",pe,[e("pre",{innerHTML:w.value,class:"language-javascript"},null,8,me)]),e("div",ce,[e("pre",{innerHTML:F.value,class:"language-html"},null,8,ye)])]))}}),Te=$(be,[["__file","VueFlux.vue"]]);export{Te as default};
