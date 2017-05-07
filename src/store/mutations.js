import * as types from './mutation-types'

export default {
  [types.SET_TITLE](state, title){
    state.title = title
  },
  [types.CHANGE_CITY](state, { coordinates, cityName }) {
    state.coordinate = coordinates;
    state.cityName = cityName;
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