import{P as a}from"./prism-CBfTwKG-.js";import{j as u,O as m,W as p,A as d,B as g,X as h}from"./vue-flux-D_UAZJ8S.js";import{_ as x}from"./Demo.vue_vue_type_script_setup_true_lang-CWBLnOQe.js";import{f as v,G as _,h as n,c as f,o as B,a as F,b as e,u as P}from"./app-BI9tC47I.js";import"./Images-D_w33Wdw.js";const j={class:"language-javascript","data-ext":"js"},I=["innerHTML"],k={class:"language-html","data-ext":"html"},w=["innerHTML"],M=v({__name:"FluxIndex",setup(W){const o={autohideTime:0},r=_([u,m,p,d,g,h]),l={index:!0,preloader:!0},i=n(()=>a.highlight(`
import {
	Img,
	FluxPreloader,
	FluxIndex,
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
]);`.trim(),a.languages.javascript,"javascript")),c=n(()=>a.highlight(`
<VueFlux
	:rscs="rscs"
	:transitions="transitions"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps" />
	</template>

	<template #index="indexProps">
		<FluxIndex v-bind="indexProps" />
	</template>
</VueFlux>`.trim().replaceAll(`	
`,""),a.languages.html,"html"));return(s,t)=>(B(),f("div",null,[F(x,{transitions:P(r),numRscs:30,complements:l,options:o},null,8,["transitions"]),t[0]||(t[0]=e("h3",null,"Source",-1)),e("div",j,[e("pre",{innerHTML:i.value,class:"language-javascript"},null,8,I)]),e("div",k,[e("pre",{innerHTML:c.value,class:"language-html"},null,8,w)])]))}});export{M as default};
