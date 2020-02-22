import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { successfully } from 'utils/common';
import { FETCH_ALL_CATEGORIES } from 'utils/constants';


const allCategories = createReducer([], {
  [successfully(FETCH_ALL_CATEGORIES)]: (state, action) => action.payload.data,
});

const sidebar = combineReducers({
  allCategories,
});

export default sidebar;
