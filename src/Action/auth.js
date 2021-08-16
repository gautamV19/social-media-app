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
    const url = urls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // dispatch success
          dispatch(loginSuccess(data.data.user));
          return;
        } else {
          dispatch(loginFailed(data.message));
          return;
        }
      });
  };
};

export const loginFailed = (emsg) => {
  return {
    type: LOGIN_FAILED,
    error: emsg,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};
