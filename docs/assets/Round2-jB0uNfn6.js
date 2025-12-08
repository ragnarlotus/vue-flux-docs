import{f as g,G as m,h as f,c as a,o as r,a as e,b as s,u as l,H as v,J as x,F as w,q as y,t as R}from"./app-MTV9PqO7.js";import{P as p}from"./prism-CBfTwKG-.js";import{m as i}from"./slider-l2pfGRmo.js";import{H as T}from"./vue-flux-D0xQKYPf.js";import{_ as b}from"./Demo.vue_vue_type_script_setup_true_lang-CtBj1C7x.js";import{m as S,a as X,b as $,c as U,e as j}from"./constants-Di4rOZRF.js";import"./Images-D3tRVO8F.js";const H={class:"demo"},k={class:"language-javascript","data-ext":"js"},B=["innerHTML"],q=g({__name:"Round2",setup(L){const d={autohideTime:0},n=m([{component:T,options:m({rows:0,cols:9,rotateX:-540,tileDuration:800,tileDelay:100,easing:"ease-out"})}]),D={preloader:!0,controls:!0},V=f(()=>{let u=`
import {
	Round2,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Round2,
		options: shallowReactive({
			rows: ${n[0].options.rows},
			cols: ${n[0].options.cols},
			rotateX: ${n[0].options.rotateX},
			tileDuration: ${n[0].options.tileDuration},
			tileDelay: ${n[0].options.tileDelay},
			easing: '${n[0].options.easing}',
		}),
	},
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,o)=>(r(),a("div",H,[e(b,{options:d,transitions:l(n),numRscs:12,complements:D},null,8,["transitions"]),o[17]||(o[17]=s("h3",null,"Options",-1)),s("label",null,[o[11]||(o[11]=s("span",null,"Rows:",-1)),e(l(i),{modelValue:l(n)[0].options.rows,"onUpdate:modelValue":o[0]||(o[0]=t=>l(n)[0].options.rows=t),min:0,max:20,onSlide:o[1]||(o[1]=t=>l(n)[0].options.rows=t)},null,8,["modelValue"])]),s("label",null,[o[12]||(o[12]=s("span",null,"Columns:",-1)),e(l(i),{modelValue:l(n)[0].options.cols,"onUpdate:modelValue":o[2]||(o[2]=t=>l(n)[0].options.cols=t),min:2,max:20,onSlide:o[3]||(o[3]=t=>l(n)[0].options.cols=t)},null,8,["modelValue"])]),s("label",null,[o[13]||(o[13]=s("span",null,"Rotation X:",-1)),e(l(i),{modelValue:l(n)[0].options.rotateX,"onUpdate:modelValue":o[4]||(o[4]=t=>l(n)[0].options.rotateX=t),min:-1e3,max:1e3,onSlide:o[5]||(o[5]=t=>l(n)[0].options.rotateX=t)},null,8,["modelValue"])]),s("label",null,[o[14]||(o[14]=s("span",null,"Tile duration:",-1)),e(l(i),{modelValue:l(n)[0].options.tileDuration,"onUpdate:modelValue":o[6]||(o[6]=t=>l(n)[0].options.tileDuration=t),min:l(X),max:l(S),onSlide:o[7]||(o[7]=t=>l(n)[0].options.tileDuration=t)},null,8,["modelValue","min","max"])]),s("label",null,[o[15]||(o[15]=s("span",null,"Tile delay:",-1)),e(l(i),{modelValue:l(n)[0].options.tileDelay,"onUpdate:modelValue":o[8]||(o[8]=t=>l(n)[0].options.tileDelay=t),min:l(U),max:l($),onSlide:o[9]||(o[9]=t=>l(n)[0].options.tileDelay=t)},null,8,["modelValue","min","max"])]),s("label",null,[o[16]||(o[16]=s("span",null,"Easing:",-1)),v(s("select",{"onUpdate:modelValue":o[10]||(o[10]=t=>l(n)[0].options.easing=t)},[(r(!0),a(w,null,y(l(j),t=>(r(),a("option",{key:t},R(t),1))),128))],512),[[x,l(n)[0].options.easing]])]),o[18]||(o[18]=s("h3",null,"Source",-1)),s("div",k,[s("pre",{innerHTML:V.value,class:"language-javascript"},null,8,B)])]))}});export{q as default};
