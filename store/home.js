export const state = () => ({
  showLoginPopup: false
});

export const mutations = {
  openLoginPopup (state) {
    state.showLoginPopup = true;
  },
  closeLoginPopup (state) {
    state.showLoginPopup = false;
  }
};
