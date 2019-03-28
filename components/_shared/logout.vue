<template>
  <span @click="logout">logout</span>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
  name: "logout",
  methods: {
    logout() {
      Cookie.remove("auth", { path: "" });
      this.$store.commit("setAuth", null);
      this.$router.push("/");
    }
  }
}
</script>
