import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

const state = {
  cartList :[],
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    moduleA
  }
});



export default store