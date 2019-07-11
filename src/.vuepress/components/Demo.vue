<template>
	<vue-flux
		:options="options"
		:images="finalImages"
		:transitions="transitions"
		:captions="finalCaptions">

		<template v-if="complements.preloader" v-slot:preloader>
			<flux-preloader></flux-preloader>
		</template>

		<template v-if="complements.caption" v-slot:caption>
			<flux-caption></flux-caption>
		</template>

		<template v-if="complements.controls" v-slot:controls>
			<flux-controls></flux-controls>
		</template>

		<template v-if="complements.pagination" v-slot:pagination>
			<flux-pagination></flux-pagination>
		</template>

		<template v-if="complements.index" v-slot:index>
			<flux-index></flux-index>
		</template>
	</vue-flux>
</template>

<script>
	import {
		imagesGenerator,
		captionsGenerator,
	} from './generators.js';

	import {
		VueFlux,
		FluxPreloader,
		FluxCaption,
		FluxControls,
		FluxPagination,
		FluxIndex,
	} from 'vue-flux';

	export default {
		name: 'Demo',

		components: {
			VueFlux,
			FluxPreloader,
			FluxCaption,
			FluxControls,
			FluxPagination,
		},

		props: {
			options: Object,
			transitions: {
				type: Array,
				required: true,
			},
			images: Array,
			numImages: {
				type: Number,
				default: 8,
			},
			captions: [ String, Array ],
			complements: {
				type: Object,
				default: () => ({}),
			},
		},

		computed: {
			finalImages() {
				if (Array.isArray(this.images))
					return this.images;

				if (this.numImages)
					return imagesGenerator.generate(this.numImages);

				return [];
			},

			finalCaptions() {
				if (Array.isArray(this.captions))
					return this.captions;

				if (this.captions === 'fortune') {
					let numCaptions = this.images? this.images.length : this.numImages;

					return captionsGenerator.generate(numCaptions);
				}

				return [];
			},
		},
	};
</script>
