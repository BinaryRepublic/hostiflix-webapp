<template>
  <nuxt-link to="../dashboard" @click.native="$store.commit('hideSelectProjectType')">
    <img class="hostiflixLogo" :class="{isFixed}" src="/img/layout/hostiflix-logo.png" alt="Logo Hostiflix">
  </nuxt-link>
</template>
<script>
export default {
  name: 'logo',
  props: {
    isFixed: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.hostiflixLogo {
  width: 100%;

  &.isFixed {
    position: fixed;
    max-width: 70px;
    top: 40px;
    left: 40px;
    z-index: 101;
  }
}
</style>
