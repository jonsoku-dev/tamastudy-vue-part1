import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Todo from './pages/Todo';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/todo', component: Todo },
  ],
});
