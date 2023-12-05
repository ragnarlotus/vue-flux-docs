import{f as _,E as r,h as f,o as a,c as i,a as u,u as o,d as t,H as g,J as v,F as h,p as D,B as x,_ as b}from"./app-fbfde9e5.js";import{P as p}from"./prism-5c0d5a27.js";import{m as C}from"./slider-93eda8bf.js";import{r as V}from"./vue-flux-5cdc7d97.js";import j from"./Demo-14c87d15.js";import{d as w,f as B,e as R}from"./constants-e7e525a7.js";import"./Images-9dbdb301.js";const S={class:"demo"},T=t("h3",null,"Options",-1),k=t("span",null,"Total duration:",-1),E=t("span",null,"Easing:",-1),H=t("h3",null,"Source",-1),L={class:"language-javascript","data-ext":"js"},M=["innerHTML"],y=_({__name:"Cube",setup(F){const m={autohideTime:0},s=r([{component:V,options:r({totalDuration:1400,easing:"ease-out"})}]),c={preloader:!0,controls:!0},d=f(()=>{let l=`
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
]);`;return p.highlight(l.trim(),p.languages.javascript,"javascript")});return(l,n)=>(a(),i("div",S,[u(j,{options:m,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),T,t("label",null,[k,u(o(C),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":n[0]||(n[0]=e=>o(s)[0].options.totalDuration=e),min:o(w),max:o(B),onSlide:n[1]||(n[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[E,g(t("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>o(s)[0].options.easing=e)},[(a(!0),i(h,null,D(o(R),e=>(a(),i("option",{key:e},x(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),H,t("div",L,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,M)])]))}}),z=b(y,[["__file","Cube.vue"]]);export{z as default};
