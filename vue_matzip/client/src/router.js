import Vue from "vue";
import VueRouter from "vue-router";

import PageHome from "./pages/PageHome";
import PagePosts from "./pages/PagePosts";
import PageLogin from "./pages/PageLogin";
import PageRegister from "./pages/PageRegister";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: PageHome,
    },
    {
      path: "/posts",
      name: "posts",
      component: PagePosts,
    },
    {
      path: "/login",
      name: "login",
      component: PageLogin,
      meta: {
        guest: true,
        isAuthenticated: false,
      },
    },
    {
      path: "/register",
      name: "register",
      component: PageRegister,
      meta: {
        guest: true,
        isAuthenticated: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const hasToken = !!window.sessionStorage.getItem("token");
  if (
    to.matched.some(
      (record) => record.meta.guest && !record.meta.isAuthenticated
    ) &&
    hasToken
  ) {
    return next("/");
  }
  next();
});

export default router;
