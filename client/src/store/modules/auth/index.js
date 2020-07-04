import getters from "@/store/modules/auth/auth.getters";
import mutations from "@/store/modules/auth/auth.mutations";
import actions from "@/store/modules/auth/auth.actions";

const state = () => {
  return {
    userData: null,
    registerLoading: false,
    loginLoading: false,
  };
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
