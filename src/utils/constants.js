import { arrayOf, number, shape, string } from 'prop-types';

// API URLs
export const BASE_API_URL = 'http://192.168.0.108:8000';
export const POSTS_API_URL = '/blog/posts/';
export const CATEGORIES_API_URL = '/blog/categories/';

// Routes
export const POST_ROUTER = '/post/:pk/';
export const CATEGORY_ROUTER = '/category/:pk/';
export const SEARCH_ROUTER = '/search/';

// Actions
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

// Shapes
export const POST_SHAPE = {
  pk: number,
  title: string,
  date: string,
  shortDate: string,
  excerpt: string,
  thumbnail: string,
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
  posts: arrayOf(shape(POST_SHAPE)),
};

// Social media URLs
export const FACEBOOK_URL = 'https://www.facebook.com/catriuspham';
export const GITHUB_URL = 'https://github.com/catrius';

// Device types
export const DESKTOP = 'DESKTOP';
export const TABLET = 'TABLET';
export const MOBILE = 'MOBILE';

// Device classname map
export const RESPONSIVE_CLASS_NAMES = {
  [DESKTOP]: 'large',
  [TABLET]: 'medium',
  [MOBILE]: 'small',
};

// Max widths
// = postCardWidth / flexBasic + paddingLeft + paddingRight = 330px / 0.3 + 15px * 2
export const WIDTHS = {
  [DESKTOP]: 1130, // = 330px / 0.3 + 15px * 2
  [TABLET]: 725, // = 330px / 0.475 + 15px * 2
  [MOBILE]: 360, // = 330px / 1 + 15px * 2
};
