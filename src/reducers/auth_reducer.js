import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  USER_INFO
} from "../actions/types";

export function authReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

export function userInfoReducer(state = {}, action) {
  switch (action.type) {
    case USER_INFO:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
