import Vue from "vue";
import VueMaterial from "vue-material";
import * as VueGoogleMaps from "vue2-google-maps";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAKF8jdoE3TKYkfPdUDPZuEG7emVWMHJis",
    libraries: "places",
  },
  installComponents: true,
});

// subscribers
import "@/store/modules/auth/auth.subscriber";

Vue.config.productionTip = false;

store.dispatch("authModule/loadUser").then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
