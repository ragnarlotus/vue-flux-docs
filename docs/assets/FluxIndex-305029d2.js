import{P as a}from"./prism-5c0d5a27.js";import{c,e as u,i as m,r as p,o as d,a as g}from"./vue-flux-5e4dd4a6.js";import x from"./Demo-b98d5549.js";import{f as h,E as _,h as t,o as v,c as f,a as F,u as B,d as e,_ as I}from"./app-7e36012f.js";import"./Images-a444c621.js";const P=e("h3",null,"Source",-1),k={class:"language-javascript","data-ext":"js"},w=["innerHTML"],j={class:"language-html","data-ext":"html"},H=["innerHTML"],T=h({__name:"FluxIndex",setup(V){const o={autohideTime:0},n=_([c,u,m,p,d,g]),r={index:!0,preloader:!0},l=t(()=>{let s=`
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
]);`;return a.highlight(s.trim(),a.languages.javascript,"javascript")}),i=t(()=>{const s=`
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
</VueFlux>`;return a.highlight(s.trim().replaceAll(`	
`,""),a.languages.html,"html")});return(s,b)=>(v(),f("div",null,[F(x,{transitions:B(n),numRscs:3,complements:r,options:o},null,8,["transitions"]),P,e("div",k,[e("pre",{innerHTML:l.value,class:"language-javascript"},null,8,w)]),e("div",j,[e("pre",{innerHTML:i.value,class:"language-html"},null,8,H)])]))}}),D=I(T,[["__file","FluxIndex.vue"]]);export{D as default};
