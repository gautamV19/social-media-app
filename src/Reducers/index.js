import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import userProfile from './userProfile';
import { friendship } from './friend';
import search from './search';

export default combineReducers({
  posts,
  auth,
  userProfile,
  friendship,
  search,
});
