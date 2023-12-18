import{f as _,E as r,h as f,o as n,c as i,a as u,u as o,b as t,H as g,J as v,F as h,p as D,C as x,_ as F}from"./app-f_FCzlUc.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as V}from"./slider-pQflgib0.js";import{U as j}from"./vue-flux-XHwbH0Ez.js";import w from"./Demo-wMdBEQu_.js";import{d as R,f as S,e as T}from"./constants-vSRoptby.js";import"./Images-P-QdXgH-.js";const U={class:"demo"},b=t("h3",null,"Options",-1),k=t("span",null,"Total duration:",-1),B=t("span",null,"Easing:",-1),E=t("h3",null,"Source",-1),H={class:"language-javascript","data-ext":"js"},L=["innerHTML"],M=_({__name:"Fade",setup(y){const m={autohideTime:0},s=r([{component:j,options:r({totalDuration:1200,easing:"ease-in"})}]),c={preloader:!0,controls:!0},d=f(()=>{let l=`
import {
	Fade,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Fade,
		options: shallowReactive({
			totalDuration: ${s[0].options.totalDuration},
			easing: '${s[0].options.easing}',
		}),
	},
]);`;return p.highlight(l.trim(),p.languages.javascript,"javascript")});return(l,a)=>(n(),i("div",U,[u(w,{options:m,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),b,t("label",null,[k,u(o(V),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":a[0]||(a[0]=e=>o(s)[0].options.totalDuration=e),min:o(R),max:o(S),onSlide:a[1]||(a[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[B,g(t("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>o(s)[0].options.easing=e)},[(n(!0),i(h,null,D(o(T),e=>(n(),i("option",{key:e},x(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),E,t("div",H,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,L)])]))}}),z=F(M,[["__file","Fade.vue"]]);export{z as default};
