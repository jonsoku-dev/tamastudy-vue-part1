import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import { MdButton, MdContent, MdTabs, MdIcon } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false;
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdIcon);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
