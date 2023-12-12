import{g as _,E as r,i as g,o as n,c as i,a as u,u as o,d as t,H as f,J as v,F as h,q as D,B as x,_ as F}from"./app-DHB0SMXO.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as V}from"./slider-RiTPjGIc.js";import{G as j}from"./vue-flux-ZmG_q5VC.js";import w from"./Demo-pm3p9b02.js";import{d as B,f as R,e as S}from"./constants-vSRoptby.js";import"./Images-mRU4eiTg.js";const T={class:"demo"},k=t("h3",null,"Options",-1),E=t("span",null,"Total duration:",-1),H=t("span",null,"Easing:",-1),L=t("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},b=["innerHTML"],y=_({__name:"Fade",setup(G){const p={autohideTime:0},s=r([{component:j,options:r({totalDuration:1200,easing:"ease-in"})}]),d={preloader:!0,controls:!0},c=g(()=>{let l=`
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
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,a)=>(n(),i("div",T,[u(w,{options:p,transitions:o(s),numRscs:12,complements:d},null,8,["transitions"]),k,t("label",null,[E,u(o(V),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":a[0]||(a[0]=e=>o(s)[0].options.totalDuration=e),min:o(B),max:o(R),onSlide:a[1]||(a[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[H,f(t("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>o(s)[0].options.easing=e)},[(n(!0),i(h,null,D(o(S),e=>(n(),i("option",{key:e},x(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),L,t("div",M,[t("pre",{innerHTML:c.value,class:"language-javascript"},null,8,b)])]))}}),O=F(y,[["__file","Fade.vue"]]);export{O as default};
