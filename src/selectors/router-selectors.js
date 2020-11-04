import { get } from 'lodash';


export const getSlug = (state, props) => get(props, 'match.params.slug', '');

// This is for components that are not rendered by router.
export const getCategorySlug = (state, props) => {
  const pathname = get(props, 'location.pathname', '');
  const matched = pathname.match(/^\/category\/(.+)\/$/);
  return matched ? matched[1] : null;
};

const getQueryParams = location => new URLSearchParams(get(location, 'search', ''));
export const getPage = location => parseInt(getQueryParams(location).get('page')) || 1;
export const getSearchQuery = location => getQueryParams(location).get('q') || '';
