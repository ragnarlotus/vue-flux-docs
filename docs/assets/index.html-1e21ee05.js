import{_ as t,o as e,c as n,b as s}from"./app-29b7d267.js";const a={},d=s(`<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Component composed by FluxImages that form a cube.</p><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><p>Represents a set of images that renders as a 6 sides cube.</p><p>The component can have the following attributes.</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>slider</td><td>Object</td><td>true</td><td>The VueFlux component responsible of this cube</td></tr><tr><td>index</td><td>Object</td><td>true</td><td>An object containing the sides indexes</td></tr><tr><td>css</td><td>Object</td><td>false</td><td>Initial CSS style, by default sets top 0 and left 0</td></tr></tbody></table><p>Example:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-cube</span>
   <span class="token attr-name">:slider</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{front: 1, top: 2, left: &#39;#ccc&#39;, right: &#39;#ccc&#39;}<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:css</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{width: &#39;300px&#39;, height: &#39;300px&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-cube</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>Method</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>setCss</td><td>css</td><td>Object with the style to be applied directly</td></tr><tr><td>transform</td><td>css</td><td>Object with the style to be applied rendering, used to perform the transitions</td></tr><tr><td>turn</td><td>direction, to</td><td>Turns the cube to specified direction (top, back, bottom, left, right) with to side (left or right)</td></tr><tr><td>turnTop</td><td></td><td>Turns the cube to top</td></tr><tr><td>turnBack</td><td>to</td><td>Turns the cube back side, to left or to right</td></tr><tr><td>turnBottom</td><td></td><td>Turns the cube to bottom</td></tr><tr><td>turnLeft</td><td></td><td>Turns the cube to left</td></tr><tr><td>turnRight</td><td></td><td>Turns the cube to right</td></tr></tbody></table>`,10),o=[d];function r(c,i){return e(),n("div",null,o)}const l=t(a,[["render",r],["__file","index.html.vue"]]);export{l as default};
