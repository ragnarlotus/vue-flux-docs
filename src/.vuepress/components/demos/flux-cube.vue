<template>
	<div class="demo demo-flux-cube" :style="`perspective: ${perspective}px; perspective-origin: ${perspectiveOrigins[origin]}`">
		<flux-cube
			:images="images"
			:size="size"
			:depth="depth"
			:css="css"
		/>

		<h3 style="margin-top: 128px;">Playground</h3>

		<label>
			<span>Width:</span>
			<vue-slider v-model.number="size.width" :min="100" :max="640" tooltip="always" />
		</label>

		<label>
			<span>Height:</span>
			<vue-slider v-model.number="size.height" :min="100" :max="640" tooltip="always" />
		</label>

		<label>
			<span>Depth:</span>
			<vue-slider v-model.number="depth" :min="100" :max="640" tooltip="always" />
		</label>

		<label>
			<span>Rotate X:</span>
			<vue-slider v-model.number="rotateX" :min="0" :max="360" tooltip="always" />
		</label>

		<label>
			<span>Rotate Y:</span>
			<vue-slider v-model.number="rotateY" :min="0" :max="360" tooltip="always" />
		</label>

		<label>
			<span>Perspective:</span>
			<vue-slider v-model.number="perspective" :min="500" :max="5000" tooltip="always" />
		</label>

		<label>
			<span>Perspective origin:</span>
			<vue-slider v-model="origin" :data="Object.keys(perspectiveOrigins)" :marks="true" tooltip="always" />
		</label>

		<h3>Source</h3>

		<div class="language-html extra-class">
			<pre v-html="sourceHtml" class="language-html" />
		</div>

		<div class="language-scss extra-class">
			<pre v-html="sourceScss" class="language-scss" />
		</div>
	</div>
</template>

<script>
	const Prism = require('prismjs');
	import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js';
	import { imagesGenerator } from '../generators.js';
	import { FluxCube } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';
	import * as constants from '../constants';

	export default {
		name: 'demos-flux-cube',

		components: {
			VueSlider,
			FluxCube,
		},

		data: () => ({
			image: undefined,
			size: {
				width: 640,
				height: 360,
			},
			depth: 180,
			rotateX: 0,
			rotateY: 0,
			perspective: 1600,
			perspectiveOrigins: constants.perspectiveOrigins,
			origin: 'cc',
		}),

		computed: {
			css() {
				return {
					margin: '0 auto',
					transform: `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`,
					transformOrigin: `50% 50% -${this.depth / 2}px`,
				};
			},

			sourceHtml() {
				let code = '';

				code += '<div class="parent">\n';
				code += '   <flux-cube\n';
				code += '      :images="{\n';
				code += '         front: url,\n';
				code += '         back: url,\n';
				code += '         top: url,\n';
				code += '         bottom: url,\n';
				code += '         left: url,\n';
				code += '         right: url,\n';
				code += '      }"\n';
				code += `      :size="{ width: ${this.size.width}, height: ${this.size.height} }"\n`;
				code += `      :depth="${this.depth}"\n`;
				code += '   />\n';
				code += '</div>\n';

				return Prism.highlight(code, Prism.languages.html, 'html');
			},

			sourceScss() {
				let code = '';

				code += '.parent {\n';
				code += '   perspective: 1600px;\n';
				code += `   perspective-origin: ${this.perspectiveOrigins[this.origin]};\n`;
				code += '\n';
				code += '   .flux-cube {\n';
				code += `      transform: ${this.css.transform};\n`;
				code += `      transformOrigin: ${this.css.transformOrigin};\n`;
				code += '   }\n';
				code += '}\n';

				return Prism.highlight(code, Prism.languages.css);
			}
		},

		created() {
			let images = imagesGenerator.generate(6);
			let path = '../img/slides/';
			let sideNames = ['front', 'back', 'top', 'bottom', 'left', 'right'];
			let sides = {};

			for (let i = 0; i < images.length; i++)
				sides[sideNames[i]] = path + images[i];

			this.images = sides;
		}
	};
</script>
