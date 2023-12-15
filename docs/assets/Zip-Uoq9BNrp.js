import{g,E as u,i as _,o as i,c as a,a as n,u as o,b as s,H as f,J as v,F as x,q as V,B as y,_ as T}from"./app-SStEjskS.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-hgcxarFB.js";import{t as b}from"./vue-flux-xkNGD8Rr.js";import h from"./Demo-YRqIvizg.js";import{m as S,a as j,b as Z,c as w,e as B}from"./constants-vSRoptby.js";import"./Images-gE8WO_fq.js";const R={class:"demo"},U=s("h3",null,"Options",-1),$=s("span",null,"Columns:",-1),k=s("span",null,"Tile duration:",-1),E=s("span",null,"Tile delay:",-1),H=s("span",null,"Easing:",-1),L=s("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},C=["innerHTML"],F=g({__name:"Zip",setup(J){const d={autohideTime:0},e=u([{component:b,options:u({cols:10,tileDuration:600,tileDelay:80,easing:"ease-in"})}]),c={preloader:!0,controls:!0},D=_(()=>{let p=`
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
]);`;return m.highlight(p.trim(),m.languages.javascript,"javascript")});return(p,l)=>(i(),a("div",R,[n(h,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),U,s("label",null,[$,n(o(r),{modelValue:o(e)[0].options.cols,"onUpdate:modelValue":l[0]||(l[0]=t=>o(e)[0].options.cols=t),min:2,max:20,onSlide:l[1]||(l[1]=t=>o(e)[0].options.cols=t)},null,8,["modelValue"])]),s("label",null,[k,n(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":l[2]||(l[2]=t=>o(e)[0].options.tileDuration=t),min:o(S),max:o(j),onSlide:l[3]||(l[3]=t=>o(e)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),s("label",null,[E,n(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":l[4]||(l[4]=t=>o(e)[0].options.tileDelay=t),min:o(Z),max:o(w),onSlide:l[5]||(l[5]=t=>o(e)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),s("label",null,[H,f(s("select",{"onUpdate:modelValue":l[6]||(l[6]=t=>o(e)[0].options.easing=t)},[(i(!0),a(x,null,V(o(B),t=>(i(),a("option",{key:t},y(t),1))),128))],512),[[v,o(e)[0].options.easing]])]),L,s("div",M,[s("pre",{innerHTML:D.value,class:"language-javascript"},null,8,C)])]))}}),I=T(F,[["__file","Zip.vue"]]);export{I as default};
