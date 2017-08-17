<template>
  <div>
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <p>{{ user.phone }}</p>
    <router-link to="/users">&larr; go back</router-link>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`/users/${params.id}`)
    return {
      user: data
    }
  },

  head() {
    return {
      title: `${this.user.name}`
    }
  }
}
</script>