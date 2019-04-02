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
export default {
  name: 'projectCreateCard'
};
</script>

<style lang="scss" scoped>
  .createProjectCard{
    background: #FFFFFF;
    border: $border-blue-light;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 30px;
  }
  .createProjectCard .txt{
    position: absolute;
    bottom: 30px;
  }
  .createProjectCard h3 {
    color: $blue;
  }
  .addCircle{
    font-size: 40px;
    color: $blue;
    padding-top: 7px;
    font-weight: 700;
    background: $blue-lightest;
    border: $border-blue-light;
    height: 65px;
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 2px 30px rgba(71, 105, 255, 0);
    transition: 0.25s ease-out;
  }
  .addCircle span{
    position: relative;
    top: -4px;

  }
  .createProjectCard:hover .addCircle {
    background: $blue;
    color: #fff;
    box-shadow: 0 2px 30px rgba(71, 105, 255, 0.101591);

  }

</style>
