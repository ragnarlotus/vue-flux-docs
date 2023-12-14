import{g as H,h as p,i as g,o as r,c as u,F as v,q as f,a as i,u as m,p as S,b as l,H as j,J as L,B as M,_ as T}from"./app-k9p8jFez.js";import{P as c}from"./prism-cS1PeyxU.js";import{m as h}from"./slider-YGWCqJM_.js";import{X as $}from"./vue-flux-EKi73fdj.js";import x from"./Lines-GA_jnBQi.js";import{I as k}from"./Images-emnYdbkt.js";import"./VcParagraph-ToWkNOnH.js";const B={class:"demo demo-flux-parallax"},I=l("h3",null,"Playground",-1),N=l("span",null,"Type",-1),U=l("span",null,"Height:",-1),w=l("span",null,"Offset:",-1),D=l("h3",null,"Source",-1),J={class:"language-javascript","data-ext":"js"},O=["innerHTML"],X={class:"language-html","data-ext":"html"},q=["innerHTML"];var _=(n=>(n.relative="relative",n.visible="visible",n.fixed="fixed",n))(_||{});const z=H({__name:"FluxParallax",setup(n){const y=Object.values(_),V=k.generate(1),a=p(250),s=p(50),d=p("relative"),F=o=>Math.round(o).toString()+"%",P=g(()=>{let o=`
import {
	Img,
	FluxParallax
} from 'vue-flux';

const rsc = new Img('image-url');
const height = ref('${a.value}px');
const offset = ref('${s.value}%');`;return c.highlight(o.trim(),c.languages.javascript,"javascript")}),b=g(()=>{const o=`
<FluxParallax
	:rsc="rsc"
	type="${d.value}"
	offset="${s.value}%"
	style="height: ${a.value}px"
/>`;return c.highlight(o.trim().replaceAll(`	
`,""),c.languages.html,"html")});return(o,t)=>(r(),u("div",B,[(r(),u(v,null,f(3,e=>i(x,{key:e})),64)),i(m($),{rsc:m(V),type:d.value,offset:s.value+"%",style:S(`height: ${a.value}px`)},null,8,["rsc","type","offset","style"]),I,l("label",null,[N,j(l("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e)},[(r(!0),u(v,null,f(m(y),e=>(r(),u("option",{key:e},M(e),1))),128))],512),[[L,d.value]])]),l("label",null,[U,i(m(h),{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),min:20,max:640,onSlide:t[2]||(t[2]=e=>a.value=e)},null,8,["modelValue"])]),l("label",null,[w,i(m(h),{modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=e=>s.value=e),min:1,max:100,format:F,onSlide:t[4]||(t[4]=e=>s.value=e)},null,8,["modelValue"])]),D,l("div",J,[l("pre",{innerHTML:P.value,class:"language-javascript"},null,8,O)]),l("div",X,[l("pre",{innerHTML:b.value,class:"language-html"},null,8,q)]),(r(),u(v,null,f(3,e=>i(x,{key:e})),64))]))}}),W=T(z,[["__file","FluxParallax.vue"]]);export{W as default};
