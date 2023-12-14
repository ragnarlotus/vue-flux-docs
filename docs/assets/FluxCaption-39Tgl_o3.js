import{P as s}from"./prism-cS1PeyxU.js";import{K as f,H as C,I as P,Y as w,p as B,o as b,a as k,l as H,r as I,u as R}from"./vue-flux-EKi73fdj.js";import j from"./Demo-cznZcEo2.js";import{I as L}from"./Images-emnYdbkt.js";import{g as M,E as T,i as n,o as V,c as W,a as r,u as o,b as e,w as l,l as i,n as c,B as D,_ as S}from"./app-k9p8jFez.js";const q=e("h2",null,"Default captions",-1),z=e("h3",null,"Source",-1),A={class:"language-javascript","data-ext":"js"},E=["innerHTML"],J={class:"language-html","data-ext":"html"},K=["innerHTML"],N=e("h2",null,"Custom captions",-1),Y=["href"],y=e("h3",null,"Source",-1),G={class:"language-javascript","data-ext":"js"},O=["innerHTML"],Q={class:"language-html","data-ext":"html"},U=["innerHTML"],X=M({__name:"FluxCaption",setup(Z){const u=T([B,b,k,H,I,R]),g={captions:!0,controls:!0,preloader:!0},h=n(()=>{let t=`
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
`,""),s.languages.html,"html")}),_=L.generate(3);function v(t){return"https://www.google.com/search?q="+t}const x=n(()=>{let t=`
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
]);`;return s.highlight(t.trim(),s.languages.javascript,"javascript")}),F=n(()=>{const t=`
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
`,""),s.languages.html,"html")});return(t,$)=>(V(),W("div",null,[q,r(j,{transitions:o(u),numRscs:3,complements:g},null,8,["transitions"]),z,e("div",A,[e("pre",{innerHTML:h.value,class:"language-javascript"},null,8,E)]),e("div",J,[e("pre",{innerHTML:d.value,class:"language-html"},null,8,K)]),N,r(o(w),{rscs:o(_),transitions:o(u)},{preloader:l(a=>[r(o(f),c(i(a)),null,16)]),caption:l(a=>[r(o(C),c(i(a)),{default:l(()=>{var p,m;return[e("h3",null,[e("a",{href:v((p=a.currentResource)==null?void 0:p.rsc.caption),target:"_blank"},D((m=a.currentResource)==null?void 0:m.rsc.caption),9,Y)])]}),_:2},1040)]),controls:l(a=>[r(o(P),c(i(a)),null,16)]),_:1},8,["rscs","transitions"]),y,e("div",G,[e("pre",{innerHTML:x.value,class:"language-javascript"},null,8,O)]),e("div",Q,[e("pre",{innerHTML:F.value,class:"language-html"},null,8,U)])]))}}),re=S(X,[["__file","FluxCaption.vue"]]);export{re as default};
