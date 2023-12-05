import{f as z,g as v,h as g,o as r,c as f,i as $,u as s,y as I,d as a,a as u,e as h,H as D,J as N,F as j,p as H,B as M,w as T,D as L,M as U,N as J,_ as R}from"./app-fbfde9e5.js";import{m as w}from"./slider-93eda8bf.js";import{P as d}from"./prism-5c0d5a27.js";import{F as E,h as G,G as K,K as P,U as W,J as Z,Z as Q,k as q,Q as A,t as O,e as X,s as Y,o as ee,n as te,r as se,i as ae,l as ne,a as oe,c as le,u as ie,p as re,m as ue}from"./vue-flux-5cdc7d97.js";import k from"./DemoButton-74ccbf11.js";import{I as de}from"./Images-9dbdb301.js";const m=i=>(U("data-v-ec26ad3b"),i=i(),J(),i),me={class:"demo demo-flux-transition"},ce=m(()=>a("h3",null,"Playground",-1)),pe=m(()=>a("span",null,"Size width:",-1)),ve=m(()=>a("span",null,"Size height:",-1)),ge=m(()=>a("h3",null,"Source",-1)),fe={class:"language-javascript","data-ext":"js"},he=["innerHTML"],_e={class:"language-html","data-ext":"html"},xe=["innerHTML"],Te=z({__name:"FluxTransition",setup(i){const _=v(null),c=v(!0),x={Fade:K,Kenburn:P,Swipe:W,Slide:Z,Waterfall:Q,Zip:q,Blinds2D:A,Blocks1:O,Blocks2:X,Concentric:Y,Warp:ee,Camera:te,Cube:se,Book:ae,Fall:ne,Wave:oe,Blinds3D:le,Round1:ie,Round2:re,Explode:ue},[S,B]=de.generate(2),n=new E({width:640,height:360}),F=Object.keys(x),l=v("Blinds2D"),y=g(()=>x[l.value]);function C(){var o;(o=_.value)==null||o.start()}async function p(){c.value=!1,await L(),c.value=!0}const V=g(()=>{let o=`
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
`;return d.highlight(o.trim(),d.languages.javascript,"javascript")}),b=g(()=>{const o=`
<FluxTransition
	:size="size"
	:transition="${l.value}"
	:from="from"
	:to="to"
/>`;return d.highlight(o.trim().replaceAll(`	
`,""),d.languages.html,"html")});return(o,e)=>(r(),f("div",me,[c.value?(r(),$(s(G),{key:0,ref_key:"$fluxTransition",ref:_,size:s(n),transition:y.value,from:s(S),to:s(B),onEnd:e[0]||(e[0]=t=>p())},null,8,["size","transition","from","to"])):I("v-if",!0),ce,a("label",null,[pe,u(s(w),{modelValue:s(n).width.value,"onUpdate:modelValue":e[1]||(e[1]=t=>s(n).width.value=t),min:100,max:640,onSlide:e[2]||(e[2]=t=>s(n).width.value=t)},null,8,["modelValue"])]),a("label",null,[ve,u(s(w),{modelValue:s(n).height.value,"onUpdate:modelValue":e[3]||(e[3]=t=>s(n).height.value=t),min:100,max:640,onSlide:e[4]||(e[4]=t=>s(n).height.value=t)},null,8,["modelValue"])]),a("label",null,[h(" Transition: "),D(a("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>l.value=t),onChange:e[6]||(e[6]=t=>p()),style:{"margin-left":"6px"}},[(r(!0),f(j,null,H(s(F),t=>(r(),f("option",{key:t},M(t),1))),128))],544),[[N,l.value]])]),u(k,{onClick:e[7]||(e[7]=t=>C())},{default:T(()=>[h("Run")]),_:1}),u(k,{onClick:e[8]||(e[8]=t=>p())},{default:T(()=>[h("Reset")]),_:1}),ge,a("div",fe,[a("pre",{innerHTML:V.value,class:"language-javascript"},null,8,he)]),a("div",_e,[a("pre",{innerHTML:b.value,class:"language-html"},null,8,xe)])]))}});const Ce=R(Te,[["__scopeId","data-v-ec26ad3b"],["__file","FluxTransition.vue"]]);export{Ce as default};
