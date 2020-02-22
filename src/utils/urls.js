import { replace } from 'lodash';

import { POST_ROUTER, CATEGORY_ROUTER } from 'utils/constants';


export const postUrl = pk => replace(POST_ROUTER, ':pk', pk);
export const categoryUrl = pk => replace(CATEGORY_ROUTER, ':pk', pk);
