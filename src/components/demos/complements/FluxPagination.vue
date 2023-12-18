<script lang="ts" setup>
	import { computed, shallowReactive } from 'vue';
	import Prism from 'prismjs';
	import {
		VueFlux,
		FluxPreloader,
		FluxPagination,
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

	const options = {
		autohideTime: 0,
	};

	const complements = {
		pagination: true,
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
	FluxPagination,
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

	<template #pagination="paginationProps">
		<FluxPagination v-bind="paginationProps" />
	</template>
</VueFlux>`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.html,
			'html'
		);
	});

	const rscs = Images.generate(3) as Img[];

	const sourceJs2 = computed(() => {
		let code = `
import {
	Img,
	FluxPreloader,
	FluxControls,
	FluxPagination,
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
	class="flux-custom-pagination"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps" />
	</template>

	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps" />
	</template>

	<template #pagination="paginationProps">
		<FluxPagination v-bind="paginationProps">
			<template v-slot="itemProps">
				<div
					:class="itemProps.cssClass"
					:title="itemProps.title"
					@click="paginationProps.player.show(itemProps.index)"
				>
					{{ itemProps.index + 1 }}
				</div>
			</template>
		</FluxPagination>
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
.flux-custom-pagination .flux-pagination li {
	color: white;
	background-color: rgba(0, 0, 0, 0.8);
	padding: 0 8px 2px 8px;
	width: auto;
	height: auto;
	border-radius: 6px;

	.active {
		color: yellow;
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
		<h2>Default pagination</h2>

		<Demo
			:options="options"
			:transitions="transitions"
			:complements="complements"
			:numRscs="3"
		/>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs1" class="language-javascript" />
		</div>

		<div class="language-html" data-ext="html">
			<pre v-html="sourceHtml1" class="language-html" />
		</div>

		<h2>Custom pagination</h2>

		<VueFlux
			:options="options"
			:rscs="rscs"
			:transitions="transitions"
			class="flux-custom-pagination"
		>
			<template #preloader="preloaderProps">
				<FluxPreloader v-bind="preloaderProps" />
			</template>

			<template #controls="controlsProps">
				<FluxControls v-bind="controlsProps" />
			</template>

			<template #pagination="paginationProps">
				<FluxPagination v-bind="paginationProps">
					<template v-slot="itemProps">
						<div
							:class="itemProps.cssClass"
							:title="itemProps.title"
							@click="paginationProps.player.show(itemProps.index)"
						>
							{{ itemProps.index + 1 }}
						</div>
					</template>
				</FluxPagination>
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
	.flux-custom-pagination .flux-pagination li {
		color: white;
		background-color: rgba(0, 0, 0, 0.8);
		padding: 0 8px 2px 8px;
		width: auto;
		height: auto;
		border-radius: 6px;

		.active {
			color: yellow;
		}
	}
</style>
