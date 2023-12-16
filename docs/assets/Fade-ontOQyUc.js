import{g as _,E as r,i as g,o as n,c as i,a as u,u as o,b as t,H as f,J as v,F as h,q as D,C as x,_ as F}from"./app-6THF0TDW.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as V}from"./slider-Bf20jKdu.js";import{U as j}from"./vue-flux-P32zUH6D.js";import w from"./Demo-8OeeziKn.js";import{d as R,f as S,e as T}from"./constants-vSRoptby.js";import"./Images-07XQOKXj.js";const U={class:"demo"},b=t("h3",null,"Options",-1),k=t("span",null,"Total duration:",-1),B=t("span",null,"Easing:",-1),E=t("h3",null,"Source",-1),H={class:"language-javascript","data-ext":"js"},L=["innerHTML"],M=_({__name:"Fade",setup(y){const p={autohideTime:0},s=r([{component:j,options:r({totalDuration:1200,easing:"ease-in"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
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
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,a)=>(n(),i("div",U,[u(w,{options:p,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),b,t("label",null,[k,u(o(V),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":a[0]||(a[0]=e=>o(s)[0].options.totalDuration=e),min:o(R),max:o(S),onSlide:a[1]||(a[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[B,f(t("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>o(s)[0].options.easing=e)},[(n(!0),i(h,null,D(o(T),e=>(n(),i("option",{key:e},x(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),E,t("div",H,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,L)])]))}}),z=F(M,[["__file","Fade.vue"]]);export{z as default};
