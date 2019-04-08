<template>
  <div class="login" v-if="homeState.showLoginPopup">
    <div class="login-popup">
      <div class="login-popup-close">
        <round-button @click.native="close" type="CLOSE" />
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
import Logo from '../logo';
import LoginButton from './loginButton';
import { axiosRequest } from '../../../assets/js/httpHelper';
import RoundButton from '../roundButton';

export default {
  name: 'login',
  components: { RoundButton, LoginButton, Logo },
  computed: {
    homeState () {
      return this.$store.state.home;
    }
  },
  methods: {
    loginWithGithub () {
      axiosRequest(this.$store, {
        method: 'GET',
        url: '/auth/login',
        params: {
          environment: process.env.NODE_ENV === 'development' ? 'DEVELOPMENT' : 'PRODUCTION'
        }
      }, false).then(res => {
        const githubAuthorizeUrl = res.data.githubAuthorizeUrl;
        if (githubAuthorizeUrl) {
          window.location = githubAuthorizeUrl;
        } else {
          console.error('failed fetching Github authorize url');
        }
      });
    },
    close () {
      this.$store.commit('home/closeLoginPopup');
    }
  }
};
</script>

<style scoped lang="scss">
  .login {
    position: fixed;
    z-index: 60;
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
      max-width: 370px;
      border: $border-blue-light;
      background-color: #fff;
      border-radius: 8px;

      .login-popup-close {
        position: absolute;
        right: 20px;
        top: -20px;
      }

      .login-popup-content {
        margin: 40px 45px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: left;

        .login-popup-content-logo {
          width: 80px;
          margin-bottom: 100px;
        }

        .login-popup-content-headline {
          color: $blue;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .login-popup-content-description {
          margin-bottom: 40px;
          font-size: 100%;
          line-height: 130%;
        }
      }
    }
  }
</style>
