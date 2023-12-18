import{_ as t,o as a,c as n,e as s}from"./app-f_FCzlUc.js";const e={},o=s(`<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Component to make an image grid.</p><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><p>Draws and composes a grid of cubes.</p><p>The component can have the following attributes.</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>slider</td><td>Object</td><td>true</td><td>The VueFlux component responsible of this cube</td></tr><tr><td>rows</td><td>number</td><td>true</td><td>The number of rows</td></tr><tr><td>cols</td><td>number</td><td>true</td><td>The number of cols</td></tr><tr><td>index</td><td>Object</td><td>true</td><td>An object containing the indexes of images to apply to the tile cubes</td></tr><tr><td>tileCss</td><td>Object</td><td>false</td><td>Initial tile CSS style</td></tr></tbody></table><p>Example:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-grid</span> <span class="token attr-name">:slider</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:num-rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:num-cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-grid</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>Method</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>setCss</td><td>css</td><td>Object with the style to be applied to grid container</td></tr><tr><td>transform</td><td>func</td><td>Runs a transform function for each tile, receiving as parameter the cube and number</td></tr></tbody></table>`,10),d=[o];function p(c,r){return a(),n("div",null,d)}const i=t(e,[["render",p],["__file","index.html.vue"]]);export{i as default};
