<template>
  <div class="close-icon" :class="{ isFixed }"></div>
</template>

<script>
export default {
  name: "closeIcon",
  props: {
    isFixed: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .close-icon {
    width: 60px;
    height: 60px;
    background-color: #FFFFFF;
    background-image: url("/static/img/layout/close.png");
    background-repeat: no-repeat;
    background-size: 17px;
    background-position: center;
    box-shadow: 0px 2px 10px rgba(71, 105, 255, 0.101591);
    border-radius: 50%;
    z-index: 200;
    cursor: pointer;
    transition: 0.15s ease-out;

    &.fixed {
      position: fixed;
      right: 40px;
      top: 40px;
    }
  }
  .close-icon:hover {
    width: 65px;
    height: 65px;
    top: 35px;
    box-shadow: 0 10px 20px rgba(71, 105, 255, 0.101591);
  }

</style>
