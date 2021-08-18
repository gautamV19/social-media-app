import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import signupAuth from './signup';

export default combineReducers({
  posts,
  auth,
  signupAuth,
});
