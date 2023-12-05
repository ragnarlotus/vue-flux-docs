import{f as _,E as l,h as f,o as a,c as i,a as u,u as o,d as t,H as g,J as v,F as h,p as D,B as x,_ as b}from"./app-fbfde9e5.js";import{P as p}from"./prism-5c0d5a27.js";import{m as K}from"./slider-93eda8bf.js";import{K as V}from"./vue-flux-5cdc7d97.js";import j from"./Demo-14c87d15.js";import{d as w,f as B,e as R}from"./constants-e7e525a7.js";import"./Images-9dbdb301.js";const S={class:"demo"},T=t("h3",null,"Options",-1),k=t("span",null,"Total duration:",-1),E=t("span",null,"Easing:",-1),H=t("h3",null,"Source",-1),L={class:"language-javascript","data-ext":"js"},M=["innerHTML"],y=_({__name:"Kenburn",setup(F){const m={autohideTime:0},n=l([{component:V,options:l({totalDuration:1500,easing:"linear"})}]),c={preloader:!0,controls:!0},d=f(()=>{let r=`
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
]);`;return p.highlight(r.trim(),p.languages.javascript,"javascript")});return(r,e)=>(a(),i("div",S,[u(j,{options:m,transitions:o(n),numRscs:12,complements:c},null,8,["transitions"]),T,t("label",null,[k,u(o(K),{modelValue:o(n)[0].options.totalDuration,"onUpdate:modelValue":e[0]||(e[0]=s=>o(n)[0].options.totalDuration=s),min:o(w),max:o(B),onSlide:e[1]||(e[1]=s=>o(n)[0].options.totalDuration=s)},null,8,["modelValue","min","max"])]),t("label",null,[E,g(t("select",{"onUpdate:modelValue":e[2]||(e[2]=s=>o(n)[0].options.easing=s)},[(a(!0),i(h,null,D(o(R),s=>(a(),i("option",{key:s},x(s),1))),128))],512),[[v,o(n)[0].options.easing]])]),H,t("div",L,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,M)])]))}}),q=b(y,[["__file","Kenburn.vue"]]);export{q as default};
