import{_ as n,r as s,o,c as i,b as d,d as t,a as r,w as p,e as a}from"./app-f_FCzlUc.js";const l={},c=a(`<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>This is the main component of the slider and will be the view that display the images.</p><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><p>The slider preloads all images to make transitions smooth, so depending on size and quantity of images can take a while to begin.</p><p>The component is build as a container, having a mask that renders and display the images. The mask contains the transition component and two FluxImages that are used to be shown before and after transitions.</p><p>In touchable screens you can slide right and left to show previous or next image. Will also display index if defined sliding up.</p><p>The component has the following attributes.</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>options</td><td>Object</td><td>false</td><td>An object containing the slider options</td></tr><tr><td>transitions</td><td>Object</td><td>true</td><td>An object defined with the wanted transitions</td></tr><tr><td>transitionOptions</td><td>Object</td><td>false</td><td>The options for each transition</td></tr><tr><td>path</td><td>string</td><td>false</td><td>Base path of the images</td></tr><tr><td>images</td><td>Array</td><td>false</td><td>An array with the images URL</td></tr><tr><td>captions</td><td>Array</td><td>false</td><td>An array with captions to be displayed on each image</td></tr></tbody></table><p>Example:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxImages<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxTransitions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:captions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fluxCaptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$refs.slider.show(&#39;next&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>NEXT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><table><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>autoplay</td><td>Boolean</td><td>false</td><td>Autoplay images when loaded</td></tr><tr><td>fullscreen</td><td>Boolean</td><td>false</td><td>Allows the slider to be displayed in full screen</td></tr><tr><td>enableGestures</td><td>Boolean</td><td>false</td><td>Define if in touchable screens should show control and index icons or use gestures</td></tr><tr><td>infinite</td><td>Boolean</td><td>true</td><td>The slider will start over when reaches the last image, otherwise will stop</td></tr><tr><td>bindKeys</td><td>Boolean</td><td>false</td><td>Binds the arrow keys to show next or previous</td></tr><tr><td>delay</td><td>Integer</td><td>5000</td><td>The time in ms that an image will be displayed before changing to next</td></tr><tr><td>autohideTime</td><td>Integer</td><td>1500</td><td>The time in ms that the controls and index button will stay until disappear. If set to 0 they will never disappear</td></tr><tr><td>width</td><td>string</td><td>100%</td><td>Defines the slider width</td></tr><tr><td>height</td><td>string</td><td>auto</td><td>Defines the slider height</td></tr></tbody></table><h2 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> Size</h2><p>The slider size is defined the following way.</p><p>If width and height are passed in options, that size will prevail over all.</p><p>By default the width will be the parents width and height will be auto.</p><p>If the height is auto, it will check if the slider has a defined CSS with height, if not will check the parent, otherwise will calculate the height using the width as per 16:9 ratio.</p><h2 id="transitions" tabindex="-1"><a class="header-anchor" href="#transitions" aria-hidden="true">#</a> Transitions</h2><p>This is an object that will own the transitions to be used between images. The object is build using the transition name and its component.</p><p>The transitions will be run in the order defined and then will begin again from the first.</p><p>The transitions have a direction being &#39;right&#39; by default and using &#39;left&#39; when next image is previous so different transitions can be run depending on direction.</p><p>Slider will ignore any interaction while a transition is running.</p>`,22),h=a(`<p>Example:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> VueFlux<span class="token punctuation">,</span> Transitions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token literal-property property">fluxTransitions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">transitionFade</span><span class="token operator">:</span> Transitions<span class="token punctuation">.</span>transitionFade<span class="token punctuation">,</span>
   <span class="token literal-property property">transitionBook</span><span class="token operator">:</span> Transitions<span class="token punctuation">.</span>transitionBook<span class="token punctuation">,</span>
   <span class="token literal-property property">transitionBlocks2</span><span class="token operator">:</span> Transitions<span class="token punctuation">.</span>transitionBlocks2
<span class="token punctuation">}</span>
</code></pre></div><h2 id="transition-options" tabindex="-1"><a class="header-anchor" href="#transition-options" aria-hidden="true">#</a> Transition options</h2><p>This is an object with the options that will overwrite the default of transitions.</p><p>Example:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">transitionOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">transitionFade</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">totalDuration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      <span class="token literal-property property">easing</span><span class="token operator">:</span> <span class="token string">&#39;ease&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">transitionBlocks2d2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rows</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token literal-property property">cols</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tileDelay</span><span class="token operator">:</span> <span class="token number">150</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> Path</h2><p>Is the base path of the images. For example if all the images are located in /img/slide/example you can set it and then in the images array just use the file names.</p><h2 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h2><p>The array containing the image URLs to be displayed.</p><p>If an image can not be loaded will be omitted displaying a console warning message.</p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><p>This are the component properties that you can access programatically.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>config</td><td>Object</td><td>Set of slider options</td></tr><tr><td>size</td><td>Object</td><td>Size in pixels having width and height</td></tr><tr><td>loaded</td><td>Boolean</td><td>Determines if the images have been loaded and slider is initialized</td></tr><tr><td>transition</td><td>Object</td><td>Manages current and last transition</td></tr><tr><td>imagesLoaded</td><td>number</td><td>Number of images loaded</td></tr><tr><td>loaded</td><td>Boolean</td><td>Indicates when all the images have been preloaded</td></tr><tr><td>properties</td><td>Array</td><td>Array of objects that have the images properties</td></tr><tr><td>touchable</td><td>Boolean</td><td>Returns if the screen is touchable</td></tr><tr><td>caption</td><td>Component</td><td>The caption component</td></tr><tr><td>controls</td><td>Component</td><td>The controls component</td></tr><tr><td>index</td><td>Component</td><td>The index component</td></tr><tr><td>pagination</td><td>Component</td><td>The pagination component</td></tr><tr><td>mask</td><td>HTML</td><td>References the slider mask container where the images are displayed</td></tr><tr><td>sizePx</td><td>Object</td><td>An object having width and height in pixels with the &#39;px&#39; unit</td></tr><tr><td>loadPct</td><td>number</td><td>Percentage of images already loaded</td></tr><tr><td>nextTransition</td><td>string</td><td>Name of the next transition</td></tr><tr><td>direction</td><td>string</td><td>By default is &#39;right&#39;, and &#39;left&#39; when next image is before the current</td></tr></tbody></table><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2><table><thead><tr><th>Name</th><th>Element</th><th>Description</th></tr></thead><tbody><tr><td>container</td><td>div</td><td>Container of all the slider</td></tr><tr><td>mask</td><td>div</td><td>Wrapper having the transition and control images</td></tr><tr><td>transition</td><td>component</td><td>Transition component that runs to change image</td></tr><tr><td>image1</td><td>FluxImage</td><td>Image to be displayed before or after the transition</td></tr><tr><td>image2</td><td>FluxImage</td><td>Image to be displayed before or after the transition</td></tr></tbody></table><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>Method</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>currentImage</td><td></td><td>Image component being displayed currently</td></tr><tr><td>nextImage</td><td></td><td>Image component that will be displayed next</td></tr><tr><td>resize</td><td></td><td>Call to recalculate the sizes of the slider</td></tr><tr><td>inFullscreen</td><td></td><td>Returns if slider is currently in full screen</td></tr><tr><td>requestFullscreen</td><td></td><td>Sets the slider in full screen</td></tr><tr><td>exitFullscreen</td><td></td><td>Leaves the full screen mode</td></tr><tr><td>toggleFullscreen</td><td></td><td>Toggles full screen mode</td></tr><tr><td>play</td><td>index</td><td>Will start displaying the images by the interval specified in config. The index is the image number to start with, and can also be &#39;previous&#39; and &#39;next&#39;</td></tr><tr><td>stop</td><td></td><td>Stops playing images and remains in the current</td></tr><tr><td>toggleAutoplay</td><td></td><td>Toggles auto play</td></tr><tr><td>getIndex</td><td>index</td><td>Will return the position in the array given a number or a string (&#39;next&#39; or &#39;previous&#39;)</td></tr><tr><td>show</td><td>index, transition</td><td>Displays the image specified by image index (or &#39;next&#39; or &#39;previous&#39;) and using the specified transition. If no index specified will display next and if no transition specified will use the next defined in transitions</td></tr></tbody></table>`,18);function u(g,m){const e=s("RouterLink");return o(),i("div",null,[c,d("p",null,[t("Refer to "),r(e,{to:"/documentation/v5/components/transitions/"},{default:p(()=>[t("Transitions")]),_:1}),t(" to know more about included transitions.")]),h])}const f=n(l,[["render",u],["__file","index.html.vue"]]);export{f as default};
