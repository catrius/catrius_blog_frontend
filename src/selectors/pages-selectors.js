import { createSelector } from '@reduxjs/toolkit';
import { find, get, isEmpty, map } from 'lodash';

import { transformPost } from 'selectors/transfomers';


export const getPages = state => get(state, 'pages');

export const pagesSelector = createSelector(
  getPages,
  pages => map(pages, transformPost),
);

export const postSelector = slug => createSelector(
  getPages,
  pages => transformPost(find(pages, { slug })),
);

export const fetchedPostSelector = slug => createSelector(
  getPages,
  pages => !isEmpty(find(pages, { slug })),
);
