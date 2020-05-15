import { firebaseAuth } from "../../firebase/init";
import router from "../../router";
import * as types from "./types";

const initialState = {
  registerLoading: false,
  loginLoading: false,
  getCurrentUserLoading: false,
  logOutLoading: false,
  user: null,
  error: null,
};

const state = initialState;

const getters = {
  isLoggedIn: (state) => !!state.user,
  registerLoading: (state) => state.registerLoading,
  loginLoading: (state) => state.loginLoading,
  getCurrentUserLoading: (state) => state.getCurrentUserLoading,
  logOutLoading: (state) => state.logOutLoading,
  user: (state) => state.user,
  error: (state) => state.error,
};

const mutations = {
  [types.REGISTER_PENDING](state) {
    state.registerLoading = true;
  },
  [types.REGISTER_SUCCESS](state, user) {
    state.registerLoading = false;
    state.user = user;
  },
  [types.REGISTER_ERROR](state, error) {
    state.registerLoading = false;
    state.error = error;
  },
  [types.LOG_IN_PENDING](state) {
    state.loginLoading = true;
  },
  [types.LOG_IN_SUCCESS](state, user) {
    state.loginLoading = false;
    state.user = user;
  },
  [types.LOG_IN_ERROR](state, error) {
    state.loginLoading = false;
    state.error = error;
  },
  [types.GET_CURRENT_USER_PENDING](state) {
    state.getCurrentUserLoading = true;
  },
  [types.GET_CURRENT_USER_SUCCESS](state, user) {
    state.getCurrentUserLoading = false;
    state.user = user;
  },
  [types.GET_CURRENT_USER_ERROR](state, error) {
    state.getCurrentUserLoading = false;
    state.error = error;
  },
  [types.LOG_OUT_PENDING](state) {
    state.logOutLoading = true;
  },
  [types.LOG_OUT_SUCCESS](state) {
    state.logOutLoading = false;
    state.user = null;
  },
  [types.LOG_OUT_ERROR](state, error) {
    state.logOutLoading = false;
    state.error = error;
  },
};

const actions = {
  getCurrentUser: async ({ commit }) => {
    const user = await firebaseAuth.currentUser;
    console.log(user);
    commit(types.GET_CURRENT_USER_PENDING, user);
  },
  register: async ({ commit }, registerFormData) => {
    commit(types.REGISTER_PENDING);
    try {
      await firebaseAuth.createUserWithEmailAndPassword(
        registerFormData.email,
        registerFormData.password
      );
      const user = await firebaseAuth.currentUser;
      commit(types.REGISTER_SUCCESS, user);
      router.push({ name: "page-home" });
    } catch (error) {
      commit(types.REGISTER_ERROR, error.message);
    }
  },
  login: async ({ commit }, loginFormData) => {
    commit(types.LOG_IN_PENDING);
    try {
      await firebaseAuth.signInWithEmailAndPassword(
        loginFormData.email,
        loginFormData.password
      );
      const user = await firebaseAuth.currentUser;
      commit(types.LOG_IN_SUCCESS, user);
      router.push({ name: "page-home" });
    } catch (error) {
      commit(types.LOG_IN_ERROR, error.message);
    }
  },
  logout: async ({ commit }) => {
    commit(types.LOG_OUT_PENDING);
    try {
      await firebaseAuth.signOut();
      commit(types.LOG_OUT_SUCCESS);
      router.push({ name: "page-home" });
    } catch (error) {
      commit(types.LOG_OUT_ERROR, error.message);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
