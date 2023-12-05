import{f as _,E as r,h as f,o as a,c as i,a as u,u as o,d as t,H as g,J as v,F as h,p as D,B as S,_ as x}from"./app-7e36012f.js";import{P as p}from"./prism-5c0d5a27.js";import{m as V}from"./slider-ebb44725.js";import{J as j}from"./vue-flux-5e4dd4a6.js";import w from"./Demo-b98d5549.js";import{d as B,f as J,e as R}from"./constants-e7e525a7.js";import"./Images-a444c621.js";const T={class:"demo"},k=t("h3",null,"Options",-1),E=t("span",null,"Total duration:",-1),H=t("span",null,"Easing:",-1),L=t("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},b=["innerHTML"],y=_({__name:"Slide",setup(F){const m={autohideTime:0},s=r([{component:j,options:r({totalDuration:1400,easing:"ease-in-out"})}]),d={preloader:!0,controls:!0},c=f(()=>{let l=`
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
]);`;return p.highlight(l.trim(),p.languages.javascript,"javascript")});return(l,n)=>(a(),i("div",T,[u(w,{options:m,transitions:o(s),numRscs:12,complements:d},null,8,["transitions"]),k,t("label",null,[E,u(o(V),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":n[0]||(n[0]=e=>o(s)[0].options.totalDuration=e),min:o(B),max:o(J),onSlide:n[1]||(n[1]=e=>o(s)[0].options.totalDuration=e)},null,8,["modelValue","min","max"])]),t("label",null,[H,g(t("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>o(s)[0].options.easing=e)},[(a(!0),i(h,null,D(o(R),e=>(a(),i("option",{key:e},S(e),1))),128))],512),[[v,o(s)[0].options.easing]])]),L,t("div",M,[t("pre",{innerHTML:c.value,class:"language-javascript"},null,8,b)])]))}}),z=x(y,[["__file","Slide.vue"]]);export{z as default};
