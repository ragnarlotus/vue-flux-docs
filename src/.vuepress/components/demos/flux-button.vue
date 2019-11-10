<template>
	<div class="demo-flux-button">
		<flux-button>
			<g v-html="svg" />
		</flux-button>

		<h3>Playground</h3>
		<textarea v-model="svg" />

		<h3>Source</h3>
		<div class="language-html extra-class">
			<pre v-html="source" class="language-html" />
		</div>
	</div>
</template>

<script>
	const Prism = require('prismjs');
	import { FluxButton } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

	export default {
		name: 'demos-flux-button',

		components: {
			FluxButton,
		},

		data: () => ({
			svg: '<polyline points="32,12 82,50 32,88" />',
		}),

		computed: {
			source() {
				const code = '<flux-button>\n'+ this.svg +'\n</flux-button>';
				return Prism.highlight(code, Prism.languages.html, 'html');
			},
		},
	};
</script>

<style lang="scss">
	.demo-flux-button {
		.flux-button {
			display: block;
			max-width: 200px;
			margin: 0 auto;
		}

		textarea {
			width: 100%;
			min-height: 60px;
		}
	}
</style>
