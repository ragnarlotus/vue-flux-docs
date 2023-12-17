import{g as D,E as u,i as _,o as g,c as x,a as s,u as o,b as t,H as r,I as p,_ as f}from"./app-pGooBgpL.js";import{P as m}from"./prism-cS1PeyxU.js";import{m as i}from"./slider-tqbc3ZTj.js";import{u as V}from"./vue-flux--F8xa8iS.js";import y from"./Demo-nlpFG_1z.js";import{m as T,a as b,b as C,c as h}from"./constants-vSRoptby.js";import"./Images-0G4Yedb4.js";const j={class:"demo"},S=t("h3",null,"Options",-1),U=t("span",null,"Columns:",-1),W=t("span",null,"Tile duration:",-1),$=t("span",null,"Tile delay:",-1),w=t("span",null,"Easing:",-1),R=t("span",null,"Side color:",-1),B=t("h3",null,"Source",-1),E={class:"language-javascript","data-ext":"js"},H=["innerHTML"],M=D({__name:"Wave",setup(k){const d={autohideTime:0},e=u([{component:V,options:u({cols:8,tileDuration:900,tileDelay:100,easing:"cubic-bezier(0.3, -0.3, 0.735, 0.285)",sideColor:"#333"})}]),c={preloader:!0,controls:!0},v=_(()=>{let a=`
import {
	Wave,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Wave,
		options: shallowReactive({
			cols: ${e[0].options.cols},
			tileDuration: ${e[0].options.tileDuration},
			tileDelay: ${e[0].options.tileDelay},
			easing: '${e[0].options.easing}',
			sideColor: '${e[0].options.sideColor}',
		}),
	},
]);`;return m.highlight(a.trim(),m.languages.javascript,"javascript")});return(a,l)=>(g(),x("div",j,[s(y,{options:d,transitions:o(e),numRscs:12,complements:c},null,8,["transitions"]),S,t("label",null,[U,s(o(i),{modelValue:o(e)[0].options.cols,"onUpdate:modelValue":l[0]||(l[0]=n=>o(e)[0].options.cols=n),min:2,max:20,onSlide:l[1]||(l[1]=n=>o(e)[0].options.cols=n)},null,8,["modelValue"])]),t("label",null,[W,s(o(i),{modelValue:o(e)[0].options.tileDuration,"onUpdate:modelValue":l[2]||(l[2]=n=>o(e)[0].options.tileDuration=n),min:o(T),max:o(b),onSlide:l[3]||(l[3]=n=>o(e)[0].options.tileDuration=n)},null,8,["modelValue","min","max"])]),t("label",null,[$,s(o(i),{modelValue:o(e)[0].options.tileDelay,"onUpdate:modelValue":l[4]||(l[4]=n=>o(e)[0].options.tileDelay=n),min:o(C),max:o(h),onSlide:l[5]||(l[5]=n=>o(e)[0].options.tileDelay=n)},null,8,["modelValue","min","max"])]),t("label",null,[w,r(t("input",{type:"text","onUpdate:modelValue":l[6]||(l[6]=n=>o(e)[0].options.easing=n)},null,512),[[p,o(e)[0].options.easing]])]),t("label",null,[R,r(t("input",{type:"text","onUpdate:modelValue":l[7]||(l[7]=n=>o(e)[0].options.sideColor=n)},null,512),[[p,o(e)[0].options.sideColor]])]),B,t("div",E,[t("pre",{innerHTML:v.value,class:"language-javascript"},null,8,H)])]))}}),q=f(M,[["__file","Wave.vue"]]);export{q as default};
