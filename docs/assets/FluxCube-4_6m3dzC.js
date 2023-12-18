import{f as z,g as d,h as c,o as h,c as f,a as n,u as s,b as t,H as I,J as y,F as C,p as F,C as H,m as U,_ as j}from"./app-f_FCzlUc.js";import{R as k,c as L}from"./vue-flux-XHwbH0Ez.js";import{P as v}from"./prism-cS1PeyxU.js";import{m as r}from"./slider-pQflgib0.js";import{I as M}from"./Images-P-QdXgH-.js";import{o as T}from"./constants-vSRoptby.js";const P=t("h3",{style:{"margin-top":"128px"}},"Playground",-1),B=t("span",null,"Width:",-1),D=t("span",null,"Height:",-1),N=t("span",null,"Depth:",-1),R=t("span",null,"Rotate X:",-1),X=t("span",null,"Rotate Y:",-1),Y=t("span",null,"Perspective:",-1),J=t("span",null,"Transform origin:",-1),A=t("h3",null,"Source",-1),E={class:"language-javascript","data-ext":"js"},O=["innerHTML"],W={class:"language-html extra-class","data-ext":"html"},q=["innerHTML"],G=z({__name:"FluxCube",setup(K){const w=M.generate(6),x=["front","back","top","bottom","left","right"],V={};for(let o=0;o<x.length;o++)V[x[o]]=w[o];const a=new k({width:640,height:360}),m=d(180),p=d(0),g=d(0),u=d(1600),i=d(void 0),_=Object.values(T),b=c(()=>({transform:`rotateX(${p.value}deg) rotateY(${g.value}deg)`})),S=c(()=>{let o=`
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
`,""),v.languages.html,"html")});return(o,l)=>(h(),f("div",{class:"demo demo-flux-cube",style:U(`perspective: ${u.value}px;`)},[n(s(L),{rscs:V,size:s(a),depth:m.value,origin:i.value,css:b.value},null,8,["size","depth","origin","css"]),P,t("label",null,[B,n(s(r),{modelValue:s(a).width.value,"onUpdate:modelValue":l[0]||(l[0]=e=>s(a).width.value=e),min:100,max:640,onSlide:l[1]||(l[1]=e=>s(a).width.value=e)},null,8,["modelValue"])]),t("label",null,[D,n(s(r),{modelValue:s(a).height.value,"onUpdate:modelValue":l[2]||(l[2]=e=>s(a).height.value=e),min:100,max:640,onSlide:l[3]||(l[3]=e=>s(a).height.value=e)},null,8,["modelValue"])]),t("label",null,[N,n(s(r),{modelValue:m.value,"onUpdate:modelValue":l[4]||(l[4]=e=>m.value=e),min:100,max:640,onSlide:l[5]||(l[5]=e=>m.value=e)},null,8,["modelValue"])]),t("label",null,[R,n(s(r),{modelValue:p.value,"onUpdate:modelValue":l[6]||(l[6]=e=>p.value=e),min:0,max:360,onSlide:l[7]||(l[7]=e=>p.value=e)},null,8,["modelValue"])]),t("label",null,[X,n(s(r),{modelValue:g.value,"onUpdate:modelValue":l[8]||(l[8]=e=>g.value=e),min:0,max:360,onSlide:l[9]||(l[9]=e=>g.value=e)},null,8,["modelValue"])]),t("label",null,[Y,n(s(r),{modelValue:u.value,"onUpdate:modelValue":l[10]||(l[10]=e=>u.value=e),min:500,max:5e3,onSlide:l[11]||(l[11]=e=>u.value=e)},null,8,["modelValue"])]),t("label",null,[J,I(t("select",{"onUpdate:modelValue":l[12]||(l[12]=e=>i.value=e)},[(h(!0),f(C,null,F(s(_),e=>(h(),f("option",{key:e},H(e),1))),128))],512),[[y,i.value]])]),A,t("div",E,[t("pre",{innerHTML:S.value,class:"language-javascript"},null,8,O)]),t("div",W,[t("pre",{innerHTML:$.value,class:"language-html"},null,8,q)])],4))}}),oe=j(G,[["__file","FluxCube.vue"]]);export{oe as default};
