module.exports = {

  // Head and global Meta tags
  head: {
    titleTemplate: '%s | Nuxt static 🔥',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A static site powered by Nuxt.js' }
    ]
  },

  // Vendor bundle
  build: {
    vendor: ['axios']
  },

  // Modules
  modules: [
    '~/modules/static'
  ],

  // Plugins
  plugins: [
    '~/plugins/axios'
  ]

}