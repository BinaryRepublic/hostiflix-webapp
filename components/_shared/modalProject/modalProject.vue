<template>
  <div class="modalWrap">
    <closeIcon @click.native="$emit('close')"/>
    <div class="modal">
      <div class="title">
        <h2 class="mainBlue">Welcome to Hostiflix</h2>
        <h4>Let’s start right off with your first project.</h4>
        <selectType />
      </div>
    </div>
  </div>
</template>

<script>

  import selectType from '~/components/_shared/modalProject/selectType.vue'
  import closeIcon from '~/components/_shared/closeIcon.vue'

  export default {
    components: {
      selectType, closeIcon
    }
  }

</script>

<style lang="scss">

  /*MODAL*/
  .modalBG {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #f6f8ff;
    z-index: 99;
    position: fixed;
  }
  .modalWrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: #f6f8ff;

  }
  .modal {
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .modal .title > h2 {
    font-size: 40px;
  }
  .modal .title > h4 {
    margin-bottom: 40px;
  }


</style>
