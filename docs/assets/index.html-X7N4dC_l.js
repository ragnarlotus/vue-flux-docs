import{_ as a,r as t,o as p,c as o,b as e,d as n,a as c,w as u,e as l}from"./app-9q7i-DDF.js";const i={},k=l(`<h1 id="fluxcaption" tabindex="-1"><a class="header-anchor" href="#fluxcaption" aria-hidden="true">#</a> FluxCaption</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>The included component to display resource captions.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
	currentResource<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> ResourceIndex<span class="token punctuation">;</span>
	currentTransition<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> TransitionIndex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="currentresource" tabindex="-1"><a class="header-anchor" href="#currentresource" aria-hidden="true">#</a> currentResource</h3><p>Is the full (because it has all the details) current resource index having the following schema:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ResourceIndex</span> <span class="token punctuation">{</span>
	index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
	rsc<span class="token operator">:</span> Resource<span class="token punctuation">;</span>
	options<span class="token operator">:</span> <span class="token punctuation">{</span>
		delay<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
		stop<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can get it through the controller <code>Player</code> from <a href="../components/vue-flux#methods">VueFlux</a></p><h4 id="example-of-usage" tabindex="-1"><a class="header-anchor" href="#example-of-usage" aria-hidden="true">#</a> Example of usage</h4><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> shallowReactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
   VueFlux<span class="token punctuation">,</span>
   FluxCaption<span class="token punctuation">,</span>
   Img<span class="token punctuation">,</span>
   Book<span class="token punctuation">,</span>
   Zip<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue-flux/style.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vfOptions <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   autoplay<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vfRscs <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
   <span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL1&#39;</span> <span class="token string">&#39;img 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL2&#39;</span> <span class="token string">&#39;img 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL3&#39;</span> <span class="token string">&#39;img 3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vfTransitions <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Book<span class="token punctuation">,</span> Zip<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueFlux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:rscs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfRscs<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfTransitions<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#caption</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>captionProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FluxCaption</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>captionProps<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueFlux</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="example-of-caption-outside-vue-flux" tabindex="-1"><a class="header-anchor" href="#example-of-caption-outside-vue-flux" aria-hidden="true">#</a> Example of caption outside vue-flux</h4><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> shallowReactive<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
   VueFlux<span class="token punctuation">,</span>
   FluxCaption<span class="token punctuation">,</span>
   Img<span class="token punctuation">,</span>
   Book<span class="token punctuation">,</span>
   Zip<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue-flux/style.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> $vueFlux <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> playerController <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vfOptions <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   autoplay<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vfRscs <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
   <span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL1&#39;</span> <span class="token string">&#39;img 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL2&#39;</span> <span class="token string">&#39;img 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL3&#39;</span> <span class="token string">&#39;img 3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vfTransitions <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Book<span class="token punctuation">,</span> Zip<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	playerController<span class="token punctuation">.</span>value <span class="token operator">=</span> $vueFlux<span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueFlux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:rscs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfRscs<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfTransitions<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$vueFlux<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueFlux</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FluxCaption</span>
	<span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>playerController<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">:currentResource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>playerController..value.resource.current<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">:currentTransition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>playerController.value.transition.current<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="templating" tabindex="-1"><a class="header-anchor" href="#templating" aria-hidden="true">#</a> Templating</h2><p>You can customize how the captions are displayed. That is because this component has a default slot, so you can pass a custom component or template code.</p>`,17);function r(d,g){const s=t("RouterLink");return p(),o("div",null,[k,e("p",null,[n("You can see it in the "),c(s,{to:"/demos/complements/flux-caption.html"},{default:u(()=>[n("demo")]),_:1})])])}const h=a(i,[["render",r],["__file","index.html.vue"]]);export{h as default};
