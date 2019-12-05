<template>
	<div class="demo demo-flux-transition">
		<flux-transition
			ref="transition"
			v-if="enabled"
			:size="size"
			:transition="selectedTransition"
			:from="from"
			:to="to"
			@end="end()"
		/>

		<span>Timing: {{ timing }}</span>

		<h3>Playground</h3>

		<label>
			<span>Width:</span>
			<vue-slider v-model.number="size.width" :min="100" :max="640" tooltip="always" />
		</label>

		<label>
			<span>Height:</span>
			<vue-slider v-model.number="size.height" :min="100" :max="640" tooltip="always" />
		</label>

		<label>
			Transition:
			<select v-model="selectedTransition" @change="reset()" style="margin-left: 6px;">
				<option
					v-for="(transition, index) in transitions"
					:key="'transition'+ index"
				>{{ transition }}</option>
			</select>
		</label>

		<button type="button" @click="run()">Run</button>
		<button type="button" @click="reset()">Reset</button>

		<h3>Source</h3>

		<div class="language-html extra-class">
			<pre v-html="source" class="language-html" />
		</div>
	</div>
</template>

<script>
	const Prism = require('prismjs');
	import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js';
	import { imagesGenerator } from '../generators.js';
	import { FluxTransition } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

	export default {
		name: 'demos-flux-transition',

		components: {
			VueSlider,
			FluxTransition,
		},

		data: () => ({
			transitionStart: undefined,
			duration: 0,
			timing: 0,
			timer: undefined,
			enabled: true,
			size: {
				width: 640,
				height: 360,
			},
			selectedTransition: 'blinds2d',
			transitions: [
				'blinds2d',
				'blinds3d',
				'blocks1',
				'blocks2',
				'book',
				'camera',
				'concentric',
				'cube',
				'explode',
				'fade',
				'fall',
				'kenburn',
				'round1',
				'round2',
				'slide',
				'swipe',
				'warp',
				'waterfall',
				'wave',
				'zip',
			],
			from: undefined,
			to: undefined,
		}),

		computed: {
			source() {
				let code = '';

				code += '<flux-transition\n';
				code += `   :size="{ width: ${this.size.width}, height: ${this.size.height} }"\n`;
				code += `   transition="${this.selectedTransition}"\n`;
				code += '   from="url"\n';
				code += '   to="url"\n';
				code += '/>\n';

				return Prism.highlight(code, Prism.languages.html, 'html');
			},
		},

		created() {
			let images = imagesGenerator.generate(2);
			let path = '../img/slides/';

			this.from = path + images[0];
			this.to = path + images[1];

			this.timer = setInterval(() => {
				this.updateTiming();
			}, 80);
		},

		beforeDestroy() {
			clearInterval(this.timer);
		},

		methods: {
			updateTiming() {
				if (!this.transitionStart) {
					this.timing = 0;
					return;
				}

				this.timing = this.transitionStart + this.duration - Date.now();
			},

			run() {
				let { transition } = this.$refs;

				this.transitionStart = Date.now();
				this.duration = transition.getDuration();

				this.$refs.transition.start()
			},

			end() {
				this.transitionStart = undefined;
			},

			reset() {
				this.enabled = false;

				this.$nextTick(() => {
					this.enabled = true;
				});
			},
		},
	};
</script>
