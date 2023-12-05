import{f as _,E as m,h as g,o as s,c as a,a as l,u as o,d as i,H as f,J as v,F as x,p as V,B as y,_ as T}from"./app-4b2e338b.js";import{P as p}from"./prism-5c0d5a27.js";import{m as r}from"./slider-1af67187.js";import{s as h}from"./vue-flux-0735f99c.js";import C from"./Demo-00068409.js";import{m as S,a as b,b as j,c as w,e as B}from"./constants-e7e525a7.js";import"./Images-4256fd34.js";const R={class:"demo"},U=i("h3",null,"Options",-1),$=i("span",null,"Circles:",-1),k=i("span",null,"Tile duration:",-1),E=i("span",null,"Tile delay:",-1),H=i("span",null,"Easing:",-1),L=i("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},F=["innerHTML"],J=_({__name:"Concentric",setup(N){const c={autohideTime:0},e=m([{component:h,options:m({circles:7,tileDuration:800,tileDelay:150,easing:"linear"})}]),d={preloader:!0,controls:!0},D=g(()=>{let u=`
import {
	Concentric,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Concentric,
		options: shallowReactive({
			circles: ${e[0].options.circles},
			tileDuration: ${e[0].options.tileDuration},
			tileDelay: ${e[0].options.tileDelay},
			easing: '${e[0].options.easing}',
		}),
	},
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,n)=>(s(),a("div",R,[l(C,{options:c,transitions:o(e),numRscs:12,complements:d},null,8,["transitions"]),U,i("label",null,[$,l(o(r),{modelValue:o(e)[0].options.circles,"onUpdate:modelValue":n[0]||(n[0]=t=>o(e)[0].options.circles=t),min:4,max:20,onSlide:n[1]||(n[1]=t=>o(e)[0].options.circles=t)},null,8,["modelValue"])]),i("label",null,[k,l(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":n[2]||(n[2]=t=>o(e)[0].options.tileDuration=t),min:o(S),max:o(b),onSlide:n[3]||(n[3]=t=>o(e)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),i("label",null,[E,l(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":n[4]||(n[4]=t=>o(e)[0].options.tileDelay=t),min:o(j),max:o(w),onSlide:n[5]||(n[5]=t=>o(e)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),i("label",null,[H,f(i("select",{"onUpdate:modelValue":n[6]||(n[6]=t=>o(e)[0].options.easing=t)},[(s(!0),a(x,null,V(o(B),t=>(s(),a("option",{key:t},y(t),1))),128))],512),[[v,o(e)[0].options.easing]])]),L,i("div",M,[i("pre",{innerHTML:D.value,class:"language-javascript"},null,8,F)])]))}}),K=T(J,[["__file","Concentric.vue"]]);export{K as default};
