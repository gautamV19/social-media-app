import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import userProfile from './userProfile';

export default combineReducers({
  posts,
  auth,
  userProfile,
});
