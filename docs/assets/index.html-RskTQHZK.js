import{_ as n,o as a,c as s,b as t}from"./app-8ofisRWT.js";const p={},o=t(`<h1 id="installation-and-usage" tabindex="-1"><a class="header-anchor" href="#installation-and-usage" aria-hidden="true">#</a> Installation and usage</h1><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Installation is very simple, just use your favorite package manager:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> vue-flux@stable
</code></pre></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Add the component to the template. This one has all the complements, so you can remove the ones you don&#39;t want.</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfImages<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfTransitions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:captions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfCaptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>preloader</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-preloader</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>caption</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-caption</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>controls</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-controls</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>pagination</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-pagination</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>index</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-index</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$refs.slider.show(&#39;next&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>NEXT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Add it to the component, and like before you can remove the complements you don&#39;t use.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
   VueFlux
   FluxCaption<span class="token punctuation">,</span>
   FluxControls<span class="token punctuation">,</span>
   FluxIndex<span class="token punctuation">,</span>
   FluxPagination<span class="token punctuation">,</span>
   FluxPreloader
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VueFlux<span class="token punctuation">,</span>
      FluxCaption<span class="token punctuation">,</span>
      FluxControls<span class="token punctuation">,</span>
      FluxIndex<span class="token punctuation">,</span>
      FluxPagination<span class="token punctuation">,</span>
      FluxPreloader<span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">vfOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfImages</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;URL1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL3&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfTransitions</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;fade&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cube&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;book&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wave&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfCaptions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&#39;Caption for image 1&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Caption for image 2&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Caption for image 3&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you want to see more details about options, check the <a href="components/vue-flux">VueFlux</a> component documentation.</p>`,10),e=[o];function c(l,u){return a(),s("div",null,e)}const k=n(p,[["render",c],["__file","index.html.vue"]]);export{k as default};
