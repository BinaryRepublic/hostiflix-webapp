export const state = () => ({
  showModal: false
})

export const mutations = {
  showModal(state) {
    state.showModal = true
  },
  hideModal(state) {
    state.showModal = false
  }
}
