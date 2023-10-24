import {
	_ as l,
	r as e,
	o as p,
	c,
	d as a,
	e as n,
	a as s,
	w as u,
	b as i,
} from './app-29b7d267.js';
const r = {},
	d = a(
		'h1',
		{ id: 'overview', tabindex: '-1' },
		[
			a(
				'a',
				{
					class: 'header-anchor',
					href: '#overview',
					'aria-hidden': 'true',
				},
				'#'
			),
			n(' Overview'),
		],
		-1
	),
	k = {
		href: 'https://vuejs.org/',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	m = i(
		'<p><img src="https://img.shields.io/npm/v/vue-flux/latest.svg?style=flat-square" alt="npm"><img src="https://img.shields.io/npm/dt/vue-flux.svg?style=flat-square" alt="npm"><img src="https://img.shields.io/bundlephobia/min/vue-flux/latest.svg?style=flat-square" alt="npm bundle size (minified)"><img src="https://img.shields.io/bundlephobia/minzip/vue-flux/latest.svg?style=flat-square" alt="npm bundle size (minified + gzip)"><img src="https://img.shields.io/github/issues-raw/ragnarlotus/vue-flux.svg?style=flat-square" alt="GitHub issues"><img src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square" alt="GitHub"></p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>',
		2
	),
	h = i(
		`<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><table><thead><tr><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td>Responsive</td><td>The slider and the images are adapted to container to fill it always</td></tr><tr><td>Compatibility</td><td>Supported by all major browsers</td></tr><tr><td>Expandable</td><td>You can add your custom transitions very easily</td></tr><tr><td>Customization</td><td>Total customizable to suit most needs</td></tr><tr><td>Gestures</td><td>Mobile friendly by gestures</td></tr><tr><td>Functionality</td><td>You can use arrow keys to navigate. Switch to full screen</td></tr><tr><td>Parallax</td><td>It includes a parallax component very easy to set up</td></tr></tbody></table><h2 id="quickstart" tabindex="-1"><a class="header-anchor" href="#quickstart" aria-hidden="true">#</a> Quickstart</h2><p>Install and save the package.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> vue-flux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Add the component to the template. This one has all the complements, so you can remove the ones you don&#39;t want.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-flux</span>
   <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfOptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfImages<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:transitions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfTransitions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">:captions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vfCaptions<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>preloader</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-preloader</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>caption</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-caption</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>controls</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-controls</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>pagination</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-pagination</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>index</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-index</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-flux</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$refs.slider.show(&#39;next&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>NEXT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add it to the component, and like before you can remove the complements you don&#39;t use.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
   VueFlux<span class="token punctuation">,</span>
   FluxCaption<span class="token punctuation">,</span>
   FluxControls<span class="token punctuation">,</span>
   FluxIndex<span class="token punctuation">,</span>
   FluxPagination<span class="token punctuation">,</span>
   FluxPreloader
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-flux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VueFlux<span class="token punctuation">,</span>
      FluxCaption<span class="token punctuation">,</span>
      FluxControls<span class="token punctuation">,</span>
      FluxIndex<span class="token punctuation">,</span>
      FluxPagination<span class="token punctuation">,</span>
      FluxPreloader<span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">vfOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfImages</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;URL1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;URL3&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfTransitions</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;fade&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cube&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;book&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wave&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">vfCaptions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&#39;Caption for image 1&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Caption for image 2&#39;</span><span class="token punctuation">,</span>
         <span class="token string">&#39;Caption for image 3&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h2><p>Weight is about 130 KB so is pretty light having only the essential CSS. It also does not require a high end computer as animations are performed with CSS3 hardware acceleration.</p><h2 id="included-transitions" tabindex="-1"><a class="header-anchor" href="#included-transitions" aria-hidden="true">#</a> Included transitions</h2><h4 id="_2d-transitions" tabindex="-1"><a class="header-anchor" href="#_2d-transitions" aria-hidden="true">#</a> 2D transitions</h4><ul><li>Fade: fades from one image to next.</li><li>Kenburn: fades, zoom and moves current image to next.</li><li>Swipe: swipes the image to display next like uncovered with a curtain.</li><li>Slide: slides the image horizontally revealing the next.</li><li>Waterfall: divides the image in bars and drops them down in turns.</li><li>Zip: divides the image in bars and slides them up and down alternately like a zip.</li><li>Blinds 2D: divides the image in vertical bars that blinds and fades out.</li><li>Blocks 1: the image is split in blocks that shrink and fade out randomly.</li><li>Blocks 2: the image is split in blocks that shrink and fade out in wave from a corner to the opposite.</li><li>Concentric: a concentric effect is performed by rotating the image converted into circles.</li><li>Warp: a concentric effect is performed by rotating the image converted into circles in alternate direction.</li><li>Camera: from outside to inside the image is being circled in black like a camera.</li></ul><h4 id="_3d-transitions" tabindex="-1"><a class="header-anchor" href="#_3d-transitions" aria-hidden="true">#</a> 3D transitions</h4><ul><li>Cube: turns the image to a side like if place in a cube.</li><li>Book: makes the effect of turning a page to display next image.</li><li>Fall: the image falls in front displaying next image.</li><li>Wave: makes the image 3D and divides it in slices that turn vertically to display the next image.</li><li>Blinds 3D: divides the image in vertical bars that blinds 180 deg to form the next image.</li><li>Round 1: the image is split in blocks that turn 180 deg horizontally to form next image.</li><li>Round 2: panels start to round vertically revealing the next image in upper arrow form leaving trail.</li><li>Explode: the image starts to explode from the center to outside.</li></ul><h2 id="parallax" tabindex="-1"><a class="header-anchor" href="#parallax" aria-hidden="true">#</a> Parallax</h2><p>As simple as this.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>flux-parallax</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>CONTENT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>flux-parallax</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>`,
		20
	),
	v = {
		href: 'https://ragnarlotus.github.io/vue-flux-docs/v6',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	g = {
		href: 'https://github.com/ragnarlotus/vue-flux/issues/new',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	b = a(
		'h2',
		{ id: 'documentation', tabindex: '-1' },
		[
			a(
				'a',
				{
					class: 'header-anchor',
					href: '#documentation',
					'aria-hidden': 'true',
				},
				'#'
			),
			n(' Documentation'),
		],
		-1
	),
	f = {
		href: 'https://ragnarlotus.github.io/vue-flux-docs/v6',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	x = a(
		'h2',
		{ id: 'changelog', tabindex: '-1' },
		[
			a(
				'a',
				{
					class: 'header-anchor',
					href: '#changelog',
					'aria-hidden': 'true',
				},
				'#'
			),
			n(' Changelog'),
		],
		-1
	),
	y = {
		href: 'https://ragnarlotus.github.io/vue-flux-docs/v6/changelog',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	_ = a(
		'h2',
		{ id: 'inspiration', tabindex: '-1' },
		[
			a(
				'a',
				{
					class: 'header-anchor',
					href: '#inspiration',
					'aria-hidden': 'true',
				},
				'#'
			),
			n(' Inspiration'),
		],
		-1
	),
	w = {
		href: 'http://joelambert.co.uk/flux/',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	q = a(
		'h2',
		{ id: 'contributing', tabindex: '-1' },
		[
			a(
				'a',
				{
					class: 'header-anchor',
					href: '#contributing',
					'aria-hidden': 'true',
				},
				'#'
			),
			n(' Contributing'),
		],
		-1
	),
	C = a(
		'p',
		null,
		'Contributions, questions and comments are all welcome and encouraged.',
		-1
	),
	F = a(
		'p',
		null,
		'Do not hesitate to send me your own transitions to add them to the slider.',
		-1
	);
function I(T, z) {
	const t = e('ExternalLinkIcon'),
		o = e('RouterLink');
	return (
		p(),
		c('div', null, [
			d,
			a('p', null, [
				n('This is an image slider developed with '),
				a('a', k, [n('vue'), s(t)]),
				n(' 2 which comes with 20 cool transitions out of the box.'),
			]),
			m,
			a('p', null, [
				n('You can view some '),
				s(
					o,
					{ to: '/documentation/demos/' },
					{ default: u(() => [n('demos here')]), _: 1 }
				),
				n(' (WIP).'),
			]),
			h,
			a('p', null, [
				n(
					'If you find yourself running into issues during installation or running the slider, please check our '
				),
				a('a', v, [n('documentation'), s(t)]),
				n('. If still needs help open an '),
				a('a', g, [n('issue'), s(t)]),
				n('. We would be happy to discuss how they can be solved.'),
			]),
			b,
			a('p', null, [
				n("You can view the full documentation at the project's "),
				a('a', f, [n('documentation'), s(t)]),
				n(' with examples and detailed information.'),
			]),
			x,
			a('p', null, [
				n('Check the '),
				a('a', y, [n('changelog'), s(t)]),
				n(' for update info.'),
			]),
			_,
			a('p', null, [
				n('This slider was inspired by '),
				a('a', w, [n('Flux Slider'), s(t)]),
				n('.'),
			]),
			q,
			C,
			F,
		])
	);
}
const B = l(r, [
	['render', I],
	['__file', 'index.html.vue'],
]);
export { B as default };
