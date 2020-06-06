import getters from "@/store/modules/notification/notification.getters";
import mutations from "@/store/modules/notification/notification.mutations";
import actions from "@/store/modules/notification/notification.actions";

const state = () => {
  return {
    notifications: [],
  };
};

export default {
  state,
  getters,
  mutations,
  actions,
};
