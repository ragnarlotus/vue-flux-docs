import{_ as n,o as a,c as s,b as t}from"./app-8ofisRWT.js";const p={},o=t(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Installation is very simple, just use your favorite package manager:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> vue-flux@previous
</code></pre></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>In your code just add the component in the template.</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxImages<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxTransitions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-pagination</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pagination<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-pagination</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$refs.slider.show(&#39;next&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>NEXT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>And the data that will be used in the template.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> VueFlux<span class="token punctuation">,</span> FluxPagination<span class="token punctuation">,</span> Transitions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VueFlux<span class="token punctuation">,</span>
      FluxPagination
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fluxOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fluxImages</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&#39;URL1&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;URL2&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;URL3&#39;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fluxTransitions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">transitionBook</span><span class="token operator">:</span> Transitions<span class="token punctuation">.</span>transitionBook
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you want to see more details about configuration check the <a href="components/vue-flux">VueFlux</a> component documentation.</p>`,9),e=[o];function c(l,u){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
