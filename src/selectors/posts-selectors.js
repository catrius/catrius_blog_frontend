import { createSelector } from '@reduxjs/toolkit';
import { find, get, isEmpty, map } from 'lodash';

import { transformPost } from 'selectors/transfomers';
import { getSlug } from 'selectors/router-selectors';


export const getPosts = state => get(state, 'posts');


export const postsSelector = createSelector(
  getPosts,
  posts => map(posts, transformPost),
);

export const postSelector = createSelector(
  getSlug,
  getPosts,
  (slug, posts) => transformPost(find(posts, { slug })),
);

export const fetchedPostSelector = createSelector(
  getSlug,
  getPosts,
  (slug, posts) => !isEmpty(find(posts, { slug })),
);
