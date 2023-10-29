export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible'
  ],

	typescript: {
		tsConfig: {
			compilerOptions: {
				verbatimModuleSyntax: false
			}
		}
	},

	app: {
		head: {
			link: [
				{ rel: 'apple-touch-icon', sizes:"180x180", href:"/apple-touch-icon.png" },
				{ rel: 'icon', type: 'image/png', sizes:"32x32", href:"/favicon-32x32.png" },
				{ rel: 'icon', type: 'image/png', sizes:"16x16", href:"/favicon-16x16.png" },
				{ rel: 'manifest', href: '/site.webmanifest' },
			]
		}
	}
})
