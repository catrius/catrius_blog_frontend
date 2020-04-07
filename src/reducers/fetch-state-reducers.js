import { LOCATION_CHANGE } from 'connected-react-router';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { failingly, successfully } from 'utils/axios-suffixes';
import { FAIL, FETCH_POST, FETCH_POSTS, REQUEST, SUCCESS } from 'utils/constants';


const posts = createReducer(null, {
  [LOCATION_CHANGE]: (state, action) => null,
  [FETCH_POSTS]: (state, action) => REQUEST,
  [successfully(FETCH_POSTS)]: (state, action) => SUCCESS,
  [failingly(FETCH_POSTS)]: (state, action) => FAIL,
});

const post = createReducer(null, {
  [successfully(FETCH_POSTS)]: (state, action) => SUCCESS,
  [FETCH_POST]: (state, action) => REQUEST,
  [successfully(FETCH_POST)]: (state, action) => SUCCESS,
  [failingly(FETCH_POST)]: (state, action) => FAIL,
});

const fetchState = combineReducers({
  posts,
  post,
});

export default fetchState;
