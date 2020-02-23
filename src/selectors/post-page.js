import { createSelector } from '@reduxjs/toolkit';
import { get } from 'lodash';

import { transformPost } from 'selectors/transfomers';


const getPost = state => get(state, 'postPage.post');

export const postSelector = createSelector(
  getPost,
  post => transformPost(post),
);
