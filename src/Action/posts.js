import { urls } from '../Helpers/urls';
import { UPDATE_POSTS } from './actionTypes';

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
