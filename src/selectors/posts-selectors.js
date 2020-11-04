import { createSelector } from '@reduxjs/toolkit';
import { find, get, isEmpty, map } from 'lodash';

import { transformPost } from 'selectors/transfomers';


export const getPosts = state => get(state, 'posts');

export const postsSelector = createSelector(
  getPosts,
  posts => map(posts, transformPost),
);

export const postSelector = slug => createSelector(
  getPosts,
  posts => transformPost(find(posts, { slug })),
);

export const fetchedPostSelector = slug => createSelector(
  getPosts,
  posts => !isEmpty(find(posts, { slug })),
);
