import{g as _,E as r,i as g,o as e,c as i,a as u,u as o,d as t,H as f,J as v,F as h,q as D,B as x,_ as F}from"./app-8ofisRWT.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as V}from"./slider-nG48BaF2.js";import{l as j}from"./vue-flux-px7IYbV-.js";import w from"./Demo-gMcMLx0M.js";import{d as B,f as R,e as S}from"./constants-vSRoptby.js";import"./Images-jcl--gmI.js";const T={class:"demo"},k=t("h3",null,"Options",-1),E=t("span",null,"Total duration:",-1),H=t("span",null,"Easing:",-1),L=t("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},b=["innerHTML"],y=_({__name:"Fall",setup(J){const p={autohideTime:0},s=r([{component:j,options:r({totalDuration:1600,easing:"ease-in"})}]),c={preloader:!0,controls:!0},d=g(()=>{let l=`
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
]);`;return m.highlight(l.trim(),m.languages.javascript,"javascript")});return(l,n)=>(e(),i("div",T,[u(w,{options:p,transitions:o(s),numRscs:12,complements:c},null,8,["transitions"]),k,t("label",null,[E,u(o(V),{modelValue:o(s)[0].options.totalDuration,"onUpdate:modelValue":n[0]||(n[0]=a=>o(s)[0].options.totalDuration=a),min:o(B),max:o(R),onSlide:n[1]||(n[1]=a=>o(s)[0].options.totalDuration=a)},null,8,["modelValue","min","max"])]),t("label",null,[H,f(t("select",{"onUpdate:modelValue":n[2]||(n[2]=a=>o(s)[0].options.easing=a)},[(e(!0),i(h,null,D(o(S),a=>(e(),i("option",{key:a},x(a),1))),128))],512),[[v,o(s)[0].options.easing]])]),L,t("div",M,[t("pre",{innerHTML:d.value,class:"language-javascript"},null,8,b)])]))}}),z=F(y,[["__file","Fall.vue"]]);export{z as default};
