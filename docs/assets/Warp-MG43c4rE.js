import{g,E as u,i as _,o as n,c as a,a as i,u as o,d as s,H as f,J as v,F as x,q as V,B as y,_ as T}from"./app-DHB0SMXO.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-RiTPjGIc.js";import{o as h}from"./vue-flux-ZmG_q5VC.js";import S from"./Demo-pm3p9b02.js";import{m as b,a as j,b as W,c as w,e as B}from"./constants-vSRoptby.js";import"./Images-mRU4eiTg.js";const R={class:"demo"},U=s("h3",null,"Options",-1),$=s("span",null,"Circles:",-1),k=s("span",null,"Tile duration:",-1),E=s("span",null,"Tile delay:",-1),H=s("span",null,"Easing:",-1),L=s("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},C=["innerHTML"],F=g({__name:"Warp",setup(J){const d={autohideTime:0},e=u([{component:h,options:u({circles:7,tileDuration:800,tileDelay:150,easing:"linear"})}]),c={preloader:!0,controls:!0},D=_(()=>{let p=`
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
]);`;return m.highlight(p.trim(),m.languages.javascript,"javascript")});return(p,l)=>(n(),a("div",R,[i(S,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),U,s("label",null,[$,i(o(r),{modelValue:o(e)[0].options.circles,"onUpdate:modelValue":l[0]||(l[0]=t=>o(e)[0].options.circles=t),min:4,max:20,onSlide:l[1]||(l[1]=t=>o(e)[0].options.circles=t)},null,8,["modelValue"])]),s("label",null,[k,i(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":l[2]||(l[2]=t=>o(e)[0].options.tileDuration=t),min:o(b),max:o(j),onSlide:l[3]||(l[3]=t=>o(e)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),s("label",null,[E,i(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":l[4]||(l[4]=t=>o(e)[0].options.tileDelay=t),min:o(W),max:o(w),onSlide:l[5]||(l[5]=t=>o(e)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),s("label",null,[H,f(s("select",{"onUpdate:modelValue":l[6]||(l[6]=t=>o(e)[0].options.easing=t)},[(n(!0),a(x,null,V(o(B),t=>(n(),a("option",{key:t},y(t),1))),128))],512),[[v,o(e)[0].options.easing]])]),L,s("div",M,[s("pre",{innerHTML:D.value,class:"language-javascript"},null,8,C)])]))}}),I=T(F,[["__file","Warp.vue"]]);export{I as default};
