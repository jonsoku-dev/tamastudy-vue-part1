import Vue from "vue";
import VueRouter from "vue-router";
import VueMaterial from "vue-material";
import { mapActions, mapGetters } from "vuex";
import App from "./App";
import router from "./router";
import store from "./store";
import "vue-material/dist/vue-material.min.css";
import "nprogress/nprogress.css";

Vue.config.productionTip = false;

Vue.use(VueMaterial);
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
