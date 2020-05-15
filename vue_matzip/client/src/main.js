import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import DateFilter from "./filters/date";
import "nprogress/nprogress.css";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.filter("date", DateFilter);
Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
