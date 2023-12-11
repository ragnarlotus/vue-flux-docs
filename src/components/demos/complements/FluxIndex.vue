<script lang="ts" setup>
	import { computed, shallowReactive } from 'vue';
	import Prism from 'prismjs';
	import { Blinds3D, Blocks2, Book, Cube, Warp, Wave } from 'vue-flux';
	import Demo from '../../Demo.vue';

	const options = {
		autohideTime: 0,
	};

	const transitions = shallowReactive([
		Blinds3D,
		Blocks2,
		Book,
		Cube,
		Warp,
		Wave,
	]);

	const complements = {
		index: true,
		preloader: true,
	};

	const sourceJs = computed(() => {
		let code = `
import {
	Img,
	FluxPreloader,
	FluxIndex,
	VueFlux,
	Blinds3D,
	Blocks2,
	Book,
	Cube,
	Warp,
	Wave,
} from 'vue-flux';

const rscs = shallowReactive([
	new Img('image-url1', 'image caption 1'),
	new Img('image-url2', 'image caption 2'),
	new Img('image-url3', 'image caption 3'),
]);

const transitions = shallowReactive([
	Blinds3D,
	Blocks2,
	Book,
	Cube,
	Warp,
	Wave,
]);`;

		return Prism.highlight(
			code.trim(),
			Prism.languages.javascript,
			'javascript'
		);
	});

	const sourceHtml = computed(() => {
		const code = `
<VueFlux
	:rscs="rscs"
	:transitions="transitions"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps" />
	</template>

	<template #index="indexProps">
		<FluxIndex v-bind="indexProps" />
	</template>
</VueFlux>`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.html,
			'html'
		);
	});
</script>

<template>
	<div>
		<Demo
			:transitions="transitions"
			:numRscs="30"
			:complements="complements"
			:options="options"
		/>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs" class="language-javascript" />
		</div>

		<div class="language-html" data-ext="html">
			<pre v-html="sourceHtml" class="language-html" />
		</div>
	</div>
</template>
