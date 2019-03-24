<template>
  <section class="container">
    <!--MODAL-->
    <modalProject v-if="showModal" @close="showModal = false"/>
    <!--PROJECTS-->
    <div class="title">
      <h2>My projects</h2>
      <h5>These are all of your projects running on hostiflix.</h5>
    </div>
    <div class="projectCards">
      <projectCard/>
      <createProjectCard v-on:click.native="showModal = true"></createProjectCard>
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
  .projectCards {
    display: flex;
    flex-flow: row wrap;
    align-content: stretch;
  }
  .projectCards > a {
    align-self: flex-start;
    margin: 0 20px 20px 0;
    height: 280px;
    position: relative;
    width: calc(50% - 20px);
    box-shadow: 0px 2px 30px rgba(71, 105, 255, 0);
    -webkit-transition: 0.3s ease-out;
    -moz-transition: 0.3s ease-out;
    -ms-transition: 0.3s ease-out;
    -o-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
  .projectCards > a:hover {
    box-shadow: 0px 2px 30px rgba(71, 105, 255, 0.101591);
  }

</style>
