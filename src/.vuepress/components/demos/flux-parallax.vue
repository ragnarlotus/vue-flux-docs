<template>
	<div class="demo demo-flux-parallax">
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />

		<flux-parallax
			:src="src"
			:type="type"
			:offset="offset +'%'"
			:style="style"
		/>

		<h3>Playground</h3>

		<label>
			<span>Height:</span>
			<vue-slider v-model.number="height" :min="100" :max="600" tooltip="always" />
		</label>

		<label>
			<span>Offset:</span>
			<vue-slider v-model.number="offset" :min="1" :max="999" tooltip="always" />
		</label>

		<label>
			<span>Type:</span>
			<vue-slider v-model="type" :data="types" :marks="true" tooltip="always" />
		</label>

		<h3>Source</h3>

		<div class="language-html extra-class">
			<pre v-html="source" class="language-html" />
		</div>

		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" style="margin-bottom: 24px;" />
		<vc-paragraph mode="fill" />
	</div>
</template>

<script>
	const Prism = require('prismjs');
	import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js';
	import { imagesGenerator } from '../generators.js';
	import { FluxParallax } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';
	import { VcParagraph } from 'vue-cosk/dist-ssr/vue-cosk.umd.min.js';

	export default {
		name: 'demos-flux-parallax',

		components: {
			VueSlider,
			FluxParallax,
			VcParagraph,
		},

		data: () => ({
			src: undefined,
			type: 'relative',
			types: ['relative', 'visible', 'fixed'],
			height: 150,
			offset: 300,
		}),

		computed: {
			style() {
				return {
					height: this.height +'px',
				};
			},

			source() {
				let code = '';

				code += '<flux-parallax\n';
				code += '   src="url"\n';
				code += `   type="${this.type}"\n`;
				code += `   offset="${this.offset}%"\n`;
				code += `   style="height: ${this.height}px;"\n`;
				code += '/>\n';

				return Prism.highlight(code, Prism.languages.html, 'html');
			},
		},

		created() {
			this.src = '../img/slides/'+ imagesGenerator.generate(1);
		}
	};
</script>

