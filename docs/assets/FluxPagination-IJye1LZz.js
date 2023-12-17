import{P as t}from"./prism-cS1PeyxU.js";import{K as F,H as f,G as w,Y as C,p as B,o as b,a as k,l as H,r as T,u as j}from"./vue-flux--F8xa8iS.js";import I from"./Demo-nlpFG_1z.js";import{I as L}from"./Images-0G4Yedb4.js";import{g as M,E as D,i as n,o as V,c as W,a as l,u as e,b as s,w as r,l as c,n as u,D as R,C as y,_ as S}from"./app-pGooBgpL.js";const A=s("h2",null,"Default pagination",-1),z=s("h3",null,"Source",-1),E={class:"language-javascript","data-ext":"js"},G=["innerHTML"],J={class:"language-html","data-ext":"html"},K=["innerHTML"],N=s("h2",null,"Custom pagination",-1),Y=["title","onClick"],$=s("h3",null,"Source",-1),q={class:"language-javascript","data-ext":"js"},O=["innerHTML"],Q={class:"language-html","data-ext":"html"},U=["innerHTML"],X={class:"language-scss","data-ext":"scss"},Z=["innerHTML"],ss=M({__name:"FluxPagination",setup(as){const p={autohideTime:0},m={pagination:!0,controls:!0,preloader:!0},g=D([B,b,k,H,T,j]),d=n(()=>{let a=`
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
]);`;return t.highlight(a.trim(),t.languages.javascript,"javascript")}),h=n(()=>{const a=`
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
</VueFlux>`;return t.highlight(a.trim().replaceAll(`	
`,""),t.languages.html,"html")}),x=L.generate(3),_=n(()=>{let a=`
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
]);`;return t.highlight(a.trim(),t.languages.javascript,"javascript")}),v=n(()=>{const a=`
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
			<template v-slot="itemProps">
				<div
					:class="itemProps.cssClass"
					:title="itemProps.title"
					@click="paginationProps.player.show(itemProps.index)"
				>
					{{ itemProps.index + 1 }}
				</div>
			</template>
		</FluxPagination>
	</template>
</VueFlux>`;return t.highlight(a.trim().replaceAll(`	
`,""),t.languages.html,"html")}),P=n(()=>{const a=`
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
}`;return t.highlight(a.trim().replaceAll(`	
`,""),t.languages.css,"css")});return(a,ts)=>(V(),W("div",null,[A,l(I,{options:p,transitions:e(g),complements:m,numRscs:3},null,8,["transitions"]),z,s("div",E,[s("pre",{innerHTML:d.value,class:"language-javascript"},null,8,G)]),s("div",J,[s("pre",{innerHTML:h.value,class:"language-html"},null,8,K)]),N,l(e(C),{options:p,rscs:e(x),transitions:e(g),class:"flux-custom-pagination"},{preloader:r(o=>[l(e(F),u(c(o)),null,16)]),controls:r(o=>[l(e(f),u(c(o)),null,16)]),pagination:r(o=>[l(e(w),u(c(o)),{default:r(i=>[s("div",{class:R(i.cssClass),title:i.title,onClick:es=>o.player.show(i.index)},y(i.index+1),11,Y)]),_:2},1040)]),_:1},8,["rscs","transitions"]),$,s("div",q,[s("pre",{innerHTML:_.value,class:"language-javascript"},null,8,O)]),s("div",Q,[s("pre",{innerHTML:v.value,class:"language-html"},null,8,U)]),s("div",X,[s("pre",{innerHTML:P.value,class:"language-scss"},null,8,Z)])]))}}),cs=S(ss,[["__file","FluxPagination.vue"]]);export{cs as default};
