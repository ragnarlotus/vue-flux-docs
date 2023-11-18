import{f as $,g as d,h as c,o as h,c as f,a,u as o,d as t,G as z,I as F,F as y,m as U,A as j,s as C,_ as H}from"./app-39d482a5.js";import{F as k,a as L}from"./vue-flux-a336cd51.js";import{P as v}from"./prism-5c0d5a27.js";import{m as r}from"./slider-1e9e6ba1.js";import{I as M}from"./Images-dedb1c36.js";const T={auto:void 0,lt:"left top",lc:"left center",lb:"left bottom",ct:"center top",cc:"center center",cb:"center bottom",rt:"right top",rc:"right center",rb:"right bottom"},P=t("h3",{style:{"margin-top":"128px"}},"Playground",-1),B=t("span",null,"Width:",-1),D=t("span",null,"Height:",-1),N=t("span",null,"Depth:",-1),X=t("span",null,"Rotate X:",-1),Y=t("span",null,"Rotate Y:",-1),A=t("span",null,"Perspective:",-1),R=t("span",null,"Transform origin:",-1),E=t("h3",null,"Source",-1),G={class:"language-javascript","data-ext":"js"},J=["innerHTML"],O={class:"language-html extra-class"},W=["innerHTML"],q=$({__name:"FluxCube",setup(K){const w=M.generate(6),b=["front","back","top","bottom","left","right"],V={};for(let n=0;n<b.length;n++)V[b[n]]=w[n];const s=new k({width:640,height:360}),m=d(180),p=d(0),g=d(0),i=d(1600),u=d(void 0),_=Object.values(T),x=c(()=>({transform:`rotateX(${p.value}deg) rotateY(${g.value}deg)`})),S=c(()=>{let n=`
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
	width: ${s.width.value},
	height: ${s.height.value},
});

const depth = ref(${m.value});

const perspective = ref(${i.value});`;return u.value&&(n+=`

const origin = ref('${u.value}');`),n+=`

const css = {
	transform: '${x.value.transform}',
};
`,v.highlight(n.trim(),v.languages.javascript,"javascript")}),I=c(()=>{let n=`
<div style="perspective: ${i.value}px;">
	<FluxCube
		:rscs="rscs"
		:size="size"
		:depth="depth"`;return u.value&&(n+=`
		:origin="origin"`),n+=`
		:css="css"
	/>
</div>
`,v.highlight(n.trim().replaceAll(`	
`,""),v.languages.html,"html")});return(n,l)=>(h(),f("div",{class:"demo demo-flux-cube",style:C(`perspective: ${i.value}px;`)},[a(o(L),{rscs:V,size:o(s),depth:m.value,origin:u.value,css:x.value},null,8,["size","depth","origin","css"]),P,t("label",null,[B,a(o(r),{modelValue:o(s).width.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o(s).width.value=e),min:100,max:640,onSlide:l[1]||(l[1]=e=>o(s).width.value=e)},null,8,["modelValue"])]),t("label",null,[D,a(o(r),{modelValue:o(s).height.value,"onUpdate:modelValue":l[2]||(l[2]=e=>o(s).height.value=e),min:100,max:640,onSlide:l[3]||(l[3]=e=>o(s).height.value=e)},null,8,["modelValue"])]),t("label",null,[N,a(o(r),{modelValue:m.value,"onUpdate:modelValue":l[4]||(l[4]=e=>m.value=e),min:100,max:640,onSlide:l[5]||(l[5]=e=>m.value=e)},null,8,["modelValue"])]),t("label",null,[X,a(o(r),{modelValue:p.value,"onUpdate:modelValue":l[6]||(l[6]=e=>p.value=e),min:0,max:360,onSlide:l[7]||(l[7]=e=>p.value=e)},null,8,["modelValue"])]),t("label",null,[Y,a(o(r),{modelValue:g.value,"onUpdate:modelValue":l[8]||(l[8]=e=>g.value=e),min:0,max:360,onSlide:l[9]||(l[9]=e=>g.value=e)},null,8,["modelValue"])]),t("label",null,[A,a(o(r),{modelValue:i.value,"onUpdate:modelValue":l[10]||(l[10]=e=>i.value=e),min:500,max:5e3,onSlide:l[11]||(l[11]=e=>i.value=e)},null,8,["modelValue"])]),t("label",null,[R,z(t("select",{"onUpdate:modelValue":l[12]||(l[12]=e=>u.value=e)},[(h(!0),f(y,null,U(o(_),e=>(h(),f("option",{key:e},j(e),1))),128))],512),[[F,u.value]])]),E,t("div",G,[t("pre",{innerHTML:S.value,class:"language-javascript"},null,8,J)]),t("div",O,[t("pre",{innerHTML:I.value,class:"language-html"},null,8,W)])],4))}}),oe=H(q,[["__file","FluxCube.vue"]]);export{oe as default};
