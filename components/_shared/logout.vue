<template>
  <span @click="logout">logout</span>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'logout',
  methods: {
    logout () {
      Ccookie.remove('auth')
      this.$store.commit('setAuth', null)
      // this.$router.push('/')
    }
  }
};
</script>
