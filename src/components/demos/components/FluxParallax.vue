<script setup lang="ts">
	import { computed, Ref, ref } from 'vue';
	import Prism from 'prismjs';
	import Slider from '@vueform/slider';
	import { FluxParallax, Img } from 'vue-flux';
	import Lines from '../../Lines.vue';
	import { Images } from '../../../factories';

	enum types {
		relative = 'relative',
		visible = 'visible',
		fixed = 'fixed',
	}

	const typeNames = Object.values(types);

	const rsc = Images.generate(1) as Img;

	const height: Ref<number> = ref(250);
	const offset: Ref<number> = ref(4);

	const selectedType: Ref<keyof typeof types> = ref(types.relative);

	const offsetFormat = (value: any) => Math.round(value).toString() + '%';

	const sourceJs = computed(() => {
		let code = `
import {
	Img,
	FluxParallax
} from 'vue-flux';

const rsc = new Img('image-url');
const height = ref('${height.value}px');
const offset = ref('${offset.value}%');`;

		return Prism.highlight(
			code.trim(),
			Prism.languages.javascript,
			'javascript'
		);
	});

	const sourceHtml = computed(() => {
		const code = `
<FluxParallax
	:rsc="rsc"
	type="${selectedType.value}"
	offset="${offset.value}%"
	style="height: ${height.value}px"
/>`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.html,
			'html'
		);
	});
</script>

<template>
	<div class="demo demo-flux-parallax">
		<Lines v-for="i in 3" :key="i" />

		<FluxParallax
			:rsc="rsc"
			:type="selectedType"
			:offset="offset + '%'"
			:style="`height: ${height}px`"
		/>

		<h3>Playground</h3>

		<label>
			<span>Type</span>
			<select v-model="selectedType">
				<option v-for="name in typeNames" :key="name">{{ name }}</option>
			</select>
		</label>

		<label>
			<span>Height:</span>
			<Slider
				v-model="height"
				:min="20"
				:max="640"
				@slide="(newHeight: number) => (height= newHeight)"
			/>
		</label>

		<label>
			<span>Offset:</span>
			<Slider
				v-model="offset"
				:min="1"
				:max="100"
				:format="offsetFormat"
				@slide="(newOffset: number) => (offset = newOffset)"
			/>
		</label>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs" class="language-javascript" />
		</div>

		<div class="language-html" data-ext="html">
			<pre v-html="sourceHtml" class="language-html" />
		</div>

		<Lines v-for="i in 3" :key="i" />
	</div>
</template>
