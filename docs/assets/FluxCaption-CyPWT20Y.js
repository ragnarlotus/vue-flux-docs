import{P as a}from"./prism-CBfTwKG-.js";import{j as P,O as C,W as F,A as w,B,X as b,b as k,$ as j,S as H,x as I}from"./vue-flux-D0xQKYPf.js";import{_ as L}from"./Demo.vue_vue_type_script_setup_true_lang-CtBj1C7x.js";import{I as W}from"./Images-D3tRVO8F.js";import{f as M,G as T,h as r,c as V,o as R,b as t,a as l,u as o,w as i,n as c,k as p,t as S}from"./app-MTV9PqO7.js";const D={class:"language-javascript","data-ext":"js"},A=["innerHTML"],$={class:"language-html","data-ext":"html"},q=["innerHTML"],z=["href"],J={class:"language-javascript","data-ext":"js"},N=["innerHTML"],O={class:"language-html","data-ext":"html"},X=["innerHTML"],Y=M({__name:"FluxCaption",setup(y){const u=T([P,C,F,w,B,b]),g={captions:!0,controls:!0,preloader:!0},d=r(()=>a.highlight(`
import {
	Img,
	FluxPreloader,
	FluxCaption,
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
]);`.trim(),a.languages.javascript,"javascript")),h=r(()=>a.highlight(`
<VueFlux
	:rscs="rscs"
	:transitions="transitions"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps" />
	</template>

	<template #caption="captionProps">
		<FluxCaption v-bind="captionProps" />
	</template>

	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps" />
	</template>
</VueFlux>`.trim().replaceAll(`	
`,""),a.languages.html,"html")),v=W.generate(3);function x(s){return"https://www.google.com/search?q="+s}const _=r(()=>a.highlight(`
import {
	Img,
	Size,
	FluxPreloader,
	FluxCaption,
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
]);

function getSearch(caption) {
	return 'https://www.google.com/search?q='+ caption
}`.trim(),a.languages.javascript,"javascript")),f=r(()=>a.highlight(`
<VueFlux
	:rscs="rscs"
	:transitions="transitions"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps" />
	</template>

	<template #caption="captionProps">
		<FluxCaption v-bind="captionProps">
			<template v-slot="customCaptionProps">
				<h3>
					<a
						:href="getCaptionLink(customCaptionProps.caption)"
						target="_blank"
					>
						{{ customCaptionProps.caption }}</a
					>
				</h3>
			</template>
		</FluxCaption>
	</template>

	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps" />
	</template>
</VueFlux>`.trim().replaceAll(`	
`,""),a.languages.html,"html"));return(s,e)=>(R(),V("div",null,[e[0]||(e[0]=t("h2",null,"Default captions",-1)),l(L,{transitions:o(u),numRscs:3,complements:g},null,8,["transitions"]),e[1]||(e[1]=t("h3",null,"Source",-1)),t("div",D,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,A)]),t("div",$,[t("pre",{innerHTML:h.value,class:"language-html"},null,8,q)]),e[2]||(e[2]=t("h2",null,"Custom captions",-1)),l(o(I),{rscs:o(v),transitions:o(u)},{preloader:i(n=>[l(o(H),c(p(n)),null,16)]),caption:i(n=>[l(o(j),c(p(n)),{default:i(m=>[t("h3",null,[t("a",{href:x(m.caption),target:"_blank"},S(m.caption),9,z)])]),_:1},16)]),controls:i(n=>[l(o(k),c(p(n)),null,16)]),_:1},8,["rscs","transitions"]),e[3]||(e[3]=t("h3",null,"Source",-1)),t("div",J,[t("pre",{innerHTML:_.value,class:"language-javascript"},null,8,N)]),t("div",O,[t("pre",{innerHTML:f.value,class:"language-html"},null,8,X)])]))}});export{Y as default};
