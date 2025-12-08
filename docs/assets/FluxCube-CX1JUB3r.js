import{f as H,g as d,h as f,c as V,o as x,a,b as t,u as n,H as U,J as h,F as j,q as k,t as F,B as L}from"./app-BI9tC47I.js";import{R as M,u as T}from"./vue-flux-D_UAZJ8S.js";import{P as v}from"./prism-CBfTwKG-.js";import{m as r}from"./slider-CeIrKPy9.js";import{I as B}from"./Images-D_w33Wdw.js";import{o as C}from"./constants-Di4rOZRF.js";const P={class:"language-javascript","data-ext":"js"},D=["innerHTML"],N={class:"language-html extra-class","data-ext":"html"},R=["innerHTML"],W=H({__name:"FluxCube",setup(X){const $=B.generate(6),b=["front","back","top","bottom","left","right"],w={};for(let s=0;s<b.length;s++)w[b[s]]=$[s];const o=new M({width:640,height:360}),m=d(180),p=d(0),g=d(0),u=d(1600),i=d(void 0),z=Object.values(C),S=f(()=>({transform:`rotateX(${p.value}deg) rotateY(${g.value}deg)`})),I=f(()=>{let s=`
import {
	Img,
	Size,
	FluxCube
} from 'vue-flux';

const rscs = {
   front: new Img('image-url'),
   back: new Img('image-url'),
   top: new Img('image-url'),
   bottom: new Img('image-url'),
   left: new Img('image-url'),
   right: new Img('image-url'),
};

const size = new Size({
	width: ${o.width.value},
	height: ${o.height.value},
});

const depth = ref(${m.value});

const perspective = ref(${u.value});`;return i.value&&(s+=`

const origin = ref('${i.value}');`),s+=`

const css = {
	transform: '${S.value.transform}',
};
`,v.highlight(s.trim(),v.languages.javascript,"javascript")}),y=f(()=>{let s=`
<div style="perspective: ${u.value}px;">
	<FluxCube
		:rscs="rscs"
		:size="size"
		:depth="depth"`;return i.value&&(s+=`
		:origin="origin"`),s+=`
		:css="css"
	/>
</div>
`,v.highlight(s.trim().replaceAll(`	
`,""),v.languages.html,"html")});return(s,e)=>(x(),V("div",{class:"demo demo-flux-cube",style:L(`perspective: ${u.value}px;`)},[a(n(T),{rscs:w,size:n(o),depth:m.value,origin:i.value,css:S.value},null,8,["size","depth","origin","css"]),e[20]||(e[20]=t("h3",{style:{"margin-top":"128px"}},"Playground",-1)),t("label",null,[e[13]||(e[13]=t("span",null,"Width:",-1)),a(n(r),{modelValue:n(o).width.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n(o).width.value=l),min:100,max:640,onSlide:e[1]||(e[1]=l=>n(o).width.value=l)},null,8,["modelValue"])]),t("label",null,[e[14]||(e[14]=t("span",null,"Height:",-1)),a(n(r),{modelValue:n(o).height.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n(o).height.value=l),min:100,max:640,onSlide:e[3]||(e[3]=l=>n(o).height.value=l)},null,8,["modelValue"])]),t("label",null,[e[15]||(e[15]=t("span",null,"Depth:",-1)),a(n(r),{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=l=>m.value=l),min:100,max:640,onSlide:e[5]||(e[5]=l=>m.value=l)},null,8,["modelValue"])]),t("label",null,[e[16]||(e[16]=t("span",null,"Rotate X:",-1)),a(n(r),{modelValue:p.value,"onUpdate:modelValue":e[6]||(e[6]=l=>p.value=l),min:0,max:360,onSlide:e[7]||(e[7]=l=>p.value=l)},null,8,["modelValue"])]),t("label",null,[e[17]||(e[17]=t("span",null,"Rotate Y:",-1)),a(n(r),{modelValue:g.value,"onUpdate:modelValue":e[8]||(e[8]=l=>g.value=l),min:0,max:360,onSlide:e[9]||(e[9]=l=>g.value=l)},null,8,["modelValue"])]),t("label",null,[e[18]||(e[18]=t("span",null,"Perspective:",-1)),a(n(r),{modelValue:u.value,"onUpdate:modelValue":e[10]||(e[10]=l=>u.value=l),min:500,max:5e3,onSlide:e[11]||(e[11]=l=>u.value=l)},null,8,["modelValue"])]),t("label",null,[e[19]||(e[19]=t("span",null,"Transform origin:",-1)),U(t("select",{"onUpdate:modelValue":e[12]||(e[12]=l=>i.value=l)},[(x(!0),V(j,null,k(n(z),l=>(x(),V("option",{key:l},F(l),1))),128))],512),[[h,i.value]])]),e[21]||(e[21]=t("h3",null,"Source",-1)),t("div",P,[t("pre",{innerHTML:I.value,class:"language-javascript"},null,8,D)]),t("div",N,[t("pre",{innerHTML:y.value,class:"language-html"},null,8,R)])],4))}});export{W as default};
