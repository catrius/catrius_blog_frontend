import { createReducer } from '@reduxjs/toolkit';

import { successfully } from 'utils/common';
import { FETCH_POST } from 'utils/constants';


const post = createReducer({}, {
  [successfully(FETCH_POST)]: (state, action) => action.payload.data,
});

export default post;
