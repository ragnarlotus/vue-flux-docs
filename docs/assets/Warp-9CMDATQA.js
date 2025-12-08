import{f,G as u,h as v,c as s,o as a,a as t,b as i,u as o,H as V,J as x,F as y,q as T,t as b}from"./app-BUcDOuik.js";import{P as p}from"./prism-CBfTwKG-.js";import{m as r}from"./slider-DeCNzMt6.js";import{B as S}from"./vue-flux-BTJEro02.js";import{_ as j}from"./Demo.vue_vue_type_script_setup_true_lang-Ch53YRns.js";import{m as B,a as $,b as c,c as w,e as R}from"./constants-Di4rOZRF.js";import"./Images-Cc17HLan.js";const U={class:"demo"},k={class:"language-javascript","data-ext":"js"},H=["innerHTML"],P=f({__name:"Warp",setup(L){const d={autohideTime:0},e=u([{component:S,options:u({circles:7,tileDuration:800,tileDelay:150,easing:"linear"})}]),D={preloader:!0,controls:!0},g=v(()=>{let m=`
import {
	Warp,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Warp,
		options: shallowReactive({
			circles: ${e[0].options.circles},
			tileDuration: ${e[0].options.tileDuration},
			tileDelay: ${e[0].options.tileDelay},
			easing: '${e[0].options.easing}',
		}),
	},
]);`;return p.highlight(m.trim(),p.languages.javascript,"javascript")});return(m,l)=>(a(),s("div",U,[t(j,{options:d,transitions:o(e),numRscs:12,complements:D},null,8,["transitions"]),l[11]||(l[11]=i("h3",null,"Options",-1)),i("label",null,[l[7]||(l[7]=i("span",null,"Circles:",-1)),t(o(r),{modelValue:o(e)[0].options.circles,"onUpdate:modelValue":l[0]||(l[0]=n=>o(e)[0].options.circles=n),min:4,max:20,onSlide:l[1]||(l[1]=n=>o(e)[0].options.circles=n)},null,8,["modelValue"])]),i("label",null,[l[8]||(l[8]=i("span",null,"Tile duration:",-1)),t(o(r),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":l[2]||(l[2]=n=>o(e)[0].options.tileDuration=n),min:o($),max:o(B),onSlide:l[3]||(l[3]=n=>o(e)[0].options.tileDuration=n)},null,8,["modelValue","min","max"])]),i("label",null,[l[9]||(l[9]=i("span",null,"Tile delay:",-1)),t(o(r),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":l[4]||(l[4]=n=>o(e)[0].options.tileDelay=n),min:o(w),max:o(c),onSlide:l[5]||(l[5]=n=>o(e)[0].options.tileDelay=n)},null,8,["modelValue","min","max"])]),i("label",null,[l[10]||(l[10]=i("span",null,"Easing:",-1)),V(i("select",{"onUpdate:modelValue":l[6]||(l[6]=n=>o(e)[0].options.easing=n)},[(a(!0),s(y,null,T(o(R),n=>(a(),s("option",{key:n},b(n),1))),128))],512),[[x,o(e)[0].options.easing]])]),l[12]||(l[12]=i("h3",null,"Source",-1)),i("div",k,[i("pre",{innerHTML:g.value,class:"language-javascript"},null,8,H)])]))}});export{P as default};
