<script setup lang="ts">
	import { computed, shallowReactive } from 'vue';
	import Prism from 'prismjs';
	import Slider from '@vueform/slider';
	import { Camera } from 'vue-flux';
	import Demo from '../../Demo.vue';
	import { minDuration, maxDuration } from '../../../shared/constants';

	const options = {
		autohideTime: 0,
	};

	const transitions = shallowReactive([
		{
			component: Camera,
			options: shallowReactive({
				totalDuration: 1200,
				easing: 'cubic-bezier(0.385, 0, 0.795, 0.560)',
				backgroundColor: '#111',
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
	Camera,
} from 'vue-flux';

const transitions = shallowReactive([
	{
		component: Camera,
		options: shallowReactive({
			totalDuration: ${transitions[0].options.totalDuration},
			easing: '${transitions[0].options.easing}',
			backgroundColor: '${transitions[0].options.backgroundColor}',
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
			<span>total duration:</span>
			<Slider
				v-model="transitions[0].options.totalDuration"
				:min="minDuration"
				:max="maxDuration"
				@slide="(newDuration: number) => (transitions[0].options.totalDuration = newDuration)"
			/>
		</label>

		<label>
			<span>Easing:</span>
			<input type="text" v-model="transitions[0].options.easing" />
		</label>

		<label>
			<span>Background color:</span>
			<input type="text" v-model="transitions[0].options.backgroundColor" />
		</label>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs" class="language-javascript" />
		</div>
	</div>
</template>
