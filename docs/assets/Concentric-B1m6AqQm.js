import{f,G as u,h as V,c as s,o as a,a as t,b as i,u as l,H as v,J as x,F as y,q as c,t as T}from"./app-MTV9PqO7.js";import{P as p}from"./prism-CBfTwKG-.js";import{m as r}from"./slider-l2pfGRmo.js";import{V as b}from"./vue-flux-D0xQKYPf.js";import{_ as S}from"./Demo.vue_vue_type_script_setup_true_lang-CtBj1C7x.js";import{m as j,a as C,b as $,c as w,e as R}from"./constants-Di4rOZRF.js";import"./Images-D3tRVO8F.js";const U={class:"demo"},k={class:"language-javascript","data-ext":"js"},B=["innerHTML"],q=f({__name:"Concentric",setup(H){const d={autohideTime:0},n=u([{component:b,options:u({circles:7,tileDuration:800,tileDelay:150,easing:"linear"})}]),D={preloader:!0,controls:!0},g=V(()=>{let m=`
import {
	Concentric,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Concentric,
		options: shallowReactive({
			circles: ${n[0].options.circles},
			tileDuration: ${n[0].options.tileDuration},
			tileDelay: ${n[0].options.tileDelay},
			easing: '${n[0].options.easing}',
		}),
	},
]);`;return p.highlight(m.trim(),p.languages.javascript,"javascript")});return(m,o)=>(a(),s("div",U,[t(S,{options:d,transitions:l(n),numRscs:12,complements:D},null,8,["transitions"]),o[11]||(o[11]=i("h3",null,"Options",-1)),i("label",null,[o[7]||(o[7]=i("span",null,"Circles:",-1)),t(l(r),{modelValue:l(n)[0].options.circles,"onUpdate:modelValue":o[0]||(o[0]=e=>l(n)[0].options.circles=e),min:4,max:20,onSlide:o[1]||(o[1]=e=>l(n)[0].options.circles=e)},null,8,["modelValue"])]),i("label",null,[o[8]||(o[8]=i("span",null,"Tile duration:",-1)),t(l(r),{modelValue:l(n)[0].options.tileDuration,"onUpdate:modelValue":o[2]||(o[2]=e=>l(n)[0].options.tileDuration=e),min:l(C),max:l(j),onSlide:o[3]||(o[3]=e=>l(n)[0].options.tileDuration=e)},null,8,["modelValue","min","max"])]),i("label",null,[o[9]||(o[9]=i("span",null,"Tile delay:",-1)),t(l(r),{modelValue:l(n)[0].options.tileDelay,"onUpdate:modelValue":o[4]||(o[4]=e=>l(n)[0].options.tileDelay=e),min:l(w),max:l($),onSlide:o[5]||(o[5]=e=>l(n)[0].options.tileDelay=e)},null,8,["modelValue","min","max"])]),i("label",null,[o[10]||(o[10]=i("span",null,"Easing:",-1)),v(i("select",{"onUpdate:modelValue":o[6]||(o[6]=e=>l(n)[0].options.easing=e)},[(a(!0),s(y,null,c(l(R),e=>(a(),s("option",{key:e},T(e),1))),128))],512),[[x,l(n)[0].options.easing]])]),o[12]||(o[12]=i("h3",null,"Source",-1)),i("div",k,[i("pre",{innerHTML:g.value,class:"language-javascript"},null,8,B)])]))}});export{q as default};
