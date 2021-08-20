import {
  USER_PROFILE_FAILED,
  USER_PROFILE_START,
  USER_PROFILE_SUCCESS,
} from '../Action/actionTypes';

const intialState = {
  inProccess: false,
  user: {},
  error: null,
};

const userProfile = (state = intialState, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        inProccess: false,
        user: action.user,
      };
    case USER_PROFILE_FAILED:
      return {
        ...state,
        inProccess: false,
        error: action.error,
      };
    case USER_PROFILE_START:
      return {
        ...state,
        inProccess: true,
      };
    default:
      return state;
  }
};

export default userProfile;
