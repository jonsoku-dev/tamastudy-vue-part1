import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './pages/Main';
import Todo from './pages/Todo';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Main },
    { path: '/todo', component: Todo },
  ],
});
