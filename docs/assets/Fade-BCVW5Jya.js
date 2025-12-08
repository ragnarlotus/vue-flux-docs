import{f,G as r,h as c,c as e,o as i,a as u,b as n,u as o,H as v,J as D,F as x,q as V,t as j}from"./app-BUcDOuik.js";import{P as m}from"./prism-CBfTwKG-.js";import{m as F}from"./slider-DeCNzMt6.js";import{C as w}from"./vue-flux-BTJEro02.js";import{_ as R}from"./Demo.vue_vue_type_script_setup_true_lang-Ch53YRns.js";import{d as S,f as T,e as b}from"./constants-Di4rOZRF.js";import"./Images-Cc17HLan.js";const k={class:"demo"},B={class:"language-javascript","data-ext":"js"},C=["innerHTML"],N=f({__name:"Fade",setup(H){const p={autohideTime:0},s=r([{component:w,options:r({totalDuration:1200,easing:"ease-in"})}]),d={preloader:!0,controls:!0},g=c(()=>{let l=`
import {
	Fade,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Fade,
		options: shallowReactive({
			totalDuration: ${s[0].options.totalDuration},
			easing: '${s[0].options.easing}',
		}),
	},
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,t)=>(i(),e("div",k,[u(R,{options:p,transitions:o(s),numRscs:12,complements:d},null,8,["transitions"]),t[5]||(t[5]=n("h3",null,"Options",-1)),n("label",null,[t[3]||(t[3]=n("span",null,"Total duration:",-1)),u(o(F),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":t[0]||(t[0]=a=>o(s)[0].options.totalDuration=a),min:o(T),max:o(S),onSlide:t[1]||(t[1]=a=>o(s)[0].options.totalDuration=a)},null,8,["modelValue","min","max"])]),n("label",null,[t[4]||(t[4]=n("span",null,"Easing:",-1)),v(n("select",{"onUpdate:modelValue":t[2]||(t[2]=a=>o(s)[0].options.easing=a)},[(i(!0),e(x,null,V(o(b),a=>(i(),e("option",{key:a},j(a),1))),128))],512),[[D,o(s)[0].options.easing]])]),t[6]||(t[6]=n("h3",null,"Source",-1)),n("div",B,[n("pre",{innerHTML:g.value,class:"language-javascript"},null,8,C)])]))}});export{N as default};
