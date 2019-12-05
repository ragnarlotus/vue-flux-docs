<template>
	<div class="demo demo-flux-grid">
		<flux-grid
			:image="image"
			:size="size"
			:rows="rows"
			:cols="cols"
		/>

		<h3>Playground</h3>

		<label>
			<span>Width:</span>
			<vue-slider v-model.number="size.width" :min="100" :max="640" tooltip="always" />
		</label>

		<label>
			<span>Height:</span>
			<vue-slider v-model.number="size.height" :min="100" :max="640" tooltip="always" />
		</label>

		<label>
			<span>Rows:</span>
			<vue-slider v-model.number="rows" :min="1" :max="20" tooltip="always" />
		</label>

		<label>
			<span>Cols:</span>
			<vue-slider v-model.number="cols" :min="1" :max="20" tooltip="always" />
		</label>

		<h3>Source</h3>
		<div class="language-html extra-class">
			<pre v-html="source" class="language-html" />
		</div>
	</div>
</template>

<script>
	const Prism = require('prismjs');
	import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js';
	import { imagesGenerator } from '../generators.js';
	import { FluxGrid } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

	export default {
		name: 'demos-flux-grid',

		components: {
			VueSlider,
			FluxGrid,
		},

		data: () => ({
			image: undefined,
			size: {
				width: 640,
				height: 360,
			},
			rows: 10,
			cols: 10,
		}),

		computed: {
			source() {
				let code = '';

				code += '<flux-grid\n';
				code += '   image="url"\n';
				code += `   :size="{ width: ${this.size.width}, height: ${this.size.height} }"\n`;
				code += `   :rows="${this.rows}"\n`;
				code += `   :cols="${this.cols}"\n`;
				code += '/>\n';

				return Prism.highlight(code, Prism.languages.html, 'html');
			},
		},

		created() {
			this.image = '../img/slides/'+ imagesGenerator.generate(1);
		}
	};
</script>

<style lang="scss">
	.demo-flux-grid {
		.flux-image {
			box-sizing: border-box;
			border-right: 1px solid white;
			border-bottom: 1px solid white;
		}
	}
</style>
