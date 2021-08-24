import {
  FETCH_FRIEND_SUCCESSFUL,
  // FETCH_FRIEND_FAILED,
  // FETCH_FRIEND_STARTED,
  ADD_FRIEND_SUCCESSFUL,
  REMOVE_FRIEND_SUCCESSFUL,
} from '../Action/actionTypes';

export const friendship = (state = [], action) => {
  switch (action.type) {
    case FETCH_FRIEND_SUCCESSFUL:
      return action.friendList;
    // case FETCH_FRIEND_FAILED:
    //   return {
    //     ...state,
    //     error: action.error,
    //     inProgress: false,
    //   };
    // case FETCH_FRIEND_STARTED:
    //   return {
    //     ...state,
    //     inProgress: true,
    //   };
    case ADD_FRIEND_SUCCESSFUL:
      return state.concat(action.friend);
    case REMOVE_FRIEND_SUCCESSFUL:
      return state.filter((i) => i.to_user._id !== action.friend);
    default:
      return state;
  }
  return state;
};
