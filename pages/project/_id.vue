<template>
  <section class="container" v-if="project">
    <round-button-text :is-fixed="true" type="BACK" to="../dashboard" />
    <!--PROJECTS-->
    <div class="title">
      <h2 data-aos="fade-left" data-aos-duration="600">{{project.name}}</h2>
      <h5 data-aos="fade-left" data-aos-delay="50" data-aos-duration="600">Last updated 13 seconds ago</h5>
    </div>
    <div class="projectCards">
      <h3 data-aos="fade-up">Recent Builds</h3>
      <build-card data-aos="fade-up" :builds="project.branches"/>
      <h3 data-aos="fade-up">Use your own domain</h3>
      <div class="intro" data-aos="fade-up">
        If you want to use your own domain, you can add our subdomains (e.g. <b>master-sd3.hostiflix.com</b>) to your DNS table as CNAME. Therefore log in to your Domain Provider Admin Panel and navigate to your <b>DNS table</b>. Add another item of entry type <b>CNAME</b>. You have to replace example.com with your own domain or subdomain. Dependent on your Domain Provider it can take up to 24h to apply changes.
      </div>
      <dns-card data-aos="fade-up" :branches="project.branches" />
    </div>
  </section>
</template>

<script>
import roundButtonText from '../../components/_shared/roundButtonText'
import BuildCard from '../../components/projects/buildCard'
import DnsCard from '../../components/projects/dnsCard'

export default {
  components: {
    roundButtonText,
    BuildCard,
    DnsCard
  },
  computed: {
    project () {
      return _.find(this.$store.state.projects, { id: this.$route.params.id })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 140px 20px 0 250px;
    padding: 0 20px 0 50px;
  }
  .title {
    margin-bottom: 40px;
  }
  .title h2 {
    color: $blue;
  }
  h3 {
    color: $blue;
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .projectCards {
    display: flex;
    flex-flow: row wrap;
    align-content: stretch;
  }
  .projectCards div {
    margin-bottom: 20px;
  }
  .projectCards .intro {
    font-size: 14px;
    color: $gray-light;
  }
  .projectCards > a:hover {
    box-shadow: 0 2px 30px rgba(71, 105, 255, 0.101591);
  }

</style>
