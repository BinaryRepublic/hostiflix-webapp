<template></template>

<script>
import { axiosRequest } from "../assets/js/httpHelper";
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
  layout: "home",
  mounted() {
    if (process.browser) {

      axiosRequest(this.$store, {
        method: 'GET',
        url: '/auth/getAccessToken',
        params: this.$route.query
      }, false).then(res => {

        const accessToken = res.data.accessToken;
        if (accessToken) {
          const auth = { accessToken };
          this.$store.commit('setAuth', auth);
          Cookie.set('auth', auth);
          this.$router.push('/dashboard');
        } else {
          console.error("authentication failed");
          this.$router.push("/");
        }
      })
    }
  }
}
</script>
