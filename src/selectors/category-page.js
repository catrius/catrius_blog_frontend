import { createSelector } from '@reduxjs/toolkit';
import { get } from 'lodash';

import { transformCategoryWithPosts } from 'selectors/transfomers';


const getCategory = state => get(state, 'categoryPage.category');

export const categorySelector = createSelector(
  getCategory,
  category => transformCategoryWithPosts(category),
);
