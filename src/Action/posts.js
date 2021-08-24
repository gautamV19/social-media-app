import { getFormBody, getToken } from '../Helpers/extraFunctions';
import { urls } from '../Helpers/urls';
import { POST_CREATED, UPDATE_POSTS } from './actionTypes';

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
