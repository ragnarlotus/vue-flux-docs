import{P as s}from"./prism-CBfTwKG-.js";import{j as F,O as w,W as k,A as j,B as C,X as H,b as I,S as L,x as M}from"./vue-flux-B4W74UIR.js";import{_ as T}from"./Demo.vue_vue_type_script_setup_true_lang-BTl2EAGH.js";import{I as W}from"./Images-BrEvi5ME.js";import{f as V,G as R,h as r,c as m,o as d,b as e,a as l,u as o,w as i,n as g,k as h,m as D,t as S}from"./app-Br2EUNM9.js";const A={class:"language-javascript","data-ext":"js"},y=["innerHTML"],z={class:"language-html","data-ext":"html"},N=["innerHTML"],J={key:0,class:"custom-spinner"},O={class:"language-javascript","data-ext":"js"},X=["innerHTML"],E={class:"language-html","data-ext":"html"},G=["innerHTML"],$={class:"language-scss","data-ext":"scss"},q=["innerHTML"],se=V({__name:"FluxPreloader",setup(K){const c={},x={controls:!0,preloader:!0},u=R([F,w,k,j,C,H]),v=r(()=>s.highlight(`
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
]);`.trim(),s.languages.javascript,"javascript")),f=r(()=>s.highlight(`
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
`,""),s.languages.html,"html")),_=W.generate(30),b=r(()=>s.highlight(`
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
]);`.trim(),s.languages.javascript,"javascript")),P=r(()=>s.highlight(`
<VueFlux
	:rscs="rscs"
	:transitions="transitions"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps">
			<template #default="loaderProps">
				<div v-if="loaderProps.preloading" class="custom-spinner">
					{{ loaderProps.pct }} %
				</div>
			</template>
		</FluxPreloader>
	</template>

	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps" />
	</template>
</VueFlux>`.trim().replaceAll(`	
`,""),s.languages.html,"html")),B=r(()=>s.highlight(`
@keyframes spinner {
	to {
		transform: rotate(360deg);
	}
}

.custom-spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	text-align: center;
	line-height: 50px;
	margin-top: -25px;
	margin-left: -25px;
	width: 50px;
	height: 50px;
	z-index: 14;

	&:before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50px;
		height: 50px;
		margin-top: -25px;
		margin-left: -25px;
		border-radius: 50%;
		border: 1px solid #ccc;
		border-top-color: #07d;
		animation: spinner 0.6s linear infinite;
	}
}`.trim().replaceAll(`	
`,""),s.languages.css,"css"));return(a,t)=>(d(),m("div",null,[t[0]||(t[0]=e("h2",null,"Default preloader",-1)),l(T,{options:c,transitions:o(u),complements:x,numRscs:30},null,8,["transitions"]),t[1]||(t[1]=e("h3",null,"Source",-1)),e("div",A,[e("pre",{innerHTML:v.value,class:"language-javascript"},null,8,y)]),e("div",z,[e("pre",{innerHTML:f.value,class:"language-html"},null,8,N)]),t[2]||(t[2]=e("h2",null,"Custom preloader",-1)),l(o(M),{options:c,rscs:o(_),transitions:o(u)},{preloader:i(n=>[l(o(L),g(h(n)),{default:i(p=>[p.preloading?(d(),m("div",J,S(p.pct)+" % ",1)):D("",!0)]),_:1},16)]),controls:i(n=>[l(o(I),g(h(n)),null,16)]),_:1},8,["rscs","transitions"]),t[3]||(t[3]=e("h3",null,"Source",-1)),e("div",O,[e("pre",{innerHTML:b.value,class:"language-javascript"},null,8,X)]),e("div",E,[e("pre",{innerHTML:P.value,class:"language-html"},null,8,G)]),e("div",$,[e("pre",{innerHTML:B.value,class:"language-scss"},null,8,q)])]))}});export{se as default};
