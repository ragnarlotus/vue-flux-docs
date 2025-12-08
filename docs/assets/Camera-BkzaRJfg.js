import{f,G as i,h as c,c as v,o as b,a as e,b as t,u as a,H as r,I as u}from"./app-BUcDOuik.js";import{P as p}from"./prism-CBfTwKG-.js";import{m as x}from"./slider-DeCNzMt6.js";import{M as C}from"./vue-flux-BTJEro02.js";import{_ as D}from"./Demo.vue_vue_type_script_setup_true_lang-Ch53YRns.js";import{d as k,f as V}from"./constants-Di4rOZRF.js";import"./Images-Cc17HLan.js";const j={class:"demo"},M={class:"language-javascript","data-ext":"js"},w=["innerHTML"],L=f({__name:"Camera",setup(B){const m={autohideTime:0},n=i([{component:C,options:i({totalDuration:1200,easing:"cubic-bezier(0.385, 0, 0.795, 0.560)",backgroundColor:"#111"})}]),d={preloader:!0,controls:!0},g=c(()=>{let l=`
import {
	Camera,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Camera,
		options: shallowReactive({
			totalDuration: ${n[0].options.totalDuration},
			easing: '${n[0].options.easing}',
			backgroundColor: '${n[0].options.backgroundColor}',
		}),
	},
]);`;return p.highlight(l.trim(),p.languages.javascript,"javascript")});return(l,o)=>(b(),v("div",j,[e(D,{options:m,transitions:a(n),numRscs:12,complements:d},null,8,["transitions"]),o[7]||(o[7]=t("h3",null,"Options",-1)),t("label",null,[o[4]||(o[4]=t("span",null,"total duration:",-1)),e(a(x),{modelValue:a(n)[0].options.totalDuration,"onUpdate:modelValue":o[0]||(o[0]=s=>a(n)[0].options.totalDuration=s),min:a(V),max:a(k),onSlide:o[1]||(o[1]=s=>a(n)[0].options.totalDuration=s)},null,8,["modelValue","min","max"])]),t("label",null,[o[5]||(o[5]=t("span",null,"Easing:",-1)),r(t("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=s=>a(n)[0].options.easing=s)},null,512),[[u,a(n)[0].options.easing]])]),t("label",null,[o[6]||(o[6]=t("span",null,"Background color:",-1)),r(t("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=s=>a(n)[0].options.backgroundColor=s)},null,512),[[u,a(n)[0].options.backgroundColor]])]),o[8]||(o[8]=t("h3",null,"Source",-1)),t("div",M,[t("pre",{innerHTML:g.value,class:"language-javascript"},null,8,w)])]))}});export{L as default};
