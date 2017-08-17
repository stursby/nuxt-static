const axios = require('../plugins/axios')

module.exports = function static(moduleOptions) {
  return axios.get('users').then(({ data }) => {
    return data.map(user => `/users/${user.id}`)
  }).then((routes) => {
    this.options.generate.routes = routes
  })
}