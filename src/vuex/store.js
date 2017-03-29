const state = {
  coordinate: [22.5455537937,114.0544373601],
  direction: 'forward',
};

const mutations = {
  changeMarker(stat, coordinate) {
    stat.coordinate = coordinate;
  },
  updateDirection (state, payload) {
      state.direction = payload.direction
    }
};

export default {
  state,
  mutations,
};
