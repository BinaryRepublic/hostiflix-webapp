<template>
  <div>
    <logo />
    <select-project-type v-if="$store.state.showSelectProjectType"/>
    <nav-left />
    <nuxt/>
    <profile-button />
  </div>
</template>
<script>
import { axiosRequest } from '../assets/js/httpHelper'
import Logo from '../components/_shared/logo'
import NavLeft from '../components/_shared/navLeft'
import ProfileButton from '../components/_shared/profileButton'
import SelectProjectType from '../components/_shared/selectProjectType/selectProjectType'

export default {
  components: {
    SelectProjectType,
    ProfileButton,
    NavLeft,
    Logo
  },
  head: {
    bodyAttrs: {
      class: 'default'
    }
  },
  mounted () {
    axiosRequest(this.$store, {
      method: 'GET',
      url: '/projects'
    }).then(res => {
      let projects = res.data.projects
      console.log(projects)
      projects.forEach((project, pindex) => {
        if (project.branches) {
          project.branches.forEach((branch, bindex) => {
            if (branch.jobs) {
              branch.jobs.forEach((job, jindex) => {
                projects[pindex].branches[bindex].jobs[jindex]['branch'] = branch.name
                projects[pindex].branches[bindex].jobs[jindex]['subDomain'] = branch.subDomain
              })
            }
          })
        }
      })
      this.$store.commit('setProjects', projects)
    })
  }
}
</script>

<style lang="scss">
  body.default {
    background: $blue-lightest;
  }
</style>
