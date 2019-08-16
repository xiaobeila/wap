import * as types from './matutaion-type'
const matutaions = {
  // loading开关
  [types.SET_LOADING] (state, res) {
    state.fetchLoading = res
  }
}

export default matutaions
