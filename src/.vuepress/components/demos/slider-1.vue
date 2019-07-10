<template>
	<vue-flux
		:options="options"
		:images="images"
		:transitions="transitions"
		:captions="captions">

		<template v-slot:preloader>
			<flux-preloader></flux-preloader>
		</template>

		<template v-slot:caption>
			<flux-caption></flux-caption>
		</template>

		<template v-slot:controls>
			<flux-controls></flux-controls>
		</template>

		<template v-slot:pagination>
			<flux-pagination></flux-pagination>
		</template>
	</vue-flux>
</template>

<script>
	import { VueFlux, complements } from 'vue-flux';

	const FluxPreloader = complements.FluxPreloader;
	const FluxCaption = complements.FluxCaption;
	const FluxControls = complements.FluxControls;
	const FluxPagination = complements.FluxPagination;

	export default {
		components: {
			VueFlux,
			FluxPreloader,
			FluxCaption,
			FluxControls,
			FluxPagination,
		},

		data: () => ({
			options: {
				autoplay: true,
				lazyLoadAfter: 5,
				path: 'img/slides/',
			},
			images: [],
			transitions: [
				'fade', 'cube', 'book', 'wave', 'round2',
			],
			captions: [],
		}),

		created() {
			this.loadImages();
		},

		methods: {
			loadImages() {
				let srcs = [];

				for (let i = 1; i <= 60; i++) {
					srcs.push(i.toString().padStart(2, '0') +'.jpg');
				}

				this.images = [];
				this.captions = [];

				let index, src;

				for (let i = 1; i <= 16; i++) {
					index = Math.floor(Math.random() * srcs.length);
					src = srcs.splice(index, 1)[0];

					this.captions.push(`This is the image number ${i}`);
					this.images.push(src);
				}
			},
		}
	};
</script>
