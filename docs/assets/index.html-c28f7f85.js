import{_ as n,o as s,c as a,b as e}from"./app-fbfde9e5.js";const t={},o=e(`<h1 id="ssr-with-nuxt" tabindex="-1"><a class="header-anchor" href="#ssr-with-nuxt" aria-hidden="true">#</a> SSR with Nuxt</h1><p>This version is friendlier to SSR because now, the package comes with an SSR version ready.</p><blockquote><p>component.vue</p></blockquote><p>Wrap the <code>&lt;vue-flux&gt;</code> where you want to use it with <code>&lt;client-only&gt;</code> tags.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>client-only</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>client-only</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Import vue-flux components from the SSR version package.</p><p>Because the SSR version does not allow to include CSS in the package, you will have to import it also.</p><p>You can import the CSS in the component where you will use the slider, or in any preprocessed CSS file like SASS or Stylus</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  VueFlux<span class="token punctuation">,</span>
  FluxControls<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux/dist-ssr/vue-flux.umd.min.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;vue-flux/dist-ssr/vue-flux.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span>
   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VueFlux<span class="token punctuation">,</span>
      FluxControls<span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[o];function p(i,c){return s(),a("div",null,l)}const r=n(t,[["render",p],["__file","index.html.vue"]]);export{r as default};
