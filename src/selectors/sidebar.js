import { createSelector } from '@reduxjs/toolkit';
import { get, isEmpty, map } from 'lodash';

import { transformCategory } from 'selectors/transfomers';


const getAllCategories = state => get(state, 'sidebar.allCategories');


export const allCategoriesSelector = createSelector(
  getAllCategories,
  categories => map(categories, transformCategory),
);

export const fetchedAllCategoriesSelector = createSelector(
  getAllCategories,
  categories => !isEmpty(categories),
);
