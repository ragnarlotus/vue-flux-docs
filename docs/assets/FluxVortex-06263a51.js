import{F as g,v}from"./vue-flux-5e4dd4a6.js";import{P as i}from"./prism-5c0d5a27.js";import{m as r}from"./slider-ebb44725.js";import{I as p}from"./Images-a444c621.js";import{f as _,g as x,h as d,o as f,c as V,a as u,u as l,d as t,_ as w}from"./app-7e36012f.js";const z={class:"demo demo-flux-vortex"},F=t("h3",null,"Playground",-1),H=t("span",null,"Width:",-1),S=t("span",null,"Height:",-1),j=t("span",null,"Circles:",-1),I=t("h3",null,"Source",-1),L={class:"language-javascript","data-ext":"js"},M=["innerHTML"],T={class:"language-html","data-ext":"html"},$=["innerHTML"],b=_({__name:"FluxVortex",setup(k){const m=p.generate(1),o=new g({width:640,height:360}),a=x(10),c=d(()=>{let n=`
import {
	Img,
	Size,
	FluxVortex
} from 'vue-flux';

const rsc = new Img('image-url');

const size = new Size({
	width: ${o.width.value},
	height: ${o.height.value},
});

const circles = ref(${a.value});`;return i.highlight(n.trim(),i.languages.javascript,"javascript")}),h=d(()=>{const n=`
<FluxVortex
	:rsc="rsc"
	:size="size"
	:circles="${a.value}"
/>`;return i.highlight(n.trim().replaceAll(`	
`,""),i.languages.html,"html")});return(n,e)=>(f(),V("div",z,[u(l(v),{rsc:l(m),size:l(o),circles:a.value},null,8,["rsc","size","circles"]),F,t("label",null,[H,u(l(r),{modelValue:l(o).width.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l(o).width.value=s),min:100,max:640,onSlide:e[1]||(e[1]=s=>l(o).width.value=s)},null,8,["modelValue"])]),t("label",null,[S,u(l(r),{modelValue:l(o).height.value,"onUpdate:modelValue":e[2]||(e[2]=s=>l(o).height.value=s),min:100,max:640,onSlide:e[3]||(e[3]=s=>l(o).height.value=s)},null,8,["modelValue"])]),t("label",null,[j,u(l(r),{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=s=>a.value=s),min:1,max:20,onSlide:e[5]||(e[5]=s=>a.value=s)},null,8,["modelValue"])]),I,t("div",L,[t("pre",{innerHTML:c.value,class:"language-javascript"},null,8,M)]),t("div",T,[t("pre",{innerHTML:h.value,class:"language-html"},null,8,$)])]))}});const N=w(b,[["__file","FluxVortex.vue"]]);export{N as default};
