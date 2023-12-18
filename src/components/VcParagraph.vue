<script setup lang="ts">
	import { Ref, computed, onMounted, reactive, ref } from 'vue';

	const $el: Ref<null | HTMLDivElement> = ref(null);

	interface Props {
		mode?: string;
		lines?: number;
		fontSize?: number;
		lineHeight?: number;
		strokeColor?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		mode: 'load',
		lines: 4,
		strokeColor: '#666',
	});

	const cs = reactive({
		fontSize: 0,
		lineHeight: 0,
	});

	onMounted(() => {
		const { fontSize, lineHeight } = getComputedStyle($el.value as Element);

		cs.fontSize = parseFloat(fontSize);
		cs.lineHeight = parseFloat(lineHeight);
	});

	const fs = computed(() => props.fontSize || cs.fontSize);

	const lh = computed(() => {
		if (/[a-z]/.test(cs.lineHeight.toString())) {
			cs.lineHeight = fs.value * 1.2;
		}

		return props.lineHeight || cs.lineHeight;
	});

	const height = computed(() => lh.value * props.lines);

	const cssClass = computed(() => 'vc-paragraph ' + props.mode);

	function px(value: number) {
		return value + 'px';
	}

	function posX() {
		return fs.value / 2;
	}

	function posY(line: number) {
		return lh.value * line - fs.value / 2;
	}
</script>

<template>
	<div ref="$el" :style="'padding: 0 ' + px(posX())">
		<svg width="100%" :height="px(height)" :class="cssClass">
			<g fill="none" :stroke="strokeColor" :stroke-width="px(fs * 0.6)">
				<line
					v-for="line in lines"
					:key="line"
					:x1="0"
					:y1="px(posY(line))"
					x2="100%"
					:y2="px(posY(line))"
				/>
			</g>
		</svg>
	</div>
</template>

<style lang="scss">
	svg.vc-paragraph {
		overflow: visible;

		line {
			stroke-linecap: round;
		}

		&.load {
			line {
				animation: fadeInOut 1s linear infinite alternate;
			}
		}

		@keyframes fadeInOut {
			from {
				opacity: 1;
			}

			to {
				opacity: 0.3;
			}
		}
	}
</style>
