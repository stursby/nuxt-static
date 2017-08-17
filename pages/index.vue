<template>
  <div>
    <h2>Hello {{ name }}</h2>
    <nuxt-link to="/about">About</nuxt-link> &nbsp;
    <nuxt-link to="/users">Users</nuxt-link>
    <br>
    <img src="http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg" alt="kitten">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'World'
    }
  },

  head: {
    title: 'Home'
  }
}
</script>

<style scoped>

img {
  max-width: 100%;
  border-radius: 5px;
  margin-top: 30px;
}

</style>
