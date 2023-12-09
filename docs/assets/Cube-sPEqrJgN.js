import{g as _,E as r,i as g,o as a,c as i,a as u,u as o,d as t,H as f,J as v,F as h,q as D,B as x,_ as b}from"./app-50w0ji3D.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as C}from"./slider-1HQFI3OS.js";import{r as V}from"./vue-flux-mVziyI42.js";import j from"./Demo-k85ewrlh.js";import{d as w,f as B,e as R}from"./constants-vSRoptby.js";import"./Images-9SQftBuZ.js";const S={class:"demo"},T=t("h3",null,"Options",-1),k=t("span",null,"Total duration:",-1),E=t("span",null,"Easing:",-1),H=t("h3",null,"Source",-1),L={class:"language-javascript","data-ext":"js"},M=["innerHTML"],y=_({__name:"Cube",setup(F){const p={autohideTime:0},s=r([{component:V,options:r({totalDuration:1400,easing:"ease-out"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
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
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,n)=>(a(),i("div",S,[u(j,{options:p,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),T,t("label",null,[k,u(o(C),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":n[0]||(n[0]=e=>o(s)[0].options.totalDuration=e),min:o(w),max:o(B),onSlide:n[1]||(n[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[E,f(t("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>o(s)[0].options.easing=e)},[(a(!0),i(h,null,D(o(R),e=>(a(),i("option",{key:e},x(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),H,t("div",L,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,M)])]))}}),z=b(y,[["__file","Cube.vue"]]);export{z as default};
