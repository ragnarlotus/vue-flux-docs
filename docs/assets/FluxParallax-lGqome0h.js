import{f as j,g as f,h as x,c as o,o as u,a as i,b as t,F as v,q as g,B as F,u as m,H as M,J as P,t as T}from"./app-MTV9PqO7.js";import{P as p}from"./prism-CBfTwKG-.js";import{m as c}from"./slider-l2pfGRmo.js";import{z as k}from"./vue-flux-D0xQKYPf.js";import{_ as y}from"./Lines.vue_vue_type_script_setup_true_lang-CMVS7YVQ.js";import{I as L}from"./Images-D3tRVO8F.js";import"./VcParagraph.vue_vue_type_style_index_0_lang-C_PKb89e.js";const B={class:"demo demo-flux-parallax"},I={class:"language-javascript","data-ext":"js"},z=["innerHTML"],N={class:"language-html","data-ext":"html"},U=["innerHTML"];var h=(r=>(r.relative="relative",r.visible="visible",r.fixed="fixed",r))(h||{});const E=j({__name:"FluxParallax",setup(r){const V=Object.values(h),b=L.generate(1),a=f(250),s=f(50),d=f("relative"),H=n=>Math.round(n).toString()+"%",S=x(()=>{let n=`
import {
	Img,
	FluxParallax
} from 'vue-flux';

const rsc = new Img('image-url');
const height = ref('${a.value}px');
const offset = ref('${s.value}%');`;return p.highlight(n.trim(),p.languages.javascript,"javascript")}),$=x(()=>{const n=`
<FluxParallax
	:rsc="rsc"
	type="${d.value}"
	offset="${s.value}%"
	style="height: ${a.value}px"
/>`;return p.highlight(n.trim().replaceAll(`	
`,""),p.languages.html,"html")});return(n,e)=>(u(),o("div",B,[(u(),o(v,null,g(3,l=>i(y,{key:l})),64)),i(m(k),{rsc:m(b),type:d.value,offset:s.value+"%",style:F(`height: ${a.value}px`)},null,8,["rsc","type","offset","style"]),e[8]||(e[8]=t("h3",null,"Playground",-1)),t("label",null,[e[5]||(e[5]=t("span",null,"Type",-1)),M(t("select",{"onUpdate:modelValue":e[0]||(e[0]=l=>d.value=l)},[(u(!0),o(v,null,g(m(V),l=>(u(),o("option",{key:l},T(l),1))),128))],512),[[P,d.value]])]),t("label",null,[e[6]||(e[6]=t("span",null,"Height:",-1)),i(m(c),{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l),min:20,max:640,onSlide:e[2]||(e[2]=l=>a.value=l)},null,8,["modelValue"])]),t("label",null,[e[7]||(e[7]=t("span",null,"Offset:",-1)),i(m(c),{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value=l),min:1,max:100,format:H,onSlide:e[4]||(e[4]=l=>s.value=l)},null,8,["modelValue"])]),e[9]||(e[9]=t("h3",null,"Source",-1)),t("div",I,[t("pre",{innerHTML:S.value,class:"language-javascript"},null,8,z)]),t("div",N,[t("pre",{innerHTML:$.value,class:"language-html"},null,8,U)]),(u(),o(v,null,g(3,l=>i(y,{key:l})),64))]))}});export{E as default};
