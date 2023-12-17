import{g as $,h as v,i as g,o as r,c as f,j as I,u as t,f as y,b as a,a as u,d as h,H as j,J as N,F as D,q as H,C as M,w,A as L,M as R,N as U,_ as J}from"./app-zCTnd8Wc.js";import{m as T}from"./slider-DmM7sOKr.js";import{P as d}from"./prism-cS1PeyxU.js";import{R as q,d as E,U as P,J as W,Z,q as A,e as G,t as K,f as O,s as Q,o as X,n as Y,r as ee,g as se,l as te,a as ae,k as ne,u as oe,p as le,m as ie,h as re,v as ue}from"./vue-flux-aT5qPPFS.js";import k from"./DemoButton-rjNpba3M.js";import{I as de}from"./Images-pD6-27jP.js";const m=i=>(R("data-v-aebe6710"),i=i(),U(),i),me={class:"demo demo-flux-transition"},pe=m(()=>a("h3",null,"Playground",-1)),ce=m(()=>a("span",null,"Size width:",-1)),ve=m(()=>a("span",null,"Size height:",-1)),ge=m(()=>a("h3",null,"Source",-1)),fe={class:"language-javascript","data-ext":"js"},he=["innerHTML"],xe={class:"language-html","data-ext":"html"},_e=["innerHTML"],we=$({__name:"FluxTransition",setup(i){const x=v(null),p=v(!0),_={Fade:P,Kenburn:W,Swipe:Z,Slide:A,Waterfall:G,Zip:K,Blinds2D:O,Blocks1:Q,Blocks2:X,Concentric:Y,Warp:ee,Camera:se,Cube:te,Book:ae,Fall:ne,Wave:oe,Blinds3D:le,Round1:ie,Round2:re,Explode:ue},[S,C]=de.generate(2),n=new q({width:640,height:360}),B=Object.keys(_),l=v("Blinds2D"),V=g(()=>_[l.value]);function b(){var o;(o=x.value)==null||o.start()}async function c(){p.value=!1,await L(),p.value=!0}const z=g(()=>{let o=`
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
`;return d.highlight(o.trim(),d.languages.javascript,"javascript")}),F=g(()=>{const o=`
<FluxTransition
	:size="size"
	:transition="${l.value}"
	:from="from"
	:to="to"
/>`;return d.highlight(o.trim().replaceAll(`	
`,""),d.languages.html,"html")});return(o,e)=>(r(),f("div",me,[p.value?(r(),I(t(E),{key:0,ref_key:"$fluxTransition",ref:x,size:t(n),transition:V.value,from:t(S),to:t(C),onEnd:e[0]||(e[0]=s=>c())},null,8,["size","transition","from","to"])):y("v-if",!0),pe,a("label",null,[ce,u(t(T),{modelValue:t(n).width.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t(n).width.value=s),min:100,max:640,onSlide:e[2]||(e[2]=s=>t(n).width.value=s)},null,8,["modelValue"])]),a("label",null,[ve,u(t(T),{modelValue:t(n).height.value,"onUpdate:modelValue":e[3]||(e[3]=s=>t(n).height.value=s),min:100,max:640,onSlide:e[4]||(e[4]=s=>t(n).height.value=s)},null,8,["modelValue"])]),a("label",null,[h(" Transition: "),j(a("select",{"onUpdate:modelValue":e[5]||(e[5]=s=>l.value=s),onChange:e[6]||(e[6]=s=>c()),style:{"margin-left":"6px"}},[(r(!0),f(D,null,H(t(B),s=>(r(),f("option",{key:s},M(s),1))),128))],544),[[N,l.value]])]),u(k,{onClick:e[7]||(e[7]=s=>b())},{default:w(()=>[h("Run")]),_:1}),u(k,{onClick:e[8]||(e[8]=s=>c())},{default:w(()=>[h("Reset")]),_:1}),ge,a("div",fe,[a("pre",{innerHTML:z.value,class:"language-javascript"},null,8,he)]),a("div",xe,[a("pre",{innerHTML:F.value,class:"language-html"},null,8,_e)])]))}}),be=J(we,[["__scopeId","data-v-aebe6710"],["__file","FluxTransition.vue"]]);export{be as default};
