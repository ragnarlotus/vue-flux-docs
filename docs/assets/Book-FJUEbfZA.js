import{g as _,E as r,i as g,o as a,c as i,a as u,u as o,d as t,H as f,J as v,F as h,q as D,B,_ as k}from"./app-8ofisRWT.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as x}from"./slider-nG48BaF2.js";import{i as V}from"./vue-flux-px7IYbV-.js";import j from"./Demo-gMcMLx0M.js";import{d as w,f as R,e as S}from"./constants-vSRoptby.js";import"./Images-jcl--gmI.js";const T={class:"demo"},E=t("h3",null,"Options",-1),H=t("span",null,"Total duration:",-1),L=t("span",null,"Easing:",-1),M=t("h3",null,"Source",-1),b={class:"language-javascript","data-ext":"js"},y=["innerHTML"],F=_({__name:"Book",setup(J){const p={autohideTime:0},s=r([{component:V,options:r({totalDuration:1200,easing:"ease-out"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
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
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,e)=>(a(),i("div",T,[u(j,{options:p,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),E,t("label",null,[H,u(o(x),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":e[0]||(e[0]=n=>o(s)[0].options.totalDuration=n),min:o(w),max:o(R),onSlide:e[1]||(e[1]=n=>o(s)[0].options.totalDuration=n)},null,8,["modelValue","min","max"])]),t("label",null,[L,f(t("select",{"onUpdate:modelValue":e[2]||(e[2]=n=>o(s)[0].options.easing=n)},[(a(!0),i(h,null,D(o(S),n=>(a(),i("option",{key:n},B(n),1))),128))],512),[[v,o(s)[0].options.easing]])]),M,t("div",b,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,y)])]))}}),z=k(F,[["__file","Book.vue"]]);export{z as default};
