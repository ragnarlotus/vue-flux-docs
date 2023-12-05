import{f as z,g as d,h as c,o as h,c as f,a,u as s,d as t,H as I,J as F,F as y,p as H,B as U,m as j,_ as C}from"./app-4b2e338b.js";import{F as k,b as L}from"./vue-flux-0735f99c.js";import{P as v}from"./prism-5c0d5a27.js";import{m as r}from"./slider-1af67187.js";import{I as M}from"./Images-4256fd34.js";import{o as T}from"./constants-e7e525a7.js";const B=t("h3",{style:{"margin-top":"128px"}},"Playground",-1),P=t("span",null,"Width:",-1),D=t("span",null,"Height:",-1),N=t("span",null,"Depth:",-1),X=t("span",null,"Rotate X:",-1),Y=t("span",null,"Rotate Y:",-1),J=t("span",null,"Perspective:",-1),R=t("span",null,"Transform origin:",-1),A=t("h3",null,"Source",-1),E={class:"language-javascript","data-ext":"js"},O=["innerHTML"],W={class:"language-html extra-class"},q=["innerHTML"],G=z({__name:"FluxCube",setup(K){const w=M.generate(6),V=["front","back","top","bottom","left","right"],x={};for(let o=0;o<V.length;o++)x[V[o]]=w[o];const n=new k({width:640,height:360}),m=d(180),p=d(0),g=d(0),u=d(1600),i=d(void 0),_=Object.values(T),b=c(()=>({transform:`rotateX(${p.value}deg) rotateY(${g.value}deg)`})),S=c(()=>{let o=`
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
	width: ${n.width.value},
	height: ${n.height.value},
});

const depth = ref(${m.value});

const perspective = ref(${u.value});`;return i.value&&(o+=`

const origin = ref('${i.value}');`),o+=`

const css = {
	transform: '${b.value.transform}',
};
`,v.highlight(o.trim(),v.languages.javascript,"javascript")}),$=c(()=>{let o=`
<div style="perspective: ${u.value}px;">
	<FluxCube
		:rscs="rscs"
		:size="size"
		:depth="depth"`;return i.value&&(o+=`
		:origin="origin"`),o+=`
		:css="css"
	/>
</div>
`,v.highlight(o.trim().replaceAll(`	
`,""),v.languages.html,"html")});return(o,l)=>(h(),f("div",{class:"demo demo-flux-cube",style:j(`perspective: ${u.value}px;`)},[a(s(L),{rscs:x,size:s(n),depth:m.value,origin:i.value,css:b.value},null,8,["size","depth","origin","css"]),B,t("label",null,[P,a(s(r),{modelValue:s(n).width.value,"onUpdate:modelValue":l[0]||(l[0]=e=>s(n).width.value=e),min:100,max:640,onSlide:l[1]||(l[1]=e=>s(n).width.value=e)},null,8,["modelValue"])]),t("label",null,[D,a(s(r),{modelValue:s(n).height.value,"onUpdate:modelValue":l[2]||(l[2]=e=>s(n).height.value=e),min:100,max:640,onSlide:l[3]||(l[3]=e=>s(n).height.value=e)},null,8,["modelValue"])]),t("label",null,[N,a(s(r),{modelValue:m.value,"onUpdate:modelValue":l[4]||(l[4]=e=>m.value=e),min:100,max:640,onSlide:l[5]||(l[5]=e=>m.value=e)},null,8,["modelValue"])]),t("label",null,[X,a(s(r),{modelValue:p.value,"onUpdate:modelValue":l[6]||(l[6]=e=>p.value=e),min:0,max:360,onSlide:l[7]||(l[7]=e=>p.value=e)},null,8,["modelValue"])]),t("label",null,[Y,a(s(r),{modelValue:g.value,"onUpdate:modelValue":l[8]||(l[8]=e=>g.value=e),min:0,max:360,onSlide:l[9]||(l[9]=e=>g.value=e)},null,8,["modelValue"])]),t("label",null,[J,a(s(r),{modelValue:u.value,"onUpdate:modelValue":l[10]||(l[10]=e=>u.value=e),min:500,max:5e3,onSlide:l[11]||(l[11]=e=>u.value=e)},null,8,["modelValue"])]),t("label",null,[R,I(t("select",{"onUpdate:modelValue":l[12]||(l[12]=e=>i.value=e)},[(h(!0),f(y,null,H(s(_),e=>(h(),f("option",{key:e},U(e),1))),128))],512),[[F,i.value]])]),A,t("div",E,[t("pre",{innerHTML:S.value,class:"language-javascript"},null,8,O)]),t("div",W,[t("pre",{innerHTML:$.value,class:"language-html"},null,8,q)])],4))}}),oe=C(G,[["__file","FluxCube.vue"]]);export{oe as default};
