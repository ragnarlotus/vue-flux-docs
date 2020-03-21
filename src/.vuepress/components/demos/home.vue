<template>
	<div>
		<demo
			ref="slider"
			:options="options"
			:transitions="transitions"
			captions="fortune"
			:complements="complements"
			:numImages="12">
		</demo>

		<button @click="toggle()">toggle FS</button>
	</div>
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
				autohideTime: 0,
				allowFullscreen: true,
				autoplay: true,
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

		methods: {
			toggle() {
				console.log(this.$refs.slider.$children[0].Display.toggleFullScreen());
				this.$refs.slider.$children[0].Display.toggleFullScreen();
			}
		}
	};
</script>
