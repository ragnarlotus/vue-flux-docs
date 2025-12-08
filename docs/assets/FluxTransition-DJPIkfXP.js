import{f as b,g as p,h as g,c as v,o as i,i as c,m as N,b as s,a as r,u as n,d as f,H as j,J as y,F as H,q as I,t as L,w,E as M,_ as D}from"./app-ipQ6pP7q.js";import{m as k}from"./slider-F-wIZrlM.js";import{P as u}from"./prism-CBfTwKG-.js";import{R as E,I as R,H as P,Y as W,j as A,X as O,N as U,W as J,A as X,M as Y,B as q,V as K,O as Z,F as G,E as Q,T as _,c as ee,L as te,_ as ne,P as se,C as le,d as ae}from"./vue-flux-DLPyrDSG.js";import B from"./DemoButton-BAf-XVEU.js";import{I as oe}from"./Images-LscGjCep.js";const ie={class:"demo demo-flux-transition"},re={class:"language-javascript","data-ext":"js"},ue=["innerHTML"],me={class:"language-html","data-ext":"html"},de=["innerHTML"],pe=b({__name:"FluxTransition",setup(ge){const x=p(null),m=p(!0),T={Fade:le,Kenburn:se,Swipe:ne,Slide:te,Waterfall:ee,Zip:_,Blinds2D:Q,Blocks1:G,Blocks2:Z,Concentric:K,Warp:q,Camera:Y,Cube:X,Book:J,Fall:U,Wave:O,Blinds3D:A,Round1:W,Round2:P,Explode:R},[C,V]=oe.generate(2),l=new E({width:640,height:360}),h=Object.keys(T),a=p("Blinds2D"),F=g(()=>T[a.value]);function S(){x.value?.start()}async function d(){m.value=!1,await M(),m.value=!0}const z=g(()=>{let o=`
import {
	Img,
	Size,
	FluxTransition,
	${a.value},
} from 'vue-flux';

const from = new Img('image-url');
const to = new Img('image-url');

const size = new Size({
	width: ${l.width.value},
	height: ${l.height.value},
});
`;return u.highlight(o.trim(),u.languages.javascript,"javascript")}),$=g(()=>{const o=`
<FluxTransition
	:size="size"
	:transition="${a.value}"
	:from="from"
	:to="to"
/>`;return u.highlight(o.trim().replaceAll(`	
`,""),u.languages.html,"html")});return(o,e)=>(i(),v("div",ie,[m.value?(i(),c(n(ae),{key:0,ref_key:"$fluxTransition",ref:x,size:n(l),transition:F.value,from:n(C),to:n(V),onEnd:e[0]||(e[0]=t=>d())},null,8,["size","transition","from","to"])):N("",!0),e[14]||(e[14]=s("h3",null,"Playground",-1)),s("label",null,[e[9]||(e[9]=s("span",null,"Size width:",-1)),r(n(k),{modelValue:n(l).width.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n(l).width.value=t),min:100,max:640,onSlide:e[2]||(e[2]=t=>n(l).width.value=t)},null,8,["modelValue"])]),s("label",null,[e[10]||(e[10]=s("span",null,"Size height:",-1)),r(n(k),{modelValue:n(l).height.value,"onUpdate:modelValue":e[3]||(e[3]=t=>n(l).height.value=t),min:100,max:640,onSlide:e[4]||(e[4]=t=>n(l).height.value=t)},null,8,["modelValue"])]),s("label",null,[e[11]||(e[11]=f(" Transition: ",-1)),j(s("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>a.value=t),onChange:e[6]||(e[6]=t=>d()),style:{"margin-left":"6px"}},[(i(!0),v(H,null,I(n(h),t=>(i(),v("option",{key:t},L(t),1))),128))],544),[[y,a.value]])]),r(B,{onClick:e[7]||(e[7]=t=>S())},{default:w(()=>[...e[12]||(e[12]=[f("Run",-1)])]),_:1}),r(B,{onClick:e[8]||(e[8]=t=>d())},{default:w(()=>[...e[13]||(e[13]=[f("Reset",-1)])]),_:1}),e[15]||(e[15]=s("h3",null,"Source",-1)),s("div",re,[s("pre",{innerHTML:z.value,class:"language-javascript"},null,8,ue)]),s("div",me,[s("pre",{innerHTML:$.value,class:"language-html"},null,8,de)])]))}}),Be=D(pe,[["__scopeId","data-v-904fc3b2"]]);export{Be as default};
