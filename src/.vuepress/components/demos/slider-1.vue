<template>
	<demo
		:options="options"
		:transitions="transitions"
		captions="fortune"
		:complements="complements"
		:numImages="8">
	</demo>
</template>

<script>
	import Demo from '../Demo.vue';

	export default {
		name: 'demos-slider-1',

		data: () => ({
			options: {
				autoplay: true,
				lazyLoadAfter: 5,
				path: 'img/slides/',
			},
			transitions: [
				'fade', 'cube', 'book', 'wave', 'round2',
			],
			complements: {},
		}),
	};
</script>
