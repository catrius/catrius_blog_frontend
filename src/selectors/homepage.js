import { createSelector } from '@reduxjs/toolkit';
import { get, isEmpty, map } from 'lodash';

import { transformPost } from 'selectors/transfomers';


const getAllPosts = state => get(state, 'homepage.allPosts');


export const allPostsSelector = createSelector(
  getAllPosts,
  posts => map(posts, transformPost),
);

export const fetchedAllPostsSelector = createSelector(
  getAllPosts,
  posts => !isEmpty(posts),
);
