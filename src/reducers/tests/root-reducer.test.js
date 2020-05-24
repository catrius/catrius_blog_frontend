import { createBrowserHistory } from 'history';

import rootReducer from 'reducers/root-reducer';


describe('rootReducer', () => {
  it('should have initial state', () => {
    const action = {
      type: '@INIT',
    };
    const history = createBrowserHistory();

    const router = {
      action: 'POP',
      location: {
        hash: '',
        pathname: '/',
        query: {},
        search: '',
        state: undefined,
      },
    };

    expect(rootReducer(history)({}, action)).toEqual({
      router,
      posts: [],
      categories: [],
      paginator: {
        pageCount: 0,
      },
      fetchState: {
        posts: null,
        post: null,
      },
    });
  });
});
