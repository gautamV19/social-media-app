import { getToken } from '../Helpers/extraFunctions';
import { urls } from '../Helpers/urls';
import {
  USER_PROFILE_FAILED,
  USER_PROFILE_START,
  USER_PROFILE_SUCCESS,
} from './actionTypes';

export const startUser = () => {
  return {
    type: USER_PROFILE_START,
  };
};

export const userSucccess = (user) => {
  return {
    type: USER_PROFILE_SUCCESS,
    user,
  };
};

export const userFail = (error) => {
  return {
    type: USER_PROFILE_FAILED,
    error,
  };
};

export const userProfile = (userId) => {
  const url = urls.userP(userId);
  console.log(url);
  return (dispatch) => {
    const url = urls.userP(userId);
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(userSucccess(data.data.user));
          return;
        }
        dispatch(userFail(data.message));
      });
  };
};
