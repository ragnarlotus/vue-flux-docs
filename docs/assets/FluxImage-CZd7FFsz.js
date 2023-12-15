import{g as b,h,i as p,o as S,c as _,a as n,u as e,b as o,H as f,L as g,d as w,_ as I}from"./app-9q7i-DDF.js";import{R as V,m as U,v as $}from"./vue-flux-Jy6SlP2J.js";import{P as r}from"./prism-cS1PeyxU.js";import{m as d}from"./slider-qIJTIoH5.js";import{I as k}from"./Images-GCWpavzx.js";const j={class:"demo"},H=o("h3",null,"Playground",-1),F=o("span",null,"Size width:",-1),L=o("span",null,"Size height:",-1),M={class:"checkbox"},P=o("span",null,"View size width:",-1),T=o("span",null,"View size height:",-1),y={class:"checkbox"},B=o("span",null,"Offset top:",-1),E=o("span",null,"Offset left:",-1),N=o("h3",null,"Source",-1),O={class:"language-javascript","data-ext":"js"},C=["innerHTML"],A={class:"language-html","data-ext":"html"},D=["innerHTML"],J=b({__name:"FluxImage",setup(R){const x=k.generate(1),a=new V({width:640,height:360}),m=h(!1),s=new V({width:640,height:360}),v=h(!1),i=new U({top:0,left:0}),z=p(()=>{let u=`
import {
	Img,
	Size,
	Position,
	FluxImage
} from 'vue-flux';

const rsc = new Img('image-url');

const size = new Size({
	width: ${a.width.value},
	height: ${a.height.value},
});
`;return m.value&&(u+=`
const viewSize = new Size({
	width: ${s.width.value},
	height: ${s.height.value},
});
`),v.value&&(u+=`
const offset = new Position({
	top: ${i.top.value},
	left: ${i.left.value},
});`),r.highlight(u.trim(),r.languages.javascript,"javascript")}),c=p(()=>{const u=`
<FluxImage
	:rsc="rsc"
	:size="size"
	${m.value?':view-size="viewSize"':""}
	${v.value?':offset="offset"':""}
/>`;return r.highlight(u.trim().replaceAll(`	
`,""),r.languages.html,"html")});return(u,l)=>(S(),_("div",j,[n(e($),{rsc:e(x),size:e(a),"view-size":m.value?e(s):void 0,offset:v.value?e(i):void 0},null,8,["rsc","size","view-size","offset"]),H,o("label",null,[F,n(e(d),{modelValue:e(a).width.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e(a).width.value=t),min:100,max:640,onSlide:l[1]||(l[1]=t=>e(a).width.value=t)},null,8,["modelValue"])]),o("label",null,[L,n(e(d),{modelValue:e(a).height.value,"onUpdate:modelValue":l[2]||(l[2]=t=>e(a).height.value=t),min:56,max:360,onSlide:l[3]||(l[3]=t=>e(a).height.value=t)},null,8,["modelValue"])]),o("label",M,[f(o("input",{type:"checkbox","onUpdate:modelValue":l[4]||(l[4]=t=>m.value=t),value:!0},null,512),[[g,m.value]]),w(" View size enabled ")]),o("label",null,[P,n(e(d),{modelValue:e(s).width.value,"onUpdate:modelValue":l[5]||(l[5]=t=>e(s).width.value=t),min:100,max:640,onSlide:l[6]||(l[6]=t=>e(s).width.value=t)},null,8,["modelValue"])]),o("label",null,[T,n(e(d),{modelValue:e(s).height.value,"onUpdate:modelValue":l[7]||(l[7]=t=>e(s).height.value=t),min:56,max:360,onSlide:l[8]||(l[8]=t=>e(s).height.value=t)},null,8,["modelValue"])]),o("label",y,[f(o("input",{type:"checkbox","onUpdate:modelValue":l[9]||(l[9]=t=>v.value=t),value:!0},null,512),[[g,v.value]]),w(" Offset enabled ")]),o("label",null,[B,n(e(d),{modelValue:e(i).top.value,"onUpdate:modelValue":l[10]||(l[10]=t=>e(i).top.value=t),min:-320,max:320,onSlide:l[11]||(l[11]=t=>e(i).top.value=t)},null,8,["modelValue"])]),o("label",null,[E,n(e(d),{modelValue:e(i).left.value,"onUpdate:modelValue":l[12]||(l[12]=t=>e(i).left.value=t),min:-320,max:320,onSlide:l[13]||(l[13]=t=>e(i).left.value=t)},null,8,["modelValue"])]),N,o("div",O,[o("pre",{innerHTML:z.value,class:"language-javascript"},null,8,C)]),o("div",A,[o("pre",{innerHTML:c.value,class:"language-html"},null,8,D)])]))}}),X=I(J,[["__file","FluxImage.vue"]]);export{X as default};
