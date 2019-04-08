<template>

  <div class="projectTypeContainer">
    <div class="gitHubContainer">
      <div class="composition gitHub">
        <div class="element element-01"  data-aos="fade-down" data-aos-delay="400" data-aos-duration="800"></div>
        <div class="element element-02"  data-aos="fade-down" data-aos-delay="800" data-aos-duration="800"></div>
        <div class="element element-03"  data-aos="fade-right" data-aos-delay="1200" data-aos-duration="800"></div>
        <div class="element element-04"  data-aos="fade-left" data-aos-delay="1600" data-aos-duration="800"></div>
        <!--<div class="element element-05"></div>-->
      </div>
      <div class="steps">
        <div>
          <img src="~/static/img/home/type-project/git/icons/02.png"/>
          <h4>1. Code ready to launch</h4>
          <p>You wrote your app (like a website) with any editor and you are now ready to launch it to the internet.</p>
        </div>
        <div>
          <img src="~/static/img/home/type-project/git/icons/03.png"/>
          <h4>2. Push to Github</h4>
          <p>You can use different branches to launch multiple versions of your app.</p>
        </div>
        <div>
          <img src="~/static/img/home/type-project/git/icons/01.png"/>
          <h4>3. We publish your app</h4>
          <p>We are launching your application by using the code from your Github repository.</p>
        </div>
        <div>
          <img src="~/static/img/home/type-project/git/icons/04.png"/>
          <h4>4. Update your app</h4>
          <p>Whenever you change something locally and push it to Github we will update the code on our servers automatically.</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'SectionGithub',
    components: {

    },

  };
</script>

<style lang="scss" >


  .projectTypeContainer {
    position: relative;
  }
  .projectTypeContainer .composition {
    position: relative;
    width: 90%;
    max-width: 891px;
    height: 420px;
    margin: 0 auto;
  }
  .gitHub .element-01 {
    background-image: url("../../../static/img/home/type-project/git/macbook.png");
    z-index: 2;
  }
  .gitHub .element-02 {
    background-image: url("../../../static/img/home/type-project/git/git-logo.png");
    z-index: 3;
  }
  .gitHub .element-03 {
    background-image: url("../../../static/img/home/type-project/elements-back.png");
    z-index: 1;
  }
  .gitHub .element-04 {
    background-image: url("../../../static/img/home/type-project/elements-front.png");
    z-index: 3;
  }
  .gitHub .element-05 {
    background-image: url("../../../static/img/home/type-project/cloud.png");
    z-index: 1;
  }
  .steps {
    display: flex;
    justify-content: space-between;
  }
  .steps div{
    width: 23%;

  }
  .steps img {
    max-width: 100px;
  }
  .steps h4{
    color: $blue;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 400;
  }
  .steps p {
    padding: 0 10px;
  }
</style>
