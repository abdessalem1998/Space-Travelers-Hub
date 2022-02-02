// configureStore.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './Missions/Missions';
import rockectsReducer from './Rockets/Rockets';

const reducer = combineReducers({ missionReducer, rockectsReducer });

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
