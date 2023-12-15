import{P as o}from"./prism-cS1PeyxU.js";import{p as c,o as u,a as m,l as p,r as d,u as g}from"./vue-flux-xkNGD8Rr.js";import _ from"./Demo-YRqIvizg.js";import{g as h,E as v,i as t,o as x,c as f,a as F,u as B,b as s,_ as C}from"./app-SStEjskS.js";import"./Images-gE8WO_fq.js";const P=s("h3",null,"Source",-1),k={class:"language-javascript","data-ext":"js"},w=["innerHTML"],b={class:"language-html","data-ext":"html"},j=["innerHTML"],H=h({__name:"FluxControls",setup(T){const a={autohideTime:0},r=v([c,u,m,p,d,g]),l={controls:!0,preloader:!0},n=t(()=>{let e=`
import {
	Img,
	FluxPreloader,
	FluxControls,
	VueFlux,
	Blinds3D,
	Blocks2,
	Book,
	Cube,
	Warp,
	Wave,
} from 'vue-flux';

const rscs = shallowReactive([
	new Img('image-url1', 'image caption 1'),
	new Img('image-url2', 'image caption 2'),
	new Img('image-url3', 'image caption 3'),
]);

const transitions = shallowReactive([
	Blinds3D,
	Blocks2,
	Book,
	Cube,
	Warp,
	Wave,
]);`;return o.highlight(e.trim(),o.languages.javascript,"javascript")}),i=t(()=>{const e=`
<VueFlux
	:rscs="rscs"
	:transitions="transitions"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps" />
	</template>

	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps" />
	</template>
</VueFlux>`;return o.highlight(e.trim().replaceAll(`	
`,""),o.languages.html,"html")});return(e,V)=>(x(),f("div",null,[F(_,{transitions:B(r),numRscs:3,complements:l,options:a},null,8,["transitions"]),P,s("div",k,[s("pre",{innerHTML:n.value,class:"language-javascript"},null,8,w)]),s("div",b,[s("pre",{innerHTML:i.value,class:"language-html"},null,8,j)])]))}}),D=C(H,[["__file","FluxControls.vue"]]);export{D as default};
