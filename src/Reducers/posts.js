import { POST_CREATED, UPDATE_POSTS } from '../Action/actionTypes';

export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    case POST_CREATED:
      return [action.post, ...state];
    default:
      return state;
  }
}
