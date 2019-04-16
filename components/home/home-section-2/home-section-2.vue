<template>

  <section class="section-2">
    <div class="container">
      <h2>Launch your app...</h2>
        <tabs>
          <tab name="From GitHub" :selected="true">
            <home-section2-github/>
          </tab>
          <tab name="Per drag and drop">
            <home-section2-drag/>
          </tab>
      </tabs>
    </div>
  </section>

</template>

<script>
  import Tabs from '~/components/home/tabs'
  import Tab from '~/components/home/tab'
  import HomeSection2Github from '~/components/home/home-section-2/home-section-2-github'
  import HomeSection2Drag from '~/components/home/home-section-2/home-section-2-drag'

  export default {
    name: 'HomeSection2',
    components: {
      Tabs, Tab, HomeSection2Github, HomeSection2Drag
    }
  }
</script>

<style lang="scss">
  .section-2 {
    background-image: url("/img/home/type-project/background-1920.png");
    background-position: center 400px ;
    background-repeat: no-repeat;

    .container {
      display: block !important;
      text-align: center;
      padding: 0 0 150px 0;
    }
  }
  .section-2 h2 {
    width: 100%;
    margin-bottom: 30px;
  }
  .section-2 .tabs ul{
    position: relative;
    z-index: 50;
  }
  .section-2 .tabs ul{
    display: inline-flex;
    margin: 0 auto 5px;
    border: $border-blue-light;
    background: $blue-lightest;
    height: 50px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .section-2 .tabs li {
    list-style: none;
  }
  .section-2 .tabs li a {
    height: 50px;
    line-height: 50px;
    border-radius: 30px;
    padding: 0 30px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: #8C8C8C;
    display: inline-flex;
  }
  .section-2 .tabs li.is-active a{
    background: $blue;
    color: #fff;

  }


</style>
