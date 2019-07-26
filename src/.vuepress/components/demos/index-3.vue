<template>
	<demo
		:options="options"
		:transitions="transitions"
		captions="fortune"
		:complements="complements"
		:numImages="12" />
</template>

<script>
	import Demo from '../Demo.vue';

	export default {
		name: 'demos-index-2',

		components: {
			Demo,
		},

		data: () => ({
			options: {
				autohideTime: 0,
				path: '../img/slides/',
			},
			transitions: [
				'fade', 'cube', 'book', 'wave', 'round2',
			],
			complements: {
				preloader: true,
				caption: true,
				controls: true,
				pagination: true,
				index: true,
			},
		}),
	};
</script>
