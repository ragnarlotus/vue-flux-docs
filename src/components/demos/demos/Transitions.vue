<script setup lang="ts">
	import { ref, Ref } from 'vue';
	import Demo from '../../Demo.vue';
	import {
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
		Directions,
	} from 'vue-flux';

	const $demo: Ref<null | InstanceType<typeof Demo>> = ref(null);

	const options = {
		autoplay: true,
		delay: 3000,
	};

	const transitions = {
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

	const transitionNames = Object.keys(transitions);
	const transitionComponents = Object.values(transitions);

	const complements = {
		preloader: true,
		controls: true,
	};

	const currentTransition: Ref<null | string> = ref(null);

	function runTransition(index: number | Directions | undefined) {
		$demo.value?.$vf?.show(Directions.next, index);
	}

	function updateCurrentTransition(transitionName: null | string = null) {
		currentTransition.value = transitionName;
	}
</script>

<template>
	<div>
		<Demo
			:options="options"
			:transitions="transitionComponents"
			:complements="complements"
			:numRscs="12"
			@transition-start="updateCurrentTransition"
			@transition-cancel="updateCurrentTransition"
			@transition-end="updateCurrentTransition"
			ref="$demo"
		/>

		<p>
			Transitions:
			<button
				v-for="(name, index) in transitionNames"
				:key="name"
				type="button"
				:class="{ active: currentTransition === name }"
				@click="runTransition(index)"
			>
				{{ name }}
			</button>
		</p>
	</div>
</template>

<style lang="scss" scoped>
	button {
		padding: 6px 6px;
		border: 1px solid #333;
		border-radius: 5px;
		margin: 0 12px 12px 0;
		cursor: pointer;

		&.active {
			color: yellow;
			background-color: #333;
		}
	}

	p {
		margin-bottom: -12px;
	}
</style>
