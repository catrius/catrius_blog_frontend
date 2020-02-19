import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { FETCH_SINGLE_POST } from 'utils/constants';
import { successfully } from 'utils/common';


const post = createReducer({}, {
  [successfully(FETCH_SINGLE_POST)]: (state, action) => action.payload.data,
});

const singlePostPage = combineReducers({
  post,
});

export default singlePostPage;
