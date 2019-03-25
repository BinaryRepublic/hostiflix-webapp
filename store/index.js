export const state = () => ({
  showCreateProject: false
})

export const mutations = {
  showCreateProject(state) {
    state.showCreateProject = true
  },
  hideCreateProject(state) {
    state.showCreateProject = false
  }
}
