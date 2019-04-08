<template>
  <div class="login-button">
    <div class="login-button-icon">
      <img :src="imgUrl" :alt="text" />
    </div>
    <div class="login-button-text-outer">
      <p class="login-button-text">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginButton',
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  .login-button {
    border: $border-blue-light;
    box-shadow: 0 1px 2px rgba(71, 105, 255, 0.2);
    border-radius: 6px;
    display: flex;
    background-color: $blue-lightest;
    overflow: hidden;
    transition: .25s all ease-in-out;

    &:hover {
      cursor: pointer;
      box-shadow: 0 7px 20px rgba(71, 105, 255, 0.20);
      background-color: #fff;
    }

    .login-button-icon {
      padding: 12px 12px 10px 12px;
      background-color: #fff;
      border-right: $border-blue-light;

      img {
        width: 28px;
      }
    }

    .login-button-text-outer {
      display: flex;
      align-items: center;
      padding: 0 20px;

      .login-button-text {
        color: $blue;
        font-weight: bold;
      }
    }
  }
</style>
