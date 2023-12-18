import{f as _,E as u,h as g,o as i,c as a,a as n,u as o,b as s,H as f,J as v,F as x,p as V,C as y,_ as T}from"./app-f_FCzlUc.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-pQflgib0.js";import{t as h}from"./vue-flux-XHwbH0Ez.js";import b from"./Demo-wMdBEQu_.js";import{m as S,a as j,b as Z,c as w,e as R}from"./constants-vSRoptby.js";import"./Images-P-QdXgH-.js";const U={class:"demo"},$=s("h3",null,"Options",-1),k=s("span",null,"Columns:",-1),B=s("span",null,"Tile duration:",-1),C=s("span",null,"Tile delay:",-1),E=s("span",null,"Easing:",-1),H=s("h3",null,"Source",-1),L={class:"language-javascript","data-ext":"js"},M=["innerHTML"],F=_({__name:"Zip",setup(J){const d={autohideTime:0},e=u([{component:h,options:u({cols:10,tileDuration:600,tileDelay:80,easing:"ease-in"})}]),c={preloader:!0,controls:!0},D=g(()=>{let p=`
import {
	Zip,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Zip,
		options: shallowReactive({
			cols: ${e[0].options.cols},
			tileDuration: ${e[0].options.tileDuration},
			tileDelay: ${e[0].options.tileDelay},
			easing: '${e[0].options.easing}',
		}),
	},
]);`;return m.highlight(p.trim(),m.languages.javascript,"javascript")});return(p,l)=>(i(),a("div",U,[n(b,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),$,s("label",null,[k,n(o(r),{modelValue:o(e)[0].options.cols,"onUpdate:modelValue":l[0]||(l[0]=t=>o(e)[0].options.cols=t),min:2,max:20,onSlide:l[1]||(l[1]=t=>o(e)[0].options.cols=t)},null,8,["modelValue"])]),s("label",null,[B,n(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":l[2]||(l[2]=t=>o(e)[0].options.tileDuration=t),min:o(S),max:o(j),onSlide:l[3]||(l[3]=t=>o(e)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),s("label",null,[C,n(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":l[4]||(l[4]=t=>o(e)[0].options.tileDelay=t),min:o(Z),max:o(w),onSlide:l[5]||(l[5]=t=>o(e)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),s("label",null,[E,f(s("select",{"onUpdate:modelValue":l[6]||(l[6]=t=>o(e)[0].options.easing=t)},[(i(!0),a(x,null,V(o(R),t=>(i(),a("option",{key:t},y(t),1))),128))],512),[[v,o(e)[0].options.easing]])]),H,s("div",L,[s("pre",{innerHTML:D.value,class:"language-javascript"},null,8,M)])]))}}),I=T(F,[["__file","Zip.vue"]]);export{I as default};
