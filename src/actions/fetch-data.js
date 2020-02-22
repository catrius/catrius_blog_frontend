import { get } from 'actions/axios-requests';
import { POSTS_URL, FETCH_ALL_POSTS, FETCH_SINGLE_POST, FETCH_ALL_CATEGORIES, CATEGORIES_URL } from 'utils/constants';


export const fetchAllPosts = get(FETCH_ALL_POSTS, POSTS_URL);
export const fetchSinglePost = postPK => get(FETCH_SINGLE_POST, `${POSTS_URL}${postPK}/`);
export const fetchAllCategories = get(FETCH_ALL_CATEGORIES, CATEGORIES_URL);
