import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'language', content: 'pt-br' },
      { name: 'robots', content: 'index, follow' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      { name: 'theme-color:', content: '#000000' },
      { name: 'apple-mobile-web-app-capable:', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style:',
        content: 'black-translucent:'
      },

      {
        name: 'description',
        content:
          'Quer saber que cor hexadecimal é agora? Seus problemas acabaram!'
      },
      { name: 'keywords', content: 'que cor é agora, cor, horas' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' },
      { name: 'robots', content: 'index, follow' },
      { name: 'revisit-after', content: '30 days' },
      { name: 'creator', content: 'Guilherme Esteves' },
      { name: 'publisher', content: 'Guilherme Esteves' },

      // Open Graph
      {
        property: 'og:url',
        content: 'https://quecoreagora.guilhermeesteves.com'
      },
      { property: 'og:title', content: 'Que cor é agora?' },
      { property: 'og:site_name', content: 'Que cor é agora?' },
      {
        property: 'og:description',
        content:
          'Quer saber que cor hexadecimal é agora? Seus problemas acabaram!'
      },
      { property: 'og:image', content: '/redes_sociais.png' },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '563' },
      { property: 'og:image:height', content: '563' },
      { property: 'og:type', content: 'website' },
      { property: 'fb:admins', content: '100001899591977' },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:site',
        content: 'https://quecoreagora.guilhermeesteves.com'
      },
      { name: 'twitter:title', content: 'Que cor é agora?' },
      {
        name: 'twitter:description',
        content:
          'Quer saber que cor hexadecimal é agora? Seus problemas acabaram!'
      },
      { name: 'twitter:creator', content: '@guilhermesteves' },
      { name: 'twitter:image', content: '/redes_sociais.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/constants', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
