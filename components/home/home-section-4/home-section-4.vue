<template>

  <section class="section-4">
    <div class="container">
      <div class="logo-app" data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="600"></div>
      <!--<img class="logo-app" src="../static/img/home/app-logo.png" data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="600"/>-->
      <div class="title">
        <h4>Simplicity is our key</h4>
        <h2>Simplicity</h2>
      </div>
      <p>
        Hostiflix is the first tool that allows you to deploy your projects directly without previous knowledge.
        The deployment process becomes like a stone falling to the ground (very simple).
        In addition, Hostiflix provides a live guide that helps beginners to understand the processes in the background and try them out for themselves. 
      </p>
      <ul>
        <li data-aos="zoom-out-down" data-aos-delay="400" data-aos-duration="500">
          All the knowledge how Deployment works
        </li>
        <li data-aos="zoom-out-down" data-aos-delay="750" data-aos-duration="500">
          A powerful and simple UI
        </li>
        <li data-aos="zoom-out-down" data-aos-delay="1150" data-aos-duration="500">
          A simple deployment API
        </li>
      </ul>
      <button class="blueBtn" @click="$store.commit('home/openLoginPopup')">Get started</button>

    </div>
  </section>

</template>

<script>

  export default {
    name: 'HomeSection4'
  }
</script>

<style lang="scss" scoped>
  /*SECTION 4*/
  .section-4 {
    margin-bottom: 100px;
  }
  .section-4 .container{
    display: block;
    text-align: center;
  }
  .logo-app {
    max-width: 100px;
    margin: 0 auto 60px;
    position: relative;
    z-index: 2;
    background-image: url("../../../static/img/home/app-logo.png");
    background-repeat: no-repeat;
    background-size: contain;
    height: 100px;
  }
  .section-4 .title {
    position: relative;
    margin-bottom: 40px;
  }
  .section-4 h4{
    font-size: 36px;
    color: $blue;
    position: relative;
    z-index: 1;
    font-weight: 600;
  }
  .section-4 h2{
    font-size: 140px;
    position: absolute;
    z-index: 0;
    color: $blue-lightest;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
  }
  .section-4 p {
    color: $blue;
    max-width: 750px;
    margin: 0 auto 50px;
    position: relative;
    z-index: 1;
    line-height: 160%;
  }
  .section-4 ul {
    padding: 0;
    margin-bottom: 40px;
  }
  .section-4 ul li {
    list-style: none;
    max-width: 500px;
    padding: 19px 20px 19px 85px;
    position: relative;
    text-align: left;
    margin: 0 auto 15px;
    background: #fff;
    box-shadow: 0 2px 25px rgba(71, 105, 255, 0.13);
    border-radius: 6px;

  }
  .section-4 ul li:before {
    content: '';
    position: absolute;
    background-image: url("../../../static/img/home/check.png");
    background-repeat: no-repeat;
    background-size: 30px;
    width: 30px;
    height: 30px;
    left: 35px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section-4 .blueBtn {
    max-width: 245px;
  }


</style>
