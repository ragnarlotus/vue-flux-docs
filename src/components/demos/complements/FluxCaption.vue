<script lang="ts" setup>
	import { computed, shallowReactive } from 'vue';
	import Prism from 'prismjs';
	import {
		Img,
		VueFlux,
		FluxCaption,
		FluxPreloader,
		FluxControls,
		Blinds3D,
		Blocks2,
		Book,
		Cube,
		Warp,
		Wave,
	} from 'vue-flux';
	import Demo from '../../Demo.vue';
	import { Images } from '../../../factories';

	const transitions = shallowReactive([
		Blinds3D,
		Blocks2,
		Book,
		Cube,
		Warp,
		Wave,
	]);

	const complements = {
		captions: true,
		controls: true,
		preloader: true,
	};

	const sourceJs1 = computed(() => {
		let code = `
import {
	Img,
	FluxPreloader,
	FluxCaption,
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

	<template #caption="captionProps">
		<FluxCaption v-bind="captionProps" />
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

	const rscs = Images.generate(3) as Img[];

	function getCaptionLink(caption?: string) {
		return 'https://www.google.com/search?q=' + caption;
	}

	const sourceJs2 = computed(() => {
		let code = `
import {
	Img,
	Size,
	FluxPreloader,
	FluxCaption,
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
]);

function getSearch(caption) {
	return 'https://www.google.com/search?q='+ caption
}`;

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
		<FluxPreloader v-bind="preloaderProps" />
	</template>

	<template #caption="captionProps">
		<FluxCaption v-bind="captionProps" />
	</template>

	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps">
			<h3>
				<a
					:href="getSearch(captionProps.currentResource?.rsc.caption)"
					target="_blank"
				>
					{{ captionProps.currentResource?.rsc.caption }}
				</a>
			</h3>
		</FluxControls>
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
		<h2>Default captions</h2>

		<Demo
			:transitions="transitions"
			:numRscs="3"
			:complements="complements"
		/>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs1" class="language-javascript" />
		</div>

		<div class="language-html" data-ext="html">
			<pre v-html="sourceHtml1" class="language-html" />
		</div>

		<h2>Custom captions</h2>

		<VueFlux :rscs="rscs" :transitions="transitions">
			<template #preloader="preloaderProps">
				<FluxPreloader v-bind="preloaderProps" />
			</template>

			<template #caption="captionProps">
				<FluxCaption v-bind="captionProps">
					<h3>
						<a
							:href="
								getCaptionLink(
									captionProps.currentResource?.rsc.caption
								)
							"
							target="_blank"
						>
							{{ captionProps.currentResource?.rsc.caption }}</a
						>
					</h3>
				</FluxCaption>
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
	</div>
</template>
