import { getPageCount } from 'selectors/paginator-selectors';


describe('getPageCount', () => {
  it('should return page count', () => {
    const pageCount = getPageCount({
      paginator: {
        pageCount: 2,
      },
    });

    expect(pageCount).toEqual(2);
  });
});
