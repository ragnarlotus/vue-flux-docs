import{g as _,E as r,i as g,o as e,c as i,a as u,u as o,b as t,H as f,J as v,F as h,q as D,C as x,_ as F}from"./app-pGooBgpL.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as V}from"./slider-tqbc3ZTj.js";import{k as j}from"./vue-flux--F8xa8iS.js";import k from"./Demo-nlpFG_1z.js";import{d as w,f as R,e as S}from"./constants-vSRoptby.js";import"./Images-0G4Yedb4.js";const T={class:"demo"},b=t("h3",null,"Options",-1),B=t("span",null,"Total duration:",-1),E=t("span",null,"Easing:",-1),H=t("h3",null,"Source",-1),L={class:"language-javascript","data-ext":"js"},M=["innerHTML"],y=_({__name:"Fall",setup(C){const p={autohideTime:0},s=r([{component:j,options:r({totalDuration:1600,easing:"ease-in"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
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
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,n)=>(e(),i("div",T,[u(k,{options:p,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),b,t("label",null,[B,u(o(V),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":n[0]||(n[0]=a=>o(s)[0].options.totalDuration=a),min:o(w),max:o(R),onSlide:n[1]||(n[1]=a=>o(s)[0].options.totalDuration=a)},null,8,["modelValue","min","max"])]),t("label",null,[E,f(t("select",{"onUpdate:modelValue":n[2]||(n[2]=a=>o(s)[0].options.easing=a)},[(e(!0),i(h,null,D(o(S),a=>(e(),i("option",{key:a},x(a),1))),128))],512),[[v,o(s)[0].options.easing]])]),H,t("div",L,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,M)])]))}}),z=F(y,[["__file","Fall.vue"]]);export{z as default};
