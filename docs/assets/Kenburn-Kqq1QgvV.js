import{g as _,E as l,i as g,o as a,c as i,a as u,u as o,d as t,H as f,J as v,F as h,q as D,B as x,_ as b}from"./app-DHB0SMXO.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as K}from"./slider-RiTPjGIc.js";import{K as V}from"./vue-flux-ZmG_q5VC.js";import j from"./Demo-pm3p9b02.js";import{d as w,f as B,e as R}from"./constants-vSRoptby.js";import"./Images-mRU4eiTg.js";const S={class:"demo"},T=t("h3",null,"Options",-1),k=t("span",null,"Total duration:",-1),E=t("span",null,"Easing:",-1),H=t("h3",null,"Source",-1),L={class:"language-javascript","data-ext":"js"},M=["innerHTML"],y=_({__name:"Kenburn",setup(F){const p={autohideTime:0},n=l([{component:V,options:l({totalDuration:1500,easing:"linear"})}]),c={preloader:!0,controls:!0},d=g(()=>{let r=`
import {
	Kenburn,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Kenburn,
		options: shallowReactive({
			totalDuration: ${n[0].options.totalDuration},
			easing: '${n[0].options.easing}',
		}),
	},
]);`;return m.highlight(r.trim(),m.languages.javascript,"javascript")});return(r,e)=>(a(),i("div",S,[u(j,{options:p,transitions:o(n),numRscs:12,complements:c},null,8,["transitions"]),T,t("label",null,[k,u(o(K),{modelValue:o(n)[0].options.totalDuration,"onUpdate:modelValue":e[0]||(e[0]=s=>o(n)[0].options.totalDuration=s),min:o(w),max:o(B),onSlide:e[1]||(e[1]=s=>o(n)[0].options.totalDuration=s)},null,8,["modelValue","min","max"])]),t("label",null,[E,f(t("select",{"onUpdate:modelValue":e[2]||(e[2]=s=>o(n)[0].options.easing=s)},[(a(!0),i(h,null,D(o(R),s=>(a(),i("option",{key:s},x(s),1))),128))],512),[[v,o(n)[0].options.easing]])]),H,t("div",L,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,M)])]))}}),O=b(y,[["__file","Kenburn.vue"]]);export{O as default};
