import{F as p,d as _}from"./vue-flux-0735f99c.js";import{P as r}from"./prism-5c0d5a27.js";import{m as d}from"./slider-1af67187.js";import{I as f}from"./Images-4256fd34.js";import{f as x,g as m,h as v,o as w,c as V,a as u,u as o,d as s,_ as z}from"./app-4b2e338b.js";const F={class:"demo demo-flux-grid"},S=s("h3",null,"Playground",-1),G=s("span",null,"Width:",-1),H=s("span",null,"Height:",-1),$=s("span",null,"Rows:",-1),j=s("span",null,"Cols:",-1),b=s("h3",null,"Source",-1),I={class:"language-javascript","data-ext":"js"},L=["innerHTML"],M={class:"language-html","data-ext":"html"},T=["innerHTML"],U=x({__name:"FluxGrid",setup(y){const g=f.generate(1),t=new p({width:640,height:360}),n=m(2),a=m(4),c=v(()=>{let i=`
import {
	Img,
	Size,
	FluxGrid
} from 'vue-flux';

const rsc = new Img('image-url');

const size = new Size({
	width: ${t.width.value},
	height: ${t.height.value},
});

const rows = ref(${n.value})
const cols = ref(${a.value})
`;return r.highlight(i.trim(),r.languages.javascript,"javascript")}),h=v(()=>{const i=`
<FluxGrid
	:rsc="rsc"
	:size="size"
	:rows="${n.value}"
	:cols="${a.value}"
/>`;return r.highlight(i.trim().replaceAll(`	
`,""),r.languages.html,"html")});return(i,e)=>(w(),V("div",F,[u(o(_),{rsc:o(g),size:o(t),rows:n.value,cols:a.value},null,8,["rsc","size","rows","cols"]),S,s("label",null,[G,u(o(d),{modelValue:o(t).width.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o(t).width.value=l),min:100,max:640,onSlide:e[1]||(e[1]=l=>o(t).width.value=l)},null,8,["modelValue"])]),s("label",null,[H,u(o(d),{modelValue:o(t).height.value,"onUpdate:modelValue":e[2]||(e[2]=l=>o(t).height.value=l),min:100,max:640,onSlide:e[3]||(e[3]=l=>o(t).height.value=l)},null,8,["modelValue"])]),s("label",null,[$,u(o(d),{modelValue:n.value,"onUpdate:modelValue":e[4]||(e[4]=l=>n.value=l),min:1,max:20,onSlide:e[5]||(e[5]=l=>n.value=l)},null,8,["modelValue"])]),s("label",null,[j,u(o(d),{modelValue:a.value,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value=l),min:1,max:20,onSlide:e[7]||(e[7]=l=>a.value=l)},null,8,["modelValue"])]),b,s("div",I,[s("pre",{innerHTML:c.value,class:"language-javascript"},null,8,L)]),s("div",M,[s("pre",{innerHTML:h.value,class:"language-html"},null,8,T)])]))}});const A=z(U,[["__file","FluxGrid.vue"]]);export{A as default};
