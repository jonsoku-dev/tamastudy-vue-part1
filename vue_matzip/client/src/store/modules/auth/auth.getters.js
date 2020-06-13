export default {
  isAuthenticated: (state) => !!state.userData,
  userData: (state) => {
    if (state.userData) {
      return {
        username: state.userData.username,
        avatar: state.userData.avatar,
        email: state.userData.email,
      };
    } else {
      return {
        username: "",
        avatar: "",
        email: "",
      };
    }
  },
};
