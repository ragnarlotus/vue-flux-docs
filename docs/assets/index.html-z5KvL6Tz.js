import{_ as n,o as s,c as a,b as t}from"./app-DHB0SMXO.js";const p={},o=t(`<h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h2><p>Must receive the slider.</p><p>Must have a totalDuration attribute to know how long the transition lasts.</p><p>You can initialize data and values on component created() method.</p><p>On mounted() method will run the transition.</p><p>You can also set the destroyed() method to be run when transition ends.</p><h2 id="example-1-waterfall" tabindex="-1"><a class="header-anchor" href="#example-1-waterfall" aria-hidden="true">#</a> Example 1 - Waterfall</h2><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-grid</span> <span class="token attr-name">:slider</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cols<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-grid</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> FluxGrid <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;transitionWaterfall&#39;</span><span class="token punctuation">,</span>

   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      FluxGrid
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">currentImage</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      <span class="token literal-property property">nextImage</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rows</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">cols</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tileDuration</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
      <span class="token literal-property property">totalDuration</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">easing</span><span class="token operator">:</span> <span class="token string">&#39;ease-in&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tileDelay</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

   <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">slider</span><span class="token operator">:</span> Object
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">grid</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>grid<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentImage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span><span class="token function">currentImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextImage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span><span class="token function">nextImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">let</span> divider <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span><span class="token function">setTransitionOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">numCols</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">/</span> divider<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>totalDuration <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tileDelay <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numCols <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tileDuration<span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">front</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span>currentImage<span class="token punctuation">.</span>index
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentImage<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>grid<span class="token punctuation">.</span><span class="token function">setCss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">&#39;hidden&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>grid<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">tile<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         tile<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token string">&#39;all &#39;</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tileDuration <span class="token operator">+</span><span class="token string">&#39;ms &#39;</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>easing <span class="token operator">+</span><span class="token string">&#39; &#39;</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDelay</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span><span class="token string">&#39;ms&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token string">&#39;0.1&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&#39;translateY(&#39;</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height <span class="token operator">+</span><span class="token string">&#39;px)&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">getDelay</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">let</span> delay <span class="token operator">=</span> i<span class="token punctuation">;</span>

         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>direction <span class="token operator">===</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">)</span>
            delay <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numCols <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

         <span class="token keyword">return</span> delay <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tileDelay<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="example-2-wave" tabindex="-1"><a class="header-anchor" href="#example-2-wave" aria-hidden="true">#</a> Example 2 - Wave</h2><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-grid</span> <span class="token attr-name">:slider</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cols<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-grid</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> FluxGrid <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;transitionWave&#39;</span><span class="token punctuation">,</span>

   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      FluxGrid
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">currentImage</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      <span class="token literal-property property">nextImage</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rows</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">cols</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tileDuration</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
      <span class="token literal-property property">totalDuration</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">easing</span><span class="token operator">:</span> <span class="token string">&#39;ease-out&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tileDelay</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sideColor</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

   <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">slider</span><span class="token operator">:</span> Object
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">grid</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>grid<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentImage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span><span class="token function">currentImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextImage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span><span class="token function">nextImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">let</span> divider <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">8</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span><span class="token function">setTransitionOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">numCols</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>slider<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">/</span> divider<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>totalDuration <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tileDelay <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numCols <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tileDuration<span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">front</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentImage<span class="token punctuation">.</span>index<span class="token punctuation">,</span>
         <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nextImage<span class="token punctuation">.</span>index<span class="token punctuation">,</span>
         <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nextImage<span class="token punctuation">.</span>index<span class="token punctuation">,</span>
         <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sideColor<span class="token punctuation">,</span>
         <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sideColor
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentImage<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextImage<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>grid<span class="token punctuation">.</span><span class="token function">setCss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">perspective</span><span class="token operator">:</span> <span class="token string">&#39;1200px&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>grid<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">tile<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         tile<span class="token punctuation">.</span><span class="token function">setCss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token string">&#39;all &#39;</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tileDuration <span class="token operator">+</span><span class="token string">&#39;ms &#39;</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>easing <span class="token operator">+</span><span class="token string">&#39; &#39;</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDelay</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span><span class="token string">&#39;ms&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

         tile<span class="token punctuation">.</span><span class="token function">turn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>direction <span class="token operator">===</span> <span class="token string">&#39;right&#39;</span><span class="token operator">?</span> <span class="token string">&#39;bottom&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextImage<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">getDelay</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">let</span> delay <span class="token operator">=</span> i<span class="token punctuation">;</span>

         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>direction <span class="token operator">===</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">)</span>
            delay <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numCols <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

         <span class="token keyword">return</span> delay <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tileDelay<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,12),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","index.html.vue"]]);export{k as default};
