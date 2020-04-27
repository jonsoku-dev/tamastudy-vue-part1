import Vue from "vue";
import Vuex from "vuex";
import todo from "./modules/todo.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
  },
});
