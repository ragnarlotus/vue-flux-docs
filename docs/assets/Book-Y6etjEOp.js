import{g as _,E as r,i as g,o as e,c as i,a as u,u as o,b as t,H as f,J as v,F as h,q as D,C as k,_ as x}from"./app-6THF0TDW.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as B}from"./slider-Bf20jKdu.js";import{a as V}from"./vue-flux-P32zUH6D.js";import j from"./Demo-8OeeziKn.js";import{d as w,f as R,e as S}from"./constants-vSRoptby.js";import"./Images-07XQOKXj.js";const T={class:"demo"},b=t("h3",null,"Options",-1),E=t("span",null,"Total duration:",-1),H=t("span",null,"Easing:",-1),L=t("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},y=["innerHTML"],C=_({__name:"Book",setup(F){const p={autohideTime:0},s=r([{component:V,options:r({totalDuration:1200,easing:"ease-out"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
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
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,a)=>(e(),i("div",T,[u(j,{options:p,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),b,t("label",null,[E,u(o(B),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":a[0]||(a[0]=n=>o(s)[0].options.totalDuration=n),min:o(w),max:o(R),onSlide:a[1]||(a[1]=n=>o(s)[0].options.totalDuration=n)},null,8,["modelValue","min","max"])]),t("label",null,[H,f(t("select",{"onUpdate:modelValue":a[2]||(a[2]=n=>o(s)[0].options.easing=n)},[(e(!0),i(h,null,D(o(S),n=>(e(),i("option",{key:n},k(n),1))),128))],512),[[v,o(s)[0].options.easing]])]),L,t("div",M,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,y)])]))}}),z=x(C,[["__file","Book.vue"]]);export{z as default};
