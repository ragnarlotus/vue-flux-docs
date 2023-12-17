import{_ as s,o as n,c as a,e as t}from"./app-zCTnd8Wc.js";const e={},o=t(`<h1 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> Resources</h1><p>This are the resources that the slider supports.</p><p>Each resource has two component properties, one is used during the transitions, and the other to display. This is done this way because for some resources like videos, can&#39;t make transitions, so they use an image for the transition and when it ends it switches the image to the video to be displayed.</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="resources/img">Img</a></td><td>Displays an image</td></tr><tr><td><a href="resources/video">Video</a></td><td>Displays a video</td></tr><tr><td><a href="resources/component">Component</a></td><td>Displays vue component</td></tr></tbody></table><p>All this resources inherit the abstract class <code>Resource</code>.</p><h2 id="resource" tabindex="-1"><a class="header-anchor" href="#resource" aria-hidden="true">#</a> Resource</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token function">constructor</span><span class="token punctuation">(</span>
	src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
	caption<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
	resizeType<span class="token operator">:</span> ResizeType <span class="token operator">=</span> ResizeTypes<span class="token punctuation">.</span>fill<span class="token punctuation">,</span>
	backgroundColor<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	display<span class="token operator">:</span> DisplayParameter<span class="token punctuation">,</span>
	transition<span class="token operator">:</span> TransitionParameter<span class="token punctuation">,</span>
	errorMessage<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span>
</code></pre></div><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// The src url of the resource</span>
src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token comment">// Once called to load contains the promise in charge of loading it</span>
loader<span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// If there where an error loading this will contain the error message</span>
errorMessage<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token comment">// Contains the status of the resource, being one of \`notLoaded\`, \`loading\`, \`loaded\` or \`error\`</span>
status<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>Statuses<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>Statuses<span class="token punctuation">.</span>notLoaded<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Natural size of the resource</span>
realSize<span class="token operator">:</span> Size <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Size of the display</span>
displaySize<span class="token operator">:</span> Size <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// The caption that represents the resource</span>
caption<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// The type of desired resize, being \`fill\` or \`fit\`</span>
resizeType<span class="token operator">:</span> ResizeType<span class="token punctuation">;</span>

<span class="token comment">// Color that will fill the remaining space to cover the desired size in case the resize type is \`fit\`</span>
backgroundColor<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// The display component is the one that will be shown when not in transition</span>
display<span class="token operator">:</span> DisplayParameter<span class="token punctuation">;</span>

<span class="token comment">// The component used during the transition</span>
transition<span class="token operator">:</span> TransitionParameter<span class="token punctuation">;</span>

<span class="token comment">// The computed properties adapted for the size of display</span>
resizeProps<span class="token operator">:</span> computed<span class="token operator">&lt;</span><span class="token punctuation">{</span>
	top<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
	left<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
	width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
	height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>
</code></pre></div><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Returns if the resource is being loaded</span>
<span class="token function">isLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>

<span class="token comment">// Returns if the resource is already loaded</span>
<span class="token function">isLoaded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>

<span class="token comment">// Returns if the resource has finished loading with an error</span>
<span class="token function">isError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>

<span class="token comment">// Returns the size and position of the given display size</span>
<span class="token function">calcResizeProps</span><span class="token punctuation">(</span>displaySize<span class="token operator">:</span> Size<span class="token punctuation">)</span><span class="token operator">:</span> Object

<span class="token comment">// Returns the size and position resizing to given size and optionally an offset.</span>
<span class="token function">getResizeProps</span><span class="token punctuation">(</span>size<span class="token operator">:</span> Size<span class="token punctuation">,</span> offset<span class="token operator">?</span><span class="token operator">:</span> Position<span class="token punctuation">)</span><span class="token operator">:</span> Object
</code></pre></div>`,12),p=[o];function r(c,i){return n(),a("div",null,p)}const u=s(e,[["render",r],["__file","index.html.vue"]]);export{u as default};
