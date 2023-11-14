<script setup lang="ts">
	import { Ref, computed, ref } from 'vue';
	import { Size, FluxVortex, Img } from 'vue-flux';
	import Prism from 'prismjs';
	import Slider from '@vueform/slider';
	import { Images } from '../../../factories';

	const rsc = Images.generate(1) as Img;

	const size = new Size({
		width: 640,
		height: 360,
	});

	const circles: Ref<number> = ref(10);

	const sourceJs = computed(() => {
		let code = `
import {
	Img,
	Size,
	FluxVortex
} from 'vue-flux';

const rsc = new Img('image-url');

const size = new Size({
	width: ${size.width.value},
	height: ${size.height.value},
});

const circles = ref(${circles.value});`;

		return Prism.highlight(
			code.trim(),
			Prism.languages.javascript,
			'javascript'
		);
	});

	const sourceHtml = computed(() => {
		const code = `
<FluxVortex
	:rsc="rsc"
	:size="size"
	:circles="${circles.value}"
/>`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.html,
			'html'
		);
	});
</script>

<template>
	<div class="demo demo-flux-vortex">
		<FluxVortex :rsc="rsc" :size="size" :circles="circles" />

		<h3>Playground</h3>

		<label>
			<span>Width:</span>
			<Slider
				v-model="size.width.value"
				:min="100"
				:max="640"
				@slide="(newWidth: number) => (size.width.value = newWidth)"
			/>
		</label>

		<label>
			<span>Height:</span>
			<Slider
				v-model="size.height.value"
				:min="100"
				:max="640"
				@slide="(newHeight: number) => (size.height.value = newHeight)"
			/>
		</label>

		<label>
			<span>Circles:</span>
			<Slider
				v-model="circles"
				:min="1"
				:max="20"
				@slide="(newCircles: number) => (circles = newCircles)"
			/>
		</label>

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
	.demo-flux-vortex {
		.flux-image {
			box-sizing: border-box;
			border: 1px solid white;
		}
	}
</style>
