import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { successfully } from 'utils/common';
import { FETCH_POST } from 'utils/constants';


const post = createReducer({}, {
  [successfully(FETCH_POST)]: (state, action) => action.payload.data,
});

const postPage = combineReducers({
  post,
});

export default postPage;
