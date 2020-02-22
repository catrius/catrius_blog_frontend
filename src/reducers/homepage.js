import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { successfully } from 'utils/common';
import { FETCH_ALL_POSTS } from 'utils/constants';


const allPosts = createReducer([], {
  [successfully(FETCH_ALL_POSTS)]: (state, action) => action.payload.data,
});

const homepage = combineReducers({
  allPosts,
});

export default homepage;
