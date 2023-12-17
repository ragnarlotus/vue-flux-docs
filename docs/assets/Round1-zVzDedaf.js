import{g,E as m,i as V,o as a,c as r,a as t,u as o,b as s,H as _,J as f,F as v,q as x,C as w,_ as y}from"./app-zCTnd8Wc.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as i}from"./slider-DmM7sOKr.js";import{m as R}from"./vue-flux-aT5qPPFS.js";import T from"./Demo-j09rccKv.js";import{m as b,a as S,b as j,c as U,e as $}from"./constants-vSRoptby.js";import"./Images-pD6-27jP.js";const h={class:"demo"},k=s("h3",null,"Options",-1),B=s("span",null,"Rows:",-1),C=s("span",null,"Columns:",-1),E=s("span",null,"Tile duration:",-1),H=s("span",null,"Tile delay:",-1),L=s("span",null,"Easing:",-1),M=s("h3",null,"Source",-1),F={class:"language-javascript","data-ext":"js"},J=["innerHTML"],N=g({__name:"Round1",setup(P){const d={autohideTime:0},l=m([{component:R,options:m({rows:0,cols:8,tileDuration:800,tileDelay:150,easing:"ease-out"})}]),c={preloader:!0,controls:!0},D=V(()=>{let u=`
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
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,e)=>(a(),r("div",h,[t(T,{options:d,transitions:o(l),numRscs:12,complements:c},null,8,["transitions"]),k,s("label",null,[B,t(o(i),{modelValue:o(l)[0].options.rows,"onUpdate:modelValue":e[0]||(e[0]=n=>o(l)[0].options.rows=n),min:0,max:20,onSlide:e[1]||(e[1]=n=>o(l)[0].options.rows=n)},null,8,["modelValue"])]),s("label",null,[C,t(o(i),{modelValue:o(l)[0].options.cols,"onUpdate:modelValue":e[2]||(e[2]=n=>o(l)[0].options.cols=n),min:2,max:20,onSlide:e[3]||(e[3]=n=>o(l)[0].options.cols=n)},null,8,["modelValue"])]),s("label",null,[E,t(o(i),{modelValue:o(l)[0].options.tileDuration,"onUpdate:modelValue":e[4]||(e[4]=n=>o(l)[0].options.tileDuration=n),min:o(b),max:o(S),onSlide:e[5]||(e[5]=n=>o(l)[0].options.tileDuration=n)},null,8,["modelValue","min","max"])]),s("label",null,[H,t(o(i),{modelValue:o(l)[0].options.tileDelay,"onUpdate:modelValue":e[6]||(e[6]=n=>o(l)[0].options.tileDelay=n),min:o(j),max:o(U),onSlide:e[7]||(e[7]=n=>o(l)[0].options.tileDelay=n)},null,8,["modelValue","min","max"])]),s("label",null,[L,_(s("select",{"onUpdate:modelValue":e[8]||(e[8]=n=>o(l)[0].options.easing=n)},[(a(!0),r(v,null,x(o($),n=>(a(),r("option",{key:n},w(n),1))),128))],512),[[f,o(l)[0].options.easing]])]),M,s("div",F,[s("pre",{innerHTML:D.value,class:"language-javascript"},null,8,J)])]))}}),Q=y(N,[["__file","Round1.vue"]]);export{Q as default};
