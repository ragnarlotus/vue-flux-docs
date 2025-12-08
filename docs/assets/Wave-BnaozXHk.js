import{f,G as r,h as g,c as x,o as V,a as e,b as t,u as l,H as u,I as p}from"./app-MTV9PqO7.js";import{P as m}from"./prism-CBfTwKG-.js";import{m as s}from"./slider-l2pfGRmo.js";import{X as y}from"./vue-flux-D0xQKYPf.js";import{_ as T}from"./Demo.vue_vue_type_script_setup_true_lang-CtBj1C7x.js";import{m as b,a as C,b as $,c as j}from"./constants-Di4rOZRF.js";import"./Images-D3tRVO8F.js";const S={class:"demo"},U={class:"language-javascript","data-ext":"js"},w=["innerHTML"],N=f({__name:"Wave",setup(R){const d={autohideTime:0},n=r([{component:y,options:r({cols:8,tileDuration:900,tileDelay:100,easing:"cubic-bezier(0.3, -0.3, 0.735, 0.285)",sideColor:"#333"})}]),D={preloader:!0,controls:!0},v=g(()=>{let a=`
import {
	Wave,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Wave,
		options: shallowReactive({
			cols: ${n[0].options.cols},
			tileDuration: ${n[0].options.tileDuration},
			tileDelay: ${n[0].options.tileDelay},
			easing: '${n[0].options.easing}',
			sideColor: '${n[0].options.sideColor}',
		}),
	},
]);`;return m.highlight(a.trim(),m.languages.javascript,"javascript")});return(a,o)=>(V(),x("div",S,[e(T,{options:d,transitions:l(n),numRscs:12,complements:D},null,8,["transitions"]),o[13]||(o[13]=t("h3",null,"Options",-1)),t("label",null,[o[8]||(o[8]=t("span",null,"Columns:",-1)),e(l(s),{modelValue:l(n)[0].options.cols,"onUpdate:modelValue":o[0]||(o[0]=i=>l(n)[0].options.cols=i),min:2,max:20,onSlide:o[1]||(o[1]=i=>l(n)[0].options.cols=i)},null,8,["modelValue"])]),t("label",null,[o[9]||(o[9]=t("span",null,"Tile duration:",-1)),e(l(s),{modelValue:l(n)[0].options.tileDuration,"onUpdate:modelValue":o[2]||(o[2]=i=>l(n)[0].options.tileDuration=i),min:l(C),max:l(b),onSlide:o[3]||(o[3]=i=>l(n)[0].options.tileDuration=i)},null,8,["modelValue","min","max"])]),t("label",null,[o[10]||(o[10]=t("span",null,"Tile delay:",-1)),e(l(s),{modelValue:l(n)[0].options.tileDelay,"onUpdate:modelValue":o[4]||(o[4]=i=>l(n)[0].options.tileDelay=i),min:l(j),max:l($),onSlide:o[5]||(o[5]=i=>l(n)[0].options.tileDelay=i)},null,8,["modelValue","min","max"])]),t("label",null,[o[11]||(o[11]=t("span",null,"Easing:",-1)),u(t("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=i=>l(n)[0].options.easing=i)},null,512),[[p,l(n)[0].options.easing]])]),t("label",null,[o[12]||(o[12]=t("span",null,"Side color:",-1)),u(t("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=i=>l(n)[0].options.sideColor=i)},null,512),[[p,l(n)[0].options.sideColor]])]),o[14]||(o[14]=t("h3",null,"Source",-1)),t("div",U,[t("pre",{innerHTML:v.value,class:"language-javascript"},null,8,w)])]))}});export{N as default};
