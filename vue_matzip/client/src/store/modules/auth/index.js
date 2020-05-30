import getters from "@/store/modules/auth/auth.getters";
import mutations from "@/store/modules/auth/auth.mutations";
import actions from "@/store/modules/auth/auth.actions";

const state = () => {
  return {
    token: null,
    userData: null,
    registerLoading: false,
    loginLoading: false,
  };
};

export default {
  state,
  getters,
  mutations,
  actions,
};
