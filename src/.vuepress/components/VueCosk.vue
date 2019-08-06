<template>
	<div>
		<div v-for="index in lines" :style="style" />
	</div>
</template>

<script>
	export default {
		name: 'VueCosk',

		data: () => {
			style: {
				backgroundImage: 
					'linear-gradient(90deg, rgba(lightgrey, 0) 0, rgba(lightgrey, .8) 50%, rgba(lightgrey, 0) 100%) '+
					'linear-gradient(white var(12px), transparent 0)',
			},
		},

		props: {
			mode: {
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
				default: 0.2,
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

			viewBox() {
				return `0 0 ${this.size.width}px ${this.size.height}px`;
			},
		},

		created() {

		},

		methods: {
			posY(line) {
				return this.size.fontSize * this.lineHeight * line;
			},
		},
	};
</script>

<style lang="scss">
	
</style>
