import{g,E as m,i as _,o as i,c as a,a as t,u as o,b as s,H as f,J as v,F as x,q as V,B as y,_ as B}from"./app-k9p8jFez.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-YGWCqJM_.js";import{h as T}from"./vue-flux-EKi73fdj.js";import h from"./Demo-cznZcEo2.js";import{m as b,a as S,b as j,c as w,e as R}from"./constants-vSRoptby.js";import"./Images-emnYdbkt.js";const U={class:"demo"},$=s("h3",null,"Options",-1),k=s("span",null,"Columns:",-1),E=s("span",null,"Tile duration:",-1),H=s("span",null,"Tile delay:",-1),L=s("span",null,"Easing:",-1),M=s("h3",null,"Source",-1),C={class:"language-javascript","data-ext":"js"},F=["innerHTML"],J=g({__name:"Blinds2D",setup(N){const d={autohideTime:0},e=m([{component:T,options:m({cols:10,tileDuration:800,tileDelay:100,easing:"linear"})}]),c={preloader:!0,controls:!0},D=_(()=>{let u=`
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
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,n)=>(i(),a("div",U,[t(h,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),$,s("label",null,[k,t(o(r),{modelValue:o(e)[0].options.cols,"onUpdate:modelValue":n[0]||(n[0]=l=>o(e)[0].options.cols=l),min:4,max:30,onSlide:n[1]||(n[1]=l=>o(e)[0].options.cols=l)},null,8,["modelValue"])]),s("label",null,[E,t(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":n[2]||(n[2]=l=>o(e)[0].options.tileDuration=l),min:o(b),max:o(S),onSlide:n[3]||(n[3]=l=>o(e)[0].options.tileDuration=l)},null,8,["modelValue","min","max"])]),s("label",null,[H,t(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":n[4]||(n[4]=l=>o(e)[0].options.tileDelay=l),min:o(j),max:o(w),onSlide:n[5]||(n[5]=l=>o(e)[0].options.tileDelay=l)},null,8,["modelValue","min","max"])]),s("label",null,[L,f(s("select",{"onUpdate:modelValue":n[6]||(n[6]=l=>o(e)[0].options.easing=l)},[(i(!0),a(x,null,V(o(R),l=>(i(),a("option",{key:l},y(l),1))),128))],512),[[v,o(e)[0].options.easing]])]),M,s("div",C,[s("pre",{innerHTML:D.value,class:"language-javascript"},null,8,F)])]))}}),K=B(J,[["__file","Blinds2D.vue"]]);export{K as default};
