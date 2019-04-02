<template>
  <section class="container">
    <!--CREATE PROJECTS-->
    <div class="createContainer" data-aos="fade-up" data-aos-duration="600">
      <h2>Create a new project</h2>
      <!-- COMPONENT STARTS-->
      <div class="component">
        <div class="title">
          <h4>Select your GitHub repository</h4>
          <p>We will pull your code from the selected GitHub repository to build and run your application.</p>
        </div>
        <div class="box">
          <div class="row m-b-25">
            <div class="col-left-sm">
              <img src="/img/layout/github-logo.png"/>
            </div>
            <div>
              <h2>GitHub</h2>
              <p>Select the GitHub repository that contains the projects source code.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-left-sm">
            </div>
            <div class="col-100">
              <input class="search" type="search" placeholder="search...">
            </div>
          </div>
          <div class="row">
            <div class="col-left-sm">
              <input type="radio" id="namerepository1" name="repository" value="1">
            </div>
            <div class="col-100">
              <label for="namerepository1">portfolio-webapp</label>
            </div>
          </div>
          <div class="row">
            <div class="col-left-sm">
              <input type="radio" id="namerepository2" name="repository" value="2">
            </div>
            <div class="col-100">
              <label for="namerepository2">CodeUniversity/hostiflix-web-app</label>
            </div>
          </div>
          <div class="row">
            <div class="col-left-sm">
              <input type="radio" id="namerepository3" name="repository" value="3">
            </div>
            <div class="col-100">
              <label for="namerepository3">CodeUniversity/triangl-processing-pipeline</label>
            </div>
          </div>
        </div>
      </div>
      <!--COMPONENT ENDS-->

      <!-- COMPONENT STARTS-->
      <div class="component branchComponent">
        <div class="title">
          <h4>Select GitHub branches</h4>
          <p>Whenever you push changes to your GitHub source branch we will automatically launch your application on a respective target domain.</p>
        </div>
        <div class="box">
          <div class="row m-b-25">
            <div class="col-left-sm">
              <img class="branchIcon" src="/img/layout/branch-icon.png"/>
            </div>
            <div class="col-50">
              <h2>Source branch</h2>
              <p>from your Github repository</p>
            </div>
            <div class="col-50">
              <h2>Target subdomain</h2>
              <p>use it to access your app</p>
            </div>
          </div>
          <div class="row">
            <div class="col-left-sm">
              <input type="checkbox" id="namerepository4" name="repository" value="4">
            </div>
            <div class="col-50">
              <label for="namerepository4">Master</label>
            </div>
            <div class="col-50">
              <p class="targetSub">https://master-sd3.hostiflix.com</p>
            </div>
          </div>
          <div class="row">
            <div class="col-left-sm">
              <input type="checkbox" id="namerepository5" name="repository" value="5">
            </div>
            <div class="col-50">
              <label for="namerepository5">development</label>
            </div>
            <div class="col-50">
              <p class="targetSub">https://development-sd3.hostiflix.com</p>
            </div>
          </div>
          <div class="row">
            <div class="col-left-sm">
              <input type="checkbox" id="namerepository6" name="repository" value="6">
            </div>
            <div class="col-50">
              <label for="namerepository6">type other branch</label>
            </div>
          </div>
        </div>
      </div>
      <!--COMPONENT ENDS-->
      <div class="component saveBtn">
        <button class="blueBtn" type="submit" value="Submit">Launch your app</button>
        <p class="txt-center">Your application will be deployed on our servers and we will start listening to changes in your GitHub repository. Whenever you will push changes to your specified branches we will re-deploy using your latest code.</p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  layout: 'createProject'
};
</script>

<style lang="scss" scoped>
  .container {
    margin: 90px 0 0 0;
    padding: 0;
  }
  .createContainer {
    background: #fff;
    border: $border-blue-light;
    width: 80%;
    max-width: 850px;
    margin: 50px auto;
    border-radius: 6px;
    padding: 50px;

  }
  .createContainer h2 {
    color: $blue;
    margin-bottom: 65px;
  }
  .title {
    margin-bottom: 25px;
  }
  .title h4 {
    font-size: 20px;
    color: $gray-dark;
    margin-bottom: 5px;
    font-weight: 400;
  }
  .createContainer p {
    font-size: 14px;
    color: $gray-light;
  }
  .component {
    margin-bottom: 45px;
  }
  .component:last-child {
    margin-bottom: 0;
  }
  .box {
    border: $border-blue-light;
    border-radius: 4px;
    padding: 35px;
  }
  .box h2{
    font-size: 16px;
    margin-bottom: 2px;
  }
  .box .row {
    display: flex;
    margin-bottom: 15px;
    align-items: center;
  }
  .box .col-left-sm {
    width: 20%;
    max-width: 75px;
  }
  .col-100 {
    width: 100%;
  }
  .col-50 {
    width: 50%;
  }
  .box .col-left-sm img {
    max-width: 40px;
  }
  .search {
    border: $border-blue-light;
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
    width: 100%;
    height: 45px; outline: none;
  }
  .box label {
    font-size: 14px;
  }
  .box input[type="radio"], .box input[type="checkbox"] {
    margin-left: 17px;
  }
  .m-b-25 {
    margin-bottom: 25px!important;
  }
  .saveBtn p{
    padding: 20px 0 0;
  }
  .txt-center {
    text-align: center;
  }

  /*branchComponent*/
  .box .col-left-sm img.branchIcon {
    max-width: 32px;
  }
  .branchComponent p.targetSub {
    color: $blue;
    position: relative;
  }
  .branchComponent p.targetSub:before {
    content: '';
    position: absolute;
    width: 26px;
    height: 16px;
    background-image: url("/img/layout/arrow-target.png");
    background-size: 26px;
    background-position: center;
    left: -40px;
    background-repeat: no-repeat;
    top: 2px;
  }

  .blueBtn {
    border-radius: 5px;
    background: $blue;
    width: 100%;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    height: 50px;
    border: none;
    font-weight: 900;
    cursor: pointer;
    outline: none;
  }

</style>
