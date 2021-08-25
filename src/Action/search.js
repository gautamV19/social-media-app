import { getToken } from '../Helpers/extraFunctions';
import { urls } from '../Helpers/urls';
import { SEARCH_SUCCESSFUL } from './actionTypes';

export const searchSuccessfull = (users) => {
  return {
    type: SEARCH_SUCCESSFUL,
    users,
  };
};

export const searchAction = (text) => {
  return (dispatch) => {
    const url = urls.searchUrl(text);

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
          dispatch(searchSuccessfull(data.data.users));
        }
      });
  };
};
