import{g as _,E as r,i as g,o as n,c as i,a as u,u as o,b as t,H as f,J as v,F as h,q as D,B as x,_ as F}from"./app-k9p8jFez.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as V}from"./slider-YGWCqJM_.js";import{U as j}from"./vue-flux-EKi73fdj.js";import w from"./Demo-cznZcEo2.js";import{d as B,f as R,e as S}from"./constants-vSRoptby.js";import"./Images-emnYdbkt.js";const T={class:"demo"},U=t("h3",null,"Options",-1),b=t("span",null,"Total duration:",-1),k=t("span",null,"Easing:",-1),E=t("h3",null,"Source",-1),H={class:"language-javascript","data-ext":"js"},L=["innerHTML"],M=_({__name:"Fade",setup(y){const p={autohideTime:0},s=r([{component:j,options:r({totalDuration:1200,easing:"ease-in"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
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
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,a)=>(n(),i("div",T,[u(w,{options:p,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),U,t("label",null,[b,u(o(V),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":a[0]||(a[0]=e=>o(s)[0].options.totalDuration=e),min:o(B),max:o(R),onSlide:a[1]||(a[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[k,f(t("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>o(s)[0].options.easing=e)},[(n(!0),i(h,null,D(o(S),e=>(n(),i("option",{key:e},x(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),E,t("div",H,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,L)])]))}}),z=F(M,[["__file","Fade.vue"]]);export{z as default};
