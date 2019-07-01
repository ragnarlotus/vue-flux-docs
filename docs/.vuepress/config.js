module.exports = {
	title: 'VueFlux',
	description: 'Documentation and demos of vue slider VueFlux',
	themeConfig: {
		search: false,
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Documentation',
				items: [
					{ text: '6.X', link: '/documentation-6/' },
					{ text: '5.X', link: '/documentation-5/' },
				],
			},
			{ text: 'Demos', link: '/demos/' },
			{ text: 'Github', link: 'https://github.com/deulos/vue-flux' },
		],
		sidebar: [
			['/documentation-5/', 'Home'],
			['/documentation-5/Changelog', 'Changelog'],
			['/documentation-5/Installation-and-usage', 'Installation and usage'],
			['/documentation-5/Templating', 'Templating'],
			['/documentation-5/SSR-with-Nuxt', 'SSR with Nuxt'],
			{
				title: 'Components',
				path: '/documentation-5/Components/',
				collapsable: false,
				sidebarDepth: 1,
				children: [
					['/documentation-5/Components/VueFlux', 'VueFlux'],
				]
			}
		],
	},
}
