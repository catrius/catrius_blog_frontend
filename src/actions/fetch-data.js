import { get } from 'actions/axios-requests';
import {
  POSTS_URL,
  FETCH_ALL_POSTS,
  FETCH_POST,
  FETCH_ALL_CATEGORIES,
  CATEGORIES_URL,
  FETCH_CATEGORY,
} from 'utils/constants';


export const fetchAllPosts = get(FETCH_ALL_POSTS, POSTS_URL);
export const fetchPost = pk => get(FETCH_POST, `${POSTS_URL}${pk}/`);
export const fetchAllCategories = get(FETCH_ALL_CATEGORIES, CATEGORIES_URL);
export const fetchCategory = pk => get(FETCH_CATEGORY, `${CATEGORIES_URL}${pk}/`);
