import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import userProfile from './userProfile';
import { friendship } from './friend';
import search from './search';
import { likeComments } from './LikeAndComments';

export default combineReducers({
  posts,
  auth,
  userProfile,
  friendship,
  search,
  likeComments,
});
