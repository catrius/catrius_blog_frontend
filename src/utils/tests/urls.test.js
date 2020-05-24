import { categoryUrl, postUrl } from 'utils/urls';


describe('postUrl', () => {
  it('should return post url', () => {
    expect(postUrl('some-post')).toEqual('/post/some-post/');
  });
});

describe('categoryUrl', () => {
  it('should return category url', () => {
    expect(categoryUrl('some-category')).toEqual('/category/some-category/');
  });
});
