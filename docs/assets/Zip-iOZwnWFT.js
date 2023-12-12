import{g,E as u,i as _,o as i,c as a,a as s,u as o,d as n,H as f,J as v,F as x,q as V,B as y,_ as T}from"./app-DHB0SMXO.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-RiTPjGIc.js";import{k as h}from"./vue-flux-ZmG_q5VC.js";import S from"./Demo-pm3p9b02.js";import{m as b,a as j,b as Z,c as k,e as w}from"./constants-vSRoptby.js";import"./Images-mRU4eiTg.js";const B={class:"demo"},R=n("h3",null,"Options",-1),U=n("span",null,"Columns:",-1),$=n("span",null,"Tile duration:",-1),E=n("span",null,"Tile delay:",-1),H=n("span",null,"Easing:",-1),L=n("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},q=["innerHTML"],C=g({__name:"Zip",setup(F){const d={autohideTime:0},e=u([{component:h,options:u({cols:10,tileDuration:600,tileDelay:80,easing:"ease-in"})}]),c={preloader:!0,controls:!0},D=_(()=>{let p=`
import {
	Zip,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Zip,
		options: shallowReactive({
			cols: ${e[0].options.cols},
			tileDuration: ${e[0].options.tileDuration},
			tileDelay: ${e[0].options.tileDelay},
			easing: '${e[0].options.easing}',
		}),
	},
]);`;return m.highlight(p.trim(),m.languages.javascript,"javascript")});return(p,l)=>(i(),a("div",B,[s(S,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),R,n("label",null,[U,s(o(r),{modelValue:o(e)[0].options.cols,"onUpdate:modelValue":l[0]||(l[0]=t=>o(e)[0].options.cols=t),min:2,max:20,onSlide:l[1]||(l[1]=t=>o(e)[0].options.cols=t)},null,8,["modelValue"])]),n("label",null,[$,s(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":l[2]||(l[2]=t=>o(e)[0].options.tileDuration=t),min:o(b),max:o(j),onSlide:l[3]||(l[3]=t=>o(e)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),n("label",null,[E,s(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":l[4]||(l[4]=t=>o(e)[0].options.tileDelay=t),min:o(Z),max:o(k),onSlide:l[5]||(l[5]=t=>o(e)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),n("label",null,[H,f(n("select",{"onUpdate:modelValue":l[6]||(l[6]=t=>o(e)[0].options.easing=t)},[(i(!0),a(x,null,V(o(w),t=>(i(),a("option",{key:t},y(t),1))),128))],512),[[v,o(e)[0].options.easing]])]),L,n("div",M,[n("pre",{innerHTML:D.value,class:"language-javascript"},null,8,q)])]))}}),I=T(C,[["__file","Zip.vue"]]);export{I as default};
