import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
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
      return {
        ...state,
        isProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isProgress: false,
        user: action.user,
        error: null,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        isProgress: false,
      };

    default:
      break;
  }
  return state;
}
