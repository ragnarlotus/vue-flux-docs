import{f as g,E as m,h as f,o as a,c as r,a as n,u as o,d as t,H as V,J as _,F as v,p as x,B as w,_ as y}from"./app-4b2e338b.js";import{P as p}from"./prism-5c0d5a27.js";import{m as i}from"./slider-1af67187.js";import{t as B}from"./vue-flux-0735f99c.js";import T from"./Demo-00068409.js";import{m as k,a as S,b,c as j,e as R}from"./constants-e7e525a7.js";import"./Images-4256fd34.js";const U={class:"demo"},$=t("h3",null,"Options",-1),h=t("span",null,"Rows:",-1),E=t("span",null,"Columns:",-1),H=t("span",null,"Tile duration:",-1),L=t("span",null,"Tile delay:",-1),M=t("span",null,"Easing:",-1),C=t("h3",null,"Source",-1),F={class:"language-javascript","data-ext":"js"},J=["innerHTML"],N=g({__name:"Blocks1",setup(P){const d={autohideTime:0},l=m([{component:B,options:m({rows:0,cols:8,tileDuration:300,tileDelay:1e3,easing:"linear"})}]),c={preloader:!0,controls:!0},D=f(()=>{let u=`
import {
	Blocks1,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Blocks1,
		options: shallowReactive({
			rows: ${l[0].options.rows},
			cols: ${l[0].options.cols},
			tileDuration: ${l[0].options.tileDuration},
			tileDelay: ${l[0].options.tileDelay},
			easing: '${l[0].options.easing}',
		}),
	},
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,e)=>(a(),r("div",U,[n(T,{options:d,transitions:o(l),numRscs:12,complements:c},null,8,["transitions"]),$,t("label",null,[h,n(o(i),{modelValue:o(l)[0].options.rows,"onUpdate:modelValue":e[0]||(e[0]=s=>o(l)[0].options.rows=s),min:0,max:20,onSlide:e[1]||(e[1]=s=>o(l)[0].options.rows=s)},null,8,["modelValue"])]),t("label",null,[E,n(o(i),{modelValue:o(l)[0].options.cols,"onUpdate:modelValue":e[2]||(e[2]=s=>o(l)[0].options.cols=s),min:2,max:20,onSlide:e[3]||(e[3]=s=>o(l)[0].options.cols=s)},null,8,["modelValue"])]),t("label",null,[H,n(o(i),{modelValue:o(l)[0].options.tileDuration,"onUpdate:modelValue":e[4]||(e[4]=s=>o(l)[0].options.tileDuration=s),min:o(k),max:o(S),onSlide:e[5]||(e[5]=s=>o(l)[0].options.tileDuration=s)},null,8,["modelValue","min","max"])]),t("label",null,[L,n(o(i),{modelValue:o(l)[0].options.tileDelay,"onUpdate:modelValue":e[6]||(e[6]=s=>o(l)[0].options.tileDelay=s),min:o(b),max:o(j),onSlide:e[7]||(e[7]=s=>o(l)[0].options.tileDelay=s)},null,8,["modelValue","min","max"])]),t("label",null,[M,V(t("select",{"onUpdate:modelValue":e[8]||(e[8]=s=>o(l)[0].options.easing=s)},[(a(!0),r(v,null,x(o(R),s=>(a(),r("option",{key:s},w(s),1))),128))],512),[[_,o(l)[0].options.easing]])]),C,t("div",F,[t("pre",{innerHTML:D.value,class:"language-javascript"},null,8,J)])]))}}),Q=y(N,[["__file","Blocks1.vue"]]);export{Q as default};
