import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      if (state.count > 0) {
        state.count--;
      }
    },
    incrementBy(state, payload) {
      state.count += payload.amount;
    },
    zero(state) {
      state.count = 0;
    }
  },
  actions: {},
  modules: {}
});
