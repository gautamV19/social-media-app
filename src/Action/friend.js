import {
  ADD_FRIEND_SUCCESSFUL,
  FETCH_FRIEND_SUCCESSFUL,
  // FETCH_FRIEND_FAILED,
  // FETCH_FRIEND_STARTED,
} from '../Action/actionTypes';
import { urls } from '../Helpers/urls';
import { getToken } from '../Helpers/extraFunctions';

export const fetchFriendsSuc = (friendList) => {
  return {
    type: FETCH_FRIEND_SUCCESSFUL,
    friendList,
  };
};

// export const fetchFriendsfailed = (error) => {
//   return {
//     type: FETCH_FRIEND_FAILED,
//     error,
//   };
// };

// export const fetchFriendsStarted = () => {
//   return {
//     type: FETCH_FRIEND_STARTED,
//   };
// };

export const fechFriends = () => {
  return (dispatch) => {
    const url = urls.fetchFriendsurl();

    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Friend list Data', data);
        if (data.success) {
          dispatch(fetchFriendsSuc(data.data.friends));
          return;
        }
        // dispatch(fetchFriendsfailed(data.message));
      });
  };
};

export const addToYourFriend = (friend) => {
  return {
    type: ADD_FRIEND_SUCCESSFUL,
    friend,
  };
};
