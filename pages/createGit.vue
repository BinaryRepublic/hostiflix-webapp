<template>
  <section class="container">
    <!--PROJECTS-->
    <div class="title">
      <h2>Git project</h2>
      <h5>These are all of your projects running on hostiflix.</h5>
    </div>

  </section>
</template>


<script>
  import createProjectCard from '~/components/projects/createProjectCard.vue'
  import projectCard from '~/components/projects/projectCard.vue'
  import modalProject from '~/components/_shared/modalProject/modalProject.vue'

  export default {
    components: {
      createProjectCard,projectCard,modalProject
    },
    data() {
      return {
        showModal:true
      }
    },
  }
</script>

<style lang="scss">
  .container {
    margin: 140px 20px 0 250px;
    padding: 0 0 0 50px;
  }
  .title {
    margin-bottom: 40px;
  }
  .title h2 {
    color: $blue-color;
  }

</style>
