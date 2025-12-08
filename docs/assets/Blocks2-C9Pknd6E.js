import{f as V,G as m,h as f,c as a,o as r,a as e,b as t,u as l,H as v,J as x,F as w,q as y,t as T}from"./app-MTV9PqO7.js";import{P as p}from"./prism-CBfTwKG-.js";import{m as i}from"./slider-l2pfGRmo.js";import{O as b}from"./vue-flux-D0xQKYPf.js";import{_ as S}from"./Demo.vue_vue_type_script_setup_true_lang-CtBj1C7x.js";import{m as k,a as B,b as $,c as j,e as R}from"./constants-Di4rOZRF.js";import"./Images-D3tRVO8F.js";const U={class:"demo"},H={class:"language-javascript","data-ext":"js"},L=["innerHTML"],q=V({__name:"Blocks2",setup(M){const d={autohideTime:0},n=m([{component:b,options:m({rows:0,cols:8,tileDuration:800,tileDelay:80,easing:"ease"})}]),D={preloader:!0,controls:!0},g=f(()=>{let u=`
import {
	Blocks2,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Blocks2,
		options: shallowReactive({
			rows: ${n[0].options.rows},
			cols: ${n[0].options.cols},
			tileDuration: ${n[0].options.tileDuration},
			tileDelay: ${n[0].options.tileDelay},
			easing: '${n[0].options.easing}',
		}),
	},
]);`;return p.highlight(u.trim(),p.languages.javascript,"javascript")});return(u,o)=>(r(),a("div",U,[e(S,{options:d,transitions:l(n),numRscs:12,complements:D},null,8,["transitions"]),o[14]||(o[14]=t("h3",null,"Options",-1)),t("label",null,[o[9]||(o[9]=t("span",null,"Rows:",-1)),e(l(i),{modelValue:l(n)[0].options.rows,"onUpdate:modelValue":o[0]||(o[0]=s=>l(n)[0].options.rows=s),min:0,max:20,onSlide:o[1]||(o[1]=s=>l(n)[0].options.rows=s)},null,8,["modelValue"])]),t("label",null,[o[10]||(o[10]=t("span",null,"Columns:",-1)),e(l(i),{modelValue:l(n)[0].options.cols,"onUpdate:modelValue":o[2]||(o[2]=s=>l(n)[0].options.cols=s),min:2,max:20,onSlide:o[3]||(o[3]=s=>l(n)[0].options.cols=s)},null,8,["modelValue"])]),t("label",null,[o[11]||(o[11]=t("span",null,"Tile duration:",-1)),e(l(i),{modelValue:l(n)[0].options.tileDuration,"onUpdate:modelValue":o[4]||(o[4]=s=>l(n)[0].options.tileDuration=s),min:l(B),max:l(k),onSlide:o[5]||(o[5]=s=>l(n)[0].options.tileDuration=s)},null,8,["modelValue","min","max"])]),t("label",null,[o[12]||(o[12]=t("span",null,"Tile delay:",-1)),e(l(i),{modelValue:l(n)[0].options.tileDelay,"onUpdate:modelValue":o[6]||(o[6]=s=>l(n)[0].options.tileDelay=s),min:l(j),max:l($),onSlide:o[7]||(o[7]=s=>l(n)[0].options.tileDelay=s)},null,8,["modelValue","min","max"])]),t("label",null,[o[13]||(o[13]=t("span",null,"Easing:",-1)),v(t("select",{"onUpdate:modelValue":o[8]||(o[8]=s=>l(n)[0].options.easing=s)},[(r(!0),a(w,null,y(l(R),s=>(r(),a("option",{key:s},T(s),1))),128))],512),[[x,l(n)[0].options.easing]])]),o[15]||(o[15]=t("h3",null,"Source",-1)),t("div",H,[t("pre",{innerHTML:g.value,class:"language-javascript"},null,8,L)])]))}});export{q as default};
