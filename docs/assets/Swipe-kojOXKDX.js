import{f as _,E as r,h as f,o as a,c as i,a as p,u as o,b as t,H as g,J as v,F as h,p as D,C as w,_ as S}from"./app-f_FCzlUc.js";import{P as u}from"./prism-cS1PeyxU.js";import{m as x}from"./slider-pQflgib0.js";import{Z as V}from"./vue-flux-XHwbH0Ez.js";import j from"./Demo-wMdBEQu_.js";import{d as R,f as T,e as b}from"./constants-vSRoptby.js";import"./Images-P-QdXgH-.js";const k={class:"demo"},B=t("h3",null,"Options",-1),E=t("span",null,"Total duration:",-1),H=t("span",null,"Easing:",-1),L=t("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},y=["innerHTML"],C=_({__name:"Swipe",setup(F){const m={autohideTime:0},s=r([{component:V,options:r({totalDuration:1400,easing:"ease-in-out"})}]),c={preloader:!0,controls:!0},d=f(()=>{let l=`
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
]);`;return u.highlight(l.trim(),u.languages.javascript,"javascript")});return(l,n)=>(a(),i("div",k,[p(j,{options:m,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),B,t("label",null,[E,p(o(x),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":n[0]||(n[0]=e=>o(s)[0].options.totalDuration=e),min:o(R),max:o(T),onSlide:n[1]||(n[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[H,g(t("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>o(s)[0].options.easing=e)},[(a(!0),i(h,null,D(o(b),e=>(a(),i("option",{key:e},w(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),L,t("div",M,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,y)])]))}}),q=S(C,[["__file","Swipe.vue"]]);export{q as default};
