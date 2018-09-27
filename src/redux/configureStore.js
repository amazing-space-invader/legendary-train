import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const configureStore = (initialState = {}) => {
  const middlewares = [
    thunk
  ];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;