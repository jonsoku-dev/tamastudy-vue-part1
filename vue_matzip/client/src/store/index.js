import Vue from "vue";
import Vuex from "vuex";

// modules
import authState from "./modules/auth.module";
import postState from "./modules/post.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    authState,
    postState,
  },
});

export default store;
