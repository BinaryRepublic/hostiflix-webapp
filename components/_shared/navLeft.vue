<template>
  <div class="leftNavBar">
    <div class="projectsList">
      <h4><nuxt-link to="dashboard">My Projects</nuxt-link></h4>
      <ul>
        <li v-for="project in $store.state.data.projects" :key="project.id">
          <nuxt-link :to="'/project/' + project.id">{{project.name}}</nuxt-link>
        </li>
        <li>
          <span @click="$store.commit('showSelectProjectType')">+ Create a new project</span>
        </li>
      </ul>
    </div>
    <div class="logOut" @click="logout">
      <span>Log out</span>
      <img src="/img/layout/icon-logout.png"/>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  methods: {
    logout () {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  .leftNavBar {
    top: 0;
    left: 0;
    padding: 40px;
    width: 100%;
    max-width: 250px;
    background: #fff;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    position: fixed;
    z-index: 99;
    overflow-y: auto;
    box-shadow: 0 2px 40px rgba(71, 105, 255, 0.101591);
  }

  .projectsList {
    margin-top: 80px;
  }
  .projectsList h4 a{
    font-weight: 700;
    margin-bottom: 10px;
    color: $blue;
    display: block;
  }

  .projectsList ul{
    font-size: 14px;
    list-style: none;
    padding-left: 15px;
  }
  .projectsList ul li {
    padding: 10px 0;
    color: $blue;
    display: block;
    font-size: 13px;

  }
  .projectsList ul li:last-child{
    color: $gray-light;
  }
  .projectsList ul li span {
    cursor: pointer;
  }
  .projectsList ul li a {
    color: $blue;
  }
  .logOut {
    position: absolute;
    width: 100%;
    cursor: pointer;
    display: block;
    bottom: 0;
    left: 0;
    border-top:$border-blue-light;
    padding: 15px 40px;
    font-size: 13px;
    color: $gray-light;
  }
  .logOut img {
    max-width: 19px;
    position: absolute;
    right: 40px;
  }

</style>
