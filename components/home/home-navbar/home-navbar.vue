<template>

  <div class="navBar" :class="{scroll100: scrollPosition > 40}">
    <div class="container">
      <div class="logo"></div>
      <div class="loginBtn" @click="$store.commit('home/openLoginPopup')">
        <img class="githubLogo" src="../../../static/img/layout/github-logo.png"/>
        <div class="txt">Sign In <br><span>with GitHub</span></div>
        <img class="arrow" src="../../../static/img/layout/arrow-left.png" />
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'HomeNavbar',
    components: {
    },
    data() {
      return {
        scrollPosition: false
      }
    },
    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    }

  };
</script>

<style lang="scss">
  /*NAVBAR*/
  .navBar .container {
    align-items: center;
    justify-content: space-between;
  }
  .navBar {
    padding: 40px 0 0;
    position: fixed;
    width: 100%;
    z-index: 50;
    transition: .25s all ease-in-out;
  }
  .logo {
    background-image: url("../../../static/img/home/hostiflix-logo-white.png");
    background-repeat: no-repeat;
    width: 190px;
    height: 42px;
    background-size: 190px;
    transition: .25s all ease-in-out;
  }
  .scroll100 {
    padding: 15px 0 0;
    transition: .25s all ease-in-out;
  }
  .scroll100 .logo{
    width: 75px;
    transition: .25s all ease-in-out;
  }

  /*LOGIN*/
  .loginBtn {
    background: #FFFFFF;
    border-radius: 50px;
    box-shadow: 0 2px 10px rgba(71, 105, 255, 0.25);
    padding: 10px 15px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .20s all ease-in-out;

    &:hover {
      box-shadow: 0 7px 20px rgba(71, 105, 255, 0.30);
    }

    .githubLogo {
      max-width: 34px;
    }

    .txt {
      color: $blue;
      line-height: 95%;
      padding-left: 15px;
      padding-right: 40px;
    }

    .txt span {
      color:$gray-light;
      font-size: 12px;
    }

    .arrow{
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: "FlipH";
      max-width: 11px ;
    }

  }


</style>
