import{P as t}from"./prism-cS1PeyxU.js";import{K as F,H as w,Y as B,p as H,o as C,a as k,l as j,r as I,u as L}from"./vue-flux-aT5qPPFS.js";import M from"./Demo-j09rccKv.js";import{I as T}from"./Images-pD6-27jP.js";import{g as V,E as W,i as a,o as p,c as m,a as r,u as o,b as e,w as n,l as d,n as g,C as D,f as R,_ as S}from"./app-zCTnd8Wc.js";const y=e("h2",null,"Default preloader",-1),z=e("h3",null,"Source",-1),A={class:"language-javascript","data-ext":"js"},N=["innerHTML"],E={class:"language-html","data-ext":"html"},J=["innerHTML"],K=e("h2",null,"Custom preloader",-1),Y={key:0,class:"custom-spinner"},q=e("h3",null,"Source",-1),G={class:"language-javascript","data-ext":"js"},O=["innerHTML"],Q={class:"language-html","data-ext":"html"},U=["innerHTML"],X={class:"language-scss","data-ext":"scss"},Z=["innerHTML"],$=V({__name:"FluxPreloader",setup(ee){const i={},h={controls:!0,preloader:!0},c=W([H,C,k,j,I,L]),_=a(()=>{let s=`
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
`,""),t.languages.html,"html")}),b=a(()=>{const s=`
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
`,""),t.languages.css,"css")});return(s,se)=>(p(),m("div",null,[y,r(M,{options:i,transitions:o(c),complements:h,numRscs:30},null,8,["transitions"]),z,e("div",A,[e("pre",{innerHTML:_.value,class:"language-javascript"},null,8,N)]),e("div",E,[e("pre",{innerHTML:x.value,class:"language-html"},null,8,J)]),K,r(o(B),{options:i,rscs:o(v),transitions:o(c)},{preloader:n(l=>[r(o(F),g(d(l)),{default:n(u=>[u.preloading?(p(),m("div",Y,D(u.pct)+" % ",1)):R("v-if",!0)]),_:2},1040)]),controls:n(l=>[r(o(w),g(d(l)),null,16)]),_:1},8,["rscs","transitions"]),q,e("div",G,[e("pre",{innerHTML:f.value,class:"language-javascript"},null,8,O)]),e("div",Q,[e("pre",{innerHTML:P.value,class:"language-html"},null,8,U)]),e("div",X,[e("pre",{innerHTML:b.value,class:"language-scss"},null,8,Z)])]))}}),ne=S($,[["__file","FluxPreloader.vue"]]);export{ne as default};
