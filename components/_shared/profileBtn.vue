<template>
  <div class="profileWrap">
    <div class="photo"></div>
    <div class="txt">
      <p class="name">Jonathan Kuhl</p>
      <p class="email">jonathan.kuhl@code.berlin</p>
    </div>

  </div>
</template>


<style lang="scss">
  .profileWrap {
    background: #FFFFFF;
    border-radius: 50px;
    box-shadow: 0px 2px 10px rgba(71, 105, 255, 0.101591);
    padding: 10px 15px 10px 10px;
    position: fixed;
    right: 40px;
    top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profileWrap .photo {
    width: 38px;
    height: 38px;
    background: #ccc;
    border-radius: 50px;
  }
  .profileWrap .txt{
    padding-left: 10px;
  }
  .profileWrap .name{
    color: $blue-color;
  }
  .profileWrap .email{
    font-size: 12px;
  }

</style>
