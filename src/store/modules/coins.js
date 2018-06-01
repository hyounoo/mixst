import api from '@/utils/backend-api'

const state = {
  callingAPI: false,
  coins: ['BTC', 'BCH', 'LTC']
}

const actions = {
  updateCoins({
    commit
  }, coins) {
    commit('setCoins', coins)
  }
}

const mutations = {
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
