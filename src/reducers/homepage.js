import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { successfully } from 'utils/common';
import { FETCH_POSTS } from 'utils/constants';


const posts = createReducer([], {
  [successfully(FETCH_POSTS)]: (state, action) => action.payload.data.results,
});

const postsCount = createReducer([], {
  [successfully(FETCH_POSTS)]: (state, action) => action.payload.data.results,
});

const homepage = combineReducers({
  posts,
  postsCount,
});

export default homepage;
