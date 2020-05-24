import { replace } from 'lodash';

import { POST_ROUTER, CATEGORY_ROUTER } from 'utils/constants';


export const postUrl = slug => replace(POST_ROUTER, ':slug', slug);
export const categoryUrl = slug => replace(CATEGORY_ROUTER, ':slug', slug);
