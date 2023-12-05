import{f as _,E as u,h as g,o as i,c as a,a as n,u as o,d as s,H as f,J as v,F as x,p as V,B as y,_ as T}from"./app-4b2e338b.js";import{P as m}from"./prism-5c0d5a27.js";import{m as r}from"./slider-1af67187.js";import{o as h}from"./vue-flux-0735f99c.js";import S from"./Demo-00068409.js";import{m as b,a as j,b as W,c as w,e as B}from"./constants-e7e525a7.js";import"./Images-4256fd34.js";const R={class:"demo"},U=s("h3",null,"Options",-1),$=s("span",null,"Circles:",-1),k=s("span",null,"Tile duration:",-1),E=s("span",null,"Tile delay:",-1),H=s("span",null,"Easing:",-1),L=s("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},C=["innerHTML"],F=_({__name:"Warp",setup(J){const d={autohideTime:0},e=u([{component:h,options:u({circles:7,tileDuration:800,tileDelay:150,easing:"linear"})}]),c={preloader:!0,controls:!0},D=g(()=>{let p=`
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
]);`;return m.highlight(p.trim(),m.languages.javascript,"javascript")});return(p,l)=>(i(),a("div",R,[n(S,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),U,s("label",null,[$,n(o(r),{modelValue:o(e)[0].options.circles,"onUpdate:modelValue":l[0]||(l[0]=t=>o(e)[0].options.circles=t),min:4,max:20,onSlide:l[1]||(l[1]=t=>o(e)[0].options.circles=t)},null,8,["modelValue"])]),s("label",null,[k,n(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":l[2]||(l[2]=t=>o(e)[0].options.tileDuration=t),min:o(b),max:o(j),onSlide:l[3]||(l[3]=t=>o(e)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),s("label",null,[E,n(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":l[4]||(l[4]=t=>o(e)[0].options.tileDelay=t),min:o(W),max:o(w),onSlide:l[5]||(l[5]=t=>o(e)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),s("label",null,[H,f(s("select",{"onUpdate:modelValue":l[6]||(l[6]=t=>o(e)[0].options.easing=t)},[(i(!0),a(x,null,V(o(B),t=>(i(),a("option",{key:t},y(t),1))),128))],512),[[v,o(e)[0].options.easing]])]),L,s("div",M,[s("pre",{innerHTML:D.value,class:"language-javascript"},null,8,C)])]))}}),I=T(F,[["__file","Warp.vue"]]);export{I as default};
