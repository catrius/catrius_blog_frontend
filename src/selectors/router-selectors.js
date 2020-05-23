import { get } from 'lodash';
import { createSelector } from '@reduxjs/toolkit';


export const getSlug = (state, props) => get(props, 'match.params.slug', '');

// This is for components that are not rendered by router.
export const getCategorySlug = (state, props) => {
  const pathname = get(props, 'location.pathname', '');
  const matched = pathname.match(/^\/category\/(.+)\/$/);
  return matched ? matched[1] : null;
};

const getQueryParams = (state, props) => new URLSearchParams(get(props, 'location.search', ''));

export const getPage = createSelector(
  getQueryParams,
  queryParams => parseInt(queryParams.get('page')) || 1,
);

export const getSearchQuery = createSelector(
  getQueryParams,
  queryParams => queryParams.get('q') || '',
);
