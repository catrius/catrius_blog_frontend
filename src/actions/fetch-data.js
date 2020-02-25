import { get } from 'actions/axios-requests';
import {
  POSTS_URL,
  FETCH_POSTS,
  FETCH_POST,
  FETCH_CATEGORIES,
  CATEGORIES_URL,
  FETCH_CATEGORY,
} from 'utils/constants';


export const fetchPosts = get(FETCH_POSTS, POSTS_URL);
export const fetchPost = pk => get(FETCH_POST, `${POSTS_URL}${pk}/`);
export const fetchCategories = get(FETCH_CATEGORIES, CATEGORIES_URL);
export const fetchCategory = pk => get(FETCH_CATEGORY, `${CATEGORIES_URL}${pk}/`);
