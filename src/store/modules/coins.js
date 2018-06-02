import api from '@/utils/backend-api'

const state = {
  loading: false,
  coins: null
}

const actions = {
  getAllCoins({
    commit
  }) {
    commit('setLoading', true);
    api.getData('coins').then(res => {
      commit('setCoins', res.data)
      commit('setLoading', false)
    });
  },
  updateCoins({
    commit
  }, coins) {
    commit('setCoins', coins)
  }
}

const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },
  setCoins(state, coins) {
    state.coins = coins
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
