import { combineReducers } from "redux";
import { rootInitData } from "../containers/home/reducer.js";
import { authReducer, isModalShowReducer } from "./auth_reducer.js";

export default combineReducers({
  rootInitData,
  auth: authReducer,
  isLoginModalShow: isModalShowReducer
  // userInfo: userInfoReducer
});
