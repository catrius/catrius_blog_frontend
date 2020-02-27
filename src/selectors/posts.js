import { createSelector } from '@reduxjs/toolkit';
import { get, map } from 'lodash';

import { transformPost } from 'selectors/transfomers';


const getPosts = state => get(state, 'posts');


export const postsSelector = createSelector(
  getPosts,
  posts => map(posts, transformPost),
);
