import { createSelector } from '@reduxjs/toolkit';
import { find, get, isEmpty, map } from 'lodash';

import { transformCategory } from 'selectors/transfomers';
import { getPK } from 'selectors/router';


const getCategories = state => get(state, 'categories');


export const categoriesSelector = createSelector(
  getCategories,
  categories => map(categories, transformCategory),
);

export const fetchedCategoriesSelector = createSelector(
  getCategories,
  categories => !isEmpty(categories),
);

export const categorySelector = createSelector(
  getPK,
  getCategories,
  (pk, categories) => transformCategory(find(categories, { pk })),
);
