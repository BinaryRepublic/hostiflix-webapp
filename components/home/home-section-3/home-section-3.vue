<template>

  <section class="section-3">
    <div class="container">
      <div class="c-50">
        <p>The approach</p>
        <h2>Build for the user only</h2>
        <p class="padding">
          During our extensive research process we have noticed that it is especially difficult for beginners to find a solution how to deploy their projects.
          Hostiflix should help with this approach. Furthermore it should give the beginner the knowledge to become a professional.
          As a professional you no longer have the time to deal with long-term set-ups, which is why Hostiflix makes this possible in a few seconds.
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
    padding-left: 50px;
    max-width: 500px;
  }
  .userComposition {
    position: relative;
    max-width: 635px;
    height: 476px;

  }
  .userComposition .element-01 {
    background-image: url("../../../static/img/home/user/img.png");
  }
  .userComposition .element-02 {
    background-image: url("../../../static/img/home/user/circle.png");
  }
  .userComposition .element-03 {
    background-image: url("../../../static/img/home/user/half-circle.png");
  }


</style>
