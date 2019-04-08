import webpack from 'webpack'
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  env: {
    apiBaseUrl: process.env.API_BASE_URL || 'https://api.hostiflix.com'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Hostiflix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['aos/dist/aos.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/tooltip', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-clipboard2'
  ],
  styleResources: {
    scss: [
      'assets/style/global.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    },
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ]
  }
}
