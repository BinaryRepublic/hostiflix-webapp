const cookieParser = process.server ? require('cookieparser') : undefined;

export const state = () => ({
  auth: null,
  showLogin: false,
  showSelectProjectType: false,
  projects: null
})

export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  },
  showSelectProjectType (state) {
    state.showSelectProjectType = true
  },
  hideSelectProjectType (state) {
    state.showSelectProjectType = false
  },
  setProjects (state, projects) {
    state.projects = projects
  }
};

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let auth = null;
    if (req.headers.cookie) {
      const parsed = cookieParser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        console.error(err)
        return
      }
    }
    commit('setAuth', auth)
  }
};
