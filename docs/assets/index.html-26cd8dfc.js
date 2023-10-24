import{_ as t,o as a,c as s,b as n}from"./app-29b7d267.js";const e={},p=n(`<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>The FluxImage component represents the smallest part of the slider and displays an image, part of it or a color.</p><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><p>It renders what have to be displayed calculating its size and position automatically.</p><p>The component can have the following attributes.</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>slider</td><td>Object</td><td>true</td><td>The VueFlux component responsible of this image</td></tr><tr><td>index</td><td>Number, String</td><td>true</td><td>If a number represents the image index of slider and if string of hexadecimal will just paint it with the defined color</td></tr><tr><td>css</td><td>Object</td><td>false</td><td>Initial CSS style, by default sets top 0 and left 0</td></tr></tbody></table><p>Example:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-image</span> <span class="token attr-name">:slider</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-image</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-image</span> <span class="token attr-name">:slider</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>#cccccc&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:css</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{opacity: 0.5}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-image</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>Method</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>setCss</td><td>css</td><td>Object with the style to be applied directly</td></tr><tr><td>transform</td><td>css</td><td>Object with the style to be applied rendering, used to perform the transitions</td></tr><tr><td>show</td><td></td><td>Shows the image if hidden</td></tr><tr><td>hide</td><td></td><td>Hides the image</td></tr></tbody></table>`,10),o=[p];function d(c,i){return a(),s("div",null,o)}const r=t(e,[["render",d],["__file","index.html.vue"]]);export{r as default};
