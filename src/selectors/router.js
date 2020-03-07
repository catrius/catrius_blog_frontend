import { get } from 'lodash';
import { createSelector } from '@reduxjs/toolkit';


export const getPK = (state, props) => parseInt(get(props, 'match.params.pk', ''));

export const getCategoryPK = (state, props) => {
  const pathname = get(props, 'location.pathname', '');
  const matched = pathname.match(/^\/category\/(\d+)/);
  if (matched)
    return parseInt(matched[1]);
  return null;
};

export const getQueryParams = (state, props) => new URLSearchParams(get(props, 'location.search', ''));

export const getPage = createSelector(
  getQueryParams,
  queryParams => parseInt(queryParams.get('page')) || 1,
);

export const getSearchQuery = createSelector(
  getQueryParams,
  queryParams => queryParams.get('q') || '',
);
