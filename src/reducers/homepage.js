import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { FETCH_ALL_POSTS } from 'utils/constants';
import { successfully } from 'utils/common';


const allPosts = createReducer([], {
  [successfully(FETCH_ALL_POSTS)]: (state, action) => action.payload.data,
});

const homepage = combineReducers({
  allPosts,
});

export default homepage;
