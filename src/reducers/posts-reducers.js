import { createReducer } from '@reduxjs/toolkit';

import { successfully } from 'utils/axios-suffixes';
import { FETCH_POST, FETCH_POSTS } from 'utils/constants';


const posts = createReducer([], {
  [successfully(FETCH_POSTS)]: (state, action) => action.payload.data.results,
  [successfully(FETCH_POST)]: (state, action) => [action.payload.data],
});

export default posts;
