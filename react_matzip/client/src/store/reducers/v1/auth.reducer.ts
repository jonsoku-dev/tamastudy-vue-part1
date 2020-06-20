import * as i from "../../interface/v1/auth.interface";
import * as t from "../../types/v1/auth.type";

const initialState: i.IAuthState = {
  registerLoading: false,
  loginLoading: false,
  logoutLoading: false,
  loadUserLoading: false,
  user: null,
};

export default (
  prevState: i.IAuthState = initialState,
  action: i.AuthReducerActions
) => {
  switch (action.type) {
    // CLEAR AUTH
    case t.CLEAR_AUTH:
      window.sessionStorage.removeItem("token");
      return initialState;

    // REGISTER
    case t.REGISTER_PENDING:
      return {
        ...prevState,
        registerLoading: true,
      };
    case t.REGISTER_SUCCESS:
      window.sessionStorage.setItem("token", action.payload.token);
      return {
        ...prevState,
        registerLoading: false,
      };
    case t.REGISTER_FAIL:
      return {
        ...prevState,
        registerLoading: false,
      };

    // LOGIN
    case t.LOGIN_PENDING:
      return {
        ...prevState,
        loginLoading: true,
      };
    case t.LOGIN_SUCCESS:
      window.sessionStorage.setItem("token", action.payload.token);
      return {
        ...prevState,
        loginLoading: false,
      };
    case t.LOGIN_FAIL:
      return {
        ...prevState,
        loginLoading: false,
      };

    // LOG OUT
    case t.LOGOUT_PENDING:
      return {
        ...prevState,
        logoutLoading: true,
      };
    case t.LOGOUT_SUCCESS:
      window.sessionStorage.removeItem("token");
      return {
        ...prevState,
        logoutLoading: false,
      };
    case t.LOGOUT_FAIL:
      return {
        ...prevState,
        logoutLoading: false,
      };
    // LOAD USER
    case t.LOAD_USER_PENDING:
      return {
        ...prevState,
        user: null,
        loadUserLoading: true,
      };
    case t.LOAD_USER_SUCCESS:
      return {
        ...prevState,
        user: action.payload.user,
        loadUserLoading: false,
      };
    case t.LOAD_USER_FAIL:
      return {
        ...prevState,
        user: null,
        loadUserLoading: false,
      };
    default:
      return prevState;
  }
};
