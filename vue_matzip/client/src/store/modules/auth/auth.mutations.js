import * as types from "@/store/modules/auth/auth.types";

export default {
  [types.REGISTER_PENDING]: (state) => {
    state.registerLoading = true;
  },
  [types.REGISTER_SUCCESS]: (state, token) => {
    state.registerLoading = false;
    state.token = token;
    window.sessionStorage.setItem("token", token);
  },
  [types.REGISTER_FAIL]: (state) => {
    state.registerLoading = false;
  },
  [types.LOGIN_PENDING]: (state) => {
    state.loginLoading = true;
  },
  [types.LOGIN_SUCCESS]: (state, token) => {
    state.loginLoading = false;
    state.token = token;
    window.sessionStorage.setItem("token", token);
  },
  [types.LOGIN_FAIL]: (state) => {
    state.loginLoading = false;
  },
  [types.LOAD_USER_PENDING]: (state) => {
    state.loadUserLoading = true;
  },
  [types.LOAD_USER_SUCCESS]: (state, userData) => {
    state.loadUserLoading = false;
    state.userData = userData;
  },
  [types.LOAD_USER_FAIL]: (state) => {
    state.loadUserLoading = false;
  },
  [types.CLEAR_AUTH]: (state) => {
    state.token = null;
    state.userData = null;
    window.sessionStorage.removeItem("token");
  },
};
