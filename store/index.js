export const strict = false

export const state = () => ({
  token: null
})

export const mutations = {
  setConnection(state, token) {
    state.token = token
  }
}
export const getters = {
  getConnectionInfos: (state) => {
    return { token: state.token }
  },
  getUserInfo: (state) => {
    return { token: state.token }
  }
}
