import { createSelector } from '@reduxjs/toolkit';
import { get, isEmpty, map } from 'lodash';

import { transformCategory } from 'selectors/transfomers';


const getCategories = state => get(state, 'header.categories');


export const categoriesSelector = createSelector(
  getCategories,
  categories => map(categories, transformCategory),
);

export const fetchedCategoriesSelector = createSelector(
  getCategories,
  categories => !isEmpty(categories),
);
