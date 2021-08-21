import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import userProfile from './userProfile';
import { friendship } from './friend';

export default combineReducers({
  posts,
  auth,
  userProfile,
  friendship,
});
