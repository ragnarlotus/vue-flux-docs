<script setup lang="ts">
	import { computed, Component, Ref, ref } from 'vue';
	import * as Factories from '../factories';

	import {
		VueFlux,
		FluxPreloader,
		FluxCaption,
		FluxControls,
		FluxPagination,
		FluxIndex,
		Resource,
		ResourceWithOptions,
		TransitionWithOptions,
	} from 'vue-flux';
	import type {
		PlayerResource,
		PlayerTransition,
		VueFluxOptions,
	} from 'vue-flux';

	import 'vue-flux/style.css';

	const emit = defineEmits([
		'transitionStart',
		'transitionCancel',
		'transitionEnd',
	]);

	const $vf: Ref<null | InstanceType<typeof VueFlux>> = ref(null);

	interface Props {
		options?: VueFluxOptions;
		rscs?: (Resource | ResourceWithOptions)[];
		numRscs?: number;
		transitions: (Component | TransitionWithOptions)[];
		complements?: {
			preloader?: boolean;
			captions?: boolean;
			controls?: boolean;
			pagination?: boolean;
			index?: boolean;
		};
	}

	const props = withDefaults(defineProps<Props>(), {
		numRscs: 8,
		complements: () => ({
			preloader: false,
			captions: false,
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

	function transitionStart(
		resource: PlayerResource,
		transition: PlayerTransition
	) {
		const name = transition.current!.component['__name'];
		emit('transitionStart', name);
	}

	function transitionCancel() {
		emit('transitionCancel');
	}

	function transitionEnd() {
		emit('transitionEnd');
	}

	defineExpose({
		$vf,
	});
</script>

<template>
	<VueFlux
		:options="options"
		:rscs="rscs"
		:transitions="transitions"
		@transition-start="transitionStart"
		@transition-cancel="transitionCancel"
		@transition-end="transitionEnd"
		ref="$vf"
	>
		<template v-if="complements.preloader" #preloader="preloaderProps">
			<FluxPreloader v-bind="preloaderProps" />
		</template>

		<template v-if="complements.captions" #caption="captionProps">
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
