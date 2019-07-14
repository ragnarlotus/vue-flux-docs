<template>
	<demo
		:options="options"
		:transitions="transitions"
		captions="fortune"
		:complements="complements"
		:numImages="60">
	</demo>
</template>

<script>
	import Demo from '../Demo.vue';

	export default {
		name: 'demos-index',

		components: {
			Demo,
		},

		data: () => ({
			options: {
				allowFullscreen: true,
				autoplay: true,
				lazyLoad: false,
				path: 'img/slides/',
			},
			transitions: [
				'fade', 'cube', 'book', 'wave', 'round2',
			],
			complements: {
				preloader: true,
				caption: true,
				controls: true,
				pagination: true,
			},
		}),
	};
</script>
