<script setup lang="ts">
	import Demo from '../Demo.vue';
	import { Fade, Cube, Book, Wave, Round2 } from 'vue-flux';

	const options = {
		autohideTime: 0,
		allowFullscreen: true,
		autoplay: true,
	};

	const transitions = [Fade, Cube, Book, Wave, Round2];

	const complements = {
		preloader: true,
		captions: true,
		controls: true,
		pagination: true,
	};
</script>

<template>
	<Demo
		:options="options"
		:transitions="transitions"
		:complements="complements"
		:numRscs="12"
		style="margin-top: 32px"
	/>
</template>
