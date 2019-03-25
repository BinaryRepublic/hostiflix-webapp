<template>
  <div>
    <logo />
    <modalProject v-if="$store.state.showCreateProject"/>
    <navLeft />
    <nuxt/>
    <profileBtn />
  </div>
</template>

<script>
  import navLeft from '~/components/_shared/navLeft.vue'
  import profileBtn from '~/components/_shared/profileBtn.vue'
  import logo from '~/components/_shared/logo.vue'
  import modalProject from '~/components/_shared/createProject/createProject.vue'


  export default {
    components: {
      navLeft,profileBtn,logo,modalProject
    },

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
