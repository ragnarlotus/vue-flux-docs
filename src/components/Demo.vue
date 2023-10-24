<script setup lang="ts">
	import { computed, Component } from 'vue';
	import * as Factories from '../factories';

	import {
		VueFlux,
		FluxPreloader,
		FluxCaption,
		FluxControls,
		FluxPagination,
		FluxIndex,
		Resource,
		Options,
		ResourceWithOptions,
		TransitionWithOptions,
	} from 'vue-flux';

	import 'vue-flux/style.css';

	interface Props {
		options?: Options;
		rscs?: (Resource | ResourceWithOptions)[];
		numRscs?: number;
		transitions: (Component | TransitionWithOptions)[];
		complements?: {
			preloader?: boolean;
			caption?: boolean;
			controls?: boolean;
			pagination?: boolean;
			index?: boolean;
		};
	}

	const props = withDefaults(defineProps<Props>(), {
		numRscs: 8,
		complements: () => ({
			preloader: false,
			caption: false,
			controls: false,
			pagination: false,
			index: false,
		}),
	});

	const rscs = computed(() => {
		if (props.rscs !== undefined) {
			return props.rscs;
		}

		return Factories.Images.generate(props.numRscs);
	});
</script>

<template>
	<VueFlux :options="options" :rscs="rscs" :transitions="transitions">
		<template v-if="complements.preloader" #preloader="preloaderProps">
			<FluxPreloader v-bind="preloaderProps" />
		</template>

		<template v-if="complements.caption" #caption="captionProps">
			<FluxCaption v-bind="captionProps" />
		</template>

		<template v-if="complements.controls" #controls="controlsProps">
			<FluxControls v-bind="controlsProps" />
		</template>

		<template v-if="complements.pagination" #pagination="paginationProps">
			<FluxPagination v-bind="paginationProps" />
		</template>

		<template v-if="complements.index" #index="indexProps">
			<FluxIndex v-bind="indexProps" />
		</template>
	</VueFlux>
</template>
