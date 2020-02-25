import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { successfully } from 'utils/common';
import { FETCH_CATEGORIES } from 'utils/constants';


const categories = createReducer([], {
  [successfully(FETCH_CATEGORIES)]: (state, action) => action.payload.data.results,
});

const sidebar = combineReducers({
  categories,
});

export default sidebar;
