import { getFormBody, getToken } from '../Helpers/extraFunctions';
import { urls } from '../Helpers/urls';
import {
  COMMENTED,
  DELETE_COMMENT,
  LIKED,
  LIST_OF_COMMENTS,
  LIST_OF_LIKES,
  POST_CREATED,
  UPDATE_POSTS,
} from './actionTypes';

export function fetchPosts() {
  return (dispatch) => {
    const url = urls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jResponse) => {
        const posts = jResponse.data.posts;
        dispatch(updatePosts(posts));
      });
  };
}
export const updatePosts = (posts) => {
  return {
    type: UPDATE_POSTS,
    posts,
  };
};

export const createPostSuccess = (post) => {
  return {
    type: POST_CREATED,
    post,
  };
};

export const createPost = (content) => {
  return (dispatch) => {
    const url = urls.createPost();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getToken()}`,
      },
      body: getFormBody({ content }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(createPostSuccess(data.data.post));
          return;
        }
      });
  };
};

export const commentedSuccesfully = (comment, post_id) => {
  return {
    type: COMMENTED,
    comment,
    post_id,
  };
};

export const commentAction = (data) => {
  return (dispatch) => {
    const url = urls.comment();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getToken()}`,
      },
      body: getFormBody(data),
    })
      .then((response) => response.json())
      .then((Data) => {
        console.log(Data);
        if (Data.success) {
          dispatch(commentedSuccesfully(Data.data.comment, data.post_id));
        }
      });
  };
};

export const likedSuccessfully = (likeable_type, id, likeStatus, userId) => {
  return {
    type: LIKED,
    id,
    // likeStatus : false means disliked
    likeStatus,
    userId,
    likeable_type,
  };
};
export const likedSuccessfullyComment = (
  likeable_type,
  post_id,
  comment_id,
  likeStatus,
  userId
) => {
  return {
    type: LIKED,
    likeable_type,
    post_id,
    comment_id,
    likeStatus,
    userId,
  };
};

export const likingAction = (id, type, userId, forComment = 0) => {
  return (dispatch) => {
    const url = urls.like(id, type);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          const likeStatus = data.data.deleted ? false : true;
          if ((type = 'Post'))
            dispatch(likedSuccessfully(type, id, likeStatus, userId));
          if ((type = 'Comment')) {
            dispatch(
              likedSuccessfullyComment(
                type,
                forComment.post_id,
                forComment.comment_id,
                likeStatus,
                userId
              )
            );
          }
          // likeStatus : false means disliked
        }
      });
  };
};

export const listOfLikesActionSuccessful = (data) => {
  return {
    type: LIST_OF_LIKES,
    likeList: data,
  };
};

export const listOfCommentsActionSuccessful = (data) => {
  return {
    type: LIST_OF_COMMENTS,
    commentsList: data,
  };
};

export const listOfLikesAction = (data) => {
  return (dispatch) => {
    const url = urls.listOfLikesUrl(data.id, data.type);

    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Your list', data);
        if (data.success) {
          if (data.type === 'Post') {
            dispatch(listOfLikesActionSuccessful(data.data));
          }
          if (data.type === 'Comment') {
            dispatch(listOfCommentsActionSuccessful(data.data));
          }
        } else {
          console.log(data.message);
        }
      });
  };
};

export const commentDeleteSuccesful = (comment_id, post_id) => {
  return {
    type: DELETE_COMMENT,
    comment_id,
    post_id,
  };
};

export const commentDeleteAction = (comment_id, post_id) => {
  return (dispatch) => {
    const url = urls.deleteCommentUrl(comment_id);

    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("comment deleting...", data);
        if (data.success) {
          dispatch(commentDeleteSuccesful(comment_id, post_id));
        } else {
          console.log(data.message);
        }
      });
  };
};
