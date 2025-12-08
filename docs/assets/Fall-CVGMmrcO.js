import{f,G as r,h as c,c as e,o as i,a as u,b as n,u as o,H as v,J as D,F as x,q as V,t as j}from"./app-MTV9PqO7.js";import{P as m}from"./prism-CBfTwKG-.js";import{m as F}from"./slider-l2pfGRmo.js";import{N as w}from"./vue-flux-D0xQKYPf.js";import{_ as N}from"./Demo.vue_vue_type_script_setup_true_lang-CtBj1C7x.js";import{d as R,f as S,e as T}from"./constants-Di4rOZRF.js";import"./Images-D3tRVO8F.js";const b={class:"demo"},k={class:"language-javascript","data-ext":"js"},B=["innerHTML"],P=f({__name:"Fall",setup(H){const p={autohideTime:0},s=r([{component:w,options:r({totalDuration:1600,easing:"ease-in"})}]),d={preloader:!0,controls:!0},g=c(()=>{let l=`
import {
	Fall,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Fall,
		options: shallowReactive({
			totalDuration: ${s[0].options.totalDuration},
			easing: '${s[0].options.easing}',
		}),
	},
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,t)=>(i(),e("div",b,[u(N,{options:p,transitions:o(s),numRscs:12,complements:d},null,8,["transitions"]),t[5]||(t[5]=n("h3",null,"Options",-1)),n("label",null,[t[3]||(t[3]=n("span",null,"Total duration:",-1)),u(o(F),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":t[0]||(t[0]=a=>o(s)[0].options.totalDuration=a),min:o(S),max:o(R),onSlide:t[1]||(t[1]=a=>o(s)[0].options.totalDuration=a)},null,8,["modelValue","min","max"])]),n("label",null,[t[4]||(t[4]=n("span",null,"Easing:",-1)),v(n("select",{"onUpdate:modelValue":t[2]||(t[2]=a=>o(s)[0].options.easing=a)},[(i(!0),e(x,null,V(o(T),a=>(i(),e("option",{key:a},j(a),1))),128))],512),[[D,o(s)[0].options.easing]])]),t[6]||(t[6]=n("h3",null,"Source",-1)),n("div",k,[n("pre",{innerHTML:g.value,class:"language-javascript"},null,8,B)])]))}});export{P as default};
