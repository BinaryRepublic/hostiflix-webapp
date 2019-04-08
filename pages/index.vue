<template>
  <div>
    <home-navbar/>
    <home-section1/>
    <home-section2/>
    <home-section3/>
    <home-section4/>
    <home-footer/>
  </div>
</template>

<script>
import Login from '../components/_shared/login/login';
import HomeNavbar from '../components/home/home-navbar/home-navbar';
import HomeSection1 from '../components/home/home-section-1/home-section-1';
import HomeSection2 from '../components/home/home-section-2/home-section-2';
import HomeSection3 from '../components/home/home-section-3/home-section-3';
import HomeSection4 from '../components/home/home-section-4/home-section-4';
import HomeFooter from '../components/home/home-footer/home-footer';

export default {
  components: {
    Login, HomeNavbar, HomeSection1, HomeSection2, HomeSection3, HomeSection4, HomeFooter,
  },
  layout: 'home',
};
</script>


<style lang="scss">
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
  }

  h1 {
    color: $blue;
    font-size: 50px;
  }
  h2 {
    font-size: 24px;
    color: $blue;
  }
  p {
    line-height: 140%;
  }

  .c-50 {
    width: 50%;
  }
  .blueBtn {
    border-radius: 5px;
    background: $blue;
    width: 100%;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    height: 50px;
    border: none;
    font-weight: 900;
    cursor: pointer;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    transition: .20s all ease-in-out;
  }
  .blueBtn:hover {
    background: $blue-dark;
  }
</style>
