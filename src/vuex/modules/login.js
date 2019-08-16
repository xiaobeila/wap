import * as types from '../matutaion-type'
const state = {
  token: 0
}

const mutations = {
  [types.CHANGE_TOKEN] (state, res) {
    state.token = res
  }
}

export default {
  state,
  mutations
}
