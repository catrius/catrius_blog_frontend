import { get, isEmpty } from 'lodash';
import { createSelector } from '@reduxjs/toolkit';

import { transformPost } from 'selectors/transfomers';


const getAllPosts = state => get(state, 'homepage.allPosts');


export const allPostsSelector = createSelector(
  getAllPosts,
  posts => posts.map(transformPost),
);

export const fetchedAllPostsSelector = createSelector(
  getAllPosts,
  posts => !isEmpty(posts),
);
