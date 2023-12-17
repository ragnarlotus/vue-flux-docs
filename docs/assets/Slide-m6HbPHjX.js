import{g as _,E as r,i as g,o as a,c as i,a as u,u as o,b as t,H as f,J as v,F as h,q as D,C as S,_ as x}from"./app-zCTnd8Wc.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as V}from"./slider-DmM7sOKr.js";import{q as j}from"./vue-flux-aT5qPPFS.js";import w from"./Demo-j09rccKv.js";import{d as R,f as T,e as b}from"./constants-vSRoptby.js";import"./Images-pD6-27jP.js";const k={class:"demo"},q=t("h3",null,"Options",-1),B=t("span",null,"Total duration:",-1),E=t("span",null,"Easing:",-1),H=t("h3",null,"Source",-1),L={class:"language-javascript","data-ext":"js"},M=["innerHTML"],y=_({__name:"Slide",setup(C){const p={autohideTime:0},s=r([{component:j,options:r({totalDuration:1400,easing:"ease-in-out"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
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
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,n)=>(a(),i("div",k,[u(w,{options:p,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),q,t("label",null,[B,u(o(V),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":n[0]||(n[0]=e=>o(s)[0].options.totalDuration=e),min:o(R),max:o(T),onSlide:n[1]||(n[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[E,f(t("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>o(s)[0].options.easing=e)},[(a(!0),i(h,null,D(o(b),e=>(a(),i("option",{key:e},S(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),H,t("div",L,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,M)])]))}}),z=x(y,[["__file","Slide.vue"]]);export{z as default};
