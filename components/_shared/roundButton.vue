<template>
  <div class="round-button" :class="[type, { isFixed }]">
    <nuxt-link class="round-button-link" v-if="to" :to="to"></nuxt-link>
  </div>
</template>

<script>
const TYPES = {
  BACK: 'BACK',
  CLOSE: 'CLOSE'
};

export default {
  name: "roundButton",
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
}
</script>

<style lang="scss" scoped>
  .round-button {
    width: 60px;
    height: 60px;
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 2px 10px rgba(71, 105, 255, 0.101591);
    border-radius: 50%;
    z-index: 200;
    cursor: pointer;
    transition: 0.15s ease-out;

    &.CLOSE {
      background-image: url("/img/layout/close.png");
      background-size: 17px;
    }

    &.BACK {
      background-image: url("/img/layout/arrow-left.png");
      background-size: 11px;
    }

    &.isFixed {
      position: fixed;
      right: 40px;
      top: 40px;
    }

    &:hover {
      width: 65px;
      height: 65px;
      top: 35px;
      box-shadow: 0 10px 20px rgba(71, 105, 255, 0.101591);
    }

    .round-button-link {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
