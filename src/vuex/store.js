import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  center:[22,114]
}

const mutations={
  MARKERCHANGE(state,coordinates){
    state.center = coordinates
  },
  SETMAP(state,mapObject){
    state.mapObject = mapObject
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
