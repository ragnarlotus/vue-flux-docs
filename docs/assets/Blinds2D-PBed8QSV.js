import{g,E as m,i as _,o as i,c as a,a as s,u as o,d as t,H as f,J as v,F as x,q as V,B as y,_ as B}from"./app-50w0ji3D.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-1HQFI3OS.js";import{Q as T}from"./vue-flux-mVziyI42.js";import h from"./Demo-k85ewrlh.js";import{m as S,a as b,b as j,c as w,e as R}from"./constants-vSRoptby.js";import"./Images-9SQftBuZ.js";const U={class:"demo"},$=t("h3",null,"Options",-1),k=t("span",null,"Columns:",-1),E=t("span",null,"Tile duration:",-1),H=t("span",null,"Tile delay:",-1),L=t("span",null,"Easing:",-1),M=t("h3",null,"Source",-1),C={class:"language-javascript","data-ext":"js"},F=["innerHTML"],J=g({__name:"Blinds2D",setup(N){const d={autohideTime:0},e=m([{component:T,options:m({cols:10,tileDuration:800,tileDelay:100,easing:"linear"})}]),c={preloader:!0,controls:!0},D=_(()=>{let u=`
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
