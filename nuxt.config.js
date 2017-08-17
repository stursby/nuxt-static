const axios = require('axios')

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

  // Generate dynamic routes
  generate: {
    routes: () => {
      return axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        const users = res.data
        return users.map(user => `/users/${user.id}`)
      })
    }
  }

}