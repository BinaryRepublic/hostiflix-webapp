<template>
  <a class="createProjectCard">
    <div class="addCircle">
      <span>+</span>
    </div>
    <div class="txt">
      <span>New project</span>
      <h3 class="mainBlue">Create a new project</h3>
    </div>
  </a>
</template>

<script>

</script>

<style  lang="scss">
  .createProjectCard{
    background: #FFFFFF;
    border: $blue-border;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 30px;
  }
  .createProjectCard .txt{
    position: absolute;
    bottom: 30px;
  }
  .createProjectCard h3 {
    color: $blue-color;
  }
  .addCircle{
    font-size: 40px;
    color: $blue-color;
    font-weight: 700;
    background: $light-blue-bg-color;
    border: $blue-border;
    height: 65px;
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0px 2px 30px rgba(71, 105, 255, 0);
    transition: 0.25s ease-out;
  }
  .addCircle span{
    position: relative;
    top: -4px;

  }
  .createProjectCard:hover .addCircle {
    background: $blue-color;
    color: #fff;
    box-shadow: 0px 2px 30px rgba(71, 105, 255, 0.101591);

  }


</style>
