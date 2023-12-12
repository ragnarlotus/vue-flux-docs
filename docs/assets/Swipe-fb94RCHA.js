import{g as _,E as r,i as g,o as a,c as i,a as p,u as o,d as t,H as f,J as v,F as h,q as D,B as w,_ as S}from"./app-DHB0SMXO.js";import{P as u}from"./prism-cS1PeyxU.js";import{m as x}from"./slider-RiTPjGIc.js";import{U as V}from"./vue-flux-ZmG_q5VC.js";import j from"./Demo-pm3p9b02.js";import{d as B,f as R,e as T}from"./constants-vSRoptby.js";import"./Images-mRU4eiTg.js";const U={class:"demo"},k=t("h3",null,"Options",-1),E=t("span",null,"Total duration:",-1),H=t("span",null,"Easing:",-1),L=t("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},b=["innerHTML"],y=_({__name:"Swipe",setup(F){const m={autohideTime:0},s=r([{component:V,options:r({totalDuration:1400,easing:"ease-in-out"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
import {
	Swipe,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Swipe,
		options: shallowReactive({
			totalDuration: ${s[0].options.totalDuration},
			easing: '${s[0].options.easing}',
		}),
	},
]);`;return u.highlight(l.trim(),u.languages.javascript,"javascript")});return(l,n)=>(a(),i("div",U,[p(j,{options:m,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),k,t("label",null,[E,p(o(x),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":n[0]||(n[0]=e=>o(s)[0].options.totalDuration=e),min:o(B),max:o(R),onSlide:n[1]||(n[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[H,f(t("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>o(s)[0].options.easing=e)},[(a(!0),i(h,null,D(o(T),e=>(a(),i("option",{key:e},w(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),L,t("div",M,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,b)])]))}}),z=S(y,[["__file","Swipe.vue"]]);export{z as default};
