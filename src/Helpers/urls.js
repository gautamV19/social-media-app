const url_root = 'http://codeial.codingninjas.com:8000/api/v2';
export const urls = {
  fetchPosts: (page = 1, limit = 5) =>
    `${url_root}/posts?page=${page}&limit=${limit}`,
  login: () => `${url_root}/users/login`,
  signupurl: () => `${url_root}/users/signup`,
  editUser: () => `${url_root}/users/edit`,
  addfriend: (id) => `${url_root}/friendship/create_friendship?user_id=${id}`,
  userP: (id) => `${url_root}/users/${id}`,
};
