<template>
	<div>
		<h2>Default pagination</h2>

		<demo
			:options="options"
			:transitions="transitions"
			:captions="captions"
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

		<h2>Custom pagination</h2>

		<vue-flux
			:options="options"
			:images="images"
			:transitions="transitions"
			:captions="captions"
		>
			<template v-slot:preloader>
				<flux-preloader />
			</template>

			<template v-slot:pagination>
				<flux-pagination v-slot="itemProps">
					<i class="fas"
						:class="itemProps.active? 'fa-check-square' : 'fa-square'"
						@click="itemProps.onClick(itemProps.index)"
					/>
				</flux-pagination>
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
		FluxPagination,
		FluxControls,
	} from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

	import Demo from '../../Demo.vue';

	export default {
		name: 'demos-vue-flux-flux-caption',

		components: {
			Demo,
			VueFlux,
			FluxPreloader,
			FluxPagination,
			FluxControls,
		},

		data: () => ({
			numImages: 3,
			options: {
				autoplay: true,
				path: '../../img/slides/',
			},
			transitions: [
				'blinds3d', 'blocks2',
				'book', 'cube',
				'warp', 'wave',
			],
			complements: {
				pagination: true,
				controls: true,
				preloader: true,
			},
		}),

		computed: {
			images() {
				return imagesGenerator.generate(this.numImages);
			},

			captions() {
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
				code += '   <template v-slot:pagination>\n';
				code += '      <flux-pagination />\n';
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
				code += '      \''+ this.captions.join('\',\n      \'') +'\',\n';
				code += '   ],\n';
				code += '}),\n';
				code += '...\n';

				return Prism.highlight(code, Prism.languages.javascript, 'javascript');
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
				code += '   <template v-slot:pagination>\n';
				code += '      <flux-pagination v-slot="itemProps">\n';
				code += '         <i class="fas"\n';
				code += '            :class="itemProps.active? \'fa-check-square\' : \'fa-square\'"\n';
				code += '            @click="itemProps.onClick(itemProps.index)"\n';
				code += '         />\n';
				code += '      </flux-pagination>\n';
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
				code += '      \''+ this.captions.join('\',\n      \'') +'\',\n';
				code += '   ],\n';
				code += '}),\n';
				code += '...\n';

				return Prism.highlight(code, Prism.languages.javascript, 'javascript');
			},
		},
	};
</script>
