const state = {
  coordinate: [22.5455537937,114.0544373601],
};

const mutations = {
  changeMarker(stat, coordinate) {
    stat.coordinate = coordinate;
  },
};

export default {
  state,
  mutations,
};
