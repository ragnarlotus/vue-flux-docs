<script setup lang="ts">
	import { Ref, computed, ref } from 'vue';
	import { Size, Position, FluxImage, Img } from 'vue-flux';
	import Prism from 'prismjs';
	import Slider from '@vueform/slider';
	import { Images } from '../../../factories';

	const rsc = Images.generate(1) as Img;

	const size = new Size({
		width: 640,
		height: 360,
	});

	const viewSizeEnabled: Ref<boolean> = ref(false);

	const viewSize = new Size({
		width: 640,
		height: 360,
	});

	const offsetEnabled: Ref<boolean> = ref(false);

	const offset = new Position({
		top: 0,
		left: 0,
	});

	const sourceJs = computed(() => {
		let code = `
import {
	Img,
	Size,
	Position,
	FluxImage
} from 'vue-flux';

const rsc = new Img('image-url');

const size = new Size({
	width: ${size.width.value},
	height: ${size.height.value},
});
`;

		if (viewSizeEnabled.value) {
			code += `
const viewSize = new Size({
	width: ${viewSize.width.value},
	height: ${viewSize.height.value},
});
`;
		}

		if (offsetEnabled.value) {
			code += `
const offset = new Position({
	top: ${offset.top.value},
	left: ${offset.left.value},
});`;
		}

		return Prism.highlight(
			code.trim(),
			Prism.languages.javascript,
			'javascript'
		);
	});

	const sourceHtml = computed(() => {
		const code = `
<FluxImage
	:rsc="rsc"
	:size="size"
	${viewSizeEnabled.value ? ':view-size="viewSize"' : ''}
	${offsetEnabled.value ? ':offset="offset"' : ''}
/>`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.html,
			'html'
		);
	});
</script>

<template>
	<div class="demo">
		<FluxImage
			:rsc="rsc"
			:size="size"
			:view-size="viewSizeEnabled ? viewSize : undefined"
			:offset="offsetEnabled ? offset : undefined"
		/>

		<h3>Playground</h3>

		<label>
			<span>Size width:</span>
			<Slider
				v-model="size.width.value"
				:min="100"
				:max="640"
				@slide="(newWidth: number) => (size.width.value = newWidth)"
			/>
		</label>

		<label>
			<span>Size height:</span>
			<Slider
				v-model="size.height.value"
				:min="56"
				:max="360"
				@slide="(newHeight: number) => (size.height.value = newHeight)"
			/>
		</label>

		<label class="checkbox">
			<input type="checkbox" v-model="viewSizeEnabled" :value="true" /> View
			size enabled
		</label>

		<label>
			<span>View size width:</span>
			<Slider
				v-model="viewSize.width.value"
				:min="100"
				:max="640"
				@slide="(newWidth: number) => (viewSize.width.value = newWidth)"
			/>
		</label>

		<label>
			<span>View size height:</span>
			<Slider
				v-model="viewSize.height.value"
				:min="56"
				:max="360"
				@slide="(newHeight: number) => (viewSize.height.value = newHeight)"
			/>
		</label>

		<label class="checkbox">
			<input type="checkbox" v-model="offsetEnabled" :value="true" /> Offset
			enabled
		</label>

		<label>
			<span>Offset top:</span>
			<Slider
				v-model="offset.top.value"
				:min="-320"
				:max="320"
				@slide="(newTop: number) => (offset.top.value = newTop)"
			/>
		</label>

		<label>
			<span>Offset left:</span>
			<Slider
				v-model="offset.left.value"
				:min="-320"
				:max="320"
				@slide="(newLeft: number) => (offset.left.value = newLeft)"
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
