const cookieParser = process.server ? require('cookieparser') : undefined;

export const state = () => ({
  auth: null,
  showLogin: false,
  showSelectProjectType: false
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
