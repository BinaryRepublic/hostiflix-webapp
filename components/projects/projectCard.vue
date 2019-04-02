<template>
  <a class="projectCard">
    <div class="table">
      <div class="row titleTable">
        <div class="col-1">Branch</div>
        <div class="col-2">Updated</div>
        <div class="col-3">Domain</div>
      </div>

      <nuxt-link class="row" to="/project/Tmkde3d">
        <div class="col-1">master</div>
        <div class="col-2">20 sec ago</div>
        <div class="col-3">master-sd3.hostiflix.com</div>
      </nuxt-link>

      <nuxt-link class="row" to="/project/Tmkde3d">
        <div class="col-1">development</div>
        <div class="col-2">1 min ago</div>
        <div class="col-3">development-sd3.hostiflix.com</div>
      </nuxt-link>

      <nuxt-link class="row" to="/project/Tmkde3d">
        <div class="col-1">development</div>
        <div class="col-2">1 min ago</div>
        <div class="col-3">development-sd3.hostiflix.com</div>
      </nuxt-link>

      <nuxt-link class="row" to="/project/Tmkde3d">
        <div class="col-1">development</div>
        <div class="col-2">1 min ago</div>
        <div class="col-3">development-sd3.hostiflix.com</div>
      </nuxt-link>

      <nuxt-link class="row" to="/project/Tmkde3d">
        <div class="col-1">development</div>
        <div class="col-2">1 min ago</div>
        <div class="col-3">development-sd3.hostiflix.com</div>
      </nuxt-link>

      <nuxt-link class="row" to="/project/Tmkde3d">
        <div class="col-1">development</div>
        <div class="col-2">1 min ago</div>
        <div class="col-3">development-sd3.hostiflix.com</div>
      </nuxt-link>

    </div>
    <div class="txt">
      <div class="txtContent">
        <div class="projectTypeImg"></div>
        <div>
          <h3 class="mainBlue">portfolio-webapp</h3>
          <span>Created 3 minutes ago</span>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'projectCard'
  };
</script>

<style lang="scss">
  .projectCard {
    background: #F6F8FF;
    border: 1px solid #D6DDFF;
    box-sizing: border-box;
    border-radius: 6px;

  }

  .table {
    font-size: 14px;
    height: 67%;
    background: #fff;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: 1px solid #D6DDFF;
    overflow-y: auto;
  }

  .table .titleTable {
    font-weight: 800;
    position: absolute;
    z-index: 2;
    width: 100%;
    background: #fff;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .table .row:nth-child(2) {
    margin-top: 48px;
  }

  .table .row {
    display: flex;
    border-bottom: 1px solid #D6DDFF;
    padding: 15px 30px;
    color: $gray-light;
  }

  .table .row:last-child {
    border-bottom: 0;
  }

  .table .row .col-1 {
    width: 25%;
  }

  .table .row .col-2 {
    width: 25%;
  }

  .table .row .col-3 {
    width: 50%;
  }

  .projectCard .txt {
    height: 33%;
    display: flex;
    align-items: center;
    padding: 0 30px;
  }

  .projectCard .txt h3 {
    font-size: 18px;
    color: $blue;
  }

  .projectCard .txt span {
    font-size: 14px;
  }

  .projectCard .txt .projectTypeImg {
    background-size: contain;
    width: 40px;
    height: 40px;
    background-image: url("/img/layout/github-logo.png");
    margin-right: 15px;
  }

  .projectCard .txt .txtContent {
    display: flex;
  }

  .table::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  .table::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  .table::-webkit-scrollbar-thumb {
    background-color: #d7d7d7;
    opacity: .1;
  }

</style>
