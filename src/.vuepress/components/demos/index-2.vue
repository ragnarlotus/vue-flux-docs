<template>
	<flux-parallax :src="src" type="fixed" style="height: 250px;" />
</template>

<script>
	import { imagesGenerator } from '../generators.js';
	import { FluxParallax } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

	export default {
		name: 'demos-index-2',

		components: {
			FluxParallax,
		},

		data: () => ({
			src: '../img/slides/',
		}),

		created() {
			this.src += imagesGenerator.generate();
		},
	};
</script>
