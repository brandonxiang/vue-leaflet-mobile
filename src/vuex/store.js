import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  marker:L.marker([22,114])
}

const mutations={
  MARKERCHANGE(state,coordinates){
    state.marker.setLatLng(coordinates)
    console.log(state.marker)
  }
}

const actions={
  markerChange: ({commit}) => commit('MARKERCHANGE')
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
