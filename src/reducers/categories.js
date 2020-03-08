import { createReducer } from '@reduxjs/toolkit';

import { successfully } from 'utils/axios-suffixes';
import { FETCH_CATEGORIES } from 'utils/constants';


const categories = createReducer([], {
  [successfully(FETCH_CATEGORIES)]: (state, action) => action.payload.data.results,
});

export default categories;
