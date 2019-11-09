<template>
	<div class="demo">
		<demo
			:options="options"
			:transitions="transitions"
			:complements="complements"
			:numImages="12" />

		<h3>Options</h3>

		<label>
			<span>Rows:</span>
			<vue-slider v-model.number="rows" :min="0" :max="20" tooltip="always" />
		</label>

		<label>
			<span>Columns:</span>
			<vue-slider v-model.number="cols" :min="2" :max="20" tooltip="always" />
		</label>

		<label>
			<span>Rotation X:</span>
			<vue-slider v-model.number="rotateX" :min="-1000" :max="1000" tooltip="always" />
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
	import VueSlider from 'vue-slider-component';
	import 'vue-slider-component/theme/default.css';
	import * as constants from '../../constants';

	export default {
		name: 'demos-transitions-round2',

		components: {
			Demo,
			VueSlider,
		},

		data: () => ({
			constants,
			rows: 0,
			cols: 13,
			rotateX: -540,
			tileDuration: 800,
			tileDelay: 100,
			easing: 'ease-out',
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
					name: 'round2',
					options: {
						rows: this.rows,
						cols: this.cols,
						rotateX: this.rotateX,
						tileDuration: this.tileDuration,
						tileDelay: this.tileDelay,
						easing: this.easing,
					},
				}];
			},

			source() {
				let code = '';
				code += 'const transitions = [{\n';
				code += '   name: \'round2\',\n';
				code += '   options: {\n';
				code += '      rows: ' + this.rows +',\n';
				code += '      cols: ' + this.cols +',\n';
				code += '      rotateX: ' + this.rotateX +',\n';
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
