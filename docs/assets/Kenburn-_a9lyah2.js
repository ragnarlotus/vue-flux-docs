import{g as _,E as l,i as g,o as a,c as i,a as u,u as o,b as t,H as f,J as v,F as h,q as D,B as b,_ as x}from"./app-k9p8jFez.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as V}from"./slider-YGWCqJM_.js";import{J as j}from"./vue-flux-EKi73fdj.js";import K from"./Demo-cznZcEo2.js";import{d as w,f as B,e as J}from"./constants-vSRoptby.js";import"./Images-emnYdbkt.js";const R={class:"demo"},S=t("h3",null,"Options",-1),T=t("span",null,"Total duration:",-1),k=t("span",null,"Easing:",-1),E=t("h3",null,"Source",-1),H={class:"language-javascript","data-ext":"js"},L=["innerHTML"],M=_({__name:"Kenburn",setup(y){const p={autohideTime:0},n=l([{component:j,options:l({totalDuration:1500,easing:"linear"})}]),c={preloader:!0,controls:!0},d=g(()=>{let r=`
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
]);`;return m.highlight(r.trim(),m.languages.javascript,"javascript")});return(r,e)=>(a(),i("div",R,[u(K,{options:p,transitions:o(n),numRscs:12,complements:c},null,8,["transitions"]),S,t("label",null,[T,u(o(V),{modelValue:o(n)[0].options.totalDuration,"onUpdate:modelValue":e[0]||(e[0]=s=>o(n)[0].options.totalDuration=s),min:o(w),max:o(B),onSlide:e[1]||(e[1]=s=>o(n)[0].options.totalDuration=s)},null,8,["modelValue","min","max"])]),t("label",null,[k,f(t("select",{"onUpdate:modelValue":e[2]||(e[2]=s=>o(n)[0].options.easing=s)},[(a(!0),i(h,null,D(o(J),s=>(a(),i("option",{key:s},b(s),1))),128))],512),[[v,o(n)[0].options.easing]])]),E,t("div",H,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,L)])]))}}),O=x(M,[["__file","Kenburn.vue"]]);export{O as default};
