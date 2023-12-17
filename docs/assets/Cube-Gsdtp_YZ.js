import{g as _,E as r,i as g,o as a,c as i,a as u,u as o,b as t,H as f,J as v,F as h,q as D,C as b,_ as x}from"./app-zCTnd8Wc.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as C}from"./slider-DmM7sOKr.js";import{l as V}from"./vue-flux-aT5qPPFS.js";import j from"./Demo-j09rccKv.js";import{d as w,f as R,e as S}from"./constants-vSRoptby.js";import"./Images-pD6-27jP.js";const T={class:"demo"},k=t("h3",null,"Options",-1),B=t("span",null,"Total duration:",-1),E=t("span",null,"Easing:",-1),H=t("h3",null,"Source",-1),L={class:"language-javascript","data-ext":"js"},M=["innerHTML"],y=_({__name:"Cube",setup(F){const p={autohideTime:0},s=r([{component:V,options:r({totalDuration:1400,easing:"ease-out"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
import {
	Cube,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Cube,
		options: shallowReactive({
			totalDuration: ${s[0].options.totalDuration},
			easing: '${s[0].options.easing}',
		}),
	},
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,n)=>(a(),i("div",T,[u(j,{options:p,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),k,t("label",null,[B,u(o(C),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":n[0]||(n[0]=e=>o(s)[0].options.totalDuration=e),min:o(w),max:o(R),onSlide:n[1]||(n[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[E,f(t("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>o(s)[0].options.easing=e)},[(a(!0),i(h,null,D(o(S),e=>(a(),i("option",{key:e},b(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),H,t("div",L,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,M)])]))}}),z=x(y,[["__file","Cube.vue"]]);export{z as default};
