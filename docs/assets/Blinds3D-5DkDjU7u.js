import{f as _,E as m,h as g,o as i,c as a,a as n,u as o,b as t,H as f,J as v,F as x,p as V,C as y,_ as T}from"./app-f_FCzlUc.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-pQflgib0.js";import{p as B}from"./vue-flux-XHwbH0Ez.js";import h from"./Demo-wMdBEQu_.js";import{m as b,a as S,b as j,c as w,e as R}from"./constants-vSRoptby.js";import"./Images-P-QdXgH-.js";const U={class:"demo"},$=t("h3",null,"Options",-1),k=t("span",null,"Columns:",-1),C=t("span",null,"Tile duration:",-1),E=t("span",null,"Tile delay:",-1),H=t("span",null,"Easing:",-1),L=t("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},F=["innerHTML"],J=_({__name:"Blinds3D",setup(N){const d={autohideTime:0},e=m([{component:B,options:m({cols:6,tileDuration:800,tileDelay:150,easing:"ease-out"})}]),c={preloader:!0,controls:!0},D=g(()=>{let u=`
import {
	Blinds3D,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Blinds3D,
		options: shallowReactive({
			cols: ${e[0].options.cols},
			tileDuration: ${e[0].options.tileDuration},
			tileDelay: ${e[0].options.tileDelay},
			easing: '${e[0].options.easing}',
		}),
	},
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,s)=>(i(),a("div",U,[n(h,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),$,t("label",null,[k,n(o(r),{modelValue:o(e)[0].options.cols,"onUpdate:modelValue":s[0]||(s[0]=l=>o(e)[0].options.cols=l),min:4,max:30,onSlide:s[1]||(s[1]=l=>o(e)[0].options.cols=l)},null,8,["modelValue"])]),t("label",null,[C,n(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":s[2]||(s[2]=l=>o(e)[0].options.tileDuration=l),min:o(b),max:o(S),onSlide:s[3]||(s[3]=l=>o(e)[0].options.tileDuration=l)},null,8,["modelValue","min","max"])]),t("label",null,[E,n(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":s[4]||(s[4]=l=>o(e)[0].options.tileDelay=l),min:o(j),max:o(w),onSlide:s[5]||(s[5]=l=>o(e)[0].options.tileDelay=l)},null,8,["modelValue","min","max"])]),t("label",null,[H,f(t("select",{"onUpdate:modelValue":s[6]||(s[6]=l=>o(e)[0].options.easing=l)},[(i(!0),a(x,null,V(o(R),l=>(i(),a("option",{key:l},y(l),1))),128))],512),[[v,o(e)[0].options.easing]])]),L,t("div",M,[t("pre",{innerHTML:D.value,class:"language-javascript"},null,8,F)])]))}}),K=T(J,[["__file","Blinds3D.vue"]]);export{K as default};
