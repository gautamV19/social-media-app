import { UPDATE_POSTS } from './actionTypes';
export function fetchPosts() {
  return (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((posts) => {
        console.log('My data', posts);
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
