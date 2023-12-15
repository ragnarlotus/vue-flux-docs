import{g,E as m,i as _,o as s,c as a,a as l,u as o,b as i,H as f,J as v,F as x,q as V,B as y,_ as T}from"./app-9q7i-DDF.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-qIJTIoH5.js";import{n as C}from"./vue-flux-Jy6SlP2J.js";import b from"./Demo-5DMVfPWL.js";import{m as h,a as S,b as j,c as w,e as B}from"./constants-vSRoptby.js";import"./Images-GCWpavzx.js";const R={class:"demo"},U=i("h3",null,"Options",-1),$=i("span",null,"Circles:",-1),k=i("span",null,"Tile duration:",-1),E=i("span",null,"Tile delay:",-1),H=i("span",null,"Easing:",-1),L=i("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},F=["innerHTML"],J=g({__name:"Concentric",setup(N){const c={autohideTime:0},e=m([{component:C,options:m({circles:7,tileDuration:800,tileDelay:150,easing:"linear"})}]),d={preloader:!0,controls:!0},D=_(()=>{let u=`
import {
	Concentric,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Concentric,
		options: shallowReactive({
			circles: ${e[0].options.circles},
			tileDuration: ${e[0].options.tileDuration},
			tileDelay: ${e[0].options.tileDelay},
			easing: '${e[0].options.easing}',
		}),
	},
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,t)=>(s(),a("div",R,[l(b,{options:c,transitions:o(e),numRscs:12,complements:d},null,8,["transitions"]),U,i("label",null,[$,l(o(r),{modelValue:o(e)[0].options.circles,"onUpdate:modelValue":t[0]||(t[0]=n=>o(e)[0].options.circles=n),min:4,max:20,onSlide:t[1]||(t[1]=n=>o(e)[0].options.circles=n)},null,8,["modelValue"])]),i("label",null,[k,l(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":t[2]||(t[2]=n=>o(e)[0].options.tileDuration=n),min:o(h),max:o(S),onSlide:t[3]||(t[3]=n=>o(e)[0].options.tileDuration=n)},null,8,["modelValue","min","max"])]),i("label",null,[E,l(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":t[4]||(t[4]=n=>o(e)[0].options.tileDelay=n),min:o(j),max:o(w),onSlide:t[5]||(t[5]=n=>o(e)[0].options.tileDelay=n)},null,8,["modelValue","min","max"])]),i("label",null,[H,f(i("select",{"onUpdate:modelValue":t[6]||(t[6]=n=>o(e)[0].options.easing=n)},[(s(!0),a(x,null,V(o(B),n=>(s(),a("option",{key:n},y(n),1))),128))],512),[[v,o(e)[0].options.easing]])]),L,i("div",M,[i("pre",{innerHTML:D.value,class:"language-javascript"},null,8,F)])]))}}),K=T(J,[["__file","Concentric.vue"]]);export{K as default};
