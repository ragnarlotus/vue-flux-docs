<template>
	<flux-parallax :src="'../img/slides/'+ src" height="200px" offset="200%" />
</template>

<script>
	import { imagesGenerator } from '../generators.js';
	import { FluxParallax } from 'vue-flux';

	export default {
		name: 'demos-index-3',

		components: {
			FluxParallax,
		},

		data: () => ({
			src: '',
		}),

		created() {
			this.src = imagesGenerator.generate();
		},
	};
</script>
