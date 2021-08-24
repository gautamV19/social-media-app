import { COMMENTED, POST_CREATED, UPDATE_POSTS } from '../Action/actionTypes';

export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    case POST_CREATED:
      return [action.post, ...state];
    case COMMENTED:
      return [
        ...state,
        state.forEach((post) => {
          if (post._id === action.post_id) {
            post.comments.push(action.comment);
          }
        }),
      ];
    default:
      return state;
  }
}
