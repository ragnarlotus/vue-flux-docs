<template>
	<svg :width="size.width +'px'" :height="size.height +'px'" :class="cssClass">
		<line
			v-for="line in lines"
			:x1="posX() +'px'"
			:y1="posY(line) +'px'"
			:x2="(size.width - posX()) +'px'"
			:y2="posY(line) +'px'"
			:stroke="strokeColor"
			:stroke-width="fontSize +'px'"
		/>
	</svg>
</template>

<script>
	export default {
		name: 'VueCosk',

		data: () => ({
		}),

		props: {
			mode: {
				type: String,
				default: 'load'
			},

			type: {
				type: String,
				default: 'paragraph',
			},

			lines: {
				type: Number,
				default: 4,
			},

			fontSize: {
				type: Number,
				default: 12,
			},

			lineHeight: {
				type: Number,
				default: 1.5,
			},

			strokeColor: {
				type: String,
				default: '#666',
			},
		},

		computed: {
			parent() {
				return this.$parent.$el;
			},

			size() {
				return {
					width: this.parent.clientWidth,
					height: this.lineHeight * this.fontSize * this.lines,
				};
			},

			cssClass() {
				return this.mode;
			},

			strokeWidth() {
				return this.fontSize +'px';
			},
		},

		methods: {
			posX() {
				return this.fontSize / 2;
			},

			posY(line) {
				let height = this.fontSize * this.lineHeight;
				return height * line - height / 2;
			},
		},
	};
</script>

<style lang="scss">
	@keyframes fadeInOut {
		from {
			opacity: 1;
		}

		to {
			opacity: 0.2;
		}
	}

	@keyframes glow {
		from {
			box-shadow: none;
		}

		to {
			box-shadow: none;
		}
	}

	svg {
		line {
			stroke-linecap: round;
		}

		&.load {
			line {
				animation: fadeInOut 3s infinite alternate;
			}
		}

		&.fill {
			line {
				animation: fadeInOut 3s infinite alternate;
			}
		}
	}
</style>
