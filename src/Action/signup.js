import { getFormBody } from '../Helpers/extraFunctions';
import { urls } from '../Helpers/urls';
import { SIGNUP_FAILED, SIGNUP_START, SIGNUP_SUCCESS } from './actionTypes';

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
        console.log('data', data);
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
