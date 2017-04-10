export default {
  changeMarker(stat, { coordinates, cityName }) {
    stat.coordinate = coordinates;
    stat.cityName = cityName;
  },
  deleteCity(state, name){
    const start = state.selectedNames.indexOf(name)
    state.selectedNames.splice(start,1)
  },
  updateDirection(state, payload) {
    state.direction = payload.direction
  },
}