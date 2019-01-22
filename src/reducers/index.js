import { combineReducers } from "redux";
import { rootInitData } from "../containers/home/reducer.js";
import authReducer from './auth_reducer.js'

export default combineReducers({
  rootInitData,
  auth: authReducer
});
