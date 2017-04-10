export default {
  CHANGE_CITY(stat, { coordinates, cityName }) {
    stat.coordinate = coordinates;
    stat.cityName = cityName;
  },
  DELETE_CITY(state, name){
    const start = state.selectedNames.indexOf(name)
    state.selectedNames.splice(start,1)
  },
  updateDirection(state, payload) {
    state.direction = payload.direction
  },
}