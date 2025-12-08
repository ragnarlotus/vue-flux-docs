import{R as v,e as h}from"./vue-flux-B4W74UIR.js";import{P as i}from"./prism-CBfTwKG-.js";import{m as r}from"./slider-C3458_x4.js";import{I as x}from"./Images-BrEvi5ME.js";import{f,g as c,h as m,c as V,o as w,a as u,b as l,u as t}from"./app-Br2EUNM9.js";const z={class:"demo demo-flux-vortex"},H={class:"language-javascript","data-ext":"js"},S=["innerHTML"],j={class:"language-html","data-ext":"html"},$=["innerHTML"],F=f({__name:"FluxVortex",setup(b){const d=x.generate(1),n=new v({width:640,height:360}),a=c(10),g=m(()=>{let o=`
import {
	Img,
	Size,
	FluxVortex
} from 'vue-flux';

const rsc = new Img('image-url');

const size = new Size({
	width: ${n.width.value},
	height: ${n.height.value},
});

const circles = ref(${a.value});`;return i.highlight(o.trim(),i.languages.javascript,"javascript")}),p=m(()=>{const o=`
<FluxVortex
	:rsc="rsc"
	:size="size"
	:circles="${a.value}"
/>`;return i.highlight(o.trim().replaceAll(`	
`,""),i.languages.html,"html")});return(o,e)=>(w(),V("div",z,[u(t(h),{rsc:t(d),size:t(n),circles:a.value},null,8,["rsc","size","circles"]),e[9]||(e[9]=l("h3",null,"Playground",-1)),l("label",null,[e[6]||(e[6]=l("span",null,"Width:",-1)),u(t(r),{modelValue:t(n).width.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t(n).width.value=s),min:100,max:640,onSlide:e[1]||(e[1]=s=>t(n).width.value=s)},null,8,["modelValue"])]),l("label",null,[e[7]||(e[7]=l("span",null,"Height:",-1)),u(t(r),{modelValue:t(n).height.value,"onUpdate:modelValue":e[2]||(e[2]=s=>t(n).height.value=s),min:100,max:640,onSlide:e[3]||(e[3]=s=>t(n).height.value=s)},null,8,["modelValue"])]),l("label",null,[e[8]||(e[8]=l("span",null,"Circles:",-1)),u(t(r),{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=s=>a.value=s),min:1,max:20,onSlide:e[5]||(e[5]=s=>a.value=s)},null,8,["modelValue"])]),e[10]||(e[10]=l("h3",null,"Source",-1)),l("div",H,[l("pre",{innerHTML:g.value,class:"language-javascript"},null,8,S)]),l("div",j,[l("pre",{innerHTML:p.value,class:"language-html"},null,8,$)])]))}});export{F as default};
