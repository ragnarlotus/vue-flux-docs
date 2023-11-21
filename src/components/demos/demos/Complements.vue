<script setup lang="ts">
	import { Fade, Cube, Book, Wave, Round2 } from 'vue-flux';
	import Demo from '../../Demo.vue';

	const options = {
		autohideTime: 0,
	};

	const transitions = [Fade, Cube, Book, Wave, Round2];

	const complements = {
		preloader: true,
		captions: true,
		controls: true,
		pagination: true,
		index: true,
	};
</script>

<template>
	<Demo
		:options="options"
		:transitions="transitions"
		:complements="complements"
		:numRscs="12"
	/>
</template>
