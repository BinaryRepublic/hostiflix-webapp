<template>
  <section class="container">
    <!--PROJECTS-->
    <div class="title">
      <h2 data-aos="fade-left" data-aos-duration="600">My projects</h2>
      <h5 data-aos="fade-left" data-aos-delay="50" data-aos-duration="600">These are all of your projects running on hostiflix.</h5>
    </div>
    <div class="projectCards">

    </div>
  </section>
</template>

<script>
import { axiosRequest } from '../../assets/js/httpHelper';

export default {
  components: {

  },
  mounted () {
    if (process.browser) {
      if (!this.$store.state.auth) {
        this.$router.push('/');
        return;
      }
      axiosRequest(this.$store, {
        method: 'GET',
        url: '/projects'
      }).then(res => {
        console.log('fetched projects: ', res.data);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    margin: 140px 20px 0 250px;
    padding: 0 0 0 50px;
  }
  .title {
    margin-bottom: 40px;
  }
  .title h2 {
    color: $blue;
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
    box-shadow: 0 2px 30px rgba(71, 105, 255, 0);
    -webkit-transition: 0.3s ease-out;
    -moz-transition: 0.3s ease-out;
    -ms-transition: 0.3s ease-out;
    -o-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
  .projectCards > a:hover {
    box-shadow: 0 2px 30px rgba(71, 105, 255, 0.101591);
  }

</style>
