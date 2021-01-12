export default {
  state: {
    counter: 0
  },
  getters: {
    computedCounter(state) {
      return state.counter * 2
    }
  },
  mutations: {
    changeCounter(state, val) {
      return state.counter += val
    }
  },
  actions: {
    asyncChangeCounter({commit}, payload) {
      setTimeout(() => {
        commit('changeCounter', payload.val)
      }, payload.delay)
    }
  }
}
