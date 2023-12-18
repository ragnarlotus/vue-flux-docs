<script setup lang="ts">
	import { Images } from '../../../factories';
	import { FluxParallax, Resource } from 'vue-flux';

	const rsc = Images.generate() as Resource;
</script>

<template>
	<FluxParallax :rsc="rsc" type="fixed" style="height: 250px" />
</template>
