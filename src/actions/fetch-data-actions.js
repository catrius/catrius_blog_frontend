import { get } from 'actions/axios-requests-actions';
import {
  POSTS_API_URL,
  FETCH_POSTS,
  FETCH_POST,
  FETCH_CATEGORIES,
  CATEGORIES_API_URL,
} from 'utils/constants';


export const fetchPosts = params => get(FETCH_POSTS, POSTS_API_URL, params);
export const fetchPost = slug => get(FETCH_POST, `${POSTS_API_URL}${slug}/`);
export const fetchCategories = () => get(FETCH_CATEGORIES, CATEGORIES_API_URL);
