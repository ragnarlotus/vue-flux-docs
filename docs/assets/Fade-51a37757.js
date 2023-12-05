import{f as _,E as r,h as f,o as n,c as i,a as u,u as o,d as t,H as g,J as v,F as h,p as D,B as x,_ as F}from"./app-7e36012f.js";import{P as p}from"./prism-5c0d5a27.js";import{m as V}from"./slider-ebb44725.js";import{G as j}from"./vue-flux-5e4dd4a6.js";import w from"./Demo-b98d5549.js";import{d as B,f as R,e as S}from"./constants-e7e525a7.js";import"./Images-a444c621.js";const T={class:"demo"},k=t("h3",null,"Options",-1),E=t("span",null,"Total duration:",-1),H=t("span",null,"Easing:",-1),L=t("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},b=["innerHTML"],y=_({__name:"Fade",setup(G){const m={autohideTime:0},s=r([{component:j,options:r({totalDuration:1200,easing:"ease-in"})}]),d={preloader:!0,controls:!0},c=f(()=>{let l=`
import {
	Fade,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Fade,
		options: shallowReactive({
			totalDuration: ${s[0].options.totalDuration},
			easing: '${s[0].options.easing}',
		}),
	},
]);`;return p.highlight(l.trim(),p.languages.javascript,"javascript")});return(l,a)=>(n(),i("div",T,[u(w,{options:m,transitions:o(s),numRscs:12,complements:d},null,8,["transitions"]),k,t("label",null,[E,u(o(V),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":a[0]||(a[0]=e=>o(s)[0].options.totalDuration=e),min:o(B),max:o(R),onSlide:a[1]||(a[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[H,g(t("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>o(s)[0].options.easing=e)},[(n(!0),i(h,null,D(o(S),e=>(n(),i("option",{key:e},x(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),L,t("div",M,[t("pre",{innerHTML:c.value,class:"language-javascript"},null,8,b)])]))}}),q=F(y,[["__file","Fade.vue"]]);export{q as default};
