<script setup lang="ts">
	import { Ref, computed, nextTick, ref } from 'vue';
	import Slider from '@vueform/slider';
	import Prism from 'prismjs';
	import {
		Size,
		Img,
		FluxTransition,
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
	import DemoButton from '../../DemoButton.vue';
	import { Images } from '../../../factories';

	const $fluxTransition: Ref<null | InstanceType<typeof FluxTransition>> =
		ref(null);

	const enabled = ref(true);

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

	const [rscFrom, rscTo] = Images.generate(2) as Img[];

	const size = new Size({
		width: 640,
		height: 360,
	});

	const transitionNames = Object.keys(transitionsComponents);

	const selectedTransitionName: Ref<keyof typeof transitionsComponents> =
		ref('Blinds2D');

	const selectedTransitionComponent = computed(
		() => transitionsComponents[selectedTransitionName.value]
	);

	function run() {
		$fluxTransition.value?.start();
	}

	async function reset() {
		enabled.value = false;

		await nextTick();

		enabled.value = true;
	}

	const sourceJs = computed(() => {
		let code = `
import {
	Img,
	Size,
	FluxTransition,
	${selectedTransitionName.value},
} from 'vue-flux';

const from = new Img('image-url');
const to = new Img('image-url');

const size = new Size({
	width: ${size.width.value},
	height: ${size.height.value},
});
`;

		return Prism.highlight(
			code.trim(),
			Prism.languages.javascript,
			'javascript'
		);
	});

	const sourceHtml = computed(() => {
		const code = `
<FluxTransition
	:size="size"
	:transition="${selectedTransitionName.value}"
	:from="from"
	:to="to"
/>`;

		return Prism.highlight(
			code.trim().replaceAll('\t\n', ''),
			Prism.languages.html,
			'html'
		);
	});
</script>

<template>
	<div class="demo demo-flux-transition">
		<FluxTransition
			v-if="enabled"
			ref="$fluxTransition"
			:size="size"
			:transition="selectedTransitionComponent"
			:from="rscFrom"
			:to="rscTo"
			@end="reset()"
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
				:min="100"
				:max="640"
				@slide="(newHeight: number) => (size.height.value = newHeight)"
			/>
		</label>

		<label>
			Transition:
			<select
				v-model="selectedTransitionName"
				@change="reset()"
				style="margin-left: 6px"
			>
				<option v-for="name in transitionNames" :key="name">
					{{ name }}
				</option>
			</select>
		</label>

		<DemoButton @click="run()">Run</DemoButton>
		<DemoButton @click="reset()">Reset</DemoButton>

		<h3>Source</h3>

		<div class="language-javascript" data-ext="js">
			<pre v-html="sourceJs" class="language-javascript" />
		</div>

		<div class="language-html" data-ext="html">
			<pre v-html="sourceHtml" class="language-html" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	button {
		padding: 6px 6px;
		border: 1px solid #333;
		border-radius: 5px;
		margin: 0 12px 12px 0;
		cursor: pointer;
	}
</style>
