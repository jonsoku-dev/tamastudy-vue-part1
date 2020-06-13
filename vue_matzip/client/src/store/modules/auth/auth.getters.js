export default {
  isAuthenticated: (state) => !!state.userData,
  userData: (state) => {
    return {
      username: state.userData.username,
      avatar: state.userData.avatar,
      email: state.userData.email,
    };
  },
};
