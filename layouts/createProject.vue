<template>
  <div>
    <logo />
    <nuxt/>
    <round-button :is-fixed="true" type="BACK" @click.native="$store.commit('showSelectProjectType')" to="/dashboard" />
  </div>
</template>

<script>
import RoundButton from '../components/_shared/roundButton'
import Logo from '../components/_shared/logo'

export default {
  components: {
    Logo,
    RoundButton
  },
  head: {
    htmlAttrs: {
      class: 'create-project'
    }
  }
}
</script>

<style lang="scss">
  html.create-project {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    color: $gray-light;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background: $blue-lightest;
  }
</style>
