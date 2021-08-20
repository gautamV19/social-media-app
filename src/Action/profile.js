import { urls } from '../Helpers/urls';

export const userProfile = (userId) => {
  return (dispatch) => {
    const url = urls.userP(userId);
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
};
