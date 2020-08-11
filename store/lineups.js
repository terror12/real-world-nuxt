import LineupService from '@/services/LineupService.js'
export const state = () => ({
  lineups: [],
  lineup: {},
})
export const mutations = {
  SET_LINEUPS(state, lineups) {
    state.lineups = lineups
  },
  SET_LINEUP(state, lineup) {
    state.lineup = lineup
  },
}
export const actions = {
  fetchLineups({ commit }) {
    return LineupService.getLineups().then((response) => {
      commit('SET_LINEUPS', response.data)
    })
  },
  fetchLineup({ commit }, id) {
    return LineupService.getLineup(id).then((response) => {
      commit('SET_LINEUP', response.data)
    })
  },
}
