import { replace } from 'lodash';

import { SINGLE_POST_ROUTER, CATEGORY_ROUTER } from 'utils/constants';


export const singlePostUrl = pk => replace(SINGLE_POST_ROUTER, ':pk', pk);
export const categoryUrl = pk => replace(CATEGORY_ROUTER, ':pk', pk);
