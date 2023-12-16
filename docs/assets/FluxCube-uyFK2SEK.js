import{g as z,h as d,i as c,o as h,c as f,a as n,u as s,b as t,H as I,J as y,F as C,q as F,C as H,p as U,_ as j}from"./app-6THF0TDW.js";import{R as k,g as L}from"./vue-flux-P32zUH6D.js";import{P as v}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-Bf20jKdu.js";import{I as M}from"./Images-07XQOKXj.js";import{o as T}from"./constants-vSRoptby.js";const P=t("h3",{style:{"margin-top":"128px"}},"Playground",-1),B=t("span",null,"Width:",-1),D=t("span",null,"Height:",-1),N=t("span",null,"Depth:",-1),R=t("span",null,"Rotate X:",-1),X=t("span",null,"Rotate Y:",-1),Y=t("span",null,"Perspective:",-1),J=t("span",null,"Transform origin:",-1),q=t("h3",null,"Source",-1),A={class:"language-javascript","data-ext":"js"},E=["innerHTML"],O={class:"language-html extra-class","data-ext":"html"},W=["innerHTML"],G=z({__name:"FluxCube",setup(K){const w=M.generate(6),x=["front","back","top","bottom","left","right"],V={};for(let o=0;o<x.length;o++)V[x[o]]=w[o];const a=new k({width:640,height:360}),m=d(180),p=d(0),g=d(0),i=d(1600),u=d(void 0),_=Object.values(T),b=c(()=>({transform:`rotateX(${p.value}deg) rotateY(${g.value}deg)`})),S=c(()=>{let o=`
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
	width: ${a.width.value},
	height: ${a.height.value},
});

const depth = ref(${m.value});

const perspective = ref(${i.value});`;return u.value&&(o+=`

const origin = ref('${u.value}');`),o+=`

const css = {
	transform: '${b.value.transform}',
};
`,v.highlight(o.trim(),v.languages.javascript,"javascript")}),$=c(()=>{let o=`
<div style="perspective: ${i.value}px;">
	<FluxCube
		:rscs="rscs"
		:size="size"
		:depth="depth"`;return u.value&&(o+=`
		:origin="origin"`),o+=`
		:css="css"
	/>
</div>
`,v.highlight(o.trim().replaceAll(`	
`,""),v.languages.html,"html")});return(o,l)=>(h(),f("div",{class:"demo demo-flux-cube",style:U(`perspective: ${i.value}px;`)},[n(s(L),{rscs:V,size:s(a),depth:m.value,origin:u.value,css:b.value},null,8,["size","depth","origin","css"]),P,t("label",null,[B,n(s(r),{modelValue:s(a).width.value,"onUpdate:modelValue":l[0]||(l[0]=e=>s(a).width.value=e),min:100,max:640,onSlide:l[1]||(l[1]=e=>s(a).width.value=e)},null,8,["modelValue"])]),t("label",null,[D,n(s(r),{modelValue:s(a).height.value,"onUpdate:modelValue":l[2]||(l[2]=e=>s(a).height.value=e),min:100,max:640,onSlide:l[3]||(l[3]=e=>s(a).height.value=e)},null,8,["modelValue"])]),t("label",null,[N,n(s(r),{modelValue:m.value,"onUpdate:modelValue":l[4]||(l[4]=e=>m.value=e),min:100,max:640,onSlide:l[5]||(l[5]=e=>m.value=e)},null,8,["modelValue"])]),t("label",null,[R,n(s(r),{modelValue:p.value,"onUpdate:modelValue":l[6]||(l[6]=e=>p.value=e),min:0,max:360,onSlide:l[7]||(l[7]=e=>p.value=e)},null,8,["modelValue"])]),t("label",null,[X,n(s(r),{modelValue:g.value,"onUpdate:modelValue":l[8]||(l[8]=e=>g.value=e),min:0,max:360,onSlide:l[9]||(l[9]=e=>g.value=e)},null,8,["modelValue"])]),t("label",null,[Y,n(s(r),{modelValue:i.value,"onUpdate:modelValue":l[10]||(l[10]=e=>i.value=e),min:500,max:5e3,onSlide:l[11]||(l[11]=e=>i.value=e)},null,8,["modelValue"])]),t("label",null,[J,I(t("select",{"onUpdate:modelValue":l[12]||(l[12]=e=>u.value=e)},[(h(!0),f(C,null,F(s(_),e=>(h(),f("option",{key:e},H(e),1))),128))],512),[[y,u.value]])]),q,t("div",A,[t("pre",{innerHTML:S.value,class:"language-javascript"},null,8,E)]),t("div",O,[t("pre",{innerHTML:$.value,class:"language-html"},null,8,W)])],4))}}),oe=j(G,[["__file","FluxCube.vue"]]);export{oe as default};
