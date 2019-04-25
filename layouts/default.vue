<template>
  <div>
    <logo />
    <select-project-type v-if="$store.state.showSelectProjectType"/>
    <nav-left />
    <nuxt/>
    <profile-button />
  </div>
</template>
<script>
import Logo from '../components/_shared/logo'
import NavLeft from '../components/_shared/navLeft'
import ProfileButton from '../components/_shared/profileButton'
import SelectProjectType from '../components/_shared/selectProjectType/selectProjectType'
import { reloadProjects } from '../assets/js/projectHelper';

export default {
  components: {
    SelectProjectType,
    ProfileButton,
    NavLeft,
    Logo
  },
  head: {
    bodyAttrs: {
      class: 'default'
    }
  },
  mounted () {
    reloadProjects(this.$store)
  }
}
</script>

<style lang="scss">
  body.default {
    background: $blue-lightest;
  }
</style>
