import{g,E as u,i as _,o as n,c as a,a as i,u as o,b as s,H as f,J as v,F as x,q as V,C as y,_ as T}from"./app-6THF0TDW.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-Bf20jKdu.js";import{r as b}from"./vue-flux-P32zUH6D.js";import h from"./Demo-8OeeziKn.js";import{m as S,a as j,b as W,c as w,e as R}from"./constants-vSRoptby.js";import"./Images-07XQOKXj.js";const U={class:"demo"},$=s("h3",null,"Options",-1),k=s("span",null,"Circles:",-1),B=s("span",null,"Tile duration:",-1),C=s("span",null,"Tile delay:",-1),E=s("span",null,"Easing:",-1),H=s("h3",null,"Source",-1),L={class:"language-javascript","data-ext":"js"},M=["innerHTML"],F=g({__name:"Warp",setup(J){const d={autohideTime:0},e=u([{component:b,options:u({circles:7,tileDuration:800,tileDelay:150,easing:"linear"})}]),c={preloader:!0,controls:!0},D=_(()=>{let p=`
import {
	Warp,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Warp,
		options: shallowReactive({
			circles: ${e[0].options.circles},
			tileDuration: ${e[0].options.tileDuration},
			tileDelay: ${e[0].options.tileDelay},
			easing: '${e[0].options.easing}',
		}),
	},
]);`;return m.highlight(p.trim(),m.languages.javascript,"javascript")});return(p,l)=>(n(),a("div",U,[i(h,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),$,s("label",null,[k,i(o(r),{modelValue:o(e)[0].options.circles,"onUpdate:modelValue":l[0]||(l[0]=t=>o(e)[0].options.circles=t),min:4,max:20,onSlide:l[1]||(l[1]=t=>o(e)[0].options.circles=t)},null,8,["modelValue"])]),s("label",null,[B,i(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":l[2]||(l[2]=t=>o(e)[0].options.tileDuration=t),min:o(S),max:o(j),onSlide:l[3]||(l[3]=t=>o(e)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),s("label",null,[C,i(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":l[4]||(l[4]=t=>o(e)[0].options.tileDelay=t),min:o(W),max:o(w),onSlide:l[5]||(l[5]=t=>o(e)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),s("label",null,[E,f(s("select",{"onUpdate:modelValue":l[6]||(l[6]=t=>o(e)[0].options.easing=t)},[(n(!0),a(x,null,V(o(R),t=>(n(),a("option",{key:t},y(t),1))),128))],512),[[v,o(e)[0].options.easing]])]),H,s("div",L,[s("pre",{innerHTML:D.value,class:"language-javascript"},null,8,M)])]))}}),I=T(F,[["__file","Warp.vue"]]);export{I as default};
