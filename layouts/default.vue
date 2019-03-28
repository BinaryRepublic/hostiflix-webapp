<template>
  <div>
    <logo />
    <createProject v-if="$store.state.showCreateProject"/>
    <navLeft />
    <nuxt/>
    <profileBtn />
  </div>
</template>

<script>
  import navLeft from '~/components/_shared/navLeft.vue'
  import profileBtn from '~/components/_shared/profileBtn.vue'
  import logo from '~/components/_shared/logo.vue'
  import createProject from '~/components/_shared/createProject/createProject.vue'


  export default {
    components: {
      navLeft,profileBtn,logo,createProject
    },

  }
</script>
