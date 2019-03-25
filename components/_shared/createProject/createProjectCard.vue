<template>
  <nuxt-link v-bind:to="link" v-bind:class="{'coming-soon':comingSoon}" class="option" @click.native="$store.commit('hideCreateProject')">
    <img v-bind:src="imgSrc" />
    <h4>{{headline}}</h4>
    <p>{{subHeadline}}</p>
    <div class="btn-01">{{button}}</div>
    <p class="coming-soon-btn" v-if="comingSoon">Coming soon!</p>
  </nuxt-link>
</template>

<script>

  export default {
    props: {
      link: String,
      imgSrc: String,
      headline: String,
      subHeadline: String,
      button: String,
      comingSoon: {
        type: Boolean,
        default: false
      }
    }
  }

</script>

<style lang="scss">
  .selectType {
    display: flex;
  }
  .selectType .option{
    background: #FFFFFF;
    border: 1px solid #D6DDFF;
    border-radius: 6px;
    max-width: 330px;
    padding: 30px;
    margin: 10px;
    box-shadow: 0px 2px 30px rgba(71, 105, 255, 0);
    transition: 0.3s ease-out;
    cursor: pointer;
    position: relative;
  }
  .selectType > .option:hover {
    box-shadow: 0px 2px 30px rgba(71, 105, 255, 0.101591);
  }
  .selectType h4{
    color: $blue-color;
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .selectType .option img{
    margin: 30px 0;
  }
  .selectType p {
    margin-bottom: 30px;
    color: $light-gray-color;
  }
  .btn-01 {
    color: $blue-color;
    background: #F6F8FF;
    border: 1px solid #D6DDFF;
    text-align: center;
    border-radius: 6px;
    padding: 15px 5px;
    font-weight: 900;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: -0.2px;
  }

  /*COMING SOON*/
  .selectType p.coming-soon-btn {
    background: #EFC300;
    color: #fff;
    padding: 3px 15px 5px;
    display: inline-block;
    border-radius: 4px;
    position: absolute;
    top: -13px;
    right: 20px;
    font-size: 13px;
    font-weight: 800;
    opacity: 1!important;
  }
  .coming-soon .btn-01 {
    display: none;
  }
  .selectType .coming-soon {
    background: $blue-color-4;
  }
  .selectType .coming-soon img, .selectType .coming-soon h4, .selectType .coming-soon p{
    opacity: 0.4;
  }

</style>
