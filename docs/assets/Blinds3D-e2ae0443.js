import{g,E as m,i as _,o as i,c as a,a as n,u as o,d as t,H as f,J as v,F as x,q as V,B as y,_ as B}from"./app-732a0dff.js";import{P as p}from"./prism-5c0d5a27.js";import{m as r}from"./slider-48c4d421.js";import{c as T}from"./vue-flux-a0dba35f.js";import h from"./Demo-a05ef849.js";import{m as S,a as b,b as j,c as w,e as R}from"./constants-e7e525a7.js";import"./Images-80560c64.js";const U={class:"demo"},$=t("h3",null,"Options",-1),k=t("span",null,"Columns:",-1),E=t("span",null,"Tile duration:",-1),H=t("span",null,"Tile delay:",-1),L=t("span",null,"Easing:",-1),M=t("h3",null,"Source",-1),C={class:"language-javascript","data-ext":"js"},F=["innerHTML"],J=g({__name:"Blinds3D",setup(N){const d={autohideTime:0},e=m([{component:T,options:m({cols:6,tileDuration:800,tileDelay:150,easing:"ease-out"})}]),c={preloader:!0,controls:!0},D=_(()=>{let u=`
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
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,s)=>(i(),a("div",U,[n(h,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),$,t("label",null,[k,n(o(r),{modelValue:o(e)[0].options.cols,"onUpdate:modelValue":s[0]||(s[0]=l=>o(e)[0].options.cols=l),min:4,max:30,onSlide:s[1]||(s[1]=l=>o(e)[0].options.cols=l)},null,8,["modelValue"])]),t("label",null,[E,n(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":s[2]||(s[2]=l=>o(e)[0].options.tileDuration=l),min:o(S),max:o(b),onSlide:s[3]||(s[3]=l=>o(e)[0].options.tileDuration=l)},null,8,["modelValue","min","max"])]),t("label",null,[H,n(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":s[4]||(s[4]=l=>o(e)[0].options.tileDelay=l),min:o(j),max:o(w),onSlide:s[5]||(s[5]=l=>o(e)[0].options.tileDelay=l)},null,8,["modelValue","min","max"])]),t("label",null,[L,f(t("select",{"onUpdate:modelValue":s[6]||(s[6]=l=>o(e)[0].options.easing=l)},[(i(!0),a(x,null,V(o(R),l=>(i(),a("option",{key:l},y(l),1))),128))],512),[[v,o(e)[0].options.easing]])]),M,t("div",C,[t("pre",{innerHTML:D.value,class:"language-javascript"},null,8,F)])]))}}),K=B(J,[["__file","Blinds3D.vue"]]);export{K as default};
