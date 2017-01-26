import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  map:{},
  marker:{}
}

const mutations={
  MARKERCHANGE(state){
    state.marker.setLatLng()
  }
}

export default new Vuex.Store({
  state,
  mutations
})
