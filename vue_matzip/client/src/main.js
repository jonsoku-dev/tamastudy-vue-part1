import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

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
