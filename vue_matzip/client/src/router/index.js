import Vue from "vue";
import VueRouter from "vue-router";

// @ main page
import PageHome from "@/pages/PageHome";
import PageAbout from "@/pages/PageAbout";
import PageAuth from "@/pages/PageAuth";
import PagePost from "@/pages/PagePost";

// @ child page
// auth
import PageRegister from "@/pages/child-pages/auth/PageRegister";
import PageLogin from "@/pages/child-pages/auth/PageLogin";
// post
import PageAllPosts from "@/pages/child-pages/post/PageAllPosts";
import PageOnePost from "@/pages/child-pages/post/PageOnePost";
import PageCreatePost from "@/pages/child-pages/post/PageCreatePost";
import PageUpdatePost from "@/pages/child-pages/post/PageUpdatePost";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "page-home",
    component: PageHome,
  },
  {
    path: "/about",
    name: "page-about",
    component: PageAbout,
  },
  {
    path: "/auth",
    name: "page-auth",
    component: PageAuth,
    children: [
      {
        path: "/register",
        name: "page-register",
        component: PageRegister,
      },
      {
        path: "/login",
        name: "page-login",
        component: PageLogin,
      },
    ],
  },
  {
    path: "/post",
    name: "page-post",
    component: PagePost,
    children: [
      {
        path: "/all",
        name: "page-all-posts",
        component: PageAllPosts,
      },
      {
        path: "/:postId",
        name: "page-one-post",
        component: PageOnePost,
      },
      {
        path: "/create",
        name: "page-create-post",
        component: PageCreatePost,
      },
      {
        path: "/:postId/update",
        name: "page-update-post",
        component: PageUpdatePost,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
