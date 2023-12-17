import{_ as n,o as s,c as a,e as t}from"./app-pGooBgpL.js";const p={},o=t(`<h1 id="fluxcontrols" tabindex="-1"><a class="header-anchor" href="#fluxcontrols" aria-hidden="true">#</a> FluxControls</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>The included component to display controls with the buttons previous, next, play and pause.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
	mouseOver<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
	player<span class="token operator">:</span> Player<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="mouseover" tabindex="-1"><a class="header-anchor" href="#mouseover" aria-hidden="true">#</a> mouseOver</h3><p>A reactive parameter to indicate when the mouse is over so it should be displayed.</p><p>If this parameter is not passed, controls will be displayed constantly.</p><h3 id="player" tabindex="-1"><a class="header-anchor" href="#player" aria-hidden="true">#</a> player</h3><p>The player controller. You can get it from <a href="../components/vue-flux#props-and-methods">VueFlux</a></p><h4 id="example-of-usage" tabindex="-1"><a class="header-anchor" href="#example-of-usage" aria-hidden="true">#</a> Example of usage</h4><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> shallowReactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
	VueFlux<span class="token punctuation">,</span>
	FluxControls<span class="token punctuation">,</span>
	Img<span class="token punctuation">,</span>
	Book<span class="token punctuation">,</span>
	Zip<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue-flux/style.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	autoplay<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rscs <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL1&#39;</span> <span class="token string">&#39;img 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL2&#39;</span> <span class="token string">&#39;img 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL3&#39;</span> <span class="token string">&#39;img 3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> transitions <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Book<span class="token punctuation">,</span> Zip<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueFlux</span>
	<span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">:rscs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rscs<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transitions<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controlsProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FluxControls</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controlsProps<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueFlux</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="example-of-controls-outside-vueflux" tabindex="-1"><a class="header-anchor" href="#example-of-controls-outside-vueflux" aria-hidden="true">#</a> Example of controls outside VueFlux</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> shallowReactive<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
	VueFlux<span class="token punctuation">,</span>
	FluxControls<span class="token punctuation">,</span>
	Img<span class="token punctuation">,</span>
	Book<span class="token punctuation">,</span>
	Zip<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue-flux/style.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> $vueFlux <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rscs <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL1&#39;</span> <span class="token string">&#39;img 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL2&#39;</span> <span class="token string">&#39;img 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token keyword">new</span> <span class="token class-name">Img</span><span class="token punctuation">(</span><span class="token string">&#39;URL3&#39;</span> <span class="token string">&#39;img 3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> transitions <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Book<span class="token punctuation">,</span> Zip<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> mounted <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	mounted<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueFlux</span>
		<span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$vueFlux<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">:rscs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rscs<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transitions<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">/&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FluxControls</span>
		<span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mounted<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">:player</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$vueFlux.getPlayer()<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,16),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","index.html.vue"]]);export{k as default};
