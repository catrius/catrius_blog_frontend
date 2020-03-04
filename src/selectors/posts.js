import { createSelector } from '@reduxjs/toolkit';
import { find, get, isEmpty, map } from 'lodash';

import { transformPost } from 'selectors/transfomers';
import { getPK } from 'selectors/router';


export const getPosts = state => get(state, 'posts');


export const postsSelector = createSelector(
  getPosts,
  posts => map(posts, transformPost),
);

export const postSelector = createSelector(
  getPK,
  getPosts,
  (pk, posts) => transformPost(find(posts, { pk })),
);

export const fetchedPostSelector = createSelector(
  getPK,
  getPosts,
  (pk, posts) => !isEmpty(find(posts, { pk })),
);
