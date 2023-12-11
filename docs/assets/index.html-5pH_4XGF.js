import{_ as n,o as a,c as s,b as t}from"./app-8ofisRWT.js";const p={},o=t(`<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>It is a default component to display image caption.</p><p>The slot can be overwritten with custom caption.</p><p><strong>Captions are passed to vue-flux component instead of this because they are used in multiple components and will be available even if this component is not used</strong></p><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><p>It will display the caption when no transition is active and is defined for current image.</p><p>The component can have the following attributes.</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>slider</td><td>Object</td><td>false</td><td>The VueFlux component</td></tr></tbody></table><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><p>This are the component properties that you can access programatically.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>captions</td><td>Array</td><td>Array of strings for image captions</td></tr><tr><td>caption</td><td>String</td><td>Returns the current image caption or empty string</td></tr></tbody></table><h4 id="example-of-caption-inside-vue-flux" tabindex="-1"><a class="header-anchor" href="#example-of-caption-inside-vue-flux" aria-hidden="true">#</a> Example of caption inside vue-flux</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxImages<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxTransitions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:captions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxCaptions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-caption</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>caption<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-caption</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> VueFlux<span class="token punctuation">,</span> FluxCaption<span class="token punctuation">,</span> Transitions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VueFlux<span class="token punctuation">,</span>
      FluxCaption
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fluxOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fluxImages</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;URL1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL3&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fluxTransitions</span><span class="token operator">:</span> Transitions<span class="token punctuation">,</span>
      <span class="token literal-property property">fluxCaptions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&#39;Image URL1 caption&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Image URL2 caption&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Image URL3 caption&#39;</span>
      <span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="example-of-caption-outside-vue-flux" tabindex="-1"><a class="header-anchor" href="#example-of-caption-outside-vue-flux" aria-hidden="true">#</a> Example of caption outside vue-flux</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxImages<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxTransitions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:captions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxCaptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-caption</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mounted<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:slider</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$refs.slider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-caption</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> VueFlux<span class="token punctuation">,</span> FluxCaption<span class="token punctuation">,</span> Transitions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VueFlux<span class="token punctuation">,</span>
      FluxCaption
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">mounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fluxOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fluxImages</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;URL1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL3&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fluxTransitions</span><span class="token operator">:</span> Transitions<span class="token punctuation">,</span>
      <span class="token literal-property property">fluxCaptions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&#39;Image URL1 caption&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Image URL2 caption&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Image URL3 caption&#39;</span>
      <span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

   <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>mounted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,17),e=[o];function c(l,u){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
