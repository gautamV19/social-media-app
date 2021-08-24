import { COMMENTED, POST_CREATED, UPDATE_POSTS } from '../Action/actionTypes';

export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    case POST_CREATED:
      return [action.post, ...state];
    case COMMENTED:
      const newState = state.map((post) => {
        if (post._id === action.post_id) {
          return { ...post, comments: [action.comment, ...post.comments] };
        }
        return post;
      });
      return newState;
    default:
      return state;
  }
}
