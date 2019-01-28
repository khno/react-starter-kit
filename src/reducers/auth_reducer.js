import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  USER_INFO,
  LOGIN_MODAL_SHOW,
  LOGIN_MODAL_HIDE
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

export function isModalShowReducer(state = { visible: false }, action) {
  switch (action.type) {
    case LOGIN_MODAL_SHOW:
      return { ...state, visible: true };
    case LOGIN_MODAL_HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}
