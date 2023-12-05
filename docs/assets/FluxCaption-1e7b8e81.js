import{P as s}from"./prism-5c0d5a27.js";import{j as F,X as C,Y as P,M as w,c as B,e as k,i as b,r as j,o as R,a as H}from"./vue-flux-5e4dd4a6.js";import I from"./Demo-b98d5549.js";import{I as M}from"./Images-a444c621.js";import{f as L,E as T,h as n,o as V,c as W,a as r,u as o,d as e,w as l,n as i,k as c,B as D,_ as S}from"./app-7e36012f.js";const q=e("h2",null,"Default captions",-1),z=e("h3",null,"Source",-1),A={class:"language-javascript","data-ext":"js"},E=["innerHTML"],J={class:"language-html","data-ext":"html"},N=["innerHTML"],X=e("h2",null,"Custom captions",-1),Y=["href"],y=e("h3",null,"Source",-1),G={class:"language-javascript","data-ext":"js"},K=["innerHTML"],O={class:"language-html","data-ext":"html"},Q=["innerHTML"],U=L({__name:"FluxCaption",setup(Z){const u=T([B,k,b,j,R,H]),g={captions:!0,controls:!0,preloader:!0},h=n(()=>{let t=`
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
]);`;return s.highlight(t.trim(),s.languages.javascript,"javascript")}),d=n(()=>{const t=`
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
`,""),s.languages.html,"html")}),_=M.generate(3);function v(t){return"https://www.google.com/search?q="+t}const x=n(()=>{let t=`
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
]);`;return s.highlight(t.trim(),s.languages.javascript,"javascript")}),f=n(()=>{const t=`
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
					:href="'https://www.google.com/search?q='+ captionProps.currentResource?.rsc.caption"
					target="_blank"
				>
					{{ captionProps.currentResource?.rsc.caption }}
				</a>
			</h3>
		</FluxControls>
	</template>
</VueFlux>`;return s.highlight(t.trim().replaceAll(`	
`,""),s.languages.html,"html")});return(t,$)=>(V(),W("div",null,[q,r(I,{transitions:o(u),numRscs:3,complements:g},null,8,["transitions"]),z,e("div",A,[e("pre",{innerHTML:h.value,class:"language-javascript"},null,8,E)]),e("div",J,[e("pre",{innerHTML:d.value,class:"language-html"},null,8,N)]),X,r(o(w),{rscs:o(_),transitions:o(u)},{preloader:l(a=>[r(o(F),i(c(a)),null,16)]),caption:l(a=>[r(o(C),i(c(a)),{default:l(()=>{var p,m;return[e("h3",null,[e("a",{href:v((p=a.currentResource)==null?void 0:p.rsc.caption),target:"_blank"},D((m=a.currentResource)==null?void 0:m.rsc.caption),9,Y)])]}),_:2},1040)]),controls:l(a=>[r(o(P),i(c(a)),null,16)]),_:1},8,["rscs","transitions"]),y,e("div",G,[e("pre",{innerHTML:x.value,class:"language-javascript"},null,8,K)]),e("div",O,[e("pre",{innerHTML:f.value,class:"language-html"},null,8,Q)])]))}}),re=S(U,[["__file","FluxCaption.vue"]]);export{re as default};
