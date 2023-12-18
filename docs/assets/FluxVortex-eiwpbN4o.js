import{R as g,w as p}from"./vue-flux-XHwbH0Ez.js";import{P as i}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-pQflgib0.js";import{I as v}from"./Images-P-QdXgH-.js";import{f as x,g as _,h as m,o as f,c as V,a as u,u as l,b as t,_ as w}from"./app-f_FCzlUc.js";const z={class:"demo demo-flux-vortex"},H=t("h3",null,"Playground",-1),S=t("span",null,"Width:",-1),j=t("span",null,"Height:",-1),F=t("span",null,"Circles:",-1),b=t("h3",null,"Source",-1),I={class:"language-javascript","data-ext":"js"},L=["innerHTML"],M={class:"language-html","data-ext":"html"},T=["innerHTML"],$=x({__name:"FluxVortex",setup(k){const d=v.generate(1),o=new g({width:640,height:360}),a=_(10),c=m(()=>{let n=`
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

const circles = ref(${a.value});`;return i.highlight(n.trim(),i.languages.javascript,"javascript")}),h=m(()=>{const n=`
<FluxVortex
	:rsc="rsc"
	:size="size"
	:circles="${a.value}"
/>`;return i.highlight(n.trim().replaceAll(`	
`,""),i.languages.html,"html")});return(n,e)=>(f(),V("div",z,[u(l(p),{rsc:l(d),size:l(o),circles:a.value},null,8,["rsc","size","circles"]),H,t("label",null,[S,u(l(r),{modelValue:l(o).width.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l(o).width.value=s),min:100,max:640,onSlide:e[1]||(e[1]=s=>l(o).width.value=s)},null,8,["modelValue"])]),t("label",null,[j,u(l(r),{modelValue:l(o).height.value,"onUpdate:modelValue":e[2]||(e[2]=s=>l(o).height.value=s),min:100,max:640,onSlide:e[3]||(e[3]=s=>l(o).height.value=s)},null,8,["modelValue"])]),t("label",null,[F,u(l(r),{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=s=>a.value=s),min:1,max:20,onSlide:e[5]||(e[5]=s=>a.value=s)},null,8,["modelValue"])]),b,t("div",I,[t("pre",{innerHTML:c.value,class:"language-javascript"},null,8,L)]),t("div",M,[t("pre",{innerHTML:h.value,class:"language-html"},null,8,T)])]))}}),y=w($,[["__file","FluxVortex.vue"]]);export{y as default};
