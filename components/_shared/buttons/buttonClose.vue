<template>
  <a class="closeIcon">
  </a>
</template>

<style lang="scss" scoped>

  .closeIcon {
    position: fixed;
    right: 40px;
    top: 40px;
    width: 60px;
    height: 60px;
    background-color: #FFFFFF;
    background-image: url("../../../static/img/layout/close.png");
    background-repeat: no-repeat;
    background-size: 17px;
    background-position: center;
    box-shadow: 0px 2px 10px rgba(71, 105, 255, 0.101591);
    border-radius: 50%;
    z-index: 200;
    cursor: pointer;
    transition: 0.15s ease-out;
  }
  .closeIcon:hover {
    width: 65px;
    height: 65px;
    top: 35px;
    box-shadow: 0px 10px 20px rgba(71, 105, 255, 0.101591);
  }
  .closeIcon img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 17px;
  }

</style>
