import { arrayOf, shape, string, bool } from 'prop-types';


// Environments
export const ENVIRONMENT = process.env.NODE_ENV;
export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';

// Website meta
export const WEB_NAME = 'Catrius';
export const WEB_DESCRIPTION= 'A blog by Thang Pham, where I can freely express myself.';

// API URLs
export const API_URL = ENVIRONMENT === PRODUCTION ? 'https://api.catri.us' : 'http://localhost:8000';
export const POSTS_API_URL = '/blog/posts/';
export const CATEGORIES_API_URL = '/blog/categories/';

// Routes
export const POST_ROUTER = '/post/:slug/';
export const CATEGORY_ROUTER = '/category/:slug/';
export const SEARCH_ROUTER = '/search/';

// Fetch states
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

// Fetch actions
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_PAGES = 'FETCH_PAGES';
export const FETCH_PAGE = 'FETCH_PAGE';

// Other actions
export const RESET_FETCH_STATE = 'RESET_FETCH_STATE';

// Shapes
export const POST_SHAPE = {
  slug: string,
  title: string,
  date: string,
  shortDate: string,
  excerpt: string,
  thumbnail: string,
  caption: string,
  imageShowing: bool,
  url: string,
  category: shape({
    slug: string,
    title: string,
    url: string,
  }),
};

export const CATEGORY_SHAPE = {
  slug: string,
  name: string,
  description: string,
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
export const DEVICES = [DESKTOP, TABLET, MOBILE];

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

// Page
export const PAGE_CATEGORY = 'page';
