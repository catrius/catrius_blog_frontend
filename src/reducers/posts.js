import { createReducer } from '@reduxjs/toolkit';

import { successfully } from 'utils/common';
import { FETCH_POSTS } from 'utils/constants';


const posts = createReducer([], {
  [successfully(FETCH_POSTS)]: (state, action) => action.payload.data.results,
});

export default posts;
