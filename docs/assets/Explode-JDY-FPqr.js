import{g as x,E as u,i as g,o as a,c as r,a as t,u as o,b as n,H as f,J as V,F as _,q as v,B as w,_ as y}from"./app-9q7i-DDF.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as i}from"./slider-qIJTIoH5.js";import{f as T}from"./vue-flux-Jy6SlP2J.js";import E from"./Demo-5DMVfPWL.js";import{m as b,a as S,b as j,c as R,e as U}from"./constants-vSRoptby.js";import"./Images-GCWpavzx.js";const $={class:"demo"},B=n("h3",null,"Options",-1),h=n("span",null,"Rows:",-1),k=n("span",null,"Columns:",-1),H=n("span",null,"Tile duration:",-1),L=n("span",null,"Tile delay:",-1),M=n("span",null,"Easing:",-1),C=n("h3",null,"Source",-1),F={class:"language-javascript","data-ext":"js"},J=["innerHTML"],N=x({__name:"Explode",setup(P){const d={autohideTime:0},l=u([{component:T,options:u({rows:0,cols:9,tileDuration:300,tileDelay:100,easing:"linear"})}]),c={preloader:!0,controls:!0},D=g(()=>{let p=`
import {
	Explode,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Explode,
		options: shallowReactive({
			rows: ${l[0].options.rows},
			cols: ${l[0].options.cols},
			tileDuration: ${l[0].options.tileDuration},
			tileDelay: ${l[0].options.tileDelay},
			easing: '${l[0].options.easing}',
		}),
	},
]);`;return m.highlight(p.trim(),m.languages.javascript,"javascript")});return(p,s)=>(a(),r("div",$,[t(E,{options:d,transitions:o(l),numRscs:12,complements:c},null,8,["transitions"]),B,n("label",null,[h,t(o(i),{modelValue:o(l)[0].options.rows,"onUpdate:modelValue":s[0]||(s[0]=e=>o(l)[0].options.rows=e),min:0,max:20,onSlide:s[1]||(s[1]=e=>o(l)[0].options.rows=e)},null,8,["modelValue"])]),n("label",null,[k,t(o(i),{modelValue:o(l)[0].options.cols,"onUpdate:modelValue":s[2]||(s[2]=e=>o(l)[0].options.cols=e),min:2,max:20,onSlide:s[3]||(s[3]=e=>o(l)[0].options.cols=e)},null,8,["modelValue"])]),n("label",null,[H,t(o(i),{modelValue:o(l)[0].options.tileDuration,"onUpdate:modelValue":s[4]||(s[4]=e=>o(l)[0].options.tileDuration=e),min:o(b),max:o(S),onSlide:s[5]||(s[5]=e=>o(l)[0].options.tileDuration=e)},null,8,["modelValue","min","max"])]),n("label",null,[L,t(o(i),{modelValue:o(l)[0].options.tileDelay,"onUpdate:modelValue":s[6]||(s[6]=e=>o(l)[0].options.tileDelay=e),min:o(j),max:o(R),onSlide:s[7]||(s[7]=e=>o(l)[0].options.tileDelay=e)},null,8,["modelValue","min","max"])]),n("label",null,[M,f(n("select",{"onUpdate:modelValue":s[8]||(s[8]=e=>o(l)[0].options.easing=e)},[(a(!0),r(_,null,v(o(U),e=>(a(),r("option",{key:e},w(e),1))),128))],512),[[V,o(l)[0].options.easing]])]),C,n("div",F,[n("pre",{innerHTML:D.value,class:"language-javascript"},null,8,J)])]))}}),Q=y(N,[["__file","Explode.vue"]]);export{Q as default};
