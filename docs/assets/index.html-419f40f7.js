import{_ as n,o as s,c as a,b as t}from"./app-fbfde9e5.js";const p={},e=t(`<p>Edit the Nuxt config to let it know not to SSR and to add it as vendor.</p><blockquote><p>nuxt.config.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token operator">...</span>
   <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;~/node_modules/vue-flux&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">vendor</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then wrap the <code>&lt;vue-flux&gt;</code> component with <code>&lt;no-ssr&gt;</code> to indicate Nuxt what not to SSR in template and import vue-flux when its run in the browser.</p><blockquote><p>gallery.vue</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>no-ssr</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>no-ssr</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> VueFlux<span class="token punctuation">;</span>
<span class="token keyword">let</span> Transitions<span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>browser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> <span class="token constant">VF</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   VueFlux <span class="token operator">=</span> <span class="token constant">VF</span><span class="token punctuation">.</span>VueFlux<span class="token punctuation">;</span>
   Transitions <span class="token operator">=</span> <span class="token constant">VF</span><span class="token punctuation">.</span>Transitions<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VueFlux
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fluxOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fluxImages</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&#39;https://source.unsplash.com/random&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;https://source.unsplash.com/random&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;https://source.unsplash.com/random&#39;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fluxTransitions</span><span class="token operator">:</span> Transitions
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","index.html.vue"]]);export{r as default};
