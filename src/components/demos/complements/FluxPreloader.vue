<script lang="ts" setup>
	import { computed, shallowReactive } from 'vue';
	import Prism from 'prismjs';
	import {
		VueFlux,
		FluxPreloader,
		FluxControls,
		Blinds3D,
		Blocks2,
		Book,
		Cube,
		Warp,
		Wave,
		Img,
	} from 'vue-flux';
	import Demo from '../../Demo.vue';
	import { Images } from '../../../factories';

	const options = {};

	const complements = {
		controls: true,
		preloader: true,
	};

	const transitions = shallowReactive([
		Blinds3D,
		Blocks2,
		Book,
		Cube,
		Warp,
		Wave,
	]);

	const sourceJs1 = computed(() => {
		let code = `
import {
	Img,
	FluxPreloader,
	FluxControls,
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

	const sourceHtml1 = computed(() => {
		const code = `
<VueFlux
	:rscs="rscs"
	:transitions="transitions"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps" />
	</template>

	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps" />
	</template>
</VueFlux>`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.html,
			'html'
		);
	});

	const rscs = Images.generate(30) as Img[];

	const sourceJs2 = computed(() => {
		let code = `
import {
	Img,
	FluxPreloader,
	FluxControls,
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

	const sourceHtml2 = computed(() => {
		const code = `
<VueFlux
	:rscs="rscs"
	:transitions="transitions"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps">
			<template #default="loaderProps">
				<div v-if="loaderProps.preloading" class="custom-spinner">
					{{ loaderProps.pct }} %
				</div>
			</template>
		</FluxPreloader>
	</template>

	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps" />
	</template>
</VueFlux>`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.html,
			'html'
		);
	});

	const sourceScss2 = computed(() => {
		const code = `
@keyframes spinner {
	to {
		transform: rotate(360deg);
	}
}

.custom-spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	text-align: center;
	line-height: 50px;
	margin-top: -25px;
	margin-left: -25px;
	width: 50px;
	height: 50px;
	z-index: 14;

	&:before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50px;
		height: 50px;
		margin-top: -25px;
		margin-left: -25px;
		border-radius: 50%;
		border: 1px solid #ccc;
		border-top-color: #07d;
		animation: spinner 0.6s linear infinite;
	}
}`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.css,
			'css'
		);
	});
</script>

<template>
	<div>
		<h2>Default preloader</h2>

		<Demo
			:options="options"
			:transitions="transitions"
			:complements="complements"
			:numRscs="30"
		/>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs1" class="language-javascript" />
		</div>

		<div class="language-html" data-ext="html">
			<pre v-html="sourceHtml1" class="language-html" />
		</div>

		<h2>Custom pagination</h2>

		<VueFlux :options="options" :rscs="rscs" :transitions="transitions">
			<template #preloader="preloaderProps">
				<FluxPreloader v-bind="preloaderProps">
					<template #default="loaderProps">
						<div v-if="loaderProps.preloading" class="custom-spinner">
							{{ loaderProps.pct }} %
						</div>
					</template>
				</FluxPreloader>
			</template>

			<template #controls="controlsProps">
				<FluxControls v-bind="controlsProps" />
			</template>
		</VueFlux>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs2" class="language-javascript" />
		</div>

		<div class="language-html" data-ext="html">
			<pre v-html="sourceHtml2" class="language-html" />
		</div>

		<div class="language-scss" data-ext="scss">
			<pre v-html="sourceScss2" class="language-scss" />
		</div>
	</div>
</template>

<style lang="scss">
	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}

	.custom-spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		text-align: center;
		line-height: 50px;
		margin-top: -25px;
		margin-left: -25px;
		width: 50px;
		height: 50px;
		z-index: 14;

		&:before {
			content: '';
			box-sizing: border-box;
			position: absolute;
			top: 50%;
			left: 50%;
			width: 50px;
			height: 50px;
			margin-top: -25px;
			margin-left: -25px;
			border-radius: 50%;
			border: 1px solid #ccc;
			border-top-color: #07d;
			animation: spinner 0.6s linear infinite;
		}
	}
</style>
