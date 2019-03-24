<template>
  <div>
    <Logo />
    <nuxt />
    <closeIcon />
  </div>
</template>

<script>
  import Logo from '~/components/_shared/logo.vue'
  import closeIcon from '~/components/_shared/closeIcon.vue'

  export default {
    components: {
      Logo, closeIcon
    }
  }
</script>


<style lang="scss">


  .hostiflixLogo {
    position: fixed;
    top: 40px;
    left: 40px;
  }
</style>
