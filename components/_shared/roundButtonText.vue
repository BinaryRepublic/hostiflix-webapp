<template>
  <nuxt-link class="round-button" :class="[type, { isFixed }]" v-if="to" :to="to">
    <div class="round-button-link">My Projects</div>
  </nuxt-link>
</template>

<script>
const TYPES = {
  BACK: 'BACK',
  CLOSE: 'CLOSE'
};

export default {
  name: 'roundButton',
  props: {
    type: {
      type: String,
      validator: value => Object.values(TYPES).includes(value)
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
  .round-button {
    height: 60px;
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 2px 10px rgba(71, 105, 255, 0.101591);
    border-radius: 30px;
    padding: 20px 34px 18px 55px;
    z-index: 99;
    cursor: pointer;
    transition: 0.15s ease-out;
    color: #374CFF;
    &.CLOSE {
      background-image: url("/img/layout/close.png");
      background-size: 17px;
    }

    &.BACK {
      background-image: url("/img/layout/arrow-left.png");
      background-position: 23px center;
      background-size: 11px;
    }

    &.isFixed {
      position: fixed;
      top: 40px;
    }

    &:hover {
      height: 65px;
      top: 35px;
      background-position: 25px center;
      padding: 24px 34px 18px 55px;
      box-shadow: 0 10px 20px rgba(71, 105, 255, 0.101591);
    }

    .round-button-link {
      display: block;
      width: 100%;
      height: 100%;
      color: #374CFF;
      font-size: 16px;
    }
  }
</style>
