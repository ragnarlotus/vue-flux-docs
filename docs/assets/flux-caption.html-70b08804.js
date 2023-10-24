import{_ as t,r as e,o as p,c as o,d as n,e as a,a as i,b as l}from"./app-29b7d267.js";const c={},u=n("h1",{id:"fluxcaption",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fluxcaption","aria-hidden":"true"},"#"),a(" FluxCaption")],-1),r={class:"custom-container warning"},d=n("p",{class:"custom-container-title"},"WARNING",-1),k={href:"https://vuejs.org/v2/guide/components-slots.html#Named-Slots",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>The included component to display image captions.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Captions are passed to vue-flux component instead of this because they are used in multiple complements and will be available even if this component is not used.</p></div><h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h2><h3 id="slider" tabindex="-1"><a class="header-anchor" href="#slider" aria-hidden="true">#</a> slider</h3><p>Is the VueFlux instance component from which to read the captions.</p><p>If you place this complement as a direct child in the VueFlux component you don&#39;t need to pass this attribute.</p><ul><li><strong>Type:</strong> <code>VueFlux</code></li><li><strong>Required:</strong> <code>false</code></li></ul><h4 id="example-of-caption-inside-vue-flux" tabindex="-1"><a class="header-anchor" href="#example-of-caption-inside-vue-flux" aria-hidden="true">#</a> Example of caption inside vue-flux</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfImages<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfTransitions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:captions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfCaptions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>caption</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-caption</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
   VueFlux<span class="token punctuation">,</span>
   FluxCaption
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VueFlux<span class="token punctuation">,</span>
      FluxCaption<span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">vfOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfImages</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;URL1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL3&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfTransitions</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;fade&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;slide&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfCaptions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&#39;Image URL1 caption&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Image URL2 caption&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Image URL3 caption&#39;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-of-caption-outside-vue-flux" tabindex="-1"><a class="header-anchor" href="#example-of-caption-outside-vue-flux" aria-hidden="true">#</a> Example of caption outside vue-flux</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfImages<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfTransitions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:captions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfCaptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-caption</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mounted<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:slider</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$refs.slider<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
   VueFlux<span class="token punctuation">,</span>
   FluxCaption<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VueFlux<span class="token punctuation">,</span>
      FluxCaption<span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">mounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfImages</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;URL1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL3&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfTransitions</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;fade&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;slide&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfCaptions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&#39;Image URL1 caption&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Image URL2 caption&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Image URL3 caption&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

   <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>mounted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h3 id="vf" tabindex="-1"><a class="header-anchor" href="#vf" aria-hidden="true">#</a> vf</h3><p>The <code>VueFlux</code> instance component.</p><ul><li><strong>Type:</strong> <code>VueFlux</code></li></ul><h3 id="caption" tabindex="-1"><a class="header-anchor" href="#caption" aria-hidden="true">#</a> caption</h3><p>Is the caption corresponding to the image being displayed at the moment.</p><p>This value will be empty string while preloading and while there is a transition running.</p><ul><li><strong>Type:</strong> <code>String</code></li></ul><h3 id="captions" tabindex="-1"><a class="header-anchor" href="#captions" aria-hidden="true">#</a> captions</h3><p>The array of captions passed originally to the VueFlux component.</p><ul><li><strong>Type:</strong> <code>Array</code></li></ul><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><h3 id="getcaption-index" tabindex="-1"><a class="header-anchor" href="#getcaption-index" aria-hidden="true">#</a> getCaption(index)</h3><p>Gets the caption element corresponding to the index captions array.</p><p>If no index defined will return the one of current image.</p><ul><li>index <ul><li>Type: <code>Number</code></li><li>Required: <code>false</code></li></ul></li></ul><h3 id="getcaptiontext-index" tabindex="-1"><a class="header-anchor" href="#getcaptiontext-index" aria-hidden="true">#</a> getCaptionText(index)</h3><p>Gets the caption text corresponding to the index captions array.</p><p>If no index defined will return the one of current image.</p><ul><li>index <ul><li>Type: <code>Number</code></li><li>Required: <code>false</code></li></ul></li></ul><h2 id="templating" tabindex="-1"><a class="header-anchor" href="#templating" aria-hidden="true">#</a> Templating</h2><p>You can customize how the captions are displayed. That is because this component has a default slot, so you can pass a custom component or template code.</p><p>This slot will receive an object having the following schema:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>captionProps <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">caption</span><span class="token operator">:</span> String <span class="token operator">|</span> Object<span class="token punctuation">,</span>
   <span class="token literal-property property">text</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>caption: is the element of the captions array corresponding to the current image.</li><li>text: is the caption as text. This is specially useful if you mix captions as <code>String</code> and as <code>Object</code>.</li></ul><h4 id="example-using-custom-component" tabindex="-1"><a class="header-anchor" href="#example-using-custom-component" aria-hidden="true">#</a> Example using custom component</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span>
   <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfImages<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfTransitions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:captions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfCaptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>caption</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-caption</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>captionProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-caption</span> <span class="token attr-name">caption</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>captionProps<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-caption</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-using-custom-structure" tabindex="-1"><a class="header-anchor" href="#example-using-custom-structure" aria-hidden="true">#</a> Example using custom structure</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span>
   <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfImages<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfTransitions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:captions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfCaptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>caption</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-caption</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>captionProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>captionProps.caption.url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flux-caption<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{ captionProps.text }}
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-caption</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function m(g,h){const s=e("ExternalLinkIcon");return p(),o("div",null,[u,n("div",r,[d,n("p",null,[a("I am using here the latest 2.6 vue syntax for slots, but if your Vue version is older check "),n("a",k,[a("Named-Slots"),i(s)]),a(" to see how slots are used in previous versions.")])]),v])}const f=t(c,[["render",m],["__file","flux-caption.html.vue"]]);export{f as default};
