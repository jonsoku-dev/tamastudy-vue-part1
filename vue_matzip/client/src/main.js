import Vue from "vue";
import VueRouter from "vue-router";
import { mapActions, mapGetters } from "vuex";
import App from "./App";
import router from "./router";
import store from "./store";
import "nprogress/nprogress.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  store,
  router,
  computed: {
    ...mapGetters("authState", ["isLoggedIn", "userData"]),
  },
  methods: {
    ...mapActions("authState", ["loadUser"]),
  },
  created() {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      this.loadUser(token);
    }
  },
  render: (h) => h(App),
}).$mount("#app");
