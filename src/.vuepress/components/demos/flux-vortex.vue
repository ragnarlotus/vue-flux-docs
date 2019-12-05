<template>
	<div class="demo demo-flux-vortex">
		<flux-vortex
			:image="image"
			:size="size"
			:circles="circles"
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
			<span>Circles:</span>
			<vue-slider v-model.number="circles" :min="1" :max="20" tooltip="always" />
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
	import { FluxVortex } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

	export default {
		name: 'demos-flux-vortex',

		components: {
			VueSlider,
			FluxVortex,
		},

		data: () => ({
			image: undefined,
			size: {
				width: 640,
				height: 360,
			},
			circles: 10,
		}),

		computed: {
			source() {
				let code = '';

				code += '<flux-vortex\n';
				code += '   image="url"\n';
				code += `   :size="{ width: ${this.size.width}, height: ${this.size.height} }"\n`;
				code += `   :circles="${this.circles}"\n`;
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
	.demo-flux-vortex {
		.flux-image {
			box-sizing: border-box;
			border: 1px solid white;
		}
	}
</style>
