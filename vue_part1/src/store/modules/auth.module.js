import { firebaseAuth } from '../../firebase';

const state = {
  userStatus: {
    isLoggedIn: false,
    currentUser: null,
  },
};

const getters = {
  userStatus: state => state.userStatus,
};

const mutations = {
  userStatus: (state, user) => {
    if (user) {
      state.userStatus.currentUser = user;
      state.userStatus.isLoggedIn = true;
    } else {
      state.userStatus.currentUser = null;
      state.userStatus.isLoggedIn = false;
    }
  },
};

const actions = {
  logIn: async ({ commit }, user) => {
    try {
      const userData = await firebaseAuth.signInWithEmailAndPassword(user.email, user.password);
      commit('userStatus', userData.user);
    } catch (error) {
      const errorCode = error.errorCode;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password');
      } else {
        alert(errorMessage);
      }
    }
  },
  logOut: async ({ commit }, user) => {
    try {
      await firebaseAuth.signOut();
      commit('userStatus', null);
    } catch (error) {
      alert(`error signing out, ${error}`);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
