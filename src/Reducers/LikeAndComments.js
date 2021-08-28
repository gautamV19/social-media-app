import { LIST_OF_COMMENTS, LIST_OF_LIKES } from '../Action/actionTypes';

const intialState = {
  likes: [],
  comments: [],
};
export const likeComments = (state = intialState, action) => {
  switch (action.type) {
    case LIST_OF_LIKES:
      return action.likeList;
    case LIST_OF_COMMENTS:
      return { ...state, comments: action.commentsList };
    default:
      return state;
  }
};
