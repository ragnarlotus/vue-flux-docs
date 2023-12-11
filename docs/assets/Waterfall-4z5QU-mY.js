import{g as c,E as r,i as f,o as D,c as _,a as s,u as o,d as n,H as g,I as v,_ as x}from"./app-8ofisRWT.js";import{P as u}from"./prism-cS1PeyxU.js";import{m as i}from"./slider-nG48BaF2.js";import{Z as V}from"./vue-flux-px7IYbV-.js";import y from"./Demo-gMcMLx0M.js";import{m as T,a as b,b as h,c as j}from"./constants-vSRoptby.js";import"./Images-jcl--gmI.js";const W={class:"demo"},w=n("h3",null,"Options",-1),R=n("span",null,"Columns:",-1),S=n("span",null,"Tile duration:",-1),U=n("span",null,"Tile delay:",-1),$=n("span",null,"Easing:",-1),B=n("h3",null,"Source",-1),E={class:"language-javascript","data-ext":"js"},H=["innerHTML"],M=c({__name:"Waterfall",setup(k){const m={autohideTime:0},l=r([{component:V,options:r({cols:10,tileDuration:600,tileDelay:90,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"})}]),p={preloader:!0,controls:!0},d=f(()=>{let a=`
import {
	Waterfall,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Waterfall,
		options: shallowReactive({
			cols: ${l[0].options.cols},
			tileDuration: ${l[0].options.tileDuration},
			tileDelay: ${l[0].options.tileDelay},
			easing: '${l[0].options.easing}',
		}),
	},
]);`;return u.highlight(a.trim(),u.languages.javascript,"javascript")});return(a,e)=>(D(),_("div",W,[s(y,{options:m,transitions:o(l),numRscs:12,complements:p},null,8,["transitions"]),w,n("label",null,[R,s(o(i),{modelValue:o(l)[0].options.cols,"onUpdate:modelValue":e[0]||(e[0]=t=>o(l)[0].options.cols=t),min:4,max:30,onSlide:e[1]||(e[1]=t=>o(l)[0].options.cols=t)},null,8,["modelValue"])]),n("label",null,[S,s(o(i),{modelValue:o(l)[0].options.tileDuration,"onUpdate:modelValue":e[2]||(e[2]=t=>o(l)[0].options.tileDuration=t),min:o(T),max:o(b),onSlide:e[3]||(e[3]=t=>o(l)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),n("label",null,[U,s(o(i),{modelValue:o(l)[0].options.tileDelay,"onUpdate:modelValue":e[4]||(e[4]=t=>o(l)[0].options.tileDelay=t),min:o(h),max:o(j),onSlide:e[5]||(e[5]=t=>o(l)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),n("label",null,[$,g(n("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=t=>o(l)[0].options.easing=t)},null,512),[[v,o(l)[0].options.easing]])]),B,n("div",E,[n("pre",{innerHTML:d.value,class:"language-javascript"},null,8,H)])]))}}),J=x(M,[["__file","Waterfall.vue"]]);export{J as default};
