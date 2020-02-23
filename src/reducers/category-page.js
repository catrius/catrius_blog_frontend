import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { successfully } from 'utils/common';
import { FETCH_CATEGORY } from 'utils/constants';


const category = createReducer({}, {
  [successfully(FETCH_CATEGORY)]: (state, action) => action.payload.data,
});

const categoryPage = combineReducers({
  category,
});

export default categoryPage;
