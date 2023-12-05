import{f as _,E as m,h as g,o as i,c as a,a as s,u as o,d as t,H as f,J as v,F as x,p as V,B as y,_ as B}from"./app-7e36012f.js";import{P as p}from"./prism-5c0d5a27.js";import{m as r}from"./slider-ebb44725.js";import{Q as T}from"./vue-flux-5e4dd4a6.js";import h from"./Demo-b98d5549.js";import{m as S,a as b,b as j,c as w,e as R}from"./constants-e7e525a7.js";import"./Images-a444c621.js";const U={class:"demo"},$=t("h3",null,"Options",-1),k=t("span",null,"Columns:",-1),E=t("span",null,"Tile duration:",-1),H=t("span",null,"Tile delay:",-1),L=t("span",null,"Easing:",-1),M=t("h3",null,"Source",-1),C={class:"language-javascript","data-ext":"js"},F=["innerHTML"],J=_({__name:"Blinds2D",setup(N){const d={autohideTime:0},e=m([{component:T,options:m({cols:10,tileDuration:800,tileDelay:100,easing:"linear"})}]),c={preloader:!0,controls:!0},D=g(()=>{let u=`
import {
	Blinds2D,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Blinds2D,
		options: shallowReactive({
			cols: ${e[0].options.cols},
			tileDuration: ${e[0].options.tileDuration},
			tileDelay: ${e[0].options.tileDelay},
			easing: '${e[0].options.easing}',
		}),
	},
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,n)=>(i(),a("div",U,[s(h,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),$,t("label",null,[k,s(o(r),{modelValue:o(e)[0].options.cols,"onUpdate:modelValue":n[0]||(n[0]=l=>o(e)[0].options.cols=l),min:4,max:30,onSlide:n[1]||(n[1]=l=>o(e)[0].options.cols=l)},null,8,["modelValue"])]),t("label",null,[E,s(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":n[2]||(n[2]=l=>o(e)[0].options.tileDuration=l),min:o(S),max:o(b),onSlide:n[3]||(n[3]=l=>o(e)[0].options.tileDuration=l)},null,8,["modelValue","min","max"])]),t("label",null,[H,s(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":n[4]||(n[4]=l=>o(e)[0].options.tileDelay=l),min:o(j),max:o(w),onSlide:n[5]||(n[5]=l=>o(e)[0].options.tileDelay=l)},null,8,["modelValue","min","max"])]),t("label",null,[L,f(t("select",{"onUpdate:modelValue":n[6]||(n[6]=l=>o(e)[0].options.easing=l)},[(i(!0),a(x,null,V(o(R),l=>(i(),a("option",{key:l},y(l),1))),128))],512),[[v,o(e)[0].options.easing]])]),M,t("div",C,[t("pre",{innerHTML:D.value,class:"language-javascript"},null,8,F)])]))}}),I=B(J,[["__file","Blinds2D.vue"]]);export{I as default};
