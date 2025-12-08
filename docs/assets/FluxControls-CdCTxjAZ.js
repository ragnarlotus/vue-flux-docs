import{P as s}from"./prism-CBfTwKG-.js";import{j as u,O as m,W as p,A as d,B as g,X as h}from"./vue-flux-BTJEro02.js";import{_ as v}from"./Demo.vue_vue_type_script_setup_true_lang-Ch53YRns.js";import{f as _,G as x,h as o,c as f,o as B,a as F,b as e,u as P}from"./app-BUcDOuik.js";import"./Images-Cc17HLan.js";const j={class:"language-javascript","data-ext":"js"},k=["innerHTML"],w={class:"language-html","data-ext":"html"},C=["innerHTML"],L=_({__name:"FluxControls",setup(W){const r={autohideTime:0},l=x([u,m,p,d,g,h]),n={controls:!0,preloader:!0},i=o(()=>s.highlight(`
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
]);`.trim(),s.languages.javascript,"javascript")),c=o(()=>s.highlight(`
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
</VueFlux>`.trim().replaceAll(`	
`,""),s.languages.html,"html"));return(t,a)=>(B(),f("div",null,[F(v,{transitions:P(l),numRscs:3,complements:n,options:r},null,8,["transitions"]),a[0]||(a[0]=e("h3",null,"Source",-1)),e("div",j,[e("pre",{innerHTML:i.value,class:"language-javascript"},null,8,k)]),e("div",w,[e("pre",{innerHTML:c.value,class:"language-html"},null,8,C)])]))}});export{L as default};
