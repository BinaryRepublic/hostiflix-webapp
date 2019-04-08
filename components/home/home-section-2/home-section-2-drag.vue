<template>

  <div class="projectTypeContainer">
    <div class="gitHubContainer">
      <div class="composition dragDrop">
        <div class="element element-01"  data-aos="fade-down" data-aos-delay="400" data-aos-duration="800"></div>
        <div class="element element-02"  data-aos="fade-down" data-aos-delay="400" data-aos-duration="800"></div>
        <div class="element element-03"  data-aos="fade-down" data-aos-delay="400" data-aos-duration="800"></div>
        <div class="element element-04"  data-aos="fade-down" data-aos-delay="400" data-aos-duration="800"></div>
        <!--<div class="element element-05"></div>-->
      </div>
      <div class="steps">
        <div>
          <img src="~/static/img/home/type-project/git/icons/02.png"/>
          <h4>1. Code ready to launch</h4>
          <p>You wrote your app (like a website) with any editor and you are now ready to launch it to the internet.</p>
        </div>
        <div>
          <img src="~/static/img/home/type-project/drag-drop/icons/02.png"/>
          <h4>2. Drag and drop to hostiflix </h4>
          <p>Just drag your whole source code into our interface and we will publish it for you.</p>
        </div>
        <div>
          <img src="~/static/img/home/type-project/drag-drop/icons/03.png"/>
          <h4>3. We publish your app</h4>
          <p>We are publishing your application directly!</p>
        </div>
        <div>
          <img src="~/static/img/home/type-project/drag-drop/icons/04.png"/>
          <h4>4. Update your app</h4>
          <p>Whenever you change your source code locally you can just updating it per drag and drop again</p>
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
  .dragDrop .element-01 {
    background-image: url("../../../static/img/home/type-project/drag-drop/macbook.png");
    z-index: 2;
  }
  .dragDrop .element-02 {
    background-image: url("../../../static/img/home/type-project/drag-drop/drag-drop-logo.png");
    z-index: 3;
  }
  .dragDrop .element-03 {
    background-image: url("../../../static/img/home/type-project/elements-back.png");
    z-index: 1;
  }
  .dragDrop .element-04 {
    background-image: url("../../../static/img/home/type-project/elements-front.png");
    z-index: 3;
  }
  .dragDrop .element-05 {
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
