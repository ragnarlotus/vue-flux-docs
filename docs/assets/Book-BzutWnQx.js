import{f,G as r,h as c,c as e,o as i,a as u,b as n,u as t,H as v,J as D,F as x,q as k,t as B}from"./app-Br2EUNM9.js";import{P as m}from"./prism-CBfTwKG-.js";import{m as V}from"./slider-C3458_x4.js";import{W as j}from"./vue-flux-B4W74UIR.js";import{_ as w}from"./Demo.vue_vue_type_script_setup_true_lang-BTl2EAGH.js";import{d as R,f as S,e as T}from"./constants-Di4rOZRF.js";import"./Images-BrEvi5ME.js";const b={class:"demo"},H={class:"language-javascript","data-ext":"js"},L=["innerHTML"],P=f({__name:"Book",setup(M){const p={autohideTime:0},s=r([{component:j,options:r({totalDuration:1200,easing:"ease-out"})}]),d={preloader:!0,controls:!0},g=c(()=>{let l=`
import {
	Book,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Book,
		options: shallowReactive({
			totalDuration: ${s[0].options.totalDuration},
			easing: '${s[0].options.easing}',
		}),
	},
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,o)=>(i(),e("div",b,[u(w,{options:p,transitions:t(s),numRscs:12,complements:d},null,8,["transitions"]),o[5]||(o[5]=n("h3",null,"Options",-1)),n("label",null,[o[3]||(o[3]=n("span",null,"Total duration:",-1)),u(t(V),{modelValue:t(s)[0].options.totalDuration,"onUpdate:modelValue":o[0]||(o[0]=a=>t(s)[0].options.totalDuration=a),min:t(S),max:t(R),onSlide:o[1]||(o[1]=a=>t(s)[0].options.totalDuration=a)},null,8,["modelValue","min","max"])]),n("label",null,[o[4]||(o[4]=n("span",null,"Easing:",-1)),v(n("select",{"onUpdate:modelValue":o[2]||(o[2]=a=>t(s)[0].options.easing=a)},[(i(!0),e(x,null,k(t(T),a=>(i(),e("option",{key:a},B(a),1))),128))],512),[[D,t(s)[0].options.easing]])]),o[6]||(o[6]=n("h3",null,"Source",-1)),n("div",H,[n("pre",{innerHTML:g.value,class:"language-javascript"},null,8,L)])]))}});export{P as default};
