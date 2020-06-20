import { combineReducers } from "redux";
import authReducer from "./v1/auth.reducer";

const reducer = combineReducers({
  authState: authReducer,
});

export type IRootState = ReturnType<typeof reducer>;

export default reducer;
