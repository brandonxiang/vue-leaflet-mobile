const state = {
  cityName: '深圳',
  coordinate: [22.5455537937, 114.0544373601],
  direction: 'forward',

};

const mutations = {
  changeMarker(stat, {coordinates, cityName}) {
    stat.coordinate = coordinates;
    stat.cityName = cityName;
  },
  updateDirection(state, payload) {
    state.direction = payload.direction
  },
};

export default {
  state,
  mutations,
};
