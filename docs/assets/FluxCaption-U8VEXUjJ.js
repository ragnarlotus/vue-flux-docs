import{P as s}from"./prism-cS1PeyxU.js";import{K as F,j as C,H as P,Y as w,p as B,o as b,a as k,l as j,r as H,u as R}from"./vue-flux--F8xa8iS.js";import I from"./Demo-nlpFG_1z.js";import{I as L}from"./Images-0G4Yedb4.js";import{g as M,E as T,i as r,o as V,c as W,a as n,u as o,b as e,w as l,l as i,n as c,C as D,_ as S}from"./app-pGooBgpL.js";const q=e("h2",null,"Default captions",-1),z=e("h3",null,"Source",-1),A={class:"language-javascript","data-ext":"js"},E=["innerHTML"],J={class:"language-html","data-ext":"html"},K=["innerHTML"],N=e("h2",null,"Custom captions",-1),Y=["href"],y=e("h3",null,"Source",-1),G={class:"language-javascript","data-ext":"js"},O=["innerHTML"],Q={class:"language-html","data-ext":"html"},U=["innerHTML"],X=M({__name:"FluxCaption",setup(Z){const u=T([B,b,k,j,H,R]),g={captions:!0,controls:!0,preloader:!0},h=r(()=>{let t=`
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
]);`;return s.highlight(t.trim(),s.languages.javascript,"javascript")}),d=r(()=>{const t=`
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
</VueFlux>`;return s.highlight(t.trim().replaceAll(`	
`,""),s.languages.html,"html")}),_=L.generate(3);function v(t){return"https://www.google.com/search?q="+t}const x=r(()=>{let t=`
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
}`;return s.highlight(t.trim(),s.languages.javascript,"javascript")}),f=r(()=>{const t=`
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
		<FluxControls v-bind="controlsProps">
			<h3>
				<a
					:href="getSearch(captionProps.currentResource?.rsc.caption)"
					target="_blank"
				>
					{{ captionProps.currentResource?.rsc.caption }}
				</a>
			</h3>
		</FluxControls>
	</template>
</VueFlux>`;return s.highlight(t.trim().replaceAll(`	
`,""),s.languages.html,"html")});return(t,$)=>(V(),W("div",null,[q,n(I,{transitions:o(u),numRscs:3,complements:g},null,8,["transitions"]),z,e("div",A,[e("pre",{innerHTML:h.value,class:"language-javascript"},null,8,E)]),e("div",J,[e("pre",{innerHTML:d.value,class:"language-html"},null,8,K)]),N,n(o(w),{rscs:o(_),transitions:o(u)},{preloader:l(a=>[n(o(F),c(i(a)),null,16)]),caption:l(a=>[n(o(C),c(i(a)),{default:l(()=>{var p,m;return[e("h3",null,[e("a",{href:v((p=a.currentResource)==null?void 0:p.rsc.caption),target:"_blank"},D((m=a.currentResource)==null?void 0:m.rsc.caption),9,Y)])]}),_:2},1040)]),controls:l(a=>[n(o(P),c(i(a)),null,16)]),_:1},8,["rscs","transitions"]),y,e("div",G,[e("pre",{innerHTML:x.value,class:"language-javascript"},null,8,O)]),e("div",Q,[e("pre",{innerHTML:f.value,class:"language-html"},null,8,U)])]))}}),ne=S(X,[["__file","FluxCaption.vue"]]);export{ne as default};
