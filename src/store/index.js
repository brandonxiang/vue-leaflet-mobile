import Vue from 'vue'
import Vuex from 'vuex'
import module from './store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: module,
  },
});

