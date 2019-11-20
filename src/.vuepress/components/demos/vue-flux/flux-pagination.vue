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
			class="flux-pagination-custom"
		>
			<template v-slot:preloader>
				<flux-preloader />
			</template>

			<template v-slot:pagination>
				<flux-pagination v-slot="itemProps">
					<div
						:class="itemProps.item.active? 'current' : ''"
						@click="itemProps.item.onClick(itemProps.item.index)"
						:title="itemProps.item.title"
					>{{ itemProps.item.index + 1 }}</div>
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

		<div class="language-scss extra-class">
			<pre v-html="sourceScss2" class="language-scss" />
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
		name: 'demos-vue-flux-flux-pagination',

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
				autohideTime: 0,
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

				return Prism.highlight(code, Prism.languages.html);
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

				return Prism.highlight(code, Prism.languages.javascript);
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
				code += '         <div"\n';
				code += '            :class="itemProps.active? \'current\' : \'\'"\n';
				code += '            @click="itemProps.onClick(itemProps.item.index)"\n';
				code += '            :title="itemProps.item.title"\n';
				code += '         />{{ itemProps.item.index + 1 }}</div>\n';
				code += '      </flux-pagination>\n';
				code += '   </template>\n\n';
				code += '   <template v-slot:controls>\n';
				code += '      <flux-controls />\n';
				code += '   </template>\n';
				code += '</vue-flux>';

				return Prism.highlight(code, Prism.languages.html);
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

				return Prism.highlight(code, Prism.languages.javascript);
			},

			sourceScss2() {
				let code = '';
				code += '.flux-pagination li {\n';
				code += '   color: white;\n';
				code += '   background-color: rgba(0, 0, 0, 0.8);\n';
				code += '   padding: 0 8px 2px 8px;\n';
				code += '   width: auto;\n';
				code += '   height: auto;\n';
				code += '   border-radius: 6px;\n';
				code += '\n';
				code += '   .current {\n';
				code += '      color: yellow;\n';
				code += '   }\n';
				code += '}\n';

				return Prism.highlight(code, Prism.languages.css);
			}
		},
	};
</script>

<style lang="scss">
	.flux-pagination-custom .flux-pagination li {
		color: white;
		background-color: rgba(0, 0, 0, 0.8);
		padding: 0 8px 2px 8px;
		width: auto;
		height: auto;
		border-radius: 6px;

		.current {
			color: yellow;
		}
	}
</style>