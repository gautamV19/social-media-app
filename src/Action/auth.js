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
  AUTHENTICATE_USER,
  LOGOUT,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  RESET_AUTH,
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
          localStorage.setItem('token', data.data.token);
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

//signUp
export const signingup = () => {
  return {
    type: SIGNUP_START,
  };
};

export const signup = (data) => {
  // console.log('Inside action signin', data);
  return (dispatch) => {
    const url = urls.signupurl();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('data', data);
        if (data.success) {
          // do something
          // localStorage.setItem('token', data.data.token);
          localStorage.setItem('token', data.data.token);
          dispatch(signupSuccessful(data.data.user));
          return;
        }
        dispatch(signupFailed(data.message));
      });
  };
};

export const signupSuccessful = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
};

export const signupFailed = (error) => {
  return {
    type: SIGNUP_FAILED,
    error,
  };
};

//Persisting user
export const authUser = (user) => {
  return {
    type: AUTHENTICATE_USER,
    user: {
      email: user.email,
      _id: user.id,
      name: user.name,
    },
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: LOGOUT,
  };
};

export const handleResetAuth = () => {
  return {
    type: RESET_AUTH,
  };
};
