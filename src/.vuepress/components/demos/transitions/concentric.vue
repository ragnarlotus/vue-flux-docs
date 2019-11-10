<template>
	<div class="demo">
		<demo
			:options="options"
			:transitions="transitions"
			:complements="complements"
			:numImages="12" />

		<h3>Options</h3>

		<label>
			<span>Circles:</span>
			<vue-slider v-model.number="circles" :min="4" :max="20" tooltip="always" />
		</label>

		<label>
			<span>Tile duration:</span>
			<vue-slider v-model.number="tileDuration" :min="constants.minTileDuration" :max="constants.maxTileDuration" tooltip="always" />
		</label>

		<label>
			<span>Tile delay:</span>
			<vue-slider v-model.number="tileDelay" :min="constants.minTileDelay" :max="constants.maxTileDelay" tooltip="always" />
		</label>

		<label>
			<span>Easing:</span>
			<vue-slider v-model.number="easing" :data="constants.easings" :marks="true" tooltip="always" />
		</label>

		<h3>Source</h3>
		<div class="language-js extra-class">
			<pre v-html="source" class="language-js" />
		</div>
	</div>
</template>

<script>
	const Prism = require('prismjs');
	import Demo from '../../Demo.vue';
	import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js';
	import * as constants from '../../constants';

	export default {
		name: 'demos-transitions-concentric',

		components: {
			Demo,
			VueSlider,
		},

		data: () => ({
			constants,
			circles: 7,
			tileDuration: 800,
			tileDelay: 150,
			easing: 'linear',
			options: {
				autohideTime: 0,
				path: '../../img/slides/',
			},
			complements: {
				preloader: true,
				controls: true,
			},
		}),

		computed: {
			transitions() {
				return [{
					name: 'concentric',
					options: {
						circles: this.circles,
						tileDuration: this.tileDuration,
						tileDelay: this.tileDelay,
						easing: this.easing,
					},
				}];
			},

			source() {
				let code = '';
				code += 'const transitions = [{\n';
				code += '   name: \'concentric\',\n';
				code += '   options: {\n';
				code += '      circles: '+ this.circles +',\n';
				code += '      tileDuration: '+ this.tileDuration +',\n';
				code += '      tileDelay: '+ this.tileDelay +',\n';
				code += '      easing: \''+ this.easing +'\',\n';
				code += '   }\n';
				code += '}]';

				return Prism.highlight(code, Prism.languages.javascript, 'javascript');
			},
		},
	};
</script>
