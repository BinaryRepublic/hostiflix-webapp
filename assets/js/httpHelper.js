import axios from 'axios'

const Cookie = process.client ? require('js-cookie') : undefined

export function axiosRequest (store, config, authRequired = true) {
  return new Promise((resolve, reject) => {
    const auth = store.state.auth
    if (auth) {
      setAuthHeaders(config, auth)
    } else if (authRequired) {
      reject('access-token missing')
      return
    }
    const axiosInstance = axios.create({
      ...config,
      baseURL: process.env.apiBaseUrl
    })
    axiosInstance.interceptors.response.use(getLatestAccessTokenInterceptor(store));
    axiosInstance(config).then(resolve).catch(reject)
  })
}

function setAuthHeaders (axiosConfig, auth) {
  const { accessToken } = auth
  axiosConfig.headers = {
    ...axiosConfig.headers,
    'Access-Token': accessToken
  }
}

function getLatestAccessTokenInterceptor (store) {
  return (res) => {
    const latestAccessToken = res.headers['latest-access-token']

    if (latestAccessToken) {
      const auth = { accessToken: latestAccessToken }
      store.commit('setAuth', auth)
      Cookie.set('auth', auth)
    }
    return res
  }
}
