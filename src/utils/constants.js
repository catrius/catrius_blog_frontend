// URLs
import { number, shape, string } from 'prop-types';


export const BASE_API_URL = 'http://localhost:8000';
export const POSTS_URL = '/blog/posts/';
export const CATEGORIES_URL = '/blog/categories/';

// Routes
export const POST_ROUTER = '/post/:pk/';
export const CATEGORY_ROUTER = '/category/:pk/';

// Actions
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';

// Shapes
export const POST_SHAPE = {
  pk: number,
  title: string,
  date: string,
  excerpt: string,
  url: string,
  category: shape({
    pk: number,
    title: string,
    url: string,
  }),
};

export const CATEGORY_SHAPE = {
  pk: number,
  name: string,
  description: string,
  postCount: number,
  url: string,
  posts: shape(POST_SHAPE),
};
