import{g,E as m,i as V,o as a,c as u,a as t,u as o,d as s,H as _,J as f,F as v,q as x,B as w,_ as y}from"./app-50w0ji3D.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as i}from"./slider-1HQFI3OS.js";import{u as R}from"./vue-flux-mVziyI42.js";import T from"./Demo-k85ewrlh.js";import{m as S,a as b,b as j,c as U,e as $}from"./constants-vSRoptby.js";import"./Images-9SQftBuZ.js";const B={class:"demo"},h=s("h3",null,"Options",-1),k=s("span",null,"Rows:",-1),E=s("span",null,"Columns:",-1),H=s("span",null,"Tile duration:",-1),L=s("span",null,"Tile delay:",-1),M=s("span",null,"Easing:",-1),C=s("h3",null,"Source",-1),F={class:"language-javascript","data-ext":"js"},J=["innerHTML"],N=g({__name:"Round1",setup(P){const d={autohideTime:0},l=m([{component:R,options:m({rows:0,cols:8,tileDuration:800,tileDelay:150,easing:"ease-out"})}]),c={preloader:!0,controls:!0},D=V(()=>{let r=`
import {
	Round1,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Round1,
		options: shallowReactive({
			rows: ${l[0].options.rows},
			cols: ${l[0].options.cols},
			tileDuration: ${l[0].options.tileDuration},
			tileDelay: ${l[0].options.tileDelay},
			easing: '${l[0].options.easing}',
		}),
	},
]);`;return p.highlight(r.trim(),p.languages.javascript,"javascript")});return(r,e)=>(a(),u("div",B,[t(T,{options:d,transitions:o(l),numRscs:12,complements:c},null,8,["transitions"]),h,s("label",null,[k,t(o(i),{modelValue:o(l)[0].options.rows,"onUpdate:modelValue":e[0]||(e[0]=n=>o(l)[0].options.rows=n),min:0,max:20,onSlide:e[1]||(e[1]=n=>o(l)[0].options.rows=n)},null,8,["modelValue"])]),s("label",null,[E,t(o(i),{modelValue:o(l)[0].options.cols,"onUpdate:modelValue":e[2]||(e[2]=n=>o(l)[0].options.cols=n),min:2,max:20,onSlide:e[3]||(e[3]=n=>o(l)[0].options.cols=n)},null,8,["modelValue"])]),s("label",null,[H,t(o(i),{modelValue:o(l)[0].options.tileDuration,"onUpdate:modelValue":e[4]||(e[4]=n=>o(l)[0].options.tileDuration=n),min:o(S),max:o(b),onSlide:e[5]||(e[5]=n=>o(l)[0].options.tileDuration=n)},null,8,["modelValue","min","max"])]),s("label",null,[L,t(o(i),{modelValue:o(l)[0].options.tileDelay,"onUpdate:modelValue":e[6]||(e[6]=n=>o(l)[0].options.tileDelay=n),min:o(j),max:o(U),onSlide:e[7]||(e[7]=n=>o(l)[0].options.tileDelay=n)},null,8,["modelValue","min","max"])]),s("label",null,[M,_(s("select",{"onUpdate:modelValue":e[8]||(e[8]=n=>o(l)[0].options.easing=n)},[(a(!0),u(v,null,x(o($),n=>(a(),u("option",{key:n},w(n),1))),128))],512),[[f,o(l)[0].options.easing]])]),C,s("div",F,[s("pre",{innerHTML:D.value,class:"language-javascript"},null,8,J)])]))}}),Q=y(N,[["__file","Round1.vue"]]);export{Q as default};
