import{f,G as u,h as v,c as e,o as a,a as i,b as s,u as l,H as V,J as x,F as y,q as T,t as b}from"./app-MTV9PqO7.js";import{P as p}from"./prism-CBfTwKG-.js";import{m as r}from"./slider-l2pfGRmo.js";import{E as B}from"./vue-flux-D0xQKYPf.js";import{_ as S}from"./Demo.vue_vue_type_script_setup_true_lang-CtBj1C7x.js";import{m as j,a as $,b as w,c as E,e as R}from"./constants-Di4rOZRF.js";import"./Images-D3tRVO8F.js";const U={class:"demo"},k={class:"language-javascript","data-ext":"js"},H=["innerHTML"],G=f({__name:"Blinds2D",setup(L){const d={autohideTime:0},n=u([{component:B,options:u({cols:10,tileDuration:800,tileDelay:100,easing:"linear"})}]),D={preloader:!0,controls:!0},g=v(()=>{let m=`
import {
	Blinds2D,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Blinds2D,
		options: shallowReactive({
			cols: ${n[0].options.cols},
			tileDuration: ${n[0].options.tileDuration},
			tileDelay: ${n[0].options.tileDelay},
			easing: '${n[0].options.easing}',
		}),
	},
]);`;return p.highlight(m.trim(),p.languages.javascript,"javascript")});return(m,o)=>(a(),e("div",U,[i(S,{options:d,transitions:l(n),numRscs:12,complements:D},null,8,["transitions"]),o[11]||(o[11]=s("h3",null,"Options",-1)),s("label",null,[o[7]||(o[7]=s("span",null,"Columns:",-1)),i(l(r),{modelValue:l(n)[0].options.cols,"onUpdate:modelValue":o[0]||(o[0]=t=>l(n)[0].options.cols=t),min:4,max:30,onSlide:o[1]||(o[1]=t=>l(n)[0].options.cols=t)},null,8,["modelValue"])]),s("label",null,[o[8]||(o[8]=s("span",null,"Tile duration:",-1)),i(l(r),{modelValue:l(n)[0].options.tileDuration,"onUpdate:modelValue":o[2]||(o[2]=t=>l(n)[0].options.tileDuration=t),min:l($),max:l(j),onSlide:o[3]||(o[3]=t=>l(n)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),s("label",null,[o[9]||(o[9]=s("span",null,"Tile delay:",-1)),i(l(r),{modelValue:l(n)[0].options.tileDelay,"onUpdate:modelValue":o[4]||(o[4]=t=>l(n)[0].options.tileDelay=t),min:l(E),max:l(w),onSlide:o[5]||(o[5]=t=>l(n)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),s("label",null,[o[10]||(o[10]=s("span",null,"Easing:",-1)),V(s("select",{"onUpdate:modelValue":o[6]||(o[6]=t=>l(n)[0].options.easing=t)},[(a(!0),e(y,null,T(l(R),t=>(a(),e("option",{key:t},b(t),1))),128))],512),[[x,l(n)[0].options.easing]])]),o[12]||(o[12]=s("h3",null,"Source",-1)),s("div",k,[s("pre",{innerHTML:g.value,class:"language-javascript"},null,8,H)])]))}});export{G as default};
