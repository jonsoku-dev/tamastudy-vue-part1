import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth.module';
import todo from './modules/todo.module';
import { vuexfireMutations } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    auth,
    todo,
  },
});
