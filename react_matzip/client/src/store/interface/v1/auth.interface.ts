import { Action } from "redux";
import * as t from "../../types/v1/auth.type";

// user interface
export interface IUserState {
  _id: string;
  username: string;
  email: string;
}

// auth state interface
export interface IAuthState {
  registerLoading: boolean;
  loginLoading: boolean;
  logoutLoading: boolean;
  loadUserLoading: boolean;
  user: IUserState | null;
}

// clear auth
export interface ClearAuthAction extends Action<typeof t.CLEAR_AUTH> {}

// register
export interface RegisterPendingAction
  extends Action<typeof t.REGISTER_PENDING> {}
export interface RegisterSuccessAction
  extends Action<typeof t.REGISTER_SUCCESS> {
  payload: {
    token: string;
  };
}
export interface RegisterFailAction extends Action<typeof t.REGISTER_FAIL> {}

// login
export interface LoginPendingAction extends Action<typeof t.LOGIN_PENDING> {}
export interface LoginSuccessAction extends Action<typeof t.LOGIN_SUCCESS> {
  payload: {
    token: string;
  };
}
export interface LoginFailAction extends Action<typeof t.LOGIN_FAIL> {}

// logout
export interface LogoutPendingAction extends Action<typeof t.LOGOUT_PENDING> {}
export interface LogoutSuccessAction extends Action<typeof t.LOGOUT_SUCCESS> {}
export interface LogoutFailAction extends Action<typeof t.LOGOUT_FAIL> {}

// load user
export interface LoadUserPendingAction
  extends Action<typeof t.LOAD_USER_PENDING> {}
export interface LoadUserSuccessAction
  extends Action<typeof t.LOAD_USER_SUCCESS> {
  payload: {
    user: IUserState;
  };
}
export interface LoadUserFailAction extends Action<typeof t.LOAD_USER_FAIL> {}

export type AuthReducerActions =
  | ClearAuthAction
  | RegisterPendingAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LoginPendingAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutPendingAction
  | LogoutSuccessAction
  | LogoutFailAction
  | LoadUserPendingAction
  | LoadUserSuccessAction
  | LoadUserFailAction;
