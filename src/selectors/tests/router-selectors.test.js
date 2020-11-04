import { getCategorySlug, getPage, getSearchQuery } from 'selectors/router-selectors';


describe('getCategorySlug', () => {
  it('should return category slug based on pathname', () => {
    const props = {
      location: {
        pathname: '/category/test/',
      },
    };
    expect(getCategorySlug({}, props)).toEqual('test');
  });

  it('should return null if there is not slug on pathname', () => {
    const props = {
      location: {
        pathname: '/post/1/',
      },
    };
    expect(getCategorySlug({}, props)).toEqual(null);
  });
});

describe('getPage', () => {
  it('should return page number', () => {
    const props = {
      location: {
        search: '?page=2',
      },
    };
    expect(getPage({}, props)).toEqual(2);
  });

  it('should return 1 if there is no page number', () => {
    const props = {
      location: {},
    };
    expect(getPage({}, props)).toEqual(1);
  });
});

describe('getSearchQuery', () => {
  it('should return search query', () => {
    const props = {
      location: {
        search: '?q=something',
      },
    };
    expect(getSearchQuery({}, props)).toEqual('something');
  });
});
