import { fetchCategories, fetchPost, fetchPosts } from 'actions/fetch-data-actions';
import { CATEGORIES_API_URL, FETCH_CATEGORIES, FETCH_POST, FETCH_POSTS, POSTS_API_URL } from 'utils/constants';


describe('fetchPosts', () => {
  it('should return FETCH_POSTS action', () => {
    const params = {
      category: 'some-category',
    };
    expect(fetchPosts(params)).toEqual({
      type: FETCH_POSTS,
      payload: {
        request: {
          method: 'get',
          url: POSTS_API_URL,
          params,
        },
      },
    });
  });
});

describe('fetchPost', () => {
  it('should return FETCH_POST action', () => {
    expect(fetchPost('some-post')).toEqual({
      type: FETCH_POST,
      payload: {
        request: {
          method: 'get',
          url: `${POSTS_API_URL}some-post`,
          params: {},
        },
      },
    });
  });
});

describe('fetchCategories', () => {
  it('should return FETCH_CATEGORIES action', () => {
    expect(fetchCategories()).toEqual({
      type: FETCH_CATEGORIES,
      payload: {
        request: {
          method: 'get',
          url: CATEGORIES_API_URL,
          params: {},
        },
      },
    });
  });
});
