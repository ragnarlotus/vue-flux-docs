import{f as _,E as i,h as g,o as f,c as v,a as l,u as n,d as o,H as r,I as u,_ as h}from"./app-fbfde9e5.js";import{P as p}from"./prism-5c0d5a27.js";import{m as x}from"./slider-93eda8bf.js";import{n as C}from"./vue-flux-5cdc7d97.js";import b from"./Demo-14c87d15.js";import{d as D,f as k}from"./constants-e7e525a7.js";import"./Images-9dbdb301.js";const V={class:"demo"},j=o("h3",null,"Options",-1),w=o("span",null,"total duration:",-1),B=o("span",null,"Easing:",-1),R=o("span",null,"Background color:",-1),T=o("h3",null,"Source",-1),E={class:"language-javascript","data-ext":"js"},H=["innerHTML"],M=_({__name:"Camera",setup(U){const m={autohideTime:0},t=i([{component:C,options:i({totalDuration:1200,easing:"cubic-bezier(0.385, 0, 0.795, 0.560)",backgroundColor:"#111"})}]),c={preloader:!0,controls:!0},d=g(()=>{let e=`
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
]);`;return p.highlight(e.trim(),p.languages.javascript,"javascript")});return(e,a)=>(f(),v("div",V,[l(b,{options:m,transitions:n(t),numRscs:12,complements:c},null,8,["transitions"]),j,o("label",null,[w,l(n(x),{modelValue:n(t)[0].options.totalDuration,"onUpdate:modelValue":a[0]||(a[0]=s=>n(t)[0].options.totalDuration=s),min:n(D),max:n(k),onSlide:a[1]||(a[1]=s=>n(t)[0].options.totalDuration=s)},null,8,["modelValue","min","max"])]),o("label",null,[B,r(o("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=s=>n(t)[0].options.easing=s)},null,512),[[u,n(t)[0].options.easing]])]),o("label",null,[R,r(o("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=s=>n(t)[0].options.backgroundColor=s)},null,512),[[u,n(t)[0].options.backgroundColor]])]),T,o("div",E,[o("pre",{innerHTML:d.value,class:"language-javascript"},null,8,H)])]))}}),I=h(M,[["__file","Camera.vue"]]);export{I as default};
