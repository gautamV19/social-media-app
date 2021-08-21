import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOGOUT,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  RESET_AUTH,
  EDIT_USER_SUCCESSFUL,
  EDIT_USER_FAILED,
} from '../Action/actionTypes';

const intialAuthState = {
  user: {},
  error: null,
  isLoggedIn: false,
  isProgress: false,
};

export default function auth(state = intialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
      return {
        ...state,
        isProgress: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isProgress: false,
        user: action.user,
        error: null,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
    case SIGNUP_FAILED:
      return {
        ...state,
        error: action.error,
        isProgress: false,
      };

    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };

    case RESET_AUTH:
      return {
        ...state,
        error: null,
      };

    case EDIT_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.user,
        error: false,
      };
    case EDIT_USER_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
