import{_ as t,r as a,o,c as p,a as n,w as i,b as c}from"./app-29b7d267.js";const r={},l=c(`<h2 id="clarifications" tabindex="-1"><a class="header-anchor" href="#clarifications" aria-hidden="true">#</a> Clarifications</h2><p>In this documentation you can find tag <code>attibutes</code> and component <code>properties and methods</code>. I have done this differentiation to indicate which are input parameters and component own parameters. This is basically based because in HTML they are mostly called attributes, meanwhile in javascript they are called properties and I needed to difference them, so <strong>pay attention when I reference to <u>attibutes</u> and <u>properties and methods</u></strong>.</p><h4 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h4><p>This refers to attributes the component tag receives.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueFlux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:rscs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfResources<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfTransitions<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="properties-and-methods" tabindex="-1"><a class="header-anchor" href="#properties-and-methods" aria-hidden="true">#</a> Properties and methods</h4><p>This refers to exposed component properties and methods.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">show</span><span class="token operator">:</span> player<span class="token punctuation">.</span>show<span class="token punctuation">,</span>
   <span class="token literal-property property">play</span><span class="token operator">:</span> player<span class="token punctuation">.</span>play<span class="token punctuation">,</span>
   <span class="token literal-property property">stop</span><span class="token operator">:</span> player<span class="token punctuation">.</span>stop<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function u(d,h){const s=a("demos-home"),e=a("ClientOnly");return o(),p("div",null,[n(e,null,{default:i(()=>[n(s)]),_:1}),l])}const v=t(r,[["render",u],["__file","index.html.vue"]]);export{v as default};
