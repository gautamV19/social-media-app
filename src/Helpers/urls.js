const url_root = 'http://codeial.codingninjas.com:8000/api/v2';
export const urls = {
  fetchPosts: (page = 1, limit = 5) =>
    `${url_root}/posts?page=${page}&limit=${limit}`,
  login: () => `${url_root}/users/login`,
  signup: () => `${url_root}/users/signup`,
};
