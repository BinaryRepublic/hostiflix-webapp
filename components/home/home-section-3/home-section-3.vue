<template>

  <section class="section-3">
    <div class="container">
      <div class="c-50">
        <p>Approach</p>
        <h2>Built for beginners</h2>
        <p class="padding">
          During our extensive research process we have noticed that it is especially difficult for beginners to find a solution to deploy projects.
          Hostiflix makes it easy to get started and with our Hostiflix Guide you will learn as you use the tool.
        </p>
      </div>

      <div class="c-50">
        <div class="userComposition">
          <div class="element element-01" data-aos="fade-down" data-aos-delay="300" data-aos-duration="600"></div>
          <div class="element element-02" data-aos="zoom-out-down" data-aos-delay="800" data-aos-duration="500"></div>
          <div class="element element-03" data-aos="fade-left" data-aos-delay="1200" data-aos-duration="400"></div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

  export default {
    name: 'HomeSection3',
    components: {

    },

  };
</script>

<style lang="scss">
  /*SECTION 3*/
  .section-3 {
    margin: -55px 0 100px;
  }
  .section-3 .container{
    align-items: center;
  }
  .section-3 h2 {
    margin-bottom: 20px;
  }
  .section-3 p.padding {
    line-height: 160%;
    max-width: 500px;
  }
  .userComposition {
    position: relative;
    max-width: 635px;
    height: 476px;

  }
  .userComposition .element-01 {
    background-image: url("/img/home/user/img.png");
  }
  .userComposition .element-02 {
    background-image: url("/img/home/user/circle.png");
  }
  .userComposition .element-03 {
    background-image: url("/img/home/user/half-circle.png");
  }


</style>
