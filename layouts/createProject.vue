<template>
  <div>
    <logo />
    <nuxt/>
    <round-button :is-fixed="true" type="BACK" @click.native="$store.commit('showSelectProjectType')" to="/dashboard" />
  </div>
</template>

<script>
import RoundButton from '../components/_shared/roundButton';
import Logo from '../components/_shared/logo';

export default {
  components: {
    Logo,
    RoundButton
  }
};
</script>

<style lang="scss">

  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    color: $gray-light;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    background: $blue-lightest;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    background: $blue-lightest;
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
  .mainBlue {
    color: $blue;
  }

</style>
