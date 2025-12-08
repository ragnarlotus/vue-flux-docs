import{f,G as m,h as v,c as i,o as a,a as e,b as s,u as l,H as V,J as x,F as y,q as T,t as j}from"./app-BUcDOuik.js";import{P as p}from"./prism-CBfTwKG-.js";import{m as r}from"./slider-DeCNzMt6.js";import{j as b}from"./vue-flux-BTJEro02.js";import{_ as B}from"./Demo.vue_vue_type_script_setup_true_lang-Ch53YRns.js";import{m as S,a as $,b as w,c as R,e as U}from"./constants-Di4rOZRF.js";import"./Images-Cc17HLan.js";const k={class:"demo"},H={class:"language-javascript","data-ext":"js"},L=["innerHTML"],G=f({__name:"Blinds3D",setup(M){const d={autohideTime:0},n=m([{component:b,options:m({cols:6,tileDuration:800,tileDelay:150,easing:"ease-out"})}]),D={preloader:!0,controls:!0},g=v(()=>{let u=`
import {
	Blinds3D,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Blinds3D,
		options: shallowReactive({
			cols: ${n[0].options.cols},
			tileDuration: ${n[0].options.tileDuration},
			tileDelay: ${n[0].options.tileDelay},
			easing: '${n[0].options.easing}',
		}),
	},
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,o)=>(a(),i("div",k,[e(B,{options:d,transitions:l(n),numRscs:12,complements:D},null,8,["transitions"]),o[11]||(o[11]=s("h3",null,"Options",-1)),s("label",null,[o[7]||(o[7]=s("span",null,"Columns:",-1)),e(l(r),{modelValue:l(n)[0].options.cols,"onUpdate:modelValue":o[0]||(o[0]=t=>l(n)[0].options.cols=t),min:4,max:30,onSlide:o[1]||(o[1]=t=>l(n)[0].options.cols=t)},null,8,["modelValue"])]),s("label",null,[o[8]||(o[8]=s("span",null,"Tile duration:",-1)),e(l(r),{modelValue:l(n)[0].options.tileDuration,"onUpdate:modelValue":o[2]||(o[2]=t=>l(n)[0].options.tileDuration=t),min:l($),max:l(S),onSlide:o[3]||(o[3]=t=>l(n)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),s("label",null,[o[9]||(o[9]=s("span",null,"Tile delay:",-1)),e(l(r),{modelValue:l(n)[0].options.tileDelay,"onUpdate:modelValue":o[4]||(o[4]=t=>l(n)[0].options.tileDelay=t),min:l(R),max:l(w),onSlide:o[5]||(o[5]=t=>l(n)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),s("label",null,[o[10]||(o[10]=s("span",null,"Easing:",-1)),V(s("select",{"onUpdate:modelValue":o[6]||(o[6]=t=>l(n)[0].options.easing=t)},[(a(!0),i(y,null,T(l(U),t=>(a(),i("option",{key:t},j(t),1))),128))],512),[[x,l(n)[0].options.easing]])]),o[12]||(o[12]=s("h3",null,"Source",-1)),s("div",H,[s("pre",{innerHTML:g.value,class:"language-javascript"},null,8,L)])]))}});export{G as default};
