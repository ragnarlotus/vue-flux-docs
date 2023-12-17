import{_ as n,o as s,c as a,e}from"./app-pGooBgpL.js";const t={},o=e(`<h1 id="img" tabindex="-1"><a class="header-anchor" href="#img" aria-hidden="true">#</a> Img</h1><p>Renders an image</p><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token function">constructor</span><span class="token punctuation">(</span>
	src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
	caption<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
	resizeType<span class="token operator">:</span> ResizeType <span class="token operator">=</span> <span class="token string">&#39;fill&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">// Background color is only useful when the resizeType is fit,</span>
	<span class="token comment">// so it fills the gaps of VueFlux size, and does not look odd when a transitions runs</span>
	backgroundColor<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">)</span>
</code></pre></div><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Called to load the resource returning a promise</span>
<span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>

<span class="token comment">// Called when the resource is loaded successfully</span>
<span class="token function">onLoad</span><span class="token punctuation">(</span>img<span class="token operator">:</span> HTMLImageElement<span class="token punctuation">,</span> resolve<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

<span class="token comment">// Called when an error occurs when loading the resource</span>
<span class="token function">onError</span><span class="token punctuation">(</span>reject<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
</code></pre></div>`,6),p=[o];function c(r,l){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","index.html.vue"]]);export{u as default};
