<template>
	<demo
		:options="options"
		:transitions="transitions"
		captions="fortune"
		:complements="complements"
		:numImages="12">
	</demo>


</template>

<script>
	import Demo from '../Demo.vue';

	export default {
		name: 'demos-index-1',

		components: {
			Demo,
		},

		data: () => ({
			options: {
				autoplay: true,
				path: '../img/slides/',
				delay: 3000,
			},
			transitions: [
				'fade', 'kenburn',
				'swipe', 'slide',
				'waterfall', 'zip', 'blinds2d',
				'blocks1', 'blocks2',
				'concentric', 'warp', 'camera',
				'cube', 'book', 'fall',
				'wave', 'blinds3d',
				'round1', 'round2', 'explode',
			],
			complements: {
				preloader: true,
				pagination: true,
			},
		}),
	};
</script>
