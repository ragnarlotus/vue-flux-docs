import{P as t}from"./prism-5c0d5a27.js";import{j as b,Y as B,M as w,c as j,e as k,i as C,r as H,o as M,a as I}from"./vue-flux-a0dba35f.js";import L from"./Demo-a05ef849.js";import{I as T}from"./Images-80560c64.js";import{g as V,E as W,i as a,o as p,c as d,a as r,u as o,d as e,w as n,n as m,l as g,B as D,f as R,_ as y}from"./app-732a0dff.js";const S=e("h2",null,"Default preloader",-1),z=e("h3",null,"Source",-1),A={class:"language-javascript","data-ext":"js"},N=["innerHTML"],E={class:"language-html","data-ext":"html"},J=["innerHTML"],Y=e("h2",null,"Custom pagination",-1),q={key:0,class:"custom-spinner"},G=e("h3",null,"Source",-1),K={class:"language-javascript","data-ext":"js"},O=["innerHTML"],Q={class:"language-html","data-ext":"html"},U=["innerHTML"],X={class:"language-scss","data-ext":"scss"},Z=["innerHTML"],$=V({__name:"FluxPreloader",setup(ee){const i={},h={controls:!0,preloader:!0},c=W([j,k,C,H,M,I]),_=a(()=>{let s=`
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
]);`;return t.highlight(s.trim(),t.languages.javascript,"javascript")}),x=a(()=>{const s=`
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
</VueFlux>`;return t.highlight(s.trim().replaceAll(`	
`,""),t.languages.html,"html")}),v=T.generate(30),f=a(()=>{let s=`
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
]);`;return t.highlight(s.trim(),t.languages.javascript,"javascript")}),P=a(()=>{const s=`
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
</VueFlux>`;return t.highlight(s.trim().replaceAll(`	
`,""),t.languages.html,"html")}),F=a(()=>{const s=`
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
}`;return t.highlight(s.trim().replaceAll(`	
`,""),t.languages.css,"css")});return(s,se)=>(p(),d("div",null,[S,r(L,{options:i,transitions:o(c),complements:h,numRscs:30},null,8,["transitions"]),z,e("div",A,[e("pre",{innerHTML:_.value,class:"language-javascript"},null,8,N)]),e("div",E,[e("pre",{innerHTML:x.value,class:"language-html"},null,8,J)]),Y,r(o(w),{options:i,rscs:o(v),transitions:o(c)},{preloader:n(l=>[r(o(b),m(g(l)),{default:n(u=>[u.preloading?(p(),d("div",q,D(u.pct)+" % ",1)):R("v-if",!0)]),_:2},1040)]),controls:n(l=>[r(o(B),m(g(l)),null,16)]),_:1},8,["rscs","transitions"]),G,e("div",K,[e("pre",{innerHTML:f.value,class:"language-javascript"},null,8,O)]),e("div",Q,[e("pre",{innerHTML:P.value,class:"language-html"},null,8,U)]),e("div",X,[e("pre",{innerHTML:F.value,class:"language-scss"},null,8,Z)])]))}});const ne=y($,[["__file","FluxPreloader.vue"]]);export{ne as default};
