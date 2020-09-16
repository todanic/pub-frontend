import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
  },
  mutations: {
    login(state, payload) {
      state.loggedIn = payload;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
  actions: {
    login(context, payload) {
      context.commit('login', payload);
    },
    logout(context) {
      context.commit('logout');
    },
  },
  modules: {

  },
  plugins: [createPersistedState()],
});
