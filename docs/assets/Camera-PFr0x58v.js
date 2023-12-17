import{g,E as i,i as _,o as f,c as v,a as l,u as n,b as o,H as r,I as u,_ as b}from"./app-pGooBgpL.js";import{P as p}from"./prism-cS1PeyxU.js";import{m as h}from"./slider-tqbc3ZTj.js";import{g as x}from"./vue-flux--F8xa8iS.js";import C from"./Demo-nlpFG_1z.js";import{d as D,f as k}from"./constants-vSRoptby.js";import"./Images-0G4Yedb4.js";const V={class:"demo"},j=o("h3",null,"Options",-1),w=o("span",null,"total duration:",-1),B=o("span",null,"Easing:",-1),R=o("span",null,"Background color:",-1),T=o("h3",null,"Source",-1),E={class:"language-javascript","data-ext":"js"},H=["innerHTML"],M=g({__name:"Camera",setup(U){const m={autohideTime:0},t=i([{component:x,options:i({totalDuration:1200,easing:"cubic-bezier(0.385, 0, 0.795, 0.560)",backgroundColor:"#111"})}]),c={preloader:!0,controls:!0},d=_(()=>{let e=`
import {
	Camera,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Camera,
		options: shallowReactive({
			totalDuration: ${t[0].options.totalDuration},
			easing: '${t[0].options.easing}',
			backgroundColor: '${t[0].options.backgroundColor}',
		}),
	},
]);`;return p.highlight(e.trim(),p.languages.javascript,"javascript")});return(e,a)=>(f(),v("div",V,[l(C,{options:m,transitions:n(t),numRscs:12,complements:c},null,8,["transitions"]),j,o("label",null,[w,l(n(h),{modelValue:n(t)[0].options.totalDuration,"onUpdate:modelValue":a[0]||(a[0]=s=>n(t)[0].options.totalDuration=s),min:n(D),max:n(k),onSlide:a[1]||(a[1]=s=>n(t)[0].options.totalDuration=s)},null,8,["modelValue","min","max"])]),o("label",null,[B,r(o("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=s=>n(t)[0].options.easing=s)},null,512),[[u,n(t)[0].options.easing]])]),o("label",null,[R,r(o("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=s=>n(t)[0].options.backgroundColor=s)},null,512),[[u,n(t)[0].options.backgroundColor]])]),T,o("div",E,[o("pre",{innerHTML:d.value,class:"language-javascript"},null,8,H)])]))}}),I=b(M,[["__file","Camera.vue"]]);export{I as default};
