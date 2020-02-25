import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { get } from 'lodash';

import { successfully } from 'utils/common';
import { FETCH_POSTS } from 'utils/constants';


const pageCount = createReducer([], {
  [successfully(FETCH_POSTS)]: (state, action) => get(action.payload, 'data.page_count'),
});

const paginator = combineReducers({
  pageCount,
});

export default paginator;
