import { axiosRequest } from './httpHelper';

export const reloadProjects = (store) => {
  return new Promise(resolve => {
    axiosRequest(store, {
      method: 'GET',
      url: '/projects'
    }).then(res => {
      let projects = res.data.projects
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
      store.commit('setProjects', projects)
      resolve()
    })
  })
}
