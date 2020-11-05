import { getCategorySlug, getPage, getSearchQuery } from 'selectors/router-selectors';


describe('getCategorySlug', () => {
  it('should return category slug based on pathname', () => {
    const location = {
      pathname: '/category/test/',
    };
    expect(getCategorySlug(location)).toEqual('test');
  });

  it('should return null if there is not slug on pathname', () => {
    const location = {
      pathname: '/post/1/',
    };
    expect(getCategorySlug(location)).toEqual(null);
  });
});

describe('getPage', () => {
  it('should return page number', () => {
    const location =  {
      search: '?page=2',
    };
    expect(getPage(location)).toEqual(2);
  });

  it('should return 1 if there is no page number', () => {
    const location = {};
    expect(getPage(location)).toEqual(1);
  });
});

describe('getSearchQuery', () => {
  it('should return search query', () => {
    const location = {
      search: '?q=something',
    };
    expect(getSearchQuery(location)).toEqual('something');
  });
});
