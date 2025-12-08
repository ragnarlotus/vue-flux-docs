import{R as w,a as V}from"./vue-flux-B4W74UIR.js";import{P as r}from"./prism-CBfTwKG-.js";import{m}from"./slider-C3458_x4.js";import{I as x}from"./Images-BrEvi5ME.js";import{f as h,g as d,h as g,c as z,o as S,a as u,b as s,u as o}from"./app-Br2EUNM9.js";const H={class:"demo demo-flux-grid"},$={class:"language-javascript","data-ext":"js"},b=["innerHTML"],j={class:"language-html","data-ext":"html"},I=["innerHTML"],G=h({__name:"FluxGrid",setup(L){const v=x.generate(1),n=new w({width:640,height:360}),t=d(2),a=d(4),p=g(()=>{let i=`
import {
	Img,
	Size,
	FluxGrid
} from 'vue-flux';

const rsc = new Img('image-url');

const size = new Size({
	width: ${n.width.value},
	height: ${n.height.value},
});

const rows = ref(${t.value})
const cols = ref(${a.value})
`;return r.highlight(i.trim(),r.languages.javascript,"javascript")}),f=g(()=>{const i=`
<FluxGrid
	:rsc="rsc"
	:size="size"
	:rows="${t.value}"
	:cols="${a.value}"
/>`;return r.highlight(i.trim().replaceAll(`	
`,""),r.languages.html,"html")});return(i,l)=>(S(),z("div",H,[u(o(V),{rsc:o(v),size:o(n),rows:t.value,cols:a.value},null,8,["rsc","size","rows","cols"]),l[12]||(l[12]=s("h3",null,"Playground",-1)),s("label",null,[l[8]||(l[8]=s("span",null,"Width:",-1)),u(o(m),{modelValue:o(n).width.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o(n).width.value=e),min:100,max:640,onSlide:l[1]||(l[1]=e=>o(n).width.value=e)},null,8,["modelValue"])]),s("label",null,[l[9]||(l[9]=s("span",null,"Height:",-1)),u(o(m),{modelValue:o(n).height.value,"onUpdate:modelValue":l[2]||(l[2]=e=>o(n).height.value=e),min:100,max:640,onSlide:l[3]||(l[3]=e=>o(n).height.value=e)},null,8,["modelValue"])]),s("label",null,[l[10]||(l[10]=s("span",null,"Rows:",-1)),u(o(m),{modelValue:t.value,"onUpdate:modelValue":l[4]||(l[4]=e=>t.value=e),min:1,max:20,onSlide:l[5]||(l[5]=e=>t.value=e)},null,8,["modelValue"])]),s("label",null,[l[11]||(l[11]=s("span",null,"Cols:",-1)),u(o(m),{modelValue:a.value,"onUpdate:modelValue":l[6]||(l[6]=e=>a.value=e),min:1,max:20,onSlide:l[7]||(l[7]=e=>a.value=e)},null,8,["modelValue"])]),l[13]||(l[13]=s("h3",null,"Source",-1)),s("div",$,[s("pre",{innerHTML:p.value,class:"language-javascript"},null,8,b)]),s("div",j,[s("pre",{innerHTML:f.value,class:"language-html"},null,8,I)])]))}});export{G as default};
