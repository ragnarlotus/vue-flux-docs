import{_ as n,o as s,c as a,e as t}from"./app-SStEjskS.js";const e={},p=t(`<h1 id="ssr-with-nuxt" tabindex="-1"><a class="header-anchor" href="#ssr-with-nuxt" aria-hidden="true">#</a> SSR with Nuxt</h1><p>Wrap the <code>&lt;VueFlux&gt;</code> where you want to use it with <code>&lt;ClientOnly&gt;</code> tags.</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueFlux</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueFlux</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Don&#39;t forget to import the CSS in the component where you will use the slider, or in any preprocessed CSS file like SASS or Stylus</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  VueFlux<span class="token punctuation">,</span>
  FluxControls<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;vue-flux/style.css&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,5),o=[p];function c(l,u){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};
