<script setup lang="ts">
	import { CSSProperties, Ref, computed, ref } from 'vue';
	import { Img, Size, FluxCube, Sides, SidesResources } from 'vue-flux';
	import Prism from 'prismjs';
	import Slider from '@vueform/slider';
	import { Images } from '../../../factories';
	import { origins } from '../../../shared/constants';

	const images = Images.generate(6) as Array<Img>;

	const sideNames = ['front', 'back', 'top', 'bottom', 'left', 'right'];

	const rscs: SidesResources = {};

	for (let i = 0; i < sideNames.length; i++) {
		rscs[sideNames[i] as keyof typeof Sides] = images[i] as Img;
	}

	const size = new Size({
		width: 640,
		height: 360,
	});

	const depth: Ref<number> = ref(180);

	const rotateX: Ref<number> = ref(0);
	const rotateY: Ref<number> = ref(0);

	const perspective: Ref<number> = ref(1600);

	const origin: Ref<undefined | string> = ref(undefined);

	const originValues = Object.values(origins);

	const css = computed(
		() =>
			({
				transform: `rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`,
			} as CSSProperties)
	);

	const sourceJs = computed(() => {
		let code = `
import {
	Img,
	Size,
	FluxCube
} from 'vue-flux';

const rscs = {
   front: new Img('image-url'),
   back: new Img('image-url'),
   top: new Img('image-url'),
   bottom: new Img('image-url'),
   left: new Img('image-url'),
   right: new Img('image-url'),
};

const size = new Size({
	width: ${size.width.value},
	height: ${size.height.value},
});

const depth = ref(${depth.value});

const perspective = ref(${perspective.value});`;

		if (origin.value) {
			code += `

const origin = ref('${origin.value}');`;
		}

		code += `

const css = {
	transform: '${css.value.transform}',
};
`;

		return Prism.highlight(
			code.trim(),
			Prism.languages.javascript,
			'javascript'
		);
	});

	const sourceHtml = computed(() => {
		let code = `
<div style="perspective: ${perspective.value}px;">
	<FluxCube
		:rscs="rscs"
		:size="size"
		:depth="depth"`;

		if (origin.value) {
			code += `
		:origin="origin"`;
		}

		code += `
		:css="css"
	/>
</div>
`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.html,
			'html'
		);
	});
</script>

<template>
	<div class="demo demo-flux-cube" :style="`perspective: ${perspective}px;`">
		<FluxCube
			:rscs="rscs"
			:size="size"
			:depth="depth"
			:origin="origin"
			:css="css"
		/>

		<h3 style="margin-top: 128px">Playground</h3>

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
			<span>Depth:</span>
			<Slider
				v-model="depth"
				:min="100"
				:max="640"
				@slide="(newDepth: number) => (depth = newDepth)"
			/>
		</label>

		<label>
			<span>Rotate X:</span>
			<Slider
				v-model="rotateX"
				:min="0"
				:max="360"
				@slide="(newRotateX: number) => (rotateX = newRotateX)"
			/>
		</label>

		<label>
			<span>Rotate Y:</span>
			<Slider
				v-model="rotateY"
				:min="0"
				:max="360"
				@slide="(newRotateY: number) => (rotateY = newRotateY)"
			/>
		</label>

		<label>
			<span>Perspective:</span>
			<Slider
				v-model="perspective"
				:min="500"
				:max="5000"
				@slide="(newPerspective: number) => (perspective = newPerspective)"
			/>
		</label>

		<label>
			<span>Transform origin:</span>
			<select v-model="origin">
				<option v-for="value in originValues" :key="value">
					{{ value }}
				</option>
			</select>
		</label>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs" class="language-javascript" />
		</div>

		<div class="language-html extra-class" data-ext="html">
			<pre v-html="sourceHtml" class="language-html" />
		</div>
	</div>
</template>
