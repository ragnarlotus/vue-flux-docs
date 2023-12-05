import{f as _,E as r,h as f,o as a,c as i,a as u,u as o,d as t,H as g,J as v,F as h,p as D,B,_ as k}from"./app-4b2e338b.js";import{P as p}from"./prism-5c0d5a27.js";import{m as x}from"./slider-1af67187.js";import{i as V}from"./vue-flux-0735f99c.js";import j from"./Demo-00068409.js";import{d as w,f as R,e as S}from"./constants-e7e525a7.js";import"./Images-4256fd34.js";const T={class:"demo"},E=t("h3",null,"Options",-1),H=t("span",null,"Total duration:",-1),L=t("span",null,"Easing:",-1),M=t("h3",null,"Source",-1),b={class:"language-javascript","data-ext":"js"},y=["innerHTML"],F=_({__name:"Book",setup(J){const m={autohideTime:0},s=r([{component:V,options:r({totalDuration:1200,easing:"ease-out"})}]),c={preloader:!0,controls:!0},d=f(()=>{let l=`
import {
	Book,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Book,
		options: shallowReactive({
			totalDuration: ${s[0].options.totalDuration},
			easing: '${s[0].options.easing}',
		}),
	},
]);`;return p.highlight(l.trim(),p.languages.javascript,"javascript")});return(l,e)=>(a(),i("div",T,[u(j,{options:m,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),E,t("label",null,[H,u(o(x),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":e[0]||(e[0]=n=>o(s)[0].options.totalDuration=n),min:o(w),max:o(R),onSlide:e[1]||(e[1]=n=>o(s)[0].options.totalDuration=n)},null,8,["modelValue","min","max"])]),t("label",null,[L,g(t("select",{"onUpdate:modelValue":e[2]||(e[2]=n=>o(s)[0].options.easing=n)},[(a(!0),i(h,null,D(o(S),n=>(a(),i("option",{key:n},B(n),1))),128))],512),[[v,o(s)[0].options.easing]])]),M,t("div",b,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,y)])]))}}),z=k(F,[["__file","Book.vue"]]);export{z as default};
