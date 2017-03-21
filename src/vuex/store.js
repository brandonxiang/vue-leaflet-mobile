import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  center: [22.5455537937,114.0544373601],
};

const mutations = {
  MARKERCHANGE(state, coordinates) {
    state.center = coordinates;
  },
  SETMAP(state, mapObject) {
    state.mapObject = mapObject;
  },
};

const actions = {
  markerChange: ({ commit }) => commit('MARKERCHANGE'),
};

export default {
  state,
  actions,
  mutations,
};
