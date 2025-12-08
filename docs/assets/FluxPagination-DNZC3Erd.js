import{P as s}from"./prism-CBfTwKG-.js";import{j as F,O as w,W as B,A as b,B as C,X as k,D as j,b as H,S as T,x as I}from"./vue-flux-DLPyrDSG.js";import{_ as L}from"./Demo.vue_vue_type_script_setup_true_lang-DcXo2T1D.js";import{I as M}from"./Images-LscGjCep.js";import{f as W,G as D,h as l,c as V,o as R,b as a,a as i,u as t,w as c,n as u,k as p,p as S,t as A}from"./app-ipQ6pP7q.js";const y={class:"language-javascript","data-ext":"js"},z=["innerHTML"],J={class:"language-html","data-ext":"html"},N=["innerHTML"],O=["title","onClick"],X={class:"language-javascript","data-ext":"js"},$=["innerHTML"],E={class:"language-html","data-ext":"html"},G=["innerHTML"],q={class:"language-scss","data-ext":"scss"},K=["innerHTML"],ta=W({__name:"FluxPagination",setup(Q){const g={autohideTime:0},d={pagination:!0,controls:!0,preloader:!0},m=D([F,w,B,b,C,k]),h=l(()=>s.highlight(`
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
]);`.trim(),s.languages.javascript,"javascript")),x=l(()=>s.highlight(`
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
</VueFlux>`.trim().replaceAll(`	
`,""),s.languages.html,"html")),v=M.generate(3),P=l(()=>s.highlight(`
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
]);`.trim(),s.languages.javascript,"javascript")),_=l(()=>s.highlight(`
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
</VueFlux>`.trim().replaceAll(`	
`,""),s.languages.html,"html")),f=l(()=>s.highlight(`
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
}`.trim().replaceAll(`	
`,""),s.languages.css,"css"));return(n,e)=>(R(),V("div",null,[e[0]||(e[0]=a("h2",null,"Default pagination",-1)),i(L,{options:g,transitions:t(m),complements:d,numRscs:3},null,8,["transitions"]),e[1]||(e[1]=a("h3",null,"Source",-1)),a("div",y,[a("pre",{innerHTML:h.value,class:"language-javascript"},null,8,z)]),a("div",J,[a("pre",{innerHTML:x.value,class:"language-html"},null,8,N)]),e[2]||(e[2]=a("h2",null,"Custom pagination",-1)),i(t(I),{options:g,rscs:t(v),transitions:t(m),class:"flux-custom-pagination"},{preloader:c(o=>[i(t(T),u(p(o)),null,16)]),controls:c(o=>[i(t(H),u(p(o)),null,16)]),pagination:c(o=>[i(t(j),u(p(o)),{default:c(r=>[a("div",{class:S(r.cssClass),title:r.title,onClick:U=>o.player.show(r.index)},A(r.index+1),11,O)]),_:2},1040)]),_:1},8,["rscs","transitions"]),e[3]||(e[3]=a("h3",null,"Source",-1)),a("div",X,[a("pre",{innerHTML:P.value,class:"language-javascript"},null,8,$)]),a("div",E,[a("pre",{innerHTML:_.value,class:"language-html"},null,8,G)]),a("div",q,[a("pre",{innerHTML:f.value,class:"language-scss"},null,8,K)])]))}});export{ta as default};
