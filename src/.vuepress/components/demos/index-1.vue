<template>
	<div>
		<demo
			:options="options"
			:transitions="transitions"
			captions="fortune"
			:complements="complements"
			:numImages="12"
			@transition-start="updateCurrentTransition"
			@transition-cancel="updateCurrentTransition"
			@transition-end="updateCurrentTransition"
			ref="demo" />

		<p>Transitions: 
			<button
				v-for="transition in transitions"
				type="button"
				:class="getTransitionClass(transition)"
				@click="runTransition(transition)">

				{{ transition }}
			</button>
		</p>
	</div>
</template>

<script>
	import Demo from '../Demo.vue';

	export default {
		name: 'demos-index-1',

		components: {
			Demo,
		},

		data: () => ({
			slider: undefined,
			currentTransition: undefined,
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
				controls: true,
			},
		}),

		mounted() {
			this.slider = this.$refs.demo.$children[0];
		},

		methods: {
			getTransitionClass(transition) {
				if (transition === this.currentTransition)
					return 'active';

				return '';
			},

			runTransition(transition) {
				this.slider.showImage('next', transition);
			},

			updateCurrentTransition(transition = '') {
				this.currentTransition = transition;
			},
		},
	};
</script>

<style lang="stylus" scoped>
	button
		padding 6px 6px
		border 1px solid #333
		border-radius 5px
		margin 0 12px 12px 0

		&.active
			color: yellow
			background-color #333
</style>
