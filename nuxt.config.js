export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  // router: {
  //   base: '/<repo-name>/',
  // },
  head: {
    title: 'Nuxt-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/colors.scss',
    '~assets/scss/media.scss',
    '~assets/scss/mixins.scss',
    '~assets/scss/text.scss',
    '~assets/scss/base.scss',
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/svg', '@nuxtjs/fontawesome'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  fontawesome: {
    icons: {
      solid: ['faUser', 'faAngleDown'],
    },
  },
};
