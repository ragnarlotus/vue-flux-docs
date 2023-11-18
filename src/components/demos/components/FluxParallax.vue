<script setup lang="ts">
	import { Ref, ref } from 'vue';
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

		<Lines v-for="i in 3" :key="i" />
	</div>
</template>
