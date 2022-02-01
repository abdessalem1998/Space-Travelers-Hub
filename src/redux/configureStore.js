// configureStore.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './Missions/Missions';

const reducer = combineReducers({ missionReducer });

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
