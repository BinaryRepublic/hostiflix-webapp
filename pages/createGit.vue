<template>
  <section class="container">
    <!--CREATE PROJECTS-->
    <div class="createContainer">
      <div>
        <h2>Create a new project</h2>
        <h5>These are all of your projects running on hostiflix.</h5>
      </div>

    </div>

  </section>
</template>


<script>


  export default {
    components: {

    },
    layout: 'noNavLeft',
  }
</script>

<style lang="scss">
  .container {
    margin: 140px 20px 0 250px;
    padding: 0 0 0 50px;
  }
  .createContainer {
    background: #fff;
    border: $blue-border;
  }
  .title {
    margin-bottom: 40px;
  }
  .title h2 {
    color: $blue-color;
  }

</style>
