import Nprogress from "nprogress";
import API from "@/utils/API";
import dn from "@/utils/dn";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    userData: (state) => state.user,
    userName: (state) => state.user.username,
  },
  mutations: {
    AUTH_LOAD_USER: (state, user) => {
      state.user = user;
    },
    AUTH_REGISTER: (state, token) => {
      window.sessionStorage.setItem("token", token);
    },
    AUTH_LOGIN: (state, token) => {
      window.sessionStorage.setItem("token", token);
    },
    AUTH_CLEAR: (state) => {
      window.sessionStorage.removeItem("token");
      state.user = null;
    },
  },
  actions: {
    loadUser: async ({ commit, dispatch }, token) => {
      Nprogress.start();
      try {
        const config = {
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        const res = await API.get("/user/me", config);
        const user = res.data;
        commit("AUTH_LOAD_USER", user);
        dn(dispatch, "success", "유저정보를 로드했습니다. ");
        Nprogress.done();
      } catch (error) {
        if (error.response.status === 401) {
          dn(dispatch, "error", "토큰을 확인해주세요. ");
          dispatch("logout");
        } else {
          dn(dispatch, "error", error.response.data.err);
          Nprogress.done();
        }
      }
    },
    register: async ({ commit, dispatch }, formData) => {
      Nprogress.start();
      try {
        const res = await API.post("/user/register", formData);
        const token = res.data;
        commit("AUTH_REGISTER", token);
        dispatch("loadUser", token);
        dn(dispatch, "success", "회원가입 되었습니다.");
        router.push({ name: "home" });
      } catch (error) {
        dn(dispatch, "error", error.response.data.err);
        Nprogress.done();
      }
    },
    login: async ({ commit, dispatch }, formData) => {
      Nprogress.start();
      try {
        const res = await API.post("/user/login", formData);
        const token = res.data;
        commit("AUTH_LOGIN", token);
        dispatch("loadUser", token);
        dn(dispatch, "success", "로그인 되었습니다.");
        router.push({ name: "home" });
      } catch (error) {
        dn(dispatch, "error", error.response.data.err);
        Nprogress.done();
      }
    },
    logout: ({ commit, dispatch }) => {
      Nprogress.start();
      commit("AUTH_CLEAR");
      Nprogress.done();
      dn(dispatch, "success", "로그아웃 되었습니다.");
      router.push({ name: "home" });
    },
  },
};
