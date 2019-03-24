<template>
  <div>
    <Logo />
    <leftnavbar />
    <nuxt />
    <profileBtn />
  </div>
</template>

<script>
  import leftnavbar from '~/components/_shared/nav.vue'
  import profileBtn from '~/components/_shared/profileBtn.vue'
  import Logo from '~/components/_shared/logo.vue'


  export default {
    components: {
      leftnavbar,profileBtn,Logo
    }
  }
</script>


<style lang="scss">

  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    color: $light-gray-color;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    background: $light-blue-bg-color;
  }
  h2 {
    font-size: 32px;
    margin-bottom: 5px;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 18px;
    font-weight: 300;

  }
  h5 {
    font-size: 16px;
    font-weight: 300;

  }
  h6 {
    font-size: 14px;
  }
  a {
    text-decoration: none;
  }


</style>
