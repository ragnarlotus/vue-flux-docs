<script setup lang="ts">
	import { Ref, computed, ref } from 'vue';
	import { Size, FluxGrid, Img } from 'vue-flux';
	import Prism from 'prismjs';
	import Slider from '@vueform/slider';
	import { Images } from '../../../factories';

	const rsc = Images.generate(1) as Img;

	const size = new Size({
		width: 640,
		height: 360,
	});

	const rows: Ref<number> = ref(2);
	const cols: Ref<number> = ref(4);

	const sourceJs = computed(() => {
		let code = `
import {
	Img,
	Size,
	FluxGrid
} from 'vue-flux';

const rsc = new Img('image-url');

const size = new Size({
	width: ${size.width.value},
	height: ${size.height.value},
});

const rows = ref(${rows.value})
const cols = ref(${cols.value})
`;

		return Prism.highlight(
			code.trim(),
			Prism.languages.javascript,
			'javascript'
		);
	});

	const sourceHtml = computed(() => {
		const code = `
<FluxGrid
	:rsc="rsc"
	:size="size"
	:rows="${rows.value}"
	:cols="${cols.value}"
/>`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.html,
			'html'
		);
	});
</script>

<template>
	<div class="demo demo-flux-grid">
		<FluxGrid :rsc="rsc" :size="size" :rows="rows" :cols="cols" />

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
			<span>Rows:</span>
			<Slider
				v-model="rows"
				:min="1"
				:max="20"
				@slide="(newRows: number) => (rows = newRows)"
			/>
		</label>

		<label>
			<span>Cols:</span>
			<Slider
				v-model="cols"
				:min="1"
				:max="20"
				@slide="(newCols: number) => (cols = newCols)"
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
	.demo-flux-grid .flux-grid {
		border-top: 1px solid white;
		border-left: 1px solid white;

		.flux-image {
			box-sizing: border-box;
			border-right: 1px solid white;
			border-bottom: 1px solid white;
		}
	}
</style>
