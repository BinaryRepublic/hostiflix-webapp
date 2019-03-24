<template>
  <div class="leftNavBar">
    <div class="projectsList mainBlue">
      <h4>My Projects</h4>
      <ul>
        <li>
          <span>portfolio-webapp</span>
        </li>
        <li>
          <span @click="$store.commit('showModal')">+Create a new project</span>
        </li>
      </ul>
    </div>
  </div>
</template>

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
  .projectsList h4 {
    font-weight: 700;
    margin-bottom: 10px;
    color: $blue-color;
  }

  .projectsList ul{
    font-size: 14px;
    list-style: none;
    padding-left: 15px;
  }
  .projectsList ul li a{
    padding: 10px 0;
    color: $blue-color;
    display: block;

  }
  .projectsList ul li:last-child a{
    color: $light-gray-color;
  }

</style>
