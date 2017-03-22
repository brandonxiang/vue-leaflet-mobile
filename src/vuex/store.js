const state = {
  center: [22.5455537937,114.0544373601],
};

const mutations = {
  MARKERCHANGE(state, coordinates) {
    state.center = coordinates;
  },
};

export default {
  state,
  mutations,
};
