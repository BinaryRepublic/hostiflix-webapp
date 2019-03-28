const cookieParser = process.server ? require('cookieparser') : undefined;

export const state = () => ({
  auth: null,
  showLogin: false,
  showCreateProject: false
})

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
  showCreateProject(state) {
    state.showCreateProject = true
  },
  hideCreateProject(state) {
    state.showCreateProject = false
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null;
    if (req.headers.cookie) {
      const parsed = cookieParser.parse(req.headers.cookie);
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        console.error(err);
        return
      }
    }
    commit('setAuth', auth);
  }
};
