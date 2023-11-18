<script setup lang="ts">
	import { Component, Ref, computed, nextTick, reactive, ref } from 'vue';
	import { withBase } from '@vuepress/client';
	import Prism from 'prismjs';
	import {
		Fade,
		Kenburn,
		Swipe,
		Slide,
		Waterfall,
		Zip,
		Blinds2D,
		Blocks1,
		Blocks2,
		Concentric,
		Warp,
		Camera,
		Cube,
		Book,
		Fall,
		Wave,
		Blinds3D,
		Round1,
		Round2,
		Explode,
	} from 'vue-flux';
	import Demo from '../../Demo.vue';

	const initialTransitions = [
		'Blinds3D',
		'Blocks2',
		'Book',
		'Cube',
		'Round2',
		'Swipe',
		'Warp',
		'Wave',
	];

	const enabled: Ref<boolean> = ref(true);

	const options = reactive({
		allowFullscreen: false,
		allowToSkipTransition: true,
		autohideTime: 2500,
		autoplay: false,
		bindKeys: false,
		delay: 5000,
		enableGestures: false,
		infinite: true,
		lazyLoad: true,
		lazyLoadAfter: 3,
	});

	const transitionsComponents = {
		Fade,
		Kenburn,
		Swipe,
		Slide,
		Waterfall,
		Zip,
		Blinds2D,
		Blocks1,
		Blocks2,
		Concentric,
		Warp,
		Camera,
		Cube,
		Book,
		Fall,
		Wave,
		Blinds3D,
		Round1,
		Round2,
		Explode,
	};

	const transitionNames = Object.keys(transitionsComponents);

	const selectedTransitionNames: Record<string, boolean> = reactive({});

	transitionNames.forEach((name) => (selectedTransitionNames[name] = false));

	initialTransitions.forEach((name) => (selectedTransitionNames[name] = true));

	const selectedTransitionComponents = computed<Component[]>(() => {
		const components: Component[] = [];

		transitionNames.forEach((name) => {
			if (selectedTransitionNames[name]) {
				components.push(
					transitionsComponents[name as keyof typeof transitionsComponents]
				);
			}
		});

		return components;
	});

	const complements = {
		preloader: true,
		controls: true,
		pagination: true,
	};

	// prettier-ignore
	const sourceJs = computed(() => {
			const code = `
import {
	VueFlux,
	FluxPreloader,
	FluxControls,
	FluxPagination,
	Img,
	${
		Object.entries(selectedTransitionNames)
			.filter(transition => transition[1])
			.map(transition => transition[0])
			.join(',\n	')
	},
} from 'vue-flux';

const options = reactive({
	allowFullscreen: ${options.allowFullscreen.toString()},
	allowToSkipTransition: ${options.allowToSkipTransition.toString()},
	autohideTime: ${options.autohideTime},
	autoplay: ${options.autoplay.toString()},
	bindKeys: ${options.bindKeys.toString()},
	delay: ${options.delay},
	enableGestures: ${options.enableGestures.toString()},
	infinite: ${options.infinite.toString()},
	lazyLoad: ${options.lazyLoad.toString()},
	lazyLoadAfter: ${options.lazyLoadAfter},
});

const rscs = shallowReactive([
	new Img('img-url-1'),
	new Img('img-url-2'),
	new Img('img-url-3'),
]);

const transitions = shallowReactive([
   ${
		Object.entries(selectedTransitionNames)
			.filter(transition => transition[1])
			.map(transition => transition[0])
			.join(',\n   ')
		},
]);`;
		return Prism.highlight(code.trim(), Prism.languages.javascript, 'javascript');
	});

	const sourceHtml = computed(() => {
		const code = `
<VueFlux
   :options="options"
   :rscs="rscs"
   :transitions="transitions"
>
   <template #preloader="preloaderProps">
      <FluxPreloader v-bind="preloaderProps" />
   </template>

   <template #controls="controlsProps">
      <FluxControls v-bind="controlsProps" />
   </template>

   <template #pagination="paginationProps">
      <FluxPagination v-bind="paginationProps" />
   </template>
</VueFlux>`;

		return Prism.highlight(code.trim(), Prism.languages.html, 'html');
	});

	const reset = async () => {
		enabled.value = false;

		await nextTick();

		enabled.value = true;
	};
</script>

<template>
	<div>
		<demo
			v-if="enabled"
			:options="options"
			:transitions="selectedTransitionComponents"
			:complements="complements"
			:numRscs="12"
		/>

		<h3>Playground</h3>

		<div class="playground">
			<h4>
				<a
					:href="
						withBase(
							'/documentation/v7/components/vue-flux.html#transitions'
						)
					"
					>Transitions</a
				>
			</h4>

			<div class="transitions">
				<label v-for="name in transitionNames" :key="name">
					<input
						type="checkbox"
						:value="name"
						v-model="selectedTransitionNames[name]"
					/>
					{{ name }}
				</label>
			</div>

			<h4>
				<a
					:href="
						withBase('/documentation/v7/components/vue-flux.html#options')
					"
					>Options</a
				>
			</h4>

			<div class="options">
				<label>
					<input
						type="checkbox"
						:value="true"
						v-model="options.allowFullscreen"
					/>
					Allow full screen
				</label>

				<label>
					<input
						type="checkbox"
						:value="true"
						v-model="options.allowToSkipTransition"
					/>
					Allow to skip transition
				</label>

				<label>
					Auto hide time:
					<input
						type="text"
						v-model.number="options.autohideTime"
						maxlength="5"
					/>
					ms
				</label>

				<label>
					<input
						type="checkbox"
						:value="true"
						v-model="options.autoplay"
					/>
					Auto play
				</label>

				<label>
					<input
						type="checkbox"
						:value="true"
						v-model="options.bindKeys"
					/>
					Bind keyboard keys
				</label>

				<label>
					Delay:
					<input
						type="text"
						v-model.number="options.delay"
						maxlength="5"
					/>
					ms
				</label>

				<label>
					<input
						type="checkbox"
						:value="true"
						v-model="options.enableGestures"
					/>
					Enable gestures
				</label>

				<label>
					<input
						type="checkbox"
						:value="true"
						v-model="options.infinite"
					/>
					Infinite
				</label>

				<label>
					<input
						type="checkbox"
						:value="true"
						v-model="options.lazyLoad"
					/>
					Lazy load
				</label>

				<label>
					Lazy load after:
					<input
						type="text"
						v-model.number="options.lazyLoadAfter"
						maxlength="2"
					/>
					images
				</label>
			</div>

			<button type="button" @click="reset">
				Reset slider to pretend just mounted (to test some options)
			</button>
		</div>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs" class="language-javascript" />
		</div>

		<div class="language-html" data-ext="html">
			<pre v-html="sourceHtml" class="language-html" />
		</div>
	</div>
</template>

<style lang="scss">
	h4 {
		margin-bottom: 4px;
	}

	.transitions {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;

		label {
			margin-bottom: 6px;
			min-width: 150px;
			cursor: pointer;
		}
	}

	.options {
		margin-top: 16px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;

		label {
			margin-bottom: 8px;
			min-width: 275px;
			cursor: pointer;
		}

		input[type='text'] {
			width: 40px;
		}
	}
</style>
