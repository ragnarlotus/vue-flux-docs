<script setup lang="ts">
	import { computed, shallowReactive } from 'vue';
	import Prism from 'prismjs';
	import Slider from '@vueform/slider';
	import { Cube } from 'vue-flux';
	import Demo from '../../Demo.vue';
	import {
		easings,
		minDuration,
		maxDuration,
	} from '../../../shared/constants';

	const options = {
		autohideTime: 0,
	};

	const transitions = shallowReactive([
		{
			component: Cube,
			options: shallowReactive({
				totalDuration: 1400,
				easing: 'ease-out',
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
	Cube,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Cube,
		options: shallowReactive({
			totalDuration: ${transitions[0].options.totalDuration},
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
			<span>Total duration:</span>
			<Slider
				v-model="transitions[0].options.totalDuration"
				:min="minDuration"
				:max="maxDuration"
				@slide="(newDuration: number) => (transitions[0].options.totalDuration = newDuration)"
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
