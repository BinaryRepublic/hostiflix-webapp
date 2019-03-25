<template>
  <div class="modalWrap">
    <closeIcon @click.native="$store.commit('hideCreateProject')"/>
    <div class="modal">
      <div class="title">
        <h2 class="mainBlue">Welcome to Hostiflix</h2>
        <h4>Let’s start right off with your first project.</h4>
        <div class="selectType">
          <createProjectCard
            link="/createGit"
            imgSrc="/img/layout/icon-repos.png"
            headline="Create new project from GitHub repos"
            subHeadline="Select your existing Github repository to launch your app."
            button="Create project with gitHub"
          />
          <createProjectCard
            link="/createGit"
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

  import createProjectCard from '~/components/_shared/createProject/createProjectCard.vue'
  import closeIcon from '~/components/_shared/closeIcon.vue'

  export default {
    components: {
      createProjectCard, closeIcon
    }
  }

</script>

<style lang="scss">

  /*MODAL*/
  .modalBG {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #f6f8ff;
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
    background: #f6f8ff;

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


</style>
