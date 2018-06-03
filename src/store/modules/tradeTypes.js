import api from '@/utils/backend-api'

const state = {
  loading: false,
  types: null,
  type: null
}

const actions = {
  getAllTypes({
    commit
  }) {
    commit('setLoading', true);
    api.getData('tradeTypes').then(res => {
      commit('setTypes', res.data)
      commit('setLoading', false)
    });
  }
}

const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },
  setTypes(state, types) {
    state.types = types
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
