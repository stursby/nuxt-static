const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

module.exports = instance