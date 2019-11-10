<template>
	<div class="demo">
		<demo
			:options="options"
			:transitions="transitions"
			:complements="complements"
			:numImages="12" />

		<h3>Options</h3>

		<label>
			<span>Total duration:</span>
			<vue-slider v-model.number="totalDuration" :min="constants.minDuration" :max="constants.maxDuration" tooltip="always" />
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
		name: 'demos-transitions-swipe',

		components: {
			Demo,
			VueSlider,
		},

		data: () => ({
			constants,
			totalDuration: 1400,
			easing: 'ease-in-out',
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
					name: 'swipe',
					options: {
						totalDuration: this.totalDuration,
						easing: this.easing,
					},
				}];
			},

			source() {
				let code = '';
				code += 'const transitions = [{\n';
				code += '   name: \'swipe\',\n';
				code += '   options: {\n';
				code += '      totalDuration: '+ this.totalDuration +',\n';
				code += '      easing: \''+ this.easing +'\',\n';
				code += '   }\n';
				code += '}]';

				return Prism.highlight(code, Prism.languages.javascript, 'javascript');
			},
		},
	};
</script>
