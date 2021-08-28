const url_root = 'http://codeial.codingninjas.com:8000/api/v2';
export const urls = {
  fetchPosts: (page = 1, limit = 13) =>
    `${url_root}/posts?page=${page}&limit=${limit}`,
  login: () => `${url_root}/users/login`,
  signupurl: () => `${url_root}/users/signup`,
  editUser: () => `${url_root}/users/edit`,
  addfriend: (id) => `${url_root}/friendship/create_friendship?user_id=${id}`,
  removefriend: (id) =>
    `${url_root}/friendship/remove_friendship?user_id=${id}`,
  userP: (id) => `${url_root}/users/${id}`,
  fetchFriendsurl: () => `${url_root}/friendship/fetch_user_friends`,
  createPost: () => `${url_root}/posts/create`,
  comment: () => `${url_root}/comments`,
  like: (id, type) =>
    `${url_root}/likes/toggle?likeable_id=${id}&likeable_type=${type}`,
  searchUrl: (text) => `${url_root}/users/search?text=${text}`,
  listOfLikesUrl: (id, type) =>
    `${url_root}/likes?likeable_id=${id}&likeable_type=${type}`,
  deleteCommentUrl: (id) => `${url_root}/comments?comment_id=${id}`,
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
