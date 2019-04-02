<template>
  <div class="modalWrap">
    <round-button type="CLOSE" :is-fixed="true" @click.native="$store.commit('hideSelectProjectType')"/>
    <div class="modal">
      <div class="title">
        <h2 data-aos="fade-down" data-aos-delay="50" data-aos-duration="600">Welcome to Hostiflix</h2>
        <h4 data-aos="fade-down" data-aos-duration="600">Let’s start right off with your first project.</h4>
        <div class="selectType" data-aos="fade-up" data-aos-duration="600">
          <nuxt-link to="/project/create">
            <select-project-type-card
              imgSrc="/img/layout/icon-repos.png"
              headline="Create new project from GitHub repos"
              subHeadline="Select your existing Github repository to launch your app."
              button="Create project with gitHub"
            />
          </nuxt-link>
          <select-project-type-card
            imgSrc="/img/layout/icon-upload.png"
            headline="Drag and drop your site folder here"
            subHeadline="Launch your app by uploading your local files."
            button="Select files from your computer"
            :comingSoon="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectProjectTypeCard from './selectProjectTypeCard';
import RoundButton from '../roundButton';
export default {
  name: 'selectProjectType',
  components: {
    RoundButton,
    SelectProjectTypeCard

  }
};
</script>

<style lang="scss" scoped>

  /*MODAL*/
  .modalBG {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $blue-lightest;
    z-index: 99;
    position: fixed;
  }
  .modalWrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: $blue-lightest;

  }
  .modal {
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .modal .title > h2 {
    font-size: 40px;
  }
  .modal .title > h4 {
    margin-bottom: 40px;
  }
  .title h2 {
    color: $blue;
  }

</style>
