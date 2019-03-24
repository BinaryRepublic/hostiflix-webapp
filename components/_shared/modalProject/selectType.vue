<template>
  <div class="selectType">
    <nuxt-link to="/createGit" class="option">
      <img src="../../../assets/img/layout/icon-repos.png" />
      <h4>Create new project from GitHub repos</h4>
      <p>Select your existing Github repository to launch your app.</p>
      <div class="btn-01">Create project with gitHub</div>
    </nuxt-link>
    <a class="option">
      <img src="../../../assets/img/layout/icon-upload.png" />
      <h4>Drag and drop your site folder here</h4>
      <p>Launch your app by uploading your local files.</p>
      <div class="btn-01">Select files from your computer</div>
    </a>
  </div>
</template>


<style lang="scss">
  .selectType {
    display: flex;
  }
  .selectType .option{
    background: #FFFFFF;
    border: 1px solid #D6DDFF;
    border-radius: 6px;
    max-width: 330px;
    padding: 30px;
    margin: 10px;
    box-shadow: 0px 2px 30px rgba(71, 105, 255, 0);
    transition: 0.3s ease-out;
    cursor: pointer;
  }
  .selectType > .option:hover {
    box-shadow: 0px 2px 30px rgba(71, 105, 255, 0.101591);
  }
  .selectType h4{
    color: $blue-color;
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .selectType .option img{
    margin: 30px 0;
  }
  .selectType p {
    margin-bottom: 30px;
    color: $light-gray-color;
  }
  .btn-01 {
    color: $blue-color;
    background: #F6F8FF;
    border: 1px solid #D6DDFF;
    text-align: center;
    border-radius: 6px;
    padding: 15px 5px;
    font-weight: 900;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: -0.2px;
  }


</style>
