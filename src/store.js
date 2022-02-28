import { createStore } from 'vuex';

export const store = createStore({
  state: {
    firstLoaded: true,
    repositories: []
  },
  getters: {
    repositories(state) {
      return state.repositories
    },
    firstLoaded(state) {
      return state.firstLoaded
    }
  },
  mutations: {
    changeHeadState(state) {
      state.firstLoaded = !state.firstLoaded
    },
    saveRepositories(state, repos) {
      state.repositories = repos
    }
  }
})