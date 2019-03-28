<template>
  <div>
    <span @click="$store.commit('home/openLoginPopup')">Login</span>
  </div>
</template>

<script>
import Login from "../components/_shared/login/login";

export default {
  components: {
    Login
  },
  layout: "home"
}
</script>
