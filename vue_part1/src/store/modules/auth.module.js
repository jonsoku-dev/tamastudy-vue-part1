import { firebaseAuth } from '../../firebase';

const state = {
  isLoggedIn: false,
  userInfo: null,
  loading: false,
  error: null,
};

const getters = {
  userData: (state) => state,
};

const mutations = {
  PENDING: (state) => {
    state.loading = true;
  },
  LOGIN: (state, userInfo) => {
    if (userInfo) {
      state.isLoggedIn = true;
      state.userInfo = userInfo;
      state.loading = false;
    }
  },
  LOGOUT: (state) => {
    state.isLoggedIn = false;
    state.userInfo = null;
    state.loading = false;
  },
  FAIL: (state, errorMessage) => {
    state.isLoggedIn = false;
    state.loading = false;
    state.error = errorMessage;
  },
};

const actions = {
  logIn: async ({ commit }, loginData) => {
    commit('PENDING');
    try {
      const res = await firebaseAuth.signInWithEmailAndPassword(loginData.email, loginData.password);
      const userInfo = {
        email: res.user.email,
        emailVerified: res.user.emailVerified,
        photoURL: res.user.photoURL,
      };
      commit('LOGIN', userInfo);
    } catch (error) {
      console.log(error);
      alert(error.message);
      commit('FAIL', error.message);
    }
  },
  logOut: async ({ commit }) => {
    commit('PENDING');
    try {
      await firebaseAuth.signOut();
      commit('LOGOUT');
    } catch (error) {
      console.log(error);
      alert(error.message);
      commit('FAIL', error.message);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
