import { get } from 'lodash';


export const getPK = (state, props) => parseInt(get(props, 'match.params.pk', ''));
export const getCategoryPK = (state, props) => {
  const pathname = get(props, 'location.pathname', '');
  const matched = pathname.match(/^\/category\/(\d+)/);
  if (matched)
    return parseInt(matched[1]);
  return null;
};
