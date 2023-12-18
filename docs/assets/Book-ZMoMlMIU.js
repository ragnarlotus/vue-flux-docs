import{f as _,E as r,h as f,o as e,c as i,a as u,u as o,b as t,H as g,J as v,F as h,p as D,C as k,_ as x}from"./app-f_FCzlUc.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as B}from"./slider-pQflgib0.js";import{a as V}from"./vue-flux-XHwbH0Ez.js";import j from"./Demo-wMdBEQu_.js";import{d as w,f as R,e as S}from"./constants-vSRoptby.js";import"./Images-P-QdXgH-.js";const T={class:"demo"},b=t("h3",null,"Options",-1),E=t("span",null,"Total duration:",-1),H=t("span",null,"Easing:",-1),L=t("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},y=["innerHTML"],C=_({__name:"Book",setup(F){const m={autohideTime:0},s=r([{component:V,options:r({totalDuration:1200,easing:"ease-out"})}]),c={preloader:!0,controls:!0},d=f(()=>{let l=`
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
]);`;return p.highlight(l.trim(),p.languages.javascript,"javascript")});return(l,a)=>(e(),i("div",T,[u(j,{options:m,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),b,t("label",null,[E,u(o(B),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":a[0]||(a[0]=n=>o(s)[0].options.totalDuration=n),min:o(w),max:o(R),onSlide:a[1]||(a[1]=n=>o(s)[0].options.totalDuration=n)},null,8,["modelValue","min","max"])]),t("label",null,[H,g(t("select",{"onUpdate:modelValue":a[2]||(a[2]=n=>o(s)[0].options.easing=n)},[(e(!0),i(h,null,D(o(S),n=>(e(),i("option",{key:n},k(n),1))),128))],512),[[v,o(s)[0].options.easing]])]),L,t("div",M,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,y)])]))}}),z=x(C,[["__file","Book.vue"]]);export{z as default};
