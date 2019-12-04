<template>
	<div class="demo demo-flux-grid">
		<flux-grid
			:color="color"
			:image="image"
			:size="size"
			:view-size="viewSizeEnabled? viewSize : undefined"
			:offset="offsetEnabled? offset : undefined"
		/>

		<h3>Playground</h3>

		<label>
			<span>Size width:</span>
			<vue-slider v-model.number="size.width" :min="100" :max="640" tooltip="always" />
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
			color: '#333333',
			image: undefined,
		}),

		computed: {
			source() {
				let code = '';

				code += '<flux-grid\n';
				code += `   :color="${this.color}"\n`;
				code += '   :image="url"\n';
				code += `   :size="{ width: ${this.size.width}, height: ${this.size.height} }"\n`;

				if (this.viewSizeEnabled)
					code += `   :view-size="{ width: ${this.viewSize.width}, height: ${this.viewSize.height} }"\n`;

				if (this.offsetEnabled)
					code += `   :offset="{ width: ${this.offset.top}, height: ${this.offset.left} }"\n`;

				code += '/>\n';

				return Prism.highlight(code, Prism.languages.html, 'html');
			},
		},

		created() {
			this.image = '../img/slides/'+ imagesGenerator.generate(1);
		}
	};
</script>
