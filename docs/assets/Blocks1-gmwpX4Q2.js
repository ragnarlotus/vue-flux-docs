import{f as g,E as m,h as f,o as a,c as r,a as t,u as o,b as n,H as V,J as _,F as v,p as x,C as w,_ as y}from"./app-f_FCzlUc.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as i}from"./slider-pQflgib0.js";import{s as T}from"./vue-flux-XHwbH0Ez.js";import k from"./Demo-wMdBEQu_.js";import{m as B,a as b,b as S,c as j,e as R}from"./constants-vSRoptby.js";import"./Images-P-QdXgH-.js";const U={class:"demo"},$=n("h3",null,"Options",-1),h=n("span",null,"Rows:",-1),C=n("span",null,"Columns:",-1),E=n("span",null,"Tile duration:",-1),H=n("span",null,"Tile delay:",-1),L=n("span",null,"Easing:",-1),M=n("h3",null,"Source",-1),F={class:"language-javascript","data-ext":"js"},J=["innerHTML"],N=g({__name:"Blocks1",setup(P){const d={autohideTime:0},l=m([{component:T,options:m({rows:0,cols:8,tileDuration:300,tileDelay:1e3,easing:"linear"})}]),c={preloader:!0,controls:!0},D=f(()=>{let u=`
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
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,e)=>(a(),r("div",U,[t(k,{options:d,transitions:o(l),numRscs:12,complements:c},null,8,["transitions"]),$,n("label",null,[h,t(o(i),{modelValue:o(l)[0].options.rows,"onUpdate:modelValue":e[0]||(e[0]=s=>o(l)[0].options.rows=s),min:0,max:20,onSlide:e[1]||(e[1]=s=>o(l)[0].options.rows=s)},null,8,["modelValue"])]),n("label",null,[C,t(o(i),{modelValue:o(l)[0].options.cols,"onUpdate:modelValue":e[2]||(e[2]=s=>o(l)[0].options.cols=s),min:2,max:20,onSlide:e[3]||(e[3]=s=>o(l)[0].options.cols=s)},null,8,["modelValue"])]),n("label",null,[E,t(o(i),{modelValue:o(l)[0].options.tileDuration,"onUpdate:modelValue":e[4]||(e[4]=s=>o(l)[0].options.tileDuration=s),min:o(B),max:o(b),onSlide:e[5]||(e[5]=s=>o(l)[0].options.tileDuration=s)},null,8,["modelValue","min","max"])]),n("label",null,[H,t(o(i),{modelValue:o(l)[0].options.tileDelay,"onUpdate:modelValue":e[6]||(e[6]=s=>o(l)[0].options.tileDelay=s),min:o(S),max:o(j),onSlide:e[7]||(e[7]=s=>o(l)[0].options.tileDelay=s)},null,8,["modelValue","min","max"])]),n("label",null,[L,V(n("select",{"onUpdate:modelValue":e[8]||(e[8]=s=>o(l)[0].options.easing=s)},[(a(!0),r(v,null,x(o(R),s=>(a(),r("option",{key:s},w(s),1))),128))],512),[[_,o(l)[0].options.easing]])]),M,n("div",F,[n("pre",{innerHTML:D.value,class:"language-javascript"},null,8,J)])]))}}),Q=y(N,[["__file","Blocks1.vue"]]);export{Q as default};
