import { defineUserConfig, defaultTheme } from 'vuepress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);
const srcPath = path.resolve(__dirname, '../');

export default defineUserConfig({
	title: 'VueFlux',
	description: 'Documentation and demos of vue slider VueFlux',
	base: '/vue-flux-docs/',
	lang: 'en-US',
	dest: 'docs/',
	public: srcPath + '/public',
	theme: defaultTheme({
		contributors: false,
		repo: 'https://github.com/ragnarlotus/vue-flux',
		sidebarDepth: 1,
		editLink: false,
		navbar: [
			{ text: 'Home', link: '/' },
			{
				text: 'Documentation',
				children: [
					{ text: 'v5', link: '/documentation/v5/overview' },
					{ text: 'v6', link: '/documentation/v6/overview' },
					{ text: 'v7', link: '/documentation/v7/overview' },
				],
			},
			{ text: 'Demos', link: '/demos/demos' },
		],
		sidebar: {
			'/documentation/v5/': [
				{
					text: 'Overview',
					link: '/documentation/v5/overview',
				},
				{
					text: 'Changelog',
					link: '/documentation/v5/changelog',
				},
				{
					text: 'Installation and usage',
					link: '/documentation/v5/installation-and-usage',
				},
				{
					text: 'Templating',
					link: '/documentation/v5/templating',
				},
				{
					text: 'SSR with Nuxt',
					link: '/documentation/v5/ssr-with-nuxt',
				},
				{
					text: 'Components',
					link: '/documentation/v5/components/vue-flux',
					collapsible: true,
					children: [
						{
							text: 'VueFlux',
							link: '/documentation/v5/components/vue-flux',
						},
						{
							text: 'FluxParallax',
							link: '/documentation/v5/components/flux-parallax',
						},
						{
							text: 'FluxCaption',
							link: '/documentation/v5/components/flux-caption',
						},
						{
							text: 'FluxControls',
							link: '/documentation/v5/components/flux-controls',
						},
						{
							text: 'FluxIndex',
							link: '/documentation/v5/components/flux-index',
						},
						{
							text: 'FluxPagination',
							link: '/documentation/v5/components/flux-pagination',
						},
						{
							text: 'FluxImage',
							link: '/documentation/v5/components/flux-image',
						},
						{
							text: 'FluxWrapper',
							link: '/documentation/v5/components/flux-wrapper',
						},
						{
							text: 'FluxCube',
							link: '/documentation/v5/components/flux-cube',
						},
						{
							text: 'FluxGrid',
							link: '/documentation/v5/components/flux-grid',
						},
						{
							text: 'FluxVortex',
							link: '/documentation/v5/components/flux-vortex',
						},
						{
							text: 'FluxThumb',
							link: '/documentation/v5/components/flux-thumb',
						},
					],
				},
				{
					text: 'Transitions',
					link: '/documentation/v5/transitions',
					collapsible: true,
					children: [
						{
							text: 'Blinds 2D',
							link: '/documentation/v5/transitions/blinds2d',
						},
						{
							text: 'Blinds 3D',
							link: '/documentation/v5/transitions/blinds3d',
						},
						{
							text: 'Blocks 1',
							link: '/documentation/v5/transitions/blocks1',
						},
						{
							text: 'Blocks 2',
							link: '/documentation/v5/transitions/blocks2',
						},
						{
							text: 'Book',
							link: '/documentation/v5/transitions/book',
						},
						{
							text: 'Camera',
							link: '/documentation/v5/transitions/camera',
						},
						{
							text: 'Concentric',
							link: '/documentation/v5/transitions/concentric',
						},
						{
							text: 'Cube',
							link: '/documentation/v5/transitions/cube',
						},
						{
							text: 'Explode',
							link: '/documentation/v5/transitions/explode',
						},
						{
							text: 'Fade',
							link: '/documentation/v5/transitions/fade',
						},
						{
							text: 'Fall',
							link: '/documentation/v5/transitions/fall',
						},
						{
							text: 'Kenburn',
							link: '/documentation/v5/transitions/kenburn',
						},
						{
							text: 'Round 1',
							link: '/documentation/v5/transitions/round1',
						},
						{
							text: 'Round 2',
							link: '/documentation/v5/transitions/round2',
						},
						{
							text: 'Slide',
							link: '/documentation/v5/transitions/slide',
						},
						{
							text: 'Swipe',
							link: '/documentation/v5/transitions/swipe',
						},
						{
							text: 'Warp',
							link: '/documentation/v5/transitions/warp',
						},
						{
							text: 'Waterfall',
							link: '/documentation/v5/transitions/waterfall',
						},
						{
							text: 'Wave',
							link: '/documentation/v5/transitions/wave',
						},
						{
							text: 'Zip',
							link: '/documentation/v5/transitions/zip',
						},
					],
				},
				{
					text: 'Custom transitions',
					link: '/documentation/v5/custom-transitions',
				},
			],
			'/documentation/v6/': [
				{
					text: 'Overview',
					link: '/documentation/v6/overview',
				},
				{
					text: 'Changelog',
					link: '/documentation/v6/changelog',
				},
				{
					text: 'Installation and usage',
					link: '/documentation/v6/installation-and-usage',
				},
				{
					text: 'Components',
					link: '/documentation/v6/components',
					collapsible: true,
					children: [
						{
							text: 'VueFlux',
							link: '/documentation/v6/components/vue-flux',
						},
						{
							text: 'FluxButton',
							link: '/documentation/v6/components/flux-button',
						},
						{
							text: 'FluxCube',
							link: '/documentation/v6/components/flux-cube',
						},
						{
							text: 'FluxGrid',
							link: '/documentation/v6/components/flux-grid',
						},
						{
							text: 'FluxImage',
							link: '/documentation/v6/components/flux-image',
						},
						{
							text: 'FluxParallax',
							link: '/documentation/v6/components/flux-parallax',
						},
						{
							text: 'FluxTransition',
							link: '/documentation/v6/components/flux-transition',
						},
						{
							text: 'FluxVortex',
							link: '/documentation/v6/components/flux-vortex',
						},
						{
							text: 'FluxWrapper',
							link: '/documentation/v6/components/flux-wrapper',
						},
					],
				},
				{
					text: 'SSR with Nuxt',
					link: '/documentation/v6/ssr-with-nuxt',
				},
				{
					text: 'Complements',
					link: '/documentation/v6/complements',
					collapsible: true,
					children: [
						{
							text: 'FluxCaption',
							link: '/documentation/v6/complements/flux-caption',
						},
						{
							text: 'FluxControls',
							link: '/documentation/v6/complements/flux-controls',
						},
						{
							text: 'FluxIndex',
							link: '/documentation/v6/complements/flux-index',
						},
						{
							text: 'FluxPagination',
							link: '/documentation/v6/complements/flux-pagination',
						},
						{
							text: 'FluxPreloader',
							link: '/documentation/v6/complements/flux-preloader',
						},
					],
				},
				{
					text: 'Transitions',
					link: '/documentation/v6/transitions',
					collapsible: true,
					children: [
						{
							text: 'Blinds 2D',
							link: '/documentation/v6/transitions/blinds2d',
						},
						{
							text: 'Blinds 3D',
							link: '/documentation/v6/transitions/blinds3d',
						},
						{
							text: 'Blocks 1',
							link: '/documentation/v6/transitions/blocks1',
						},
						{
							text: 'Blocks 2',
							link: '/documentation/v6/transitions/blocks2',
						},
						{
							text: 'Book',
							link: '/documentation/v6/transitions/book',
						},
						{
							text: 'Camera',
							link: '/documentation/v6/transitions/camera',
						},
						{
							text: 'Concentric',
							link: '/documentation/v6/transitions/concentric',
						},
						{
							text: 'Cube',
							link: '/documentation/v6/transitions/cube',
						},
						{
							text: 'Explode',
							link: '/documentation/v6/transitions/explode',
						},
						{
							text: 'Fade',
							link: '/documentation/v6/transitions/fade',
						},
						{
							text: 'Fall',
							link: '/documentation/v6/transitions/fall',
						},
						{
							text: 'Kenburn',
							link: '/documentation/v6/transitions/kenburn',
						},
						{
							text: 'Round 1',
							link: '/documentation/v6/transitions/round1',
						},
						{
							text: 'Round 2',
							link: '/documentation/v6/transitions/round2',
						},
						{
							text: 'Slide',
							link: '/documentation/v6/transitions/slide',
						},
						{
							text: 'Swipe',
							link: '/documentation/v6/transitions/swipe',
						},
						{
							text: 'Warp',
							link: '/documentation/v6/transitions/warp',
						},
						{
							text: 'Waterfall',
							link: '/documentation/v6/transitions/waterfall',
						},
						{
							text: 'Wave',
							link: '/documentation/v6/transitions/wave',
						},
						{
							text: 'Zip',
							link: '/documentation/v6/transitions/zip',
						},
					],
				},
				{
					text: 'Custom transitions',
					link: '/documentation/v6/custom-transitions',
				},
			],
			'/documentation/v7/': [
				{
					text: 'Overview',
					link: '/documentation/v7/overview',
				},
				{
					text: 'Changelog',
					link: '/documentation/v7/changelog',
				},
				{
					text: 'Installation and usage',
					link: '/documentation/v7/installation-and-usage',
				},
				{
					text: 'SSR with Nuxt',
					link: '/documentation/v7/ssr-with-nuxt',
				},
				{
					text: 'Resources',
					link: '/documentation/v7/resources',
					collapsible: true,
					children: [
						{
							text: 'Image',
							link: '/documentation/v7/resources/image',
						},
						{
							text: 'Video',
							link: '/documentation/v7/resources/video',
						},
						{
							text: 'Component',
							link: '/documentation/v7/resources/component',
						},
					],
				},
				{
					text: 'Components',
					link: '/documentation/v7/components',
					collapsible: true,
					children: [
						{
							text: 'VueFlux',
							link: '/documentation/v7/components/vue-flux',
						},
						{
							text: 'FluxButton',
							link: '/documentation/v7/components/flux-button',
						},
						{
							text: 'FluxCube',
							link: '/documentation/v7/components/flux-cube',
						},
						{
							text: 'FluxGrid',
							link: '/documentation/v7/components/flux-grid',
						},
						{
							text: 'FluxImage',
							link: '/documentation/v7/components/flux-image',
						},
						{
							text: 'FluxParallax',
							link: '/documentation/v7/components/flux-parallax',
						},
						{
							text: 'FluxTransition',
							link: '/documentation/v7/components/flux-transition',
						},
						{
							text: 'FluxVortex',
							link: '/documentation/v7/components/flux-vortex',
						},
						{
							text: 'FluxWrapper',
							link: '/documentation/v7/components/flux-wrapper',
						},
					],
				},
				{
					text: 'Complements',
					link: '/documentation/v7/complements',
					collapsible: true,
					children: [
						{
							text: 'FluxCaption',
							link: '/documentation/v7/complements/flux-caption',
						},
						{
							text: 'FluxControls',
							link: '/documentation/v7/complements/flux-controls',
						},
						{
							text: 'FluxIndex',
							link: '/documentation/v7/complements/flux-index',
						},
						{
							text: 'FluxPagination',
							link: '/documentation/v7/complements/flux-pagination',
						},
						{
							text: 'FluxPreloader',
							link: '/documentation/v7/complements/flux-preloader',
						},
					],
				},
				{
					text: 'Transitions',
					link: '/documentation/v7/transitions',
					collapsible: true,
					children: [
						{
							text: 'Blinds 2D',
							link: '/documentation/v7/transitions/blinds2d',
						},
						{
							text: 'Blinds 3D',
							link: '/documentation/v7/transitions/blinds3d',
						},
						{
							text: 'Blocks 1',
							link: '/documentation/v7/transitions/blocks1',
						},
						{
							text: 'Blocks 2',
							link: '/documentation/v7/transitions/blocks2',
						},
						{
							text: 'Book',
							link: '/documentation/v7/transitions/book',
						},
						{
							text: 'Camera',
							link: '/documentation/v7/transitions/camera',
						},
						{
							text: 'Concentric',
							link: '/documentation/v7/transitions/concentric',
						},
						{
							text: 'Cube',
							link: '/documentation/v7/transitions/cube',
						},
						{
							text: 'Explode',
							link: '/documentation/v7/transitions/explode',
						},
						{
							text: 'Fade',
							link: '/documentation/v7/transitions/fade',
						},
						{
							text: 'Fall',
							link: '/documentation/v7/transitions/fall',
						},
						{
							text: 'Kenburn',
							link: '/documentation/v7/transitions/kenburn',
						},
						{
							text: 'Round 1',
							link: '/documentation/v7/transitions/round1',
						},
						{
							text: 'Round 2',
							link: '/documentation/v7/transitions/round2',
						},
						{
							text: 'Slide',
							link: '/documentation/v7/transitions/slide',
						},
						{
							text: 'Swipe',
							link: '/documentation/v7/transitions/swipe',
						},
						{
							text: 'Warp',
							link: '/documentation/v7/transitions/warp',
						},
						{
							text: 'Waterfall',
							link: '/documentation/v7/transitions/waterfall',
						},
						{
							text: 'Wave',
							link: '/documentation/v7/transitions/wave',
						},
						{
							text: 'Zip',
							link: '/documentation/v7/transitions/zip',
						},
					],
				},
				{
					text: 'Custom transitions',
					link: '/documentation/v7/custom-transitions',
				},
			],
			'/demos/': [
				{
					text: 'Demos',
					link: '/demos/demos',
				},
				{
					text: 'Components',
					link: '/demos/components/vue-flux',
					collapsible: true,
					children: [
						{
							text: 'VueFlux',
							link: '/demos/components/vue-flux',
						},
						{
							text: 'FluxButton',
							link: '/demos/components/flux-button',
						},
						{
							text: 'FluxImage',
							link: '/demos/components/flux-image',
						},
						{
							text: 'FluxCube',
							link: '/demos/components/flux-cube',
						},
						{
							text: 'FluxGrid',
							link: '/demos/components/flux-grid',
						},
						{
							text: 'FluxVortex',
							link: '/demos/components/flux-vortex',
						},
						{
							text: 'FluxTransition',
							link: '/demos/components/flux-transition',
						},
						{
							text: 'FluxParallax',
							link: '/demos/components/flux-parallax',
						},
					],
				},
				{
					text: 'Complements',
					link: '/demos/complements/flux-caption',
					collapsible: true,
					children: [
						{
							text: 'FluxCaption',
							link: '/demos/complements/flux-caption',
						},
						{
							text: 'FluxControls',
							link: '/demos/complements/flux-controls',
						},
						{ text: 'FluxIndex', link: '/demos/complements/flux-index' },
						{
							text: 'FluxPagination',
							link: '/demos/complements/flux-pagination',
						},
						{
							text: 'FluxPreloader',
							link: '/demos/complements/flux-preloader',
						},
					],
				},
				{
					text: 'Transitions',
					link: '/demos/transitions',
					collapsible: true,
					children: [
						{ text: 'Blinds 2D', link: '/demos/transitions/blinds2d' },
						{ text: 'Blinds 3D', link: '/demos/transitions/blinds3d' },
						{ text: 'Blocks 1', link: '/demos/transitions/blocks1' },
						{ text: 'Blocks 2', link: '/demos/transitions/blocks2' },
						{ text: 'Book', link: '/demos/transitions/book' },
						{ text: 'Camera', link: '/demos/transitions/camera' },
						{ text: 'Concentric', link: '/demos/transitions/concentric' },
						{ text: 'Cube', link: '/demos/transitions/cube' },
						{ text: 'Explode', link: '/demos/transitions/explode' },
						{ text: 'Fade', link: '/demos/transitions/fade' },
						{ text: 'Fall', link: '/demos/transitions/fall' },
						{ text: 'Kenburn', link: '/demos/transitions/kenburn' },
						{ text: 'Round 1', link: '/demos/transitions/round1' },
						{ text: 'Round 2', link: '/demos/transitions/round2' },
						{ text: 'Slide', link: '/demos/transitions/slide' },
						{ text: 'Swipe', link: '/demos/transitions/swipe' },
						{ text: 'Warp', link: '/demos/transitions/warp' },
						{ text: 'Waterfall', link: '/demos/transitions/waterfall' },
						{ text: 'Wave', link: '/demos/transitions/wave' },
						{ text: 'Zip', link: '/demos/transitions/zip' },
					],
				},
			],
		},
		themePlugins: {
			activeHeaderLinks: false,
		},
	}),
	plugins: [
		registerComponentsPlugin({
			componentsDir: srcPath + '/components',
		}),
	],
});
