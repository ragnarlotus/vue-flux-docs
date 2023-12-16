import{g as $,h as v,i as f,o as r,c as g,j as I,u as t,f as y,b as a,a as u,d as h,H as j,J as N,F as D,q as H,C as M,w,A as L,M as R,N as U,_ as J}from"./app-6THF0TDW.js";import{m as T}from"./slider-Bf20jKdu.js";import{P as d}from"./prism-cS1PeyxU.js";import{R as q,w as E,U as P,J as W,Z,q as A,Q,t as G,e as K,s as O,o as X,n as Y,r as ee,i as se,l as te,a as ae,c as ne,u as oe,p as le,d as ie,h as re,f as ue}from"./vue-flux-P32zUH6D.js";import S from"./DemoButton-XU3w4BG3.js";import{I as de}from"./Images-07XQOKXj.js";const m=i=>(R("data-v-aebe6710"),i=i(),U(),i),me={class:"demo demo-flux-transition"},ce=m(()=>a("h3",null,"Playground",-1)),pe=m(()=>a("span",null,"Size width:",-1)),ve=m(()=>a("span",null,"Size height:",-1)),fe=m(()=>a("h3",null,"Source",-1)),ge={class:"language-javascript","data-ext":"js"},he=["innerHTML"],xe={class:"language-html","data-ext":"html"},_e=["innerHTML"],we=$({__name:"FluxTransition",setup(i){const x=v(null),c=v(!0),_={Fade:P,Kenburn:W,Swipe:Z,Slide:A,Waterfall:Q,Zip:G,Blinds2D:K,Blocks1:O,Blocks2:X,Concentric:Y,Warp:ee,Camera:se,Cube:te,Book:ae,Fall:ne,Wave:oe,Blinds3D:le,Round1:ie,Round2:re,Explode:ue},[k,C]=de.generate(2),n=new q({width:640,height:360}),B=Object.keys(_),l=v("Blinds2D"),V=f(()=>_[l.value]);function b(){var o;(o=x.value)==null||o.start()}async function p(){c.value=!1,await L(),c.value=!0}const z=f(()=>{let o=`
import {
	Img,
	Size,
	FluxTransition,
	${l.value},
} from 'vue-flux';

const from = new Img('image-url');
const to = new Img('image-url');

const size = new Size({
	width: ${n.width.value},
	height: ${n.height.value},
});
`;return d.highlight(o.trim(),d.languages.javascript,"javascript")}),F=f(()=>{const o=`
<FluxTransition
	:size="size"
	:transition="${l.value}"
	:from="from"
	:to="to"
/>`;return d.highlight(o.trim().replaceAll(`	
`,""),d.languages.html,"html")});return(o,e)=>(r(),g("div",me,[c.value?(r(),I(t(E),{key:0,ref_key:"$fluxTransition",ref:x,size:t(n),transition:V.value,from:t(k),to:t(C),onEnd:e[0]||(e[0]=s=>p())},null,8,["size","transition","from","to"])):y("v-if",!0),ce,a("label",null,[pe,u(t(T),{modelValue:t(n).width.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t(n).width.value=s),min:100,max:640,onSlide:e[2]||(e[2]=s=>t(n).width.value=s)},null,8,["modelValue"])]),a("label",null,[ve,u(t(T),{modelValue:t(n).height.value,"onUpdate:modelValue":e[3]||(e[3]=s=>t(n).height.value=s),min:100,max:640,onSlide:e[4]||(e[4]=s=>t(n).height.value=s)},null,8,["modelValue"])]),a("label",null,[h(" Transition: "),j(a("select",{"onUpdate:modelValue":e[5]||(e[5]=s=>l.value=s),onChange:e[6]||(e[6]=s=>p()),style:{"margin-left":"6px"}},[(r(!0),g(D,null,H(t(B),s=>(r(),g("option",{key:s},M(s),1))),128))],544),[[N,l.value]])]),u(S,{onClick:e[7]||(e[7]=s=>b())},{default:w(()=>[h("Run")]),_:1}),u(S,{onClick:e[8]||(e[8]=s=>p())},{default:w(()=>[h("Reset")]),_:1}),fe,a("div",ge,[a("pre",{innerHTML:z.value,class:"language-javascript"},null,8,he)]),a("div",xe,[a("pre",{innerHTML:F.value,class:"language-html"},null,8,_e)])]))}}),be=J(we,[["__scopeId","data-v-aebe6710"],["__file","FluxTransition.vue"]]);export{be as default};
