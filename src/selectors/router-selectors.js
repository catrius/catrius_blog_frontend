import { get } from 'lodash';


// This is for components that are not rendered by router.
export const getCategorySlug = location => {
  const pathname = get(location, 'pathname', '');
  const matched = pathname.match(/^\/category\/(.+)\/$/);
  return matched ? matched[1] : null;
};

const getQueryParams = location => new URLSearchParams(get(location, 'search', ''));
export const getPage = location => parseInt(getQueryParams(location).get('page')) || 1;
export const getSearchQuery = location => getQueryParams(location).get('q') || '';
