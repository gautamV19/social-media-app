import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducers';
import logger from 'redux-logger';

let store;
export const configureStore = () => {
  store = createStore(reducer, applyMiddleware(thunk, logger));

  return store;
};
