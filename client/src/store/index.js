import Vue from "vue";
import Vuex from "vuex";
import notificationModule from "@/store/modules/notification";
import authModule from "@/store/modules/auth";
import postModule from "@/store/modules/post";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notificationModule,
    authModule,
    postModule,
  },
});
