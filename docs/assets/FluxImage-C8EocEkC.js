import{f as S,g as p,h as f,c as U,o as $,a as u,b as i,u as l,H as g,d as w,L as V}from"./app-ipQ6pP7q.js";import{R as h,G as k,i as I}from"./vue-flux-DLPyrDSG.js";import{P as v}from"./prism-CBfTwKG-.js";import{m as d}from"./slider-F-wIZrlM.js";import{I as H}from"./Images-LscGjCep.js";const j={class:"demo"},L={class:"checkbox"},M={class:"checkbox"},P={class:"language-javascript","data-ext":"js"},T=["innerHTML"],y={class:"language-html","data-ext":"html"},B=["innerHTML"],D=S({__name:"FluxImage",setup(E){const z=H.generate(1),o=new h({width:640,height:360}),m=p(!1),n=new h({width:640,height:360}),r=p(!1),s=new k({top:0,left:0}),x=f(()=>{let a=`
import {
	Img,
	Size,
	Position,
	FluxImage
} from 'vue-flux';

const rsc = new Img('image-url');

const size = new Size({
	width: ${o.width.value},
	height: ${o.height.value},
});
`;return m.value&&(a+=`
const viewSize = new Size({
	width: ${n.width.value},
	height: ${n.height.value},
});
`),r.value&&(a+=`
const offset = new Position({
	top: ${s.top.value},
	left: ${s.left.value},
});`),v.highlight(a.trim(),v.languages.javascript,"javascript")}),b=f(()=>{const a=`
<FluxImage
	:rsc="rsc"
	:size="size"
	${m.value?':view-size="viewSize"':""}
	${r.value?':offset="offset"':""}
/>`;return v.highlight(a.trim().replaceAll(`	
`,""),v.languages.html,"html")});return(a,e)=>($(),U("div",j,[u(l(I),{rsc:l(z),size:l(o),"view-size":m.value?l(n):void 0,offset:r.value?l(s):void 0},null,8,["rsc","size","view-size","offset"]),e[22]||(e[22]=i("h3",null,"Playground",-1)),i("label",null,[e[14]||(e[14]=i("span",null,"Size width:",-1)),u(l(d),{modelValue:l(o).width.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l(o).width.value=t),min:100,max:640,onSlide:e[1]||(e[1]=t=>l(o).width.value=t)},null,8,["modelValue"])]),i("label",null,[e[15]||(e[15]=i("span",null,"Size height:",-1)),u(l(d),{modelValue:l(o).height.value,"onUpdate:modelValue":e[2]||(e[2]=t=>l(o).height.value=t),min:56,max:360,onSlide:e[3]||(e[3]=t=>l(o).height.value=t)},null,8,["modelValue"])]),i("label",L,[g(i("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=t=>m.value=t),value:!0},null,512),[[V,m.value]]),e[16]||(e[16]=w(" View size enabled ",-1))]),i("label",null,[e[17]||(e[17]=i("span",null,"View size width:",-1)),u(l(d),{modelValue:l(n).width.value,"onUpdate:modelValue":e[5]||(e[5]=t=>l(n).width.value=t),min:100,max:640,onSlide:e[6]||(e[6]=t=>l(n).width.value=t)},null,8,["modelValue"])]),i("label",null,[e[18]||(e[18]=i("span",null,"View size height:",-1)),u(l(d),{modelValue:l(n).height.value,"onUpdate:modelValue":e[7]||(e[7]=t=>l(n).height.value=t),min:56,max:360,onSlide:e[8]||(e[8]=t=>l(n).height.value=t)},null,8,["modelValue"])]),i("label",M,[g(i("input",{type:"checkbox","onUpdate:modelValue":e[9]||(e[9]=t=>r.value=t),value:!0},null,512),[[V,r.value]]),e[19]||(e[19]=w(" Offset enabled ",-1))]),i("label",null,[e[20]||(e[20]=i("span",null,"Offset top:",-1)),u(l(d),{modelValue:l(s).top.value,"onUpdate:modelValue":e[10]||(e[10]=t=>l(s).top.value=t),min:-320,max:320,onSlide:e[11]||(e[11]=t=>l(s).top.value=t)},null,8,["modelValue"])]),i("label",null,[e[21]||(e[21]=i("span",null,"Offset left:",-1)),u(l(d),{modelValue:l(s).left.value,"onUpdate:modelValue":e[12]||(e[12]=t=>l(s).left.value=t),min:-320,max:320,onSlide:e[13]||(e[13]=t=>l(s).left.value=t)},null,8,["modelValue"])]),e[23]||(e[23]=i("h3",null,"Source",-1)),i("div",P,[i("pre",{innerHTML:x.value,class:"language-javascript"},null,8,T)]),i("div",y,[i("pre",{innerHTML:b.value,class:"language-html"},null,8,B)])]))}});export{D as default};
