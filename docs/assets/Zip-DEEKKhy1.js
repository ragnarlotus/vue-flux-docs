import{f,G as u,h as v,c as s,o as a,a as i,b as e,u as l,H as V,J as x,F as y,q as T,t as b}from"./app-Br2EUNM9.js";import{P as p}from"./prism-CBfTwKG-.js";import{m as r}from"./slider-C3458_x4.js";import{T as S}from"./vue-flux-B4W74UIR.js";import{_ as j}from"./Demo.vue_vue_type_script_setup_true_lang-BTl2EAGH.js";import{m as $,a as w,b as R,c as U,e as k}from"./constants-Di4rOZRF.js";import"./Images-BrEvi5ME.js";const B={class:"demo"},H={class:"language-javascript","data-ext":"js"},L=["innerHTML"],q=f({__name:"Zip",setup(M){const d={autohideTime:0},n=u([{component:S,options:u({cols:10,tileDuration:600,tileDelay:80,easing:"ease-in"})}]),D={preloader:!0,controls:!0},g=v(()=>{let m=`
import {
	Zip,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Zip,
		options: shallowReactive({
			cols: ${n[0].options.cols},
			tileDuration: ${n[0].options.tileDuration},
			tileDelay: ${n[0].options.tileDelay},
			easing: '${n[0].options.easing}',
		}),
	},
]);`;return p.highlight(m.trim(),p.languages.javascript,"javascript")});return(m,o)=>(a(),s("div",B,[i(j,{options:d,transitions:l(n),numRscs:12,complements:D},null,8,["transitions"]),o[11]||(o[11]=e("h3",null,"Options",-1)),e("label",null,[o[7]||(o[7]=e("span",null,"Columns:",-1)),i(l(r),{modelValue:l(n)[0].options.cols,"onUpdate:modelValue":o[0]||(o[0]=t=>l(n)[0].options.cols=t),min:2,max:20,onSlide:o[1]||(o[1]=t=>l(n)[0].options.cols=t)},null,8,["modelValue"])]),e("label",null,[o[8]||(o[8]=e("span",null,"Tile duration:",-1)),i(l(r),{modelValue:l(n)[0].options.tileDuration,"onUpdate:modelValue":o[2]||(o[2]=t=>l(n)[0].options.tileDuration=t),min:l(w),max:l($),onSlide:o[3]||(o[3]=t=>l(n)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),e("label",null,[o[9]||(o[9]=e("span",null,"Tile delay:",-1)),i(l(r),{modelValue:l(n)[0].options.tileDelay,"onUpdate:modelValue":o[4]||(o[4]=t=>l(n)[0].options.tileDelay=t),min:l(U),max:l(R),onSlide:o[5]||(o[5]=t=>l(n)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),e("label",null,[o[10]||(o[10]=e("span",null,"Easing:",-1)),V(e("select",{"onUpdate:modelValue":o[6]||(o[6]=t=>l(n)[0].options.easing=t)},[(a(!0),s(y,null,T(l(k),t=>(a(),s("option",{key:t},b(t),1))),128))],512),[[x,l(n)[0].options.easing]])]),o[12]||(o[12]=e("h3",null,"Source",-1)),e("div",H,[e("pre",{innerHTML:g.value,class:"language-javascript"},null,8,L)])]))}});export{q as default};
