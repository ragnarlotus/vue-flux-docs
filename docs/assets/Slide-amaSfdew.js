import{f,G as r,h as c,c as e,o as i,a as u,b as n,u as o,H as v,J as D,F as x,q as S,t as V}from"./app-ipQ6pP7q.js";import{P as m}from"./prism-CBfTwKG-.js";import{m as j}from"./slider-F-wIZrlM.js";import{L}from"./vue-flux-DLPyrDSG.js";import{_ as w}from"./Demo.vue_vue_type_script_setup_true_lang-DcXo2T1D.js";import{d as R,f as T,e as b}from"./constants-Di4rOZRF.js";import"./Images-LscGjCep.js";const k={class:"demo"},B={class:"language-javascript","data-ext":"js"},H=["innerHTML"],P=f({__name:"Slide",setup(M){const p={autohideTime:0},s=r([{component:L,options:r({totalDuration:1400,easing:"ease-in-out"})}]),d={preloader:!0,controls:!0},g=c(()=>{let l=`
import {
	Slide,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Slide,
		options: shallowReactive({
			totalDuration: ${s[0].options.totalDuration},
			easing: '${s[0].options.easing}',
		}),
	},
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,t)=>(i(),e("div",k,[u(w,{options:p,transitions:o(s),numRscs:12,complements:d},null,8,["transitions"]),t[5]||(t[5]=n("h3",null,"Options",-1)),n("label",null,[t[3]||(t[3]=n("span",null,"Total duration:",-1)),u(o(j),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":t[0]||(t[0]=a=>o(s)[0].options.totalDuration=a),min:o(T),max:o(R),onSlide:t[1]||(t[1]=a=>o(s)[0].options.totalDuration=a)},null,8,["modelValue","min","max"])]),n("label",null,[t[4]||(t[4]=n("span",null,"Easing:",-1)),v(n("select",{"onUpdate:modelValue":t[2]||(t[2]=a=>o(s)[0].options.easing=a)},[(i(!0),e(x,null,S(o(b),a=>(i(),e("option",{key:a},V(a),1))),128))],512),[[D,o(s)[0].options.easing]])]),t[6]||(t[6]=n("h3",null,"Source",-1)),n("div",B,[n("pre",{innerHTML:g.value,class:"language-javascript"},null,8,H)])]))}});export{P as default};
