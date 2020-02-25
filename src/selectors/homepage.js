import { createSelector } from '@reduxjs/toolkit';
import { get, isEmpty, map } from 'lodash';

import { transformPost } from 'selectors/transfomers';


const getPosts = state => get(state, 'homepage.posts');


export const postsSelector = createSelector(
  getPosts,
  posts => map(posts, transformPost),
);

export const fetchedPostsSelector = createSelector(
  getPosts,
  posts => !isEmpty(posts),
);
