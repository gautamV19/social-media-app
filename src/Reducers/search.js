import { SEARCH_SUCCESSFUL } from '../Action/actionTypes';

const initialState = {
  results: [],
};
const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESSFUL:
      return {
        ...state,
        results: action.users,
      };

    default:
      return state;
  }
};
export default search;
