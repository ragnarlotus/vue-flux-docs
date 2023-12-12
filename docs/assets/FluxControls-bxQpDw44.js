import{P as o}from"./prism-cS1PeyxU.js";import{c,e as u,i as m,r as p,o as d,a as g}from"./vue-flux-ZmG_q5VC.js";import _ from"./Demo-pm3p9b02.js";import{g as h,E as v,i as t,o as x,c as f,a as F,u as B,d as e,_ as C}from"./app-DHB0SMXO.js";import"./Images-mRU4eiTg.js";const P=e("h3",null,"Source",-1),k={class:"language-javascript","data-ext":"js"},w=["innerHTML"],j={class:"language-html","data-ext":"html"},H=["innerHTML"],T=h({__name:"FluxControls",setup(V){const a={autohideTime:0},r=v([c,u,m,p,d,g]),l={controls:!0,preloader:!0},n=t(()=>{let s=`
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
]);`;return o.highlight(s.trim(),o.languages.javascript,"javascript")}),i=t(()=>{const s=`
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
</VueFlux>`;return o.highlight(s.trim().replaceAll(`	
`,""),o.languages.html,"html")});return(s,b)=>(x(),f("div",null,[F(_,{transitions:B(r),numRscs:3,complements:l,options:a},null,8,["transitions"]),P,e("div",k,[e("pre",{innerHTML:n.value,class:"language-javascript"},null,8,w)]),e("div",j,[e("pre",{innerHTML:i.value,class:"language-html"},null,8,H)])]))}}),D=C(T,[["__file","FluxControls.vue"]]);export{D as default};
