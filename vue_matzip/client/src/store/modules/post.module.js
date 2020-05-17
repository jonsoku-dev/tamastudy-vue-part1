import Nprogress from "nprogress";
import API from "@/utils/API";
import dn from "@/utils/dn";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    posts: [],
    pageInfo: null,
    post: null,
  },
  getters: {
    posts: (state) => state.posts,
    pageInfo: (state) => state.pageInfo,
  },
  mutations: {
    FETCH_POSTS: (state, { pageInfo, postFeed }) => {
      state.posts = postFeed;
      state.pageInfo = pageInfo;
    },
    FETCH_POST: (state, post) => {
      state.post = post;
    },
  },
  actions: {
    fetchPosts: async ({ commit, dispatch }) => {
      Nprogress.start();
      try {
        const res = await API.get("/post");
        commit("FETCH_POSTS", res.data);
        Nprogress.done();
      } catch (error) {
        dn(dispatch, "error", error.response.data.err);
        Nprogress.done();
      }
    },
    fetchPost: async ({ commit, dispatch }, postId) => {
      Nprogress.start();
      try {
        const res = await API.get(`/post/${postId}`);
        commit("FETCH_POST", res.data);
        Nprogress.done();
      } catch (error) {
        if (error.response.status === 500) {
          dn(dispatch, "error", `${postId} 포스트 페이지를 찾을 수 없습니다.`);
          Nprogress.done();
          router.push({ name: "posts" });
          return;
        }
        dn(dispatch, "error", error.response.data.err);
        Nprogress.done();
      }
    },
  },
};
