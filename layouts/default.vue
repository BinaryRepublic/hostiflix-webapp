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
  mounted () {
    let projects = [
      {
        id: '345345-34534',
        name: 'Hostiflix-Web',
        branches: [
          {
            id: '234234-253453457',
            name: 'master',
            subDomain: 'https://master.3kd.hostiflix.com',
            jobs: [
              {
                id: '243234-234234',
                status: 'DEPLOYMENT_SUCCESSFUL',
                createdAt: '2019-04-04T15:09:01.311Z',
                finishedAt: '2019-04-08T16:04:50.311Z'
              },
              {
                id: '242334-234235',
                status: 'DEPLOYMENT_SUCCESSFUL',
                createdAt: '2019-03-04T15:09:01.311Z',
                finishedAt: '2019-03-04T15:09:25.311Z'
              },
              {
                id: '242334-234236',
                status: 'DEPLOYMENT_SUCCESSFUL',
                createdAt: '2019-04-02T15:09:01.311Z',
                finishedAt: '2019-04-02T15:09:25.311Z'
              }
            ]
          }
        ]
      },
      {
        id: '3453435-34534',
        name: 'Hostiflix-APP',
        branches: [
          {
            id: '234234-253453456',
            name: 'dev',
            subDomain: 'https://master.f3d.hostiflix.com',
            jobs: [
              {
                id: '243234-2342342',
                status: 'DEPLOYMENT_SUCCESSFUL',
                createdAt: '2019-04-04T15:09:01.311Z',
                finishedAt: '2019-04-04T15:09:25.311Z'
              },
              {
                id: '242334-2342343',
                status: 'DEPLOYMENT_SUCCESSFUL',
                createdAt: '2019-03-04T15:09:01.311Z',
                finishedAt: '2019-03-04T15:09:25.311Z'
              },
              {
                id: '242334-2342344',
                status: 'DEPLOYMENT_SUCCESSFUL',
                createdAt: '2019-04-02T15:09:01.311Z',
                finishedAt: '2019-04-02T15:09:25.311Z'
              }
            ]
          }
        ]
      }
    ]
    projects.forEach((project, pindex) => {
      project.branches.forEach((branch, bindex) => {
        if (branch.jobs) {
          branch.jobs.forEach((job, jindex) => {
            projects[pindex].branches[bindex].jobs[jindex]['branch'] = branch.name
            projects[pindex].branches[bindex].jobs[jindex]['subDomain'] = branch.subDomain
          })
        }
      })
    })

    this.$store.commit('setProjects', projects)
  }
}
</script>

<style lang="scss">
  body {
    background: $blue-lightest;
  }
</style>
