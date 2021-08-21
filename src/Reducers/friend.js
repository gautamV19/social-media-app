import {
  FETCH_FRIEND_SUCCESSFUL,
  // FETCH_FRIEND_FAILED,
  // FETCH_FRIEND_STARTED,
  ADD_FRIEND_SUCCESSFUL,
} from '../Action/actionTypes';

export const friendship = (state = [], action) => {
  switch (action.type) {
    case FETCH_FRIEND_SUCCESSFUL:
      return action.friendList;

    case ADD_FRIEND_SUCCESSFUL:
      return state.concat(action.friend);

    default:
      return state;
  }
  return state;
};
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
