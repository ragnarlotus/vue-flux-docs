import{g as b,h as v,i as g,o as r,c as f,j as I,u as s,f as y,d as a,a as u,e as h,H as j,J as D,F as N,q as H,B as M,w,D as L,M as U,N as E,_ as J}from"./app-50w0ji3D.js";import{m as T}from"./slider-1HQFI3OS.js";import{P as d}from"./prism-cS1PeyxU.js";import{E as R,h as G,G as K,K as P,U as W,J as Z,Z as q,k as Q,Q as A,t as O,e as X,s as Y,o as ee,n as te,r as se,i as ae,l as ne,a as oe,c as le,u as ie,p as re,m as ue}from"./vue-flux-mVziyI42.js";import k from"./DemoButton-ZH0ECPtq.js";import{I as de}from"./Images-9SQftBuZ.js";const m=i=>(U("data-v-ec26ad3b"),i=i(),E(),i),me={class:"demo demo-flux-transition"},ce=m(()=>a("h3",null,"Playground",-1)),pe=m(()=>a("span",null,"Size width:",-1)),ve=m(()=>a("span",null,"Size height:",-1)),ge=m(()=>a("h3",null,"Source",-1)),fe={class:"language-javascript","data-ext":"js"},he=["innerHTML"],xe={class:"language-html","data-ext":"html"},_e=["innerHTML"],we=b({__name:"FluxTransition",setup(i){const x=v(null),c=v(!0),_={Fade:K,Kenburn:P,Swipe:W,Slide:Z,Waterfall:q,Zip:Q,Blinds2D:A,Blocks1:O,Blocks2:X,Concentric:Y,Warp:ee,Camera:te,Cube:se,Book:ae,Fall:ne,Wave:oe,Blinds3D:le,Round1:ie,Round2:re,Explode:ue},[S,B]=de.generate(2),n=new R({width:640,height:360}),C=Object.keys(_),l=v("Blinds2D"),V=g(()=>_[l.value]);function z(){var o;(o=x.value)==null||o.start()}async function p(){c.value=!1,await L(),c.value=!0}const F=g(()=>{let o=`
import {
	Img,
	Size,
	FluxTransition,
	${l.value},
} from 'vue-flux';

const from = new Img('image-url');
const top = new Img('image-url');

const size = new Size({
	width: ${n.width.value},
	height: ${n.height.value},
});
`;return d.highlight(o.trim(),d.languages.javascript,"javascript")}),$=g(()=>{const o=`
<FluxTransition
	:size="size"
	:transition="${l.value}"
	:from="from"
	:to="to"
/>`;return d.highlight(o.trim().replaceAll(`	
`,""),d.languages.html,"html")});return(o,e)=>(r(),f("div",me,[c.value?(r(),I(s(G),{key:0,ref_key:"$fluxTransition",ref:x,size:s(n),transition:V.value,from:s(S),to:s(B),onEnd:e[0]||(e[0]=t=>p())},null,8,["size","transition","from","to"])):y("v-if",!0),ce,a("label",null,[pe,u(s(T),{modelValue:s(n).width.value,"onUpdate:modelValue":e[1]||(e[1]=t=>s(n).width.value=t),min:100,max:640,onSlide:e[2]||(e[2]=t=>s(n).width.value=t)},null,8,["modelValue"])]),a("label",null,[ve,u(s(T),{modelValue:s(n).height.value,"onUpdate:modelValue":e[3]||(e[3]=t=>s(n).height.value=t),min:100,max:640,onSlide:e[4]||(e[4]=t=>s(n).height.value=t)},null,8,["modelValue"])]),a("label",null,[h(" Transition: "),j(a("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>l.value=t),onChange:e[6]||(e[6]=t=>p()),style:{"margin-left":"6px"}},[(r(!0),f(N,null,H(s(C),t=>(r(),f("option",{key:t},M(t),1))),128))],544),[[D,l.value]])]),u(k,{onClick:e[7]||(e[7]=t=>z())},{default:w(()=>[h("Run")]),_:1}),u(k,{onClick:e[8]||(e[8]=t=>p())},{default:w(()=>[h("Reset")]),_:1}),ge,a("div",fe,[a("pre",{innerHTML:F.value,class:"language-javascript"},null,8,he)]),a("div",xe,[a("pre",{innerHTML:$.value,class:"language-html"},null,8,_e)])]))}}),ze=J(we,[["__scopeId","data-v-ec26ad3b"],["__file","FluxTransition.vue"]]);export{ze as default};
