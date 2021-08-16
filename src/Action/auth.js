// import { AUTH } from './actionTypes';
// export default function handleLogin(email, password) {
//   const state = { email: email, password };
//   console.log('Inside handleLogin', state);
//   return {
//     type: AUTH,
//     state: state,
//   };
// }
import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../Action/actionTypes';
import { urls } from '../Helpers/urls';
import { getFormBody } from '../Helpers/extraFunctions';

export const startLogin = () => {
  return {
    type: LOGIN_START,
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    const url = urls.login;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    });
  };
};
