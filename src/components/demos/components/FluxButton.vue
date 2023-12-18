<script setup lang="ts">
	import { computed } from 'vue';
	import Prism from 'prismjs';
	import { FluxButton } from 'vue-flux';

	const svg = '<polyline points="32,12 82,50 32,88" />';

	const sourceHtml = computed(() => {
		const code = `<FluxButton>
   ${svg}
</FluxButton>`;

		return Prism.highlight(code.trim(), Prism.languages.html, 'html');
	});
</script>

<template>
	<div class="demo-flux-button">
		<FluxButton>
			<g v-html="svg" />
		</FluxButton>

		<h3>Playground</h3>

		<textarea v-model="svg" />

		<h3>Source</h3>

		<div class="language-html extra-class" data-ext="html">
			<pre v-html="sourceHtml" class="language-html" />
		</div>
	</div>
</template>

<style lang="scss">
	.demo-flux-button {
		.flux-button {
			display: block;
			max-width: 200px;
			margin: 0 auto;
		}

		textarea {
			margin-top: 16px;
			width: 100%;
			min-height: 60px;
		}
	}
</style>
