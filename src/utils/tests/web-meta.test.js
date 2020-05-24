import { buildTitle } from 'utils/web-meta';


describe('buildTitle', () => {
  it('should return page title with web name', () => {
    expect(buildTitle('Cooking')).toEqual('Cooking - Catrius');
  });

  it('should return web name only if there is not text provided', () => {
    expect(buildTitle()).toEqual('Catrius');
  });
});
