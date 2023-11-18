<script lang="ts" setup></script>

<template>
	<button type="button" class="demo-button"><slot /></button>
</template>

<style lang="scss">
	.demo-button {
		padding: 6px 6px;
		border: 1px solid #333;
		border-radius: 5px;
		margin: 0 12px 12px 0;
		cursor: pointer;

		&:hover {
			color: yellow;
			background-color: #999;
		}

		&.active {
			color: yellow;
			background-color: #222;
		}
	}
</style>
