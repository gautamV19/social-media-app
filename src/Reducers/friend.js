import {
  FETCH_FRIEND_SUCCESSFUL,
  // FETCH_FRIEND_FAILED,
  // FETCH_FRIEND_STARTED,
  ADD_FRIEND_SUCCESSFUL,
} from '../Action/actionTypes';

const intialState = [];
export const friendship = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_FRIEND_SUCCESSFUL:
      return action.friendlist;

    case ADD_FRIEND_SUCCESSFUL:
      return state.concat(action.friend);

    default:
      return state;
  }
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
