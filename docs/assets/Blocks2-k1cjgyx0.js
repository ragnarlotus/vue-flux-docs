import{f as g,E as m,h as f,o as a,c as r,a as n,u as o,b as t,H as V,J as _,F as v,p as x,C as w,_ as y}from"./app-f_FCzlUc.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as i}from"./slider-pQflgib0.js";import{o as T}from"./vue-flux-XHwbH0Ez.js";import k from"./Demo-wMdBEQu_.js";import{m as B,a as b,b as S,c as j,e as R}from"./constants-vSRoptby.js";import"./Images-P-QdXgH-.js";const U={class:"demo"},$=t("h3",null,"Options",-1),h=t("span",null,"Rows:",-1),C=t("span",null,"Columns:",-1),E=t("span",null,"Tile duration:",-1),H=t("span",null,"Tile delay:",-1),L=t("span",null,"Easing:",-1),M=t("h3",null,"Source",-1),F={class:"language-javascript","data-ext":"js"},J=["innerHTML"],N=g({__name:"Blocks2",setup(P){const d={autohideTime:0},l=m([{component:T,options:m({rows:0,cols:8,tileDuration:800,tileDelay:80,easing:"ease"})}]),c={preloader:!0,controls:!0},D=f(()=>{let u=`
import {
	Blocks2,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Blocks2,
		options: shallowReactive({
			rows: ${l[0].options.rows},
			cols: ${l[0].options.cols},
			tileDuration: ${l[0].options.tileDuration},
			tileDelay: ${l[0].options.tileDelay},
			easing: '${l[0].options.easing}',
		}),
	},
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,e)=>(a(),r("div",U,[n(k,{options:d,transitions:o(l),numRscs:12,complements:c},null,8,["transitions"]),$,t("label",null,[h,n(o(i),{modelValue:o(l)[0].options.rows,"onUpdate:modelValue":e[0]||(e[0]=s=>o(l)[0].options.rows=s),min:0,max:20,onSlide:e[1]||(e[1]=s=>o(l)[0].options.rows=s)},null,8,["modelValue"])]),t("label",null,[C,n(o(i),{modelValue:o(l)[0].options.cols,"onUpdate:modelValue":e[2]||(e[2]=s=>o(l)[0].options.cols=s),min:2,max:20,onSlide:e[3]||(e[3]=s=>o(l)[0].options.cols=s)},null,8,["modelValue"])]),t("label",null,[E,n(o(i),{modelValue:o(l)[0].options.tileDuration,"onUpdate:modelValue":e[4]||(e[4]=s=>o(l)[0].options.tileDuration=s),min:o(B),max:o(b),onSlide:e[5]||(e[5]=s=>o(l)[0].options.tileDuration=s)},null,8,["modelValue","min","max"])]),t("label",null,[H,n(o(i),{modelValue:o(l)[0].options.tileDelay,"onUpdate:modelValue":e[6]||(e[6]=s=>o(l)[0].options.tileDelay=s),min:o(S),max:o(j),onSlide:e[7]||(e[7]=s=>o(l)[0].options.tileDelay=s)},null,8,["modelValue","min","max"])]),t("label",null,[L,V(t("select",{"onUpdate:modelValue":e[8]||(e[8]=s=>o(l)[0].options.easing=s)},[(a(!0),r(v,null,x(o(R),s=>(a(),r("option",{key:s},w(s),1))),128))],512),[[_,o(l)[0].options.easing]])]),M,t("div",F,[t("pre",{innerHTML:D.value,class:"language-javascript"},null,8,J)])]))}}),Q=y(N,[["__file","Blocks2.vue"]]);export{Q as default};
