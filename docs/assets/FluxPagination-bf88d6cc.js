import{P as t}from"./prism-5c0d5a27.js";import{j as f,Y as F,I as C,M as k,c as w,e as B,i as b,r as j,o as H,a as I}from"./vue-flux-5cdc7d97.js";import M from"./Demo-14c87d15.js";import{I as T}from"./Images-9dbdb301.js";import{f as L,E as V,h as n,o as W,c as D,a as l,u as e,d as a,w as r,n as c,k as u,C as R,B as y,_ as S}from"./app-fbfde9e5.js";const A=a("h2",null,"Default pagination",-1),z=a("h3",null,"Source",-1),E={class:"language-javascript","data-ext":"js"},J=["innerHTML"],N={class:"language-html","data-ext":"html"},Y=["innerHTML"],$=a("h2",null,"Custom pagination",-1),q=["title","onClick"],G=a("h3",null,"Source",-1),K={class:"language-javascript","data-ext":"js"},O=["innerHTML"],Q={class:"language-html","data-ext":"html"},U=["innerHTML"],X={class:"language-scss","data-ext":"scss"},Z=["innerHTML"],aa=L({__name:"FluxPagination",setup(sa){const p={autohideTime:0},m={pagination:!0,controls:!0,preloader:!0},g=V([w,B,b,j,H,I]),d=n(()=>{let s=`
import {
	Img,
	FluxPreloader,
	FluxControls,
	FluxPagination,
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
]);`;return t.highlight(s.trim(),t.languages.javascript,"javascript")}),h=n(()=>{const s=`
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

	<template #pagination="paginationProps">
		<FluxPagination v-bind="paginationProps" />
	</template>
</VueFlux>`;return t.highlight(s.trim().replaceAll(`	
`,""),t.languages.html,"html")}),_=T.generate(3),v=n(()=>{let s=`
import {
	Img,
	FluxPreloader,
	FluxControls,
	FluxPagination,
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
]);`;return t.highlight(s.trim(),t.languages.javascript,"javascript")}),x=n(()=>{const s=`
<VueFlux
	:rscs="rscs"
	:transitions="transitions"
	class="flux-custom-pagination"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps" />
	</template>

	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps" />
	</template>

	<template #pagination="paginationProps">
		<FluxPagination v-bind="paginationProps">
			<template #default="itemProps">
				<div
					:class="itemProps.cssClass"
					:title="itemProps.title"
					@click="itemProps.onClick()"
				>
					{{ itemProps.index + 1 }}
				</div>
			</template>
		</FluxPagination>
	</template>
</VueFlux>`;return t.highlight(s.trim().replaceAll(`	
`,""),t.languages.html,"html")}),P=n(()=>{const s=`
.flux-custom-pagination .flux-pagination li {
	color: white;
	background-color: rgba(0, 0, 0, 0.8);
	padding: 0 8px 2px 8px;
	width: auto;
	height: auto;
	border-radius: 6px;

	.active {
		color: yellow;
	}
}`;return t.highlight(s.trim().replaceAll(`	
`,""),t.languages.css,"css")});return(s,ta)=>(W(),D("div",null,[A,l(M,{options:p,transitions:e(g),complements:m,numRscs:3},null,8,["transitions"]),z,a("div",E,[a("pre",{innerHTML:d.value,class:"language-javascript"},null,8,J)]),a("div",N,[a("pre",{innerHTML:h.value,class:"language-html"},null,8,Y)]),$,l(e(k),{options:p,rscs:e(_),transitions:e(g),class:"flux-custom-pagination"},{preloader:r(o=>[l(e(f),c(u(o)),null,16)]),controls:r(o=>[l(e(F),c(u(o)),null,16)]),pagination:r(o=>[l(e(C),c(u(o)),{default:r(i=>[a("div",{class:R(i.cssClass),title:i.title,onClick:ea=>i.onClick()},y(i.index+1),11,q)]),_:2},1040)]),_:1},8,["rscs","transitions"]),G,a("div",K,[a("pre",{innerHTML:v.value,class:"language-javascript"},null,8,O)]),a("div",Q,[a("pre",{innerHTML:x.value,class:"language-html"},null,8,U)]),a("div",X,[a("pre",{innerHTML:P.value,class:"language-scss"},null,8,Z)])]))}});const ca=S(aa,[["__file","FluxPagination.vue"]]);export{ca as default};
