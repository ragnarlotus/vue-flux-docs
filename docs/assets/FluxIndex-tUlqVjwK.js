import{P as a}from"./prism-cS1PeyxU.js";import{p as c,o as u,a as m,l as p,r as d,u as g}from"./vue-flux-EKi73fdj.js";import x from"./Demo-cznZcEo2.js";import{g as _,E as h,i as t,o as v,c as f,a as F,u as B,b as e,_ as I}from"./app-k9p8jFez.js";import"./Images-emnYdbkt.js";const P=e("h3",null,"Source",-1),k={class:"language-javascript","data-ext":"js"},w=["innerHTML"],b={class:"language-html","data-ext":"html"},j=["innerHTML"],H=_({__name:"FluxIndex",setup(T){const o={autohideTime:0},n=h([c,u,m,p,d,g]),r={index:!0,preloader:!0},l=t(()=>{let s=`
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
`,""),a.languages.html,"html")});return(s,V)=>(v(),f("div",null,[F(x,{transitions:B(n),numRscs:30,complements:r,options:o},null,8,["transitions"]),P,e("div",k,[e("pre",{innerHTML:l.value,class:"language-javascript"},null,8,w)]),e("div",b,[e("pre",{innerHTML:i.value,class:"language-html"},null,8,j)])]))}}),D=I(H,[["__file","FluxIndex.vue"]]);export{D as default};
