<template>
	<div>
		<demo
			v-if="enabled"
			:options="options"
			:transitions="selectedTransitions"
			captions="fortune"
			:complements="complements"
			:numImages="12"
			ref="demo" />

		<h3>Playground</h3>

		<div class="playground">
			<h4>
				<a
					:href="$withBase('/v6/components/vue-flux.html#transitions')"
				>Transitions</a>
			</h4>

			<div class="transitions">
				<label v-for="transition in transitions" :key="transition">
					<input type="checkbox" :value="transition" v-model="selectedTransitions" />
					{{ transition }}
				</label>
			</div>

			<h4>
				<a
					:href="$withBase('/v6/components/vue-flux.html#options')"
				>Options</a>
			</h4>

			<div class="options">
				<label>
					<input type="checkbox" :value="true" v-model="options.allowFullscreen" />
					Allow full screen
				</label>

				<label>
					<input type="checkbox" :value="true" v-model="options.allowToSkipTransition" />
					Allow to skip transition
				</label>

				<label>
					Auto hide time: <input type="text" v-model.number="options.autohideTime" maxlength="5" /> ms
				</label>

				<label>
					<input type="checkbox" :value="true" v-model="options.autoplay" />
					Auto play
				</label>

				<label>
					<input type="checkbox" :value="true" v-model="options.bindKeys" />
					Bind keyboard keys
				</label>

				<label>
					Delay: <input type="text" v-model.number="options.delay" maxlength="5" /> ms
				</label>

				<label>
					<input type="checkbox" :value="true" v-model="options.enableGestures" />
					Enable gestures
				</label>

				<label>
					<input type="checkbox" :value="true" v-model="options.infinite" />
					Infinite
				</label>

				<label>
					<input type="checkbox" :value="true" v-model="options.lazyLoad" />
					Lazy load
				</label>

				<label>
					Lazy load after: <input type="text" v-model.number="options.lazyLoadAfter" maxlength="2" /> images
				</label>
			</div>

			<button type="button" @click="reset">Reset slider to pretend just mounted (test some options)</button>
		</div>

		<h3>Source</h3>
		<div class="language-html extra-class">
			<pre v-html="sourceHtml" class="language-html" />
		</div>

		<div class="language-js extra-class">
			<pre v-html="sourceJs" class="language-js" />
		</div>
	</div>
</template>

<script>
	const Prism = require('prismjs');
	import Demo from '../../Demo.vue';

	export default {
		name: 'demos-vue-flux-index',

		components: {
			Demo,
		},

		data: () => ({
			enabled: true,
			options: {
				allowFullscreen: false,
				allowToSkipTransition: true,
				autohideTime: 2500,
				autoplay: false,
				bindKeys: false,
				delay: 5000,
				enableGestures: false,
				infinite: true,
				lazyLoad: true,
				lazyLoadAfter: 3,
				path: '../../img/slides/',
			},
			transitions: [
				'blinds2d', 'blinds3d', 'blocks1', 'blocks2',
				'book', 'camera', 'concentric', 'cube',
				'explode', 'fade', 'fall', 'kenburn',
				'round1', 'round2', 'slide', 'swipe',
				'warp', 'waterfall', 'wave', 'zip',
			],
			selectedTransitions: [
				'blinds3d', 'blocks2',
				'book', 'cube',
				'round2', 'swipe',
				'warp', 'wave',
			],
			complements: {
				preloader: true,
				controls: true,
			},
		}),

		computed: {
			sourceHtml() {
				let code = '';
				code += '<vue-flux\n';
				code += '   :options="options"\n';
				code += '   :images="images"\n';
				code += '   :transitions="transitions"\n';
				code += '>\n';
				code += '   <template v-slot:preloader>\n';
				code += '      <flux-preloader />\n';
				code += '   </template>\n\n';
				code += '   <template v-slot:controls>\n';
				code += '      <flux-controls />\n';
				code += '   </template>\n';
				code += '</vue-flux>';

				return Prism.highlight(code, Prism.languages.html, 'html');
			},

			sourceJs() {
				let code = '';
				code += '...\n';
				code += 'data: () => ({\n';
				code += '   options: {\n';
				code += '      allowFullscreen: '+ (this.options.allowFullscreen? 'true' : 'false') +',\n';
				code += '      allowToSkipTransition: '+ (this.options.allowToSkipTransition? 'true' : 'false') +',\n';
				code += '      autohideTime: '+ this.options.autohideTime +',\n';
				code += '      autoplay: '+ (this.options.autoplay? 'true' : 'false') +',\n';
				code += '      bindKeys: '+ (this.options.bindKeys? 'true' : 'false') +',\n';
				code += '      delay: '+ this.options.delay +',\n';
				code += '      enableGestures: '+ (this.options.enableGestures? 'true' : 'false') +',\n';
				code += '      infinite: '+ (this.options.infinite? 'true' : 'false') +',\n';
				code += '      lazyLoad: '+ (this.options.lazyLoad? 'true' : 'false') +',\n';
				code += '      lazyLoadAfter: '+ this.options.lazyLoadAfter +',\n';
				code += '   },\n';
				code += '   images: [ \'image-url-1\', \'image-url-2\', \'image-url-3\' ],\n';
				code += '   transitions: [\n';
				code += '      \''+ this.selectedTransitions.join('\',\n      \'') +'\',\n';
				code += '   ],\n';
				code += '}),\n';
				code += '...\n';

				return Prism.highlight(code, Prism.languages.javascript, 'javascript');
			},
		},

		methods: {
			async reset() {
				this.enabled = false;

				await this.$nextTick();

				this.enabled = true;
			}
		},
	};
</script>

<style lang="stylus" scoped>
h4
	margin-bottom 4px

.transitions
	display flex
	flex-wrap wrap
	justify-content space-between

	label
		margin-bottom 6px
		min-width 150px
		cursor pointer

.options
	display flex
	flex-wrap wrap
	justify-content space-between

	label
		margin-bottom 8px
		min-width 275px
		cursor pointer

	input[type=text]
		width 40px
</style>
