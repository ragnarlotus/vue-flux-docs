import{f as c,E as r,h as f,o as D,c as _,a as s,u as o,b as n,H as g,I as v,_ as x}from"./app-f_FCzlUc.js";import{P as u}from"./prism-cS1PeyxU.js";import{m as i}from"./slider-pQflgib0.js";import{e as V}from"./vue-flux-XHwbH0Ez.js";import y from"./Demo-wMdBEQu_.js";import{m as T,a as b,b as h,c as j}from"./constants-vSRoptby.js";import"./Images-P-QdXgH-.js";const W={class:"demo"},w=n("h3",null,"Options",-1),R=n("span",null,"Columns:",-1),S=n("span",null,"Tile duration:",-1),U=n("span",null,"Tile delay:",-1),$=n("span",null,"Easing:",-1),B=n("h3",null,"Source",-1),E={class:"language-javascript","data-ext":"js"},H=["innerHTML"],M=c({__name:"Waterfall",setup(k){const m={autohideTime:0},e=r([{component:V,options:r({cols:10,tileDuration:600,tileDelay:90,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"})}]),p={preloader:!0,controls:!0},d=f(()=>{let a=`
import {
	Waterfall,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Waterfall,
		options: shallowReactive({
			cols: ${e[0].options.cols},
			tileDuration: ${e[0].options.tileDuration},
			tileDelay: ${e[0].options.tileDelay},
			easing: '${e[0].options.easing}',
		}),
	},
]);`;return u.highlight(a.trim(),u.languages.javascript,"javascript")});return(a,l)=>(D(),_("div",W,[s(y,{options:m,transitions:o(e),numRscs:12,complements:p},null,8,["transitions"]),w,n("label",null,[R,s(o(i),{modelValue:o(e)[0].options.cols,"onUpdate:modelValue":l[0]||(l[0]=t=>o(e)[0].options.cols=t),min:4,max:30,onSlide:l[1]||(l[1]=t=>o(e)[0].options.cols=t)},null,8,["modelValue"])]),n("label",null,[S,s(o(i),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":l[2]||(l[2]=t=>o(e)[0].options.tileDuration=t),min:o(T),max:o(b),onSlide:l[3]||(l[3]=t=>o(e)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),n("label",null,[U,s(o(i),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":l[4]||(l[4]=t=>o(e)[0].options.tileDelay=t),min:o(h),max:o(j),onSlide:l[5]||(l[5]=t=>o(e)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),n("label",null,[$,g(n("input",{type:"text","onUpdate:modelValue":l[6]||(l[6]=t=>o(e)[0].options.easing=t)},null,512),[[v,o(e)[0].options.easing]])]),B,n("div",E,[n("pre",{innerHTML:d.value,class:"language-javascript"},null,8,H)])]))}}),O=x(M,[["__file","Waterfall.vue"]]);export{O as default};
