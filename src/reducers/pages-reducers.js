import { createReducer } from '@reduxjs/toolkit';

import { successfully } from 'utils/axios-suffixes';
import { FETCH_PAGE, FETCH_PAGES } from 'utils/constants';


const posts = createReducer([], {
  [successfully(FETCH_PAGES)]: (state, action) => action.payload.data.results,
  [successfully(FETCH_PAGE)]: (state, action) => [action.payload.data],
});

export default posts;
