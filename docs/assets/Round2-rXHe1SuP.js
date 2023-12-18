import{f as g,E as m,h as f,o as a,c as r,a as s,u as o,b as n,H as c,J as v,F as x,p as _,C as w,_ as y}from"./app-f_FCzlUc.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as i}from"./slider-pQflgib0.js";import{h as R}from"./vue-flux-XHwbH0Ez.js";import T from"./Demo-wMdBEQu_.js";import{m as b,a as S,b as X,c as U,e as $}from"./constants-vSRoptby.js";import"./Images-P-QdXgH-.js";const j={class:"demo"},h=n("h3",null,"Options",-1),k=n("span",null,"Rows:",-1),B=n("span",null,"Columns:",-1),C=n("span",null,"Rotation X:",-1),E=n("span",null,"Tile duration:",-1),H=n("span",null,"Tile delay:",-1),L=n("span",null,"Easing:",-1),M=n("h3",null,"Source",-1),F={class:"language-javascript","data-ext":"js"},J=["innerHTML"],N=g({__name:"Round2",setup(P){const d={autohideTime:0},t=m([{component:R,options:m({rows:0,cols:9,rotateX:-540,tileDuration:800,tileDelay:100,easing:"ease-out"})}]),D={preloader:!0,controls:!0},V=f(()=>{let u=`
import {
	Round2,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Round2,
		options: shallowReactive({
			rows: ${t[0].options.rows},
			cols: ${t[0].options.cols},
			rotateX: ${t[0].options.rotateX},
			tileDuration: ${t[0].options.tileDuration},
			tileDelay: ${t[0].options.tileDelay},
			easing: '${t[0].options.easing}',
		}),
	},
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,e)=>(a(),r("div",j,[s(T,{options:d,transitions:o(t),numRscs:12,complements:D},null,8,["transitions"]),h,n("label",null,[k,s(o(i),{modelValue:o(t)[0].options.rows,"onUpdate:modelValue":e[0]||(e[0]=l=>o(t)[0].options.rows=l),min:0,max:20,onSlide:e[1]||(e[1]=l=>o(t)[0].options.rows=l)},null,8,["modelValue"])]),n("label",null,[B,s(o(i),{modelValue:o(t)[0].options.cols,"onUpdate:modelValue":e[2]||(e[2]=l=>o(t)[0].options.cols=l),min:2,max:20,onSlide:e[3]||(e[3]=l=>o(t)[0].options.cols=l)},null,8,["modelValue"])]),n("label",null,[C,s(o(i),{modelValue:o(t)[0].options.rotateX,"onUpdate:modelValue":e[4]||(e[4]=l=>o(t)[0].options.rotateX=l),min:-1e3,max:1e3,onSlide:e[5]||(e[5]=l=>o(t)[0].options.rotateX=l)},null,8,["modelValue"])]),n("label",null,[E,s(o(i),{modelValue:o(t)[0].options.tileDuration,"onUpdate:modelValue":e[6]||(e[6]=l=>o(t)[0].options.tileDuration=l),min:o(b),max:o(S),onSlide:e[7]||(e[7]=l=>o(t)[0].options.tileDuration=l)},null,8,["modelValue","min","max"])]),n("label",null,[H,s(o(i),{modelValue:o(t)[0].options.tileDelay,"onUpdate:modelValue":e[8]||(e[8]=l=>o(t)[0].options.tileDelay=l),min:o(X),max:o(U),onSlide:e[9]||(e[9]=l=>o(t)[0].options.tileDelay=l)},null,8,["modelValue","min","max"])]),n("label",null,[L,c(n("select",{"onUpdate:modelValue":e[10]||(e[10]=l=>o(t)[0].options.easing=l)},[(a(!0),r(x,null,_(o($),l=>(a(),r("option",{key:l},w(l),1))),128))],512),[[v,o(t)[0].options.easing]])]),M,n("div",F,[n("pre",{innerHTML:V.value,class:"language-javascript"},null,8,J)])]))}}),Q=y(N,[["__file","Round2.vue"]]);export{Q as default};
