import{f as _,E as l,h as f,o as a,c as i,a as u,u as o,b as t,H as g,J as v,F as h,p as D,C as b,_ as x}from"./app-f_FCzlUc.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as V}from"./slider-pQflgib0.js";import{J as j}from"./vue-flux-XHwbH0Ez.js";import K from"./Demo-wMdBEQu_.js";import{d as w,f as J,e as R}from"./constants-vSRoptby.js";import"./Images-P-QdXgH-.js";const S={class:"demo"},T=t("h3",null,"Options",-1),k=t("span",null,"Total duration:",-1),B=t("span",null,"Easing:",-1),E=t("h3",null,"Source",-1),H={class:"language-javascript","data-ext":"js"},L=["innerHTML"],M=_({__name:"Kenburn",setup(y){const m={autohideTime:0},n=l([{component:j,options:l({totalDuration:1500,easing:"linear"})}]),c={preloader:!0,controls:!0},d=f(()=>{let r=`
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
]);`;return p.highlight(r.trim(),p.languages.javascript,"javascript")});return(r,e)=>(a(),i("div",S,[u(K,{options:m,transitions:o(n),numRscs:12,complements:c},null,8,["transitions"]),T,t("label",null,[k,u(o(V),{modelValue:o(n)[0].options.totalDuration,"onUpdate:modelValue":e[0]||(e[0]=s=>o(n)[0].options.totalDuration=s),min:o(w),max:o(J),onSlide:e[1]||(e[1]=s=>o(n)[0].options.totalDuration=s)},null,8,["modelValue","min","max"])]),t("label",null,[B,g(t("select",{"onUpdate:modelValue":e[2]||(e[2]=s=>o(n)[0].options.easing=s)},[(a(!0),i(h,null,D(o(R),s=>(a(),i("option",{key:s},b(s),1))),128))],512),[[v,o(n)[0].options.easing]])]),E,t("div",H,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,L)])]))}}),q=x(M,[["__file","Kenburn.vue"]]);export{q as default};
