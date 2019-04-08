<template>
  <div>
    <nuxt />
    <login />
  </div>
</template>
<script>
import Login from '../components/_shared/login/login';
export default {
  components: { Login }
};
</script>

<style lang="scss">
  body {
    background: #fff;
  }
</style>
