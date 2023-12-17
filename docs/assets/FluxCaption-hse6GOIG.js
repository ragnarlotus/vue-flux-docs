import{P as a}from"./prism-cS1PeyxU.js";import{K as C,j as f,H as F,Y as P,p as w,o as B,a as k,l as b,r as j,u as H}from"./vue-flux-aT5qPPFS.js";import I from"./Demo-j09rccKv.js";import{I as L}from"./Images-pD6-27jP.js";import{g as M,E as T,i as l,o as V,c as W,a as n,u as s,b as t,w as r,l as i,n as c,C as D,_ as R}from"./app-zCTnd8Wc.js";const S=t("h2",null,"Default captions",-1),q=t("h3",null,"Source",-1),z={class:"language-javascript","data-ext":"js"},A=["innerHTML"],E={class:"language-html","data-ext":"html"},J=["innerHTML"],K=t("h2",null,"Custom captions",-1),N=["href"],Y=t("h3",null,"Source",-1),y={class:"language-javascript","data-ext":"js"},G=["innerHTML"],O={class:"language-html","data-ext":"html"},Q=["innerHTML"],U=M({__name:"FluxCaption",setup(X){const p=T([w,B,k,b,j,H]),m={captions:!0,controls:!0,preloader:!0},g=l(()=>{let e=`
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
]);`;return a.highlight(e.trim(),a.languages.javascript,"javascript")}),h=l(()=>{const e=`
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
</VueFlux>`;return a.highlight(e.trim().replaceAll(`	
`,""),a.languages.html,"html")}),d=L.generate(3);function _(e){return"https://www.google.com/search?q="+e}const v=l(()=>{let e=`
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
}`;return a.highlight(e.trim(),a.languages.javascript,"javascript")}),x=l(()=>{const e=`
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
</VueFlux>`;return a.highlight(e.trim().replaceAll(`	
`,""),a.languages.html,"html")});return(e,Z)=>(V(),W("div",null,[S,n(I,{transitions:s(p),numRscs:3,complements:m},null,8,["transitions"]),q,t("div",z,[t("pre",{innerHTML:g.value,class:"language-javascript"},null,8,A)]),t("div",E,[t("pre",{innerHTML:h.value,class:"language-html"},null,8,J)]),K,n(s(P),{rscs:s(d),transitions:s(p)},{preloader:r(o=>[n(s(C),c(i(o)),null,16)]),caption:r(o=>[n(s(f),c(i(o)),{default:r(u=>[t("h3",null,[t("a",{href:_(u.caption),target:"_blank"},D(u.caption),9,N)])]),_:2},1040)]),controls:r(o=>[n(s(F),c(i(o)),null,16)]),_:1},8,["rscs","transitions"]),Y,t("div",y,[t("pre",{innerHTML:v.value,class:"language-javascript"},null,8,G)]),t("div",O,[t("pre",{innerHTML:x.value,class:"language-html"},null,8,Q)])]))}}),ot=R(U,[["__file","FluxCaption.vue"]]);export{ot as default};
