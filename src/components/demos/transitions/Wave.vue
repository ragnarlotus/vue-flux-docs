<script setup lang="ts">
	import { computed, shallowReactive } from 'vue';
	import Prism from 'prismjs';
	import Slider from '@vueform/slider';
	import { Wave } from 'vue-flux';
	import Demo from '../../Demo.vue';
	import {
		easings,
		minTileDuration,
		maxTileDelay,
		maxTileDuration,
		minTileDelay,
	} from '../../../shared/constants';

	const options = {
		autohideTime: 0,
	};

	const transitions = shallowReactive([
		{
			component: Wave,
			options: shallowReactive({
				cols: 8,
				tileDuration: 900,
				tileDelay: 100,
				easing: 'cubic-bezier(0.3, -0.3, 0.735, 0.285)',
				sideColor: '#333',
			}),
		},
	]);

	const complements = {
		preloader: true,
		controls: true,
	};

	const sourceJs = computed(() => {
		let code = `
import {
	Wave,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Wave,
		options: shallowReactive({
			cols: ${transitions[0].options.cols},
			tileDuration: ${transitions[0].options.tileDuration},
			tileDelay: ${transitions[0].options.tileDelay},
			easing: '${transitions[0].options.easing}',
			sideColor: '${transitions[0].options.sideColor}',
		}),
	},
]);`;

		return Prism.highlight(
			code.trim(),
			Prism.languages.javascript,
			'javascript'
		);
	});
</script>

<template>
	<div class="demo">
		<Demo
			:options="options"
			:transitions="transitions"
			:numRscs="12"
			:complements="complements"
		/>

		<h3>Options</h3>

		<label>
			<span>Columns:</span>
			<Slider
				v-model="transitions[0].options.cols"
				:min="2"
				:max="20"
				@slide="(newCols: number) => (transitions[0].options.cols = newCols)"
			/>
		</label>

		<label>
			<span>Tile duration:</span>
			<Slider
				v-model="transitions[0].options.tileDuration"
				:min="minTileDuration"
				:max="maxTileDuration"
				@slide="(newTileDuration: number) => (transitions[0].options.tileDuration = newTileDuration)"
			/>
		</label>

		<label>
			<span>Tile delay:</span>
			<Slider
				v-model="transitions[0].options.tileDelay"
				:min="minTileDelay"
				:max="maxTileDelay"
				@slide="(newTileDelay: number) => (transitions[0].options.tileDelay = newTileDelay)"
			/>
		</label>

		<label>
			<span>Easing:</span>
			<input type="text" v-model="transitions[0].options.easing" />
		</label>

		<label>
			<span>Side color:</span>
			<input type="text" v-model="transitions[0].options.sideColor" />
		</label>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs" class="language-javascript" />
		</div>
	</div>
</template>
