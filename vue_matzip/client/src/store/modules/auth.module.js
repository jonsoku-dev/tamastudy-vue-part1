import Nprogress from "nprogress";
import API from "@/utils/API";

export default {
  namespaced: true,
  state: {
    user: null,
    error: null,
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
    AUTH_ERROR: (state, error) => {
      state.error = error;
    },
    AUTH_CLEAR: (state) => {
      window.sessionStorage.removeItem("token");
      state.user = null;
      state.error = null;
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
        Nprogress.done();
      } catch (error) {
        if (error.response.status === 401) {
          console.log("loadUser error");
          dispatch("logout");
        } else {
          commit("AUTH_ERROR", error.response.data);
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
      } catch (error) {
        console.log(error.response.data.err);
        commit("AUTH_ERROR", error.response.data);
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
      } catch (error) {
        console.log(error.response.data.err);
        commit("AUTH_ERROR", error.response.data);
        Nprogress.done();
      }
    },
    logout: ({ commit }) => {
      Nprogress.start();
      commit("AUTH_CLEAR");
      Nprogress.done();
    },
  },
};
