<template>
	<div class="demo demo-flux-image">
		<flux-image
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

		<label>
			<span>Size height:</span>
			<vue-slider v-model.number="size.height" :min="56" :max="360" tooltip="always" />
		</label>

		<label class="checkbox">
			<input type="checkbox" v-model="viewSizeEnabled" :value="true" /> View size enabled
		</label>

		<label>
			<span>View size width:</span>
			<vue-slider v-model.number="viewSize.width" :min="100" :max="640" tooltip="always" />
		</label>

		<label>
			<span>View size height:</span>
			<vue-slider v-model.number="viewSize.height" :min="56" :max="360" tooltip="always" />
		</label>

		<label class="checkbox">
			<input type="checkbox" v-model="offsetEnabled" :value="true" /> Offset enabled
		</label>

		<label>
			<span>Offset top:</span>
			<vue-slider v-model.number="offset.top" :min="-320" :max="320" tooltip="always" />
		</label>

		<label>
			<span>Offset left:</span>
			<vue-slider v-model.number="offset.left" :min="-320" :max="320" tooltip="always" />
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
	import { FluxImage } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

	export default {
		name: 'demos-flux-image',

		components: {
			VueSlider,
			FluxImage,
		},

		data: () => ({
			color: '#333333',
			image: undefined,
			size: {
				width: '640',
				height: '360',
			},
			viewSizeEnabled: false,
			viewSize: {
				width: '640',
				height: '360',
			},
			offsetEnabled: false,
			offset: {
				top: 0,
				left: 0,
			},
		}),

		computed: {
			source() {
				let code = '';

				code += '<flux-image\n';
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
