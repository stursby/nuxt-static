const { join } = require('path')
const { api } = require('./src/plugins/axios')

export default {
  // Nuxt source dir
  srcDir: 'src',

  // Nuxt environment variables
  env: {
    dataDir: join(__dirname, 'dist/data')
  },

  // Head and global Meta tags
  head: {
    titleTemplate: '%s | Nuxt static 🔥',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A static site powered by Nuxt.js'
      }
    ]
  },

  // Generate dynamic routes
  generate: {
    async routes() {
<<<<<<< HEAD
      const { data: users } = await api.get('users')
      return users.map(user => `/users/${user.id}`)
    }
  }
=======
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return data.map(user => `/users/${user.id}`)
    }
  }

>>>>>>> a83db5a0ae3efa0be1f9ae10112cc5fec3deb2d8
}
