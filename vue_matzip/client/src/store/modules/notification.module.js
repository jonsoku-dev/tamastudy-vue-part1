import { v4 } from "uuid";

export default {
  namespaced: true,
  state: {
    notifications: [],
  },
  getters: {},
  mutations: {
    PUSH(state, notification) {
      state.notifications = [
        ...state.notifications,
        { id: v4(), ...notification },
      ];
    },
    DELETE(state, notificationToRemove) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== notificationToRemove.id
      );
    },
  },
  actions: {
    add({ commit }, notification) {
      commit("PUSH", notification);
    },
    remove({ commit }, notificationToRemove) {
      commit("DELETE", notificationToRemove);
    },
  },
};
