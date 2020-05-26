import faker from 'faker';

import { successfully } from 'utils/axios-suffixes';
import { FETCH_POSTS } from 'utils/constants';
import paginator from 'reducers/paginator-reducers';


describe('paginator', () => {
  it('should handle successfully(FETCH_POSTS)', () => {
    const pageCount = faker.random.number({ min: 1, max: 20 });
    const action = {
      type: successfully(FETCH_POSTS),
      payload: {
        data: {
          'page_count': pageCount,
        },
      },
    };
    expect(paginator({}, action)).toEqual({
      pageCount,
    });
  });
});
