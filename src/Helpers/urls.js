const url_root = 'http://codeial.codingninjas.com:8000/api/v2';
const root = '/api/v1';
export const urls = {
  fetchPosts: (page = 1, limit = 13) =>
    `${root}/posts?page=${page}&limit=${limit}`,
  login: () => `${root}/users/login`,
  signupurl: () => `${root}/users/signup`,
  editUser: () => `${root}/users/edit`,
  addfriend: (id) => `${root}/friendship/create_friendship?user_id=${id}`,
  removefriend: (id) =>
    `${root}/friendship/remove_friendship?user_id=${id}`,
  userP: (id) => `${root}/users/${id}`,
  fetchFriendsurl: () => `${root}/friendship/fetch_user_friends`,
  createPost: () => `${root}/posts/create`,
  comment: () => `${root}/comments`,
  like: (id, type) =>
    `${root}/likes/toggle?likeable_id=${id}&likeable_type=${type}`,
  searchUrl: (text) => `${root}/users/search?text=${text}`,
  listOfLikesUrl: (id, type) =>
    `${root}/likes?likeable_id=${id}&likeable_type=${type}`,
  deleteCommentUrl: (id) => `${root}/comments?comment_id=${id}`,
};

/*
 case 0:
      return 'https://image.flaticon.com/icons/png/128/4333/4333609.png';
    case 1:
      return 'https://www.flaticon.com/free-icon/user_709722';
    case 2:
      return 'https://www.flaticon.com/free-icon/user_709722';
    case 3:
      return 'https://image.flaticon.com/icons/png/512/747/747376.png';
    default:
      return 'https://image.flaticon.com/icons/png/128/924/924874.png';

cn:
                          src="https://image.flaticon.com/icons/svg/2154/2154651.svg"

      */
