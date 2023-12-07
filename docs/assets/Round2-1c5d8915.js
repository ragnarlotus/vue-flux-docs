import{g,E as m,i as c,o as a,c as r,a as s,u as o,d as n,H as f,J as v,F as x,q as _,B as w,_ as y}from"./app-732a0dff.js";import{P as p}from"./prism-5c0d5a27.js";import{m as i}from"./slider-48c4d421.js";import{p as R}from"./vue-flux-a0dba35f.js";import T from"./Demo-a05ef849.js";import{m as S,a as b,b as X,c as U,e as $}from"./constants-e7e525a7.js";import"./Images-80560c64.js";const j={class:"demo"},B=n("h3",null,"Options",-1),k=n("span",null,"Rows:",-1),E=n("span",null,"Columns:",-1),H=n("span",null,"Rotation X:",-1),L=n("span",null,"Tile duration:",-1),M=n("span",null,"Tile delay:",-1),C=n("span",null,"Easing:",-1),F=n("h3",null,"Source",-1),J={class:"language-javascript","data-ext":"js"},N=["innerHTML"],P=g({__name:"Round2",setup(q){const d={autohideTime:0},t=m([{component:R,options:m({rows:0,cols:9,rotateX:-540,tileDuration:800,tileDelay:100,easing:"ease-out"})}]),D={preloader:!0,controls:!0},V=c(()=>{let u=`
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
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,e)=>(a(),r("div",j,[s(T,{options:d,transitions:o(t),numRscs:12,complements:D},null,8,["transitions"]),B,n("label",null,[k,s(o(i),{modelValue:o(t)[0].options.rows,"onUpdate:modelValue":e[0]||(e[0]=l=>o(t)[0].options.rows=l),min:0,max:20,onSlide:e[1]||(e[1]=l=>o(t)[0].options.rows=l)},null,8,["modelValue"])]),n("label",null,[E,s(o(i),{modelValue:o(t)[0].options.cols,"onUpdate:modelValue":e[2]||(e[2]=l=>o(t)[0].options.cols=l),min:2,max:20,onSlide:e[3]||(e[3]=l=>o(t)[0].options.cols=l)},null,8,["modelValue"])]),n("label",null,[H,s(o(i),{modelValue:o(t)[0].options.rotateX,"onUpdate:modelValue":e[4]||(e[4]=l=>o(t)[0].options.rotateX=l),min:-1e3,max:1e3,onSlide:e[5]||(e[5]=l=>o(t)[0].options.rotateX=l)},null,8,["modelValue"])]),n("label",null,[L,s(o(i),{modelValue:o(t)[0].options.tileDuration,"onUpdate:modelValue":e[6]||(e[6]=l=>o(t)[0].options.tileDuration=l),min:o(S),max:o(b),onSlide:e[7]||(e[7]=l=>o(t)[0].options.tileDuration=l)},null,8,["modelValue","min","max"])]),n("label",null,[M,s(o(i),{modelValue:o(t)[0].options.tileDelay,"onUpdate:modelValue":e[8]||(e[8]=l=>o(t)[0].options.tileDelay=l),min:o(X),max:o(U),onSlide:e[9]||(e[9]=l=>o(t)[0].options.tileDelay=l)},null,8,["modelValue","min","max"])]),n("label",null,[C,f(n("select",{"onUpdate:modelValue":e[10]||(e[10]=l=>o(t)[0].options.easing=l)},[(a(!0),r(x,null,_(o($),l=>(a(),r("option",{key:l},w(l),1))),128))],512),[[v,o(t)[0].options.easing]])]),F,n("div",J,[n("pre",{innerHTML:V.value,class:"language-javascript"},null,8,N)])]))}}),Q=y(P,[["__file","Round2.vue"]]);export{Q as default};
