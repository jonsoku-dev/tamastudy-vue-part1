import router from "@/router";
import API from "@/utils/API";

import * as types from "@/store/modules/auth/auth.types";

export default {
  async register({ commit, dispatch }, formData) {
    commit(types.REGISTER_PENDING);
    try {
      const res = await API.post("user/register", formData);
      const token = res.data;
      commit(types.REGISTER_SUCCESS, token);
      dispatch("loadUser");
      await router.push({ name: "page-home" });
    } catch (error) {
      commit(types.REGISTER_FAIL);
      dispatch("clearAuth");
    }
  },
  async login({ commit, dispatch }, formData) {
    commit(types.LOGIN_PENDING);
    try {
      const res = await API.post("user/login", formData);
      const token = res.data;
      commit(types.LOGIN_SUCCESS, token);
      dispatch("loadUser");
      await router.push({ name: "page-home" });
    } catch (error) {
      commit(types.LOGIN_FAIL);
      dispatch("clearAuth");
    }
  },
  async loadUser({ commit, dispatch }) {
    commit(types.LOAD_USER_PENDING);
    const token = window.sessionStorage.getItem("token");
    if (!token) {
      commit(types.LOAD_USER_FAIL);
      return null;
    }
    try {
      const res = await API.get("user/me");
      const userData = res.data;
      commit(types.LOAD_USER_SUCCESS, userData);
    } catch (error) {
      commit(types.LOAD_USER_FAIL);
      dispatch("clearAuth");
    }
  },
  clearAuth({ commit }) {
    commit(types.CLEAR_AUTH);
    router.push({ name: "page-login" });
  },
};
