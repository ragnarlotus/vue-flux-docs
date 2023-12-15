import{R as p,k as _}from"./vue-flux-Jy6SlP2J.js";import{P as r}from"./prism-cS1PeyxU.js";import{m as d}from"./slider-qIJTIoH5.js";import{I as f}from"./Images-GCWpavzx.js";import{g as x,h as m,i as g,o as w,c as V,a as u,u as o,b as s,_ as z}from"./app-9q7i-DDF.js";const S={class:"demo demo-flux-grid"},H=s("h3",null,"Playground",-1),$=s("span",null,"Width:",-1),b=s("span",null,"Height:",-1),j=s("span",null,"Rows:",-1),F=s("span",null,"Cols:",-1),G=s("h3",null,"Source",-1),M={class:"language-javascript","data-ext":"js"},I=["innerHTML"],L={class:"language-html","data-ext":"html"},T=["innerHTML"],U=x({__name:"FluxGrid",setup(k){const v=f.generate(1),t=new p({width:640,height:360}),a=m(2),n=m(4),c=g(()=>{let i=`
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

const rows = ref(${a.value})
const cols = ref(${n.value})
`;return r.highlight(i.trim(),r.languages.javascript,"javascript")}),h=g(()=>{const i=`
<FluxGrid
	:rsc="rsc"
	:size="size"
	:rows="${a.value}"
	:cols="${n.value}"
/>`;return r.highlight(i.trim().replaceAll(`	
`,""),r.languages.html,"html")});return(i,l)=>(w(),V("div",S,[u(o(_),{rsc:o(v),size:o(t),rows:a.value,cols:n.value},null,8,["rsc","size","rows","cols"]),H,s("label",null,[$,u(o(d),{modelValue:o(t).width.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o(t).width.value=e),min:100,max:640,onSlide:l[1]||(l[1]=e=>o(t).width.value=e)},null,8,["modelValue"])]),s("label",null,[b,u(o(d),{modelValue:o(t).height.value,"onUpdate:modelValue":l[2]||(l[2]=e=>o(t).height.value=e),min:100,max:640,onSlide:l[3]||(l[3]=e=>o(t).height.value=e)},null,8,["modelValue"])]),s("label",null,[j,u(o(d),{modelValue:a.value,"onUpdate:modelValue":l[4]||(l[4]=e=>a.value=e),min:1,max:20,onSlide:l[5]||(l[5]=e=>a.value=e)},null,8,["modelValue"])]),s("label",null,[F,u(o(d),{modelValue:n.value,"onUpdate:modelValue":l[6]||(l[6]=e=>n.value=e),min:1,max:20,onSlide:l[7]||(l[7]=e=>n.value=e)},null,8,["modelValue"])]),G,s("div",M,[s("pre",{innerHTML:c.value,class:"language-javascript"},null,8,I)]),s("div",L,[s("pre",{innerHTML:h.value,class:"language-html"},null,8,T)])]))}}),y=z(U,[["__file","FluxGrid.vue"]]);export{y as default};
