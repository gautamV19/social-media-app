import {
  COMMENTED,
  DELETE_COMMENT,
  LIKED,
  POST_CREATED,
  UPDATE_POSTS,
} from '../Action/actionTypes';

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
    case DELETE_COMMENT:
      const newState123 = state.map((post) => {
        if (post._id === action.post_id) {
          post.comments.map((comment) => {
            if (comment._id !== action.comment_id) {
              return comment;
            }
          });
          return post;
        } else {
          return post;
        }
      });
      return newState123;
    case LIKED:
      if (action.likeable_type === 'Post') {
        const newState2 = state.map((post) => {
          if (post._id === action.id) {
            // likeStatus : false means disliked
            if (action.likeStatus) {
              return { ...post, likes: [...post.likes, action.userId] };
            } else {
              return {
                ...post,
                likes: post.likes.slice(0, post.likes.length - 1),
              };
            }
          }
          return post;
        });
        return newState2;
      }
      if (action.likeable_type === 'Comment') {
        const newState3 = state.map((post) => {
          if (post._id === action.post_id) {
            const updatedComments = post.comments.map((comment) => {
              if (comment._id === action.comment_id) {
                if (action.likeStatus) {
                  return {
                    ...comment,
                    likes: [...comment.likes, action.userId],
                  };
                } else {
                  return {
                    ...comment,
                    likes: comment.likes.slice(0, post.likes.length - 1),
                  };
                }
              }
              return comment;
            });
            return { ...post, comments: updatedComments };
          }
          return post;
        });
        return newState3;
      }
    default:
      return state;
  }
}
