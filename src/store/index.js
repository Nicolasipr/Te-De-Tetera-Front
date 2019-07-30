import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'

const store = new Vuex.Store({
  state,
  getters,
  mutations,
})

export default store