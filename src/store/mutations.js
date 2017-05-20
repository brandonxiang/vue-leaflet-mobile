import * as types from './mutation-types'

export default {
  [types.SET_TITLE](state, title){
    state.title = title
  },

  [types.CHANGE_CITY](state, { coordinates, name }) {
    state.coordinate = coordinates;
    state.cityName = name;
  },

  [types.DELETE_CITY](state, name) {
    const start = state.map.selectedNames.indexOf(name)
    state.map.selectedNames.splice(start, 1)
  },

  [types.TOGGLE_CITY](state, name) {
    console.log(state.map.selectedNames)
    if (state.map.selectedNames.includes(name)) {
      const start = state.map.selectedNames.indexOf(name)
      state.map.selectedNames.splice(start, 1)
    } else {
      state.map.selectedNames.push(name)
    }
  },

  [types.UPDATE_DIRECTION](state, payload) {
    state.direction = payload.direction
  },

  [types.SET_RIGHT_OPTION](state, rightOption){
    state.rightOption = rightOption
  },

  [types.SET_NOW_WEATHER](state, now){
    state.now = Object.assign(state.now, now)
  },

  [types.SET_FUTURE_WEATHER](state, future){
    state.future = future
    state.future[0].day = '今日'
    state.future[1].day = '明天'
    state.future[2].day = '后天'
  }
}