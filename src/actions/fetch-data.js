import { get } from 'actions/axios-requests';
import {
  POSTS_URL,
  FETCH_POSTS,
  FETCH_POST,
  FETCH_CATEGORIES,
  CATEGORIES_URL,
} from 'utils/constants';


export const fetchPosts = params => get(FETCH_POSTS, POSTS_URL, params);
export const fetchPost = pk => get(FETCH_POST, `${POSTS_URL}${pk}/`);
export const fetchCategories = get(FETCH_CATEGORIES, CATEGORIES_URL);
