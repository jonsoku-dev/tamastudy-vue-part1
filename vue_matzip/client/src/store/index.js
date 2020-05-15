import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import post from "./modules/post";
import auth from "./modules/auth.fb";
import fpost from "./modules/post.fb";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    post,
    auth,
    fpost,
  },
});
