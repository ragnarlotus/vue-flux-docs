<template>
	<div>
		<demo
			:options="options"
			:transitions="transitions"
			:complements="complements"
			captions="fortune"
			:numImages="12"
			ref="demo" />

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
		name: 'demos-vue-flux-flux-index',

		components: {
			Demo,
		},

		data: () => ({
			mounted: false,
			options: {
				autohideTime: 0,
				path: '../../img/slides/',
			},
			transitions: [
				'blinds3d', 'blocks2',
				'book', 'cube',
				'warp', 'wave',
			],
			complements: {
				index: true,
				preloader: true,
			},
		}),

		computed: {
			captions() {
				if (!this.mounted)
					return [];

				return this.$refs.demo.finalCaptions;
			},

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
				code += '   <template v-slot:index>\n';
				code += '      <flux-index />\n';
				code += '   </template>\n';
				code += '</vue-flux>';

				return Prism.highlight(code, Prism.languages.html, 'html');
			},

			sourceJs() {
				let code = '';
				code += '...\n';
				code += 'data: () => ({\n';
				code += '   options: {\n';
				code += '      autohideTime: '+ this.options.autohideTime +',\n';
				code += '   },\n';
				code += '   images: [ \'image-url-1\', \'image-url-2\', \'image-url-3\' ],\n';
				code += '   transitions: [\n';
				code += '      \''+ this.transitions.join('\',\n      \'') +'\',\n';
				code += '   ],\n';
				code += '   captions: [\n';
				code += '      \''+ this.captions.join('\',\n      \'') +'\',\n';
				code += '   ],\n';
				code += '}),\n';
				code += '...\n';

				return Prism.highlight(code, Prism.languages.javascript, 'javascript');
			},
		},

		mounted() {
			this.mounted = true;
		},
	};
</script>
