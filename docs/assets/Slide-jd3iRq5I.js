import{g as _,E as r,i as g,o as a,c as i,a as u,u as o,b as t,H as f,J as v,F as h,q as D,B as S,_ as x}from"./app-SStEjskS.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as V}from"./slider-hgcxarFB.js";import{g as j}from"./vue-flux-xkNGD8Rr.js";import w from"./Demo-YRqIvizg.js";import{d as B,f as R,e as T}from"./constants-vSRoptby.js";import"./Images-gE8WO_fq.js";const b={class:"demo"},k=t("h3",null,"Options",-1),E=t("span",null,"Total duration:",-1),H=t("span",null,"Easing:",-1),L=t("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},q=["innerHTML"],y=_({__name:"Slide",setup(F){const p={autohideTime:0},s=r([{component:j,options:r({totalDuration:1400,easing:"ease-in-out"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
import {
	Slide,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Slide,
		options: shallowReactive({
			totalDuration: ${s[0].options.totalDuration},
			easing: '${s[0].options.easing}',
		}),
	},
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,n)=>(a(),i("div",b,[u(w,{options:p,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),k,t("label",null,[E,u(o(V),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":n[0]||(n[0]=e=>o(s)[0].options.totalDuration=e),min:o(B),max:o(R),onSlide:n[1]||(n[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[H,f(t("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>o(s)[0].options.easing=e)},[(a(!0),i(h,null,D(o(T),e=>(a(),i("option",{key:e},S(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),L,t("div",M,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,q)])]))}}),z=x(y,[["__file","Slide.vue"]]);export{z as default};
