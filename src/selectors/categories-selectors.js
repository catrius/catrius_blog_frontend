import { createSelector } from '@reduxjs/toolkit';
import { find, get, isEmpty, map } from 'lodash';

import { transformCategory } from 'selectors/transfomers';


export const getCategories = state => get(state, 'categories');


export const categoriesSelector = createSelector(
  getCategories,
  categories => map(categories, transformCategory),
);

export const fetchedCategoriesSelector = createSelector(
  getCategories,
  categories => !isEmpty(categories),
);

export const categorySelector = slug => createSelector(
  getCategories,
  categories => transformCategory(find(categories, { slug })),
);
