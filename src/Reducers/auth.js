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
  UPDATE_PROFILE,
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
    case UPDATE_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.state.name,
          password: action.state.password,
        },
      };
    default:
      break;
  }
  return state;
}
