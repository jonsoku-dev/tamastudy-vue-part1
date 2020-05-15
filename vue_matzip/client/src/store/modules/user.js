import NProgress from "nprogress";
import router from "../../router";
import API from "../../services/API";
import * as types from "./types";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const state = initialState;

const getters = {
  getUser: (state) => state.user,
  isLoggedIn: (state) => state.isLoggedIn,
};

const mutations = {
  [types.USER_REGISTER](state, token) {
    window.sessionStorage.setItem("token", token);
    state.isLoggedIn = true;
  },
  [types.USER_LOGIN](state, token) {
    window.sessionStorage.setItem("token", token);
    state.isLoggedIn = true;
  },
  [types.USER_GET_ME](state, user) {
    state.isLoggedIn = true;
    state.user = user;
  },
  [types.USER_LOG_OUT](state) {
    state.isLoggedIn = false;
    state.user = null;
  },
  [types.USER_ERROR](state, error) {
    state.error = error;
  },
};

const actions = {
  async register({ commit, dispatch }, formData) {
    NProgress.start();
    try {
      const res = await API.post("/user/register", formData);
      commit(types.USER_REGISTER, res.data.token);
      await dispatch("getMe");
      router.push("/dashboard");
    } catch (err) {
      commit(types.USER_ERROR, err.response.data.err);
      NProgress.done();
    }
  },
  async login({ commit, dispatch }, formData) {
    NProgress.start();
    try {
      const res = await API.post("/user/login", formData);
      commit(types.USER_LOGIN, res.data.token);
      await dispatch("getMe");
      router.push("/dashboard");
    } catch (err) {
      commit(types.USER_ERROR, err.response.data.err);
      NProgress.done();
    }
  },
  async logout({ commit }) {
    NProgress.start();
    try {
      window.sessionStorage.removeItem("token");
      commit(types.USER_LOG_OUT);
      NProgress.done();
      router.push({ name: "page-home" });
    } catch (err) {
      commit(types.USER_ERROR, "로그아웃에 실패하였습니다");
      NProgress.done();
    }
  },
  async getMe({ commit, dispatch }) {
    NProgress.start();
    try {
      const res = await API.get("/user/me");
      commit(types.USER_GET_ME, res.data);
      NProgress.done();
    } catch (err) {
      commit(types.USER_ERROR, err.response.data.err);
      await dispatch("logout");
      NProgress.done();
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
