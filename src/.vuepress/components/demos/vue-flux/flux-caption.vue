<template>
	<div>
		<h2>Default captions</h2>

		<demo
			:options="options"
			:transitions="transitions"
			:captions="captions1"
			:complements="complements"
			:images="images"
			ref="demo" />

		<h3>Source</h3>

		<div class="language-html extra-class">
			<pre v-html="sourceHtml1" class="language-html" />
		</div>

		<div class="language-js extra-class">
			<pre v-html="sourceJs1" class="language-js" />
		</div>

		<h2>Custom captions</h2>

		<vue-flux
			:options="options"
			:images="images"
			:transitions="transitions"
			:captions="captions2"
		>
			<template v-slot:preloader>
				<flux-preloader />
			</template>

			<template v-slot:caption>
				<flux-caption v-slot="captionProps">
					<a :href="captionProps.caption.url" target="_blank" class="flux-caption">
						<h3>{{ captionProps.text }}</h3>
					</a>
				</flux-caption>
			</template>

			<template v-slot:controls>
				<flux-controls />
			</template>
		</vue-flux>

		<h3>Source</h3>

		<div class="language-html extra-class">
			<pre v-html="sourceHtml2" class="language-html" />
		</div>

		<div class="language-js extra-class">
			<pre v-html="sourceJs2" class="language-js" />
		</div>
	</div>
</template>

<script>
	const Prism = require('prismjs');

	import {
		imagesGenerator,
		captionsGenerator,
	} from '../../generators.js';

	import {
		VueFlux,
		FluxPreloader,
		FluxCaption,
		FluxControls,
	} from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

	import Demo from '../../Demo.vue';

	export default {
		name: 'demos-vue-flux-flux-caption',

		components: {
			Demo,
			VueFlux,
			FluxPreloader,
			FluxCaption,
			FluxControls,
		},

		data: () => ({
			numImages: 3,
			options: {
				path: '../../img/slides/',
			},
			transitions: [
				'blinds3d', 'blocks2',
				'book', 'cube',
				'warp', 'wave',
			],
			complements: {
				caption: true,
				controls: true,
				preloader: true,
			},
		}),

		computed: {
			images() {
				return imagesGenerator.generate(this.numImages);
			},

			captions1() {
				return captionsGenerator.generate(this.numImages);
			},

			sourceHtml1() {
				let code = '';
				code += '<vue-flux\n';
				code += '   :images="images"\n';
				code += '   :transitions="transitions"\n';
				code += '   :captions="captions"\n';
				code += '>\n';
				code += '   <template v-slot:preloader>\n';
				code += '      <flux-preloader />\n';
				code += '   </template>\n\n';
				code += '   <template v-slot:caption>\n';
				code += '      <flux-caption />\n';
				code += '   </template>\n\n';
				code += '   <template v-slot:controls>\n';
				code += '      <flux-controls />\n';
				code += '   </template>\n';
				code += '</vue-flux>';

				return Prism.highlight(code, Prism.languages.html, 'html');
			},

			sourceJs1() {
				let code = '';
				code += '...\n';
				code += 'data: () => ({\n';
				code += '   images: [ \'image-url-1\', \'image-url-2\', \'image-url-3\' ],\n';
				code += '   transitions: [\n';
				code += '      \''+ this.transitions.join('\',\n      \'') +'\',\n';
				code += '   ],\n';
				code += '   captions: [\n';
				code += '      \''+ this.captions1.join('\',\n      \'') +'\',\n';
				code += '   ],\n';
				code += '}),\n';
				code += '...\n';

				return Prism.highlight(code, Prism.languages.javascript, 'javascript');
			},

			captions2() {
				return this.captions1.map(text => {
					return {
						url: 'https://www.google.com/search?q='+ text,
						text,
					};
				});
			},

			sourceHtml2() {
				let code = '';
				code += '<vue-flux\n';
				code += '   :images="images"\n';
				code += '   :transitions="transitions"\n';
				code += '   :captions="captions"\n';
				code += '>\n';
				code += '   <template v-slot:preloader>\n';
				code += '      <flux-preloader />\n';
				code += '   </template>\n\n';
				code += '   <template v-slot:caption>\n';
				code += '      <flux-caption v-slot="captionProps">\n';
				code += '         <a :href="captionProps.caption.url" target="_blank" class="flux-caption">\n';
				code += '            <h3>{{ captionProps.text }}</h3>\n';
				code += '         </a>\n';
				code += '      </flux-caption>\n';
				code += '   </template>\n\n';
				code += '   <template v-slot:controls>\n';
				code += '      <flux-controls />\n';
				code += '   </template>\n';
				code += '</vue-flux>';

				return Prism.highlight(code, Prism.languages.html, 'html');
			},

			sourceJs2() {
				let code = '';
				code += '...\n';
				code += 'data: () => ({\n';
				code += '   images: [ \'image-url-1\', \'image-url-2\', \'image-url-3\' ],\n';
				code += '   transitions: [\n';
				code += '      \''+ this.transitions.join('\',\n      \'') +'\',\n';
				code += '   ],\n';
				code += '   captions: [\n';

				this.captions2.forEach(caption => {
					code += '      {\n';
					code += '         url: \''+ caption.url +'\',\n';
					code += '         text: \''+ caption.text +'\',\n';
					code += '      },\n';
				});

				code += '   ],\n';
				code += '}),\n';
				code += '...\n';

				return Prism.highlight(code, Prism.languages.javascript, 'javascript');
			},
		},
	};
</script>
