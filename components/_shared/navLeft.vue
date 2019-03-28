<template>
  <div class="leftNavBar">
    <div class="projectsList">
      <h4><nuxt-link to="dashboard">My Projects</nuxt-link></h4>
      <ul>
        <li>
          <span>portfolio-webapp</span>
        </li>
        <li>
          <span @click="$store.commit('showCreateProject')">+ Create a new project</span>
        </li>
      </ul>
      <logout />
    </div>
    <nuxt-link to="/" class="logOut">
      <span>Log out</span>
      <img src="../../static/img/layout/icon-logout.png"/></nuxt-link>
  </div>
</template>

<script>
import Logout from "./logout";

export default {
  components: {Logout}
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
    box-shadow: 0px 2px 40px rgba(71, 105, 255, 0.101591);
  }

  .projectsList {
    margin-top: 80px;
  }
  .projectsList h4 a{
    font-weight: 700;
    margin-bottom: 10px;
    color: $blue-color;
    display: block;
  }

  .projectsList ul{
    font-size: 14px;
    list-style: none;
    padding-left: 15px;
  }
  .projectsList ul li {
    padding: 10px 0;
    color: $blue-color;
    display: block;

  }
  .projectsList ul li:last-child{
    color: $light-gray-color;
  }
  .projectsList ul li span {
    cursor: pointer;
  }
  .logOut {
    position: absolute;
    width: 100%;
    display: block;
    bottom: 0;
    left: 0;
    border-top:$blue-border;
    padding: 15px 40px;
    font-size: 14px;
    color: $light-gray-color;
  }
  .logOut img {
    max-width: 19px;
    position: absolute;
    right: 40px;
  }

</style>
