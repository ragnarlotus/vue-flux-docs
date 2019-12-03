<template>
	<div>
		<vue-flux
			:options="options"
			:images="images"
			:transitions="transitions"
		>
			<template v-slot:preloader>
				<flux-preloader />
			</template>

			<template v-slot:controls>
				<flux-controls />
			</template>

			<template v-slot:pagination>
				<flux-pagination />
			</template>
		</vue-flux>

		<button type="button" @click="updateImages()">Update images</button>
	</div>
</template>

<script>
	import {
		imagesGenerator,
	} from '../../generators.js';

	import {
		VueFlux,
		FluxPreloader,
		FluxControls,
		FluxPagination,
	} from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

	export default {
		name: 'demos-vue-flux-flux-preloader',

		components: {
			VueFlux,
			FluxPreloader,
			FluxControls,
			FluxPagination,
		},

		data: () => ({
			options: {
				autoplay: true,
				path: '../../img/slides/',
			},
			numImages: 4,
			images: [],
			transitions: [
				'blinds3d', 'blocks2',
				'book', 'cube',
				'warp', 'wave',
			],
		}),

		created() {
			this.updateImages();
		},

		methods: {
			updateImages() {
				this.images = imagesGenerator.generate(this.numImages);
			}
		},
	};
</script>