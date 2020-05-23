import { getFetchState } from 'selectors/fetch-state-selectors';


describe('getFetchState', () => {
  it('should return fetch state', () => {
    const fetchState = getFetchState({
      fetchState: {
        post: 'SUCCESS',
        posts: 'SUCCESS',
      },
    });

    expect(fetchState).toEqual({
      post: 'SUCCESS',
      posts: 'SUCCESS',
    });
  });
});
