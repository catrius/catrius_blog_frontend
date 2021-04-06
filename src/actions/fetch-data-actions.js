import { get } from 'actions/axios-requests-actions';
import {
  POSTS_API_URL,
  FETCH_POSTS,
  FETCH_POST,
  FETCH_CATEGORIES,
  CATEGORIES_API_URL,
  FETCH_PAGES,
  FETCH_PAGE,
  PAGE_CATEGORY,
} from 'utils/constants';


export const fetchPosts = params => get(FETCH_POSTS, POSTS_API_URL, params);
export const fetchPost = slug => get(FETCH_POST, `${POSTS_API_URL}${slug}/`);
export const fetchPages = params => get(FETCH_PAGES, POSTS_API_URL, { category: PAGE_CATEGORY });
export const fetchPage = slug => get(FETCH_PAGE, `${POSTS_API_URL}${slug}/`);
export const fetchCategories = () => get(FETCH_CATEGORIES, CATEGORIES_API_URL);
