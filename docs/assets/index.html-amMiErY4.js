import{_ as n,r as t,o,c as p,d as s,e as a,a as c,b as i}from"./app-8ofisRWT.js";const r={},l=s("h1",{id:"fluximage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#fluximage","aria-hidden":"true"},"#"),a(" FluxImage")],-1),d=s("h2",{id:"description",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),a(" Description")],-1),h=s("p",null,"The FluxImage component represents the lowest component of library and displays an image, part of it or a color.",-1),u={href:"http://ragnarlotus.github.io/vue-flux-docs/demos/components/flux-image.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FluxImageProps</span> <span class="token punctuation">{</span>
	size<span class="token operator">:</span> Size<span class="token punctuation">;</span>
	viewSize<span class="token operator">?</span><span class="token operator">:</span> Size <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	rsc<span class="token operator">?</span><span class="token operator">:</span> Resources<span class="token punctuation">;</span>
	offset<span class="token operator">:</span><span class="token operator">?</span> Position<span class="token punctuation">;</span>
	css<span class="token operator">?</span><span class="token operator">:</span> CSSProperties<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> <code>size</code></h3><p>This size is the width and height in pixels that the component will have.</p><h3 id="view-size" tabindex="-1"><a class="header-anchor" href="#view-size" aria-hidden="true">#</a> <code>view-size</code></h3><p>When received, the component will overwrite the <code>size</code> attribute, but maintain the resource scaled and position values.</p><h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> <code>color</code></h3><p>Sets the background color.</p><p>The values can be any valid CSS color.</p><h3 id="rsc" tabindex="-1"><a class="header-anchor" href="#rsc" aria-hidden="true">#</a> <code>rsc</code></h3><p>The resource to be displayed.</p><h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset" aria-hidden="true">#</a> <code>offset</code></h3><p>It&#39;s an adjustment of the image position in pixels based on the top and left.</p><p>In case you do not set one of them, will default to <code>0</code>.</p><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> <code>css</code></h3><p>Object with CSS styles in camel case to apply to component.</p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Set CSS styles to the cube</span>
<span class="token function">setCss</span><span class="token punctuation">(</span>css<span class="token operator">:</span> CSSProperties<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

<span class="token comment">// Sets the CSS styles to be transformed to within a transition</span>
<span class="token function">transform</span><span class="token punctuation">(</span>css<span class="token operator">:</span> CSSProperties<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

<span class="token comment">// Show the cube, setting \`visibility\` to \`visible\`</span>
<span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

<span class="token comment">// Hide the cube, setting \`visibility\` to \`hidden\`</span>
<span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
</code></pre></div>`,18);function f(m,b){const e=t("ExternalLinkIcon");return o(),p("div",null,[l,d,h,s("p",null,[s("a",u,[a("Demo"),c(e)])]),k])}const v=n(r,[["render",f],["__file","index.html.vue"]]);export{v as default};
