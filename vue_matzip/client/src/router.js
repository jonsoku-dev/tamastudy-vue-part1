import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import PageHome from "./pages/PageHome";
import PageLogin from "./pages/PageLogin";
import PageRegister from "./pages/PageRegister";
import PageFirebaseLogin from "./pages/PageFirebaseLogin";
import PageFirebaseRegister from "./pages/PageFirebaseRegister";
import PageFirebaseGetPosts from "./pages/PageFirebaseGetPosts";
import PageFirebaseCreatePost from "./pages/PageFirebaseCreatePost";
import PageFirebaseGetPost from "./pages/PageFirebaseGetPost";
import PageDashboard from "./pages/PageDashboard";
import PageAllPosts from "./pages/PageAllPosts";
import PagePost from "./pages/PagePost";
import PageNotFound from "./pages/PageNotFound";
import PageNetworkIssue from "./pages/PageNetworkIssue";
import MockPosts from "./pages/MockPosts";
import MockPost from "./pages/MockPost";

import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "page-home",
      component: PageHome,
    },
    {
      path: "/login",
      name: "page-login",
      component: PageLogin,
      meta: {
        guest: true,
      },
    },
    {
      path: "/register",
      name: "page-register",
      component: PageRegister,
      meta: {
        guest: true,
      },
    },
    {
      path: "/fb-login",
      name: "page-fb-login",
      component: PageFirebaseLogin,
      meta: {
        guest: true,
      },
    },
    {
      path: "/fb-register",
      name: "page-fb-register",
      component: PageFirebaseRegister,
      meta: {
        guest: true,
      },
    },
    {
      path: "/dashboard",
      name: "page-dashboard",
      component: PageDashboard,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/post",
      name: "page-posts",
      component: PageAllPosts,
      meta: {
        all: true,
      },
    },
    {
      path: "/post/:postId",
      name: "page-post",
      component: PagePost,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        NProgress.start();
        store
          .dispatch("getPost", routeTo.params.postId)
          .then((post) => {
            routeTo.params.post = post;
            NProgress.done();
            next();
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              NProgress.done();
              next({
                name: "404",
                params: { resource: "post" },
              });
            } else {
              NProgress.done();
              next({ name: "network-issue" });
            }
          });
      },
    },
    {
      path: "/fb-post",
      name: "page-firebase-get-posts",
      component: PageFirebaseGetPosts,
    },
    {
      path: "/fb-post/:post_slug",
      name: "page-firebase-get-post",
      component: PageFirebaseGetPost,
    },
    {
      path: "/fb-post/create",
      name: "page-firebase-create-post",
      component: PageFirebaseCreatePost,
    },
    {
      path: "/mock-posts",
      name: "mock-posts",
      component: MockPosts,
    },
    {
      path: "/mock-post",
      name: "mock-post",
      component: MockPost,
    },
    {
      path: "/404",
      name: "404",
      component: PageNotFound,
      props: true, // I added this so we can receive the param as a prop
    },
    {
      path: "/network-issue",
      name: "network-issue",
      component: PageNetworkIssue,
    },
    {
      path: "*",
      redirect: { name: "404", params: { resource: "page" } },
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (!window.sessionStorage.getItem("token")) {
      next();
      return;
    } else {
      next({ name: "page-home" });
      return;
    }
  }
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (window.sessionStorage.getItem("token")) {
      console.log("authenticated");
      next();
      return;
    } else {
      next({ name: "page-login" });
      return;
    }
  }
  if (to.matched.some((record) => record.meta.all)) {
    next();
  }
  next();
});

export default router;
