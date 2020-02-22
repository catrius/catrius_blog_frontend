import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { successfully } from 'utils/common';
import { FETCH_SINGLE_POST } from 'utils/constants';


const post = createReducer({}, {
  [successfully(FETCH_SINGLE_POST)]: (state, action) => action.payload.data,
});

const singlePostPage = combineReducers({
  post,
});

export default singlePostPage;
