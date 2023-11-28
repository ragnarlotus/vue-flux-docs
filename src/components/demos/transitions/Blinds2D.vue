<script setup lang="ts">
	import { computed, shallowReactive } from 'vue';
	import Prism from 'prismjs';
	import Slider from '@vueform/slider';
	import { Blinds2D } from 'vue-flux';
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
			component: Blinds2D,
			options: shallowReactive({
				cols: 10,
				tileDuration: 800,
				tileDelay: 100,
				easing: 'linear',
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
	Blinds2D,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Blinds2D,
		options: shallowReactive({
			cols: ${transitions[0].options.cols},
			tileDuration: ${transitions[0].options.tileDuration},
			tileDelay: ${transitions[0].options.tileDelay},
			easing: '${transitions[0].options.easing}',
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
				:min="4"
				:max="30"
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
			<select v-model="transitions[0].options.easing">
				<option v-for="easing in easings" :key="easing">
					{{ easing }}
				</option>
			</select>
		</label>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs" class="language-javascript" />
		</div>
	</div>
</template>
