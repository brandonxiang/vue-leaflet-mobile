import * as types from './mutation-types'

export default {
  [types.CHANGE_CITY](stat, { coordinates, cityName }) {
    stat.coordinate = coordinates;
    stat.cityName = cityName;
  },
  [types.DELETE_CITY](state, name) {
    const start = state.selectedNames.indexOf(name)
    state.selectedNames.splice(start, 1)
  },
  [types.TOGGLE_CITY](state, name) {
    if (state.selectedNames.includes(name)) {
      const start = state.selectedNames.indexOf(name)
      state.selectedNames.splice(start, 1)
    } else {
      state.selectedNames.push(name)
    }
  },
  [types.UPDATE_DIRECTION](state, payload) {
    state.direction = payload.direction
  },
}