import{f,G as r,h as D,c as g,o as v,a as i,b as e,u as l,H as x,I as V}from"./app-MTV9PqO7.js";import{P as u}from"./prism-CBfTwKG-.js";import{m as s}from"./slider-l2pfGRmo.js";import{c as y}from"./vue-flux-D0xQKYPf.js";import{_ as T}from"./Demo.vue_vue_type_script_setup_true_lang-CtBj1C7x.js";import{m as b,a as j,b as R,c as $}from"./constants-Di4rOZRF.js";import"./Images-D3tRVO8F.js";const w={class:"demo"},S={class:"language-javascript","data-ext":"js"},U=["innerHTML"],N=f({__name:"Waterfall",setup(B){const m={autohideTime:0},t=r([{component:y,options:r({cols:10,tileDuration:600,tileDelay:90,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"})}]),p={preloader:!0,controls:!0},d=D(()=>{let a=`
import {
	Waterfall,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Waterfall,
		options: shallowReactive({
			cols: ${t[0].options.cols},
			tileDuration: ${t[0].options.tileDuration},
			tileDelay: ${t[0].options.tileDelay},
			easing: '${t[0].options.easing}',
		}),
	},
]);`;return u.highlight(a.trim(),u.languages.javascript,"javascript")});return(a,o)=>(v(),g("div",w,[i(T,{options:m,transitions:l(t),numRscs:12,complements:p},null,8,["transitions"]),o[11]||(o[11]=e("h3",null,"Options",-1)),e("label",null,[o[7]||(o[7]=e("span",null,"Columns:",-1)),i(l(s),{modelValue:l(t)[0].options.cols,"onUpdate:modelValue":o[0]||(o[0]=n=>l(t)[0].options.cols=n),min:4,max:30,onSlide:o[1]||(o[1]=n=>l(t)[0].options.cols=n)},null,8,["modelValue"])]),e("label",null,[o[8]||(o[8]=e("span",null,"Tile duration:",-1)),i(l(s),{modelValue:l(t)[0].options.tileDuration,"onUpdate:modelValue":o[2]||(o[2]=n=>l(t)[0].options.tileDuration=n),min:l(j),max:l(b),onSlide:o[3]||(o[3]=n=>l(t)[0].options.tileDuration=n)},null,8,["modelValue","min","max"])]),e("label",null,[o[9]||(o[9]=e("span",null,"Tile delay:",-1)),i(l(s),{modelValue:l(t)[0].options.tileDelay,"onUpdate:modelValue":o[4]||(o[4]=n=>l(t)[0].options.tileDelay=n),min:l($),max:l(R),onSlide:o[5]||(o[5]=n=>l(t)[0].options.tileDelay=n)},null,8,["modelValue","min","max"])]),e("label",null,[o[10]||(o[10]=e("span",null,"Easing:",-1)),x(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=n=>l(t)[0].options.easing=n)},null,512),[[V,l(t)[0].options.easing]])]),o[12]||(o[12]=e("h3",null,"Source",-1)),e("div",S,[e("pre",{innerHTML:d.value,class:"language-javascript"},null,8,U)])]))}});export{N as default};
