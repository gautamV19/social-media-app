import {
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../Action/actionTypes';

const intialAuthState = {
  user: {},
  error: null,
  isSignedIn: false,
  isProgress: false,
};

export default function signupAuth(state = intialAuthState, action) {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        isProgress: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isProgress: false,
        user: action.user,
        error: null,
        isSignedIn: true,
      };
    case SIGNUP_FAILED:
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
