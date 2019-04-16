<template>
  <section class="section-1">
    <div class="container">
      <div class="txt c-50">
        <h1>
          Hosting <br>made easy
        </h1>
        <h2>
          We enable you to launch any application on a server within seconds, by killing any configuration overhead.
        </h2>
        <button class="blueBtn" @click="$store.commit('home/openLoginPopup')">Get started</button>
      </div>
      <div class="airBalloon c-50">
        <div class="element element-01" data-aos="fade-down" data-aos-delay="0" data-aos-duration="800"></div>
        <div class="element element-02" data-aos="zoom-out-down" data-aos-delay="600" data-aos-duration="800"></div>
        <div class="element element-03" data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="600"></div>
        <div class="element element-04" data-aos="zoom-in-up" data-aos-delay="1200" data-aos-duration="500"></div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'HomeSection1'
}
</script>

<style lang="scss">
  /*SECTION 1*/
  .section-1 {
    background: #fff;
    padding: 80px 0;

    .container {
      align-items: center;
    }
  }

  .section-1 .txt{
    padding-right: 6%;
  }
  .section-1 h1{
    margin-bottom: 30px;
  }
  .section-1 h2{
    font-size: 20px !important;
    font-weight: 400;
    max-width: 430px;
    margin-bottom: 40px;
    line-height: 140%;
    color: $gray-light !important;
  }
  .airBalloon {
    position: relative;
    width: 90%;
    max-width: 615px;
    height: 580px;
    right: -0px;
  }
  .element {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .section-1 .element-01 {
    background-image: url("../../../static/img/home/air-balloon/01.png");
  }
  .section-1 .element-02 {
    background-image: url("../../../static/img/home/air-balloon/02.png");
  }
  .section-1 .element-03 {
    background-image: url("../../../static/img/home/air-balloon/03.png");
    z-index: 2;
  }
  .section-1 .element-04 {
    background-image: url("../../../static/img/home/air-balloon/04.png");
  }
  .section-1 .blueBtn {
    max-width: 245px;
  }


</style>
