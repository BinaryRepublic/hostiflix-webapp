<template>
  <div class="login" v-if="homeState.showLoginPopup">
    <div class="login-popup">
      <div class="login-popup-close">
        <close-icon @click.native="close" :is-fixed="false" />
      </div>
      <div class="login-popup-content">
        <div class="login-popup-content-logo">
          <logo :is-fixed="false"/>
        </div>
        <p class="login-popup-content-headline">Sign in.</p>
        <p class="login-popup-content-description">
          Login via GitHub to launch your code directly from your repository to our server.
        </p>
        <login-button
          img-url="/login-icon-github.png"
          text="Log in with GitHub"
          @click.native="loginWithGithub"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "../closeIcon";
import Logo from "../logo";
import LoginButton from "./loginButton";
import { axiosRequest } from "../../../assets/js/httpHelper";

export default {
  name: "login",
  components: {LoginButton, Logo, CloseIcon},
  computed: {
    homeState() {
      return this.$store.state.home;
    }
  },
  methods: {
    loginWithGithub() {
      axiosRequest(this.$store, {
        method: 'GET',
        url: '/auth/login'
      }, false).then(res => {
        const githubRedirectUrl = res.data.redirectUrlGithub;
        if (githubRedirectUrl) {
          window.location = githubRedirectUrl
        } else {
          console.error("failed fetching Github authorize url")
        }
      })
    },
    close() {
      this.$store.commit('home/closeLoginPopup');
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    .login-popup {
      position: relative;
      width: 90%;
      max-width: 400px;
      border: $blue-border;
      background-color: #fff;
      border-radius: 8px;

      .login-popup-close {
        position: absolute;
        right: 20px;
        top: -20px;
      }

      .login-popup-content {
        margin: 45px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: left;

        .login-popup-content-logo {
          width: 90px;
          margin-bottom: 100px;
        }

        .login-popup-content-headline {
          color: $blue-color;
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .login-popup-content-description {
          margin-bottom: 40px;
          font-size: 110%;
          line-height: 130%;
        }
      }
    }
  }
</style>
