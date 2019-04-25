<template>
  <div class="center">
    <div class="logo" data-aos="fade-down"></div>
    <br/>
    <br/>
    <div data-aos="fade-up">Loading Data. From the cloud.</div>
  </div>
</template>

<script>
import { axiosRequest } from '../assets/js/httpHelper'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  layout: 'home',
  mounted () {
    if (process.browser) {
      axiosRequest(this.$store, {
        method: 'GET',
        url: '/auth/getAccessToken',
        params: this.$route.query
      }, false).then(res => {
        const accessToken = res.data.accessToken
        if (accessToken) {
          const auth = { accessToken }
          this.$store.commit('setAuth', auth)
          Cookie.set('auth', auth)
          this.forward(true)
        } else {
          console.error('authentication failed')
          this.forward(false)
        }
      })
    }
  },
  methods: {
    forward (authSuccess) {
      if (authSuccess) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .center {
    float: left;
    width: 100%;
    position: absolute;
    top: 50%;
    margin-top: -56px;
    text-align: center;
    .logo {
      display: inline-block;
      background-image: url(../static/img/home/hostiflix-logo-white.png);
      background-repeat: no-repeat;
      width: 75px;
      height: 42px;
      background-size: 190px;
      -webkit-animation-name: bounce;
      -webkit-animation-duration: 0.4s;
      -webkit-animation-direction: alternate;
      -webkit-animation-timing-function: cubic-bezier(.5,0.05,1,.5);
      -webkit-animation-iteration-count: infinite;
    }
    @keyframes bounce {
      from { transform: translate3d(0, 0, 0);     }
      to   { transform: translate3d(0, 8px, 0); }
    }
    @-webkit-keyframes bounce {
       from { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
       to   { -webkit-transform: translate3d(0, 8px, 0); transform: translate3d(0, 8px, 0); }
     }
  }

</style>
