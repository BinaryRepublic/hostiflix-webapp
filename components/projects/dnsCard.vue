<template>
  <div class="projectCard">
    <div class="table">
      <div class="row titleTable">
        <div class="col-1">Type</div>
        <div class="col-2">Hostname</div>
        <div class="col-3 ">Value</div>
      </div>

      <div class="row">
        <div class="col-1">CNAME</div>
        <div class="col-2">example.com</div>
        <div class="col-3">master-sd3.hostiflix.com <span class="copy"></span></div>
      </div>
      <div class="row">
        <div class="col-1">CNAME</div>
        <div class="col-2">example.com</div>
        <div class="col-3">master-sd3.hostiflix.com <span class="copy"></span></div>
      </div>
      <div class="row">
        <div class="col-1">CNAME</div>
        <div class="col-2">example.com</div>
        <div class="col-3">master-sd3.hostiflix.com <span class="copy"></span></div>
      </div>
      <div class="row">
        <div class="col-1">CNAME</div>
        <div class="col-2">example.com</div>
        <div class="col-3">master-sd3.hostiflix.com <span class="copy"></span></div>
      </div>
      <div class="row">
        <div class="col-1">CNAME</div>
        <div class="col-2">example.com</div>
        <div class="col-3">master-sd3.hostiflix.com <span class="copy"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dnsCard'
  };
</script>

<style lang="scss" scoped>
  .projectCard {
    width: 100%;
    background: #F6F8FF;
    border: 1px solid #D6DDFF;
    box-sizing: border-box;
    border-radius: 6px;
  }

  .table {
    font-size: 14px;
    height: 100%;
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

  .copy{
    cursor: pointer;
    display: inline-block;
    margin-left: 5px;
    margin-top: 1px;
    width: 14px;
    height: 17px;
    background-image: url(~assets/img/layout/copy.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .table .row .col-1 {
    width: 25%;
  }

  .table .row .col-2 {
    width: 25%;
  }

  .table .row .col-3 {
    width: 50%;
    font-weight: bold;
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
