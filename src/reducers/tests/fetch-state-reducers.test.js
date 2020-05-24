import { LOCATION_CHANGE } from 'connected-react-router';

import { failingly, successfully } from 'utils/axios-suffixes';
import { FAIL, FETCH_POST, FETCH_POSTS, REQUEST, SUCCESS } from 'utils/constants';
import fetchState from 'reducers/fetch-state-reducers';


describe('fetchState', () => {
  const assertHandle = (actionType, posts, post) => {
    const action = {
      type: actionType,
    };
    expect(fetchState({}, action)).toEqual({
      posts,
      post,
    });
  };

  it('should handle LOCATION_CHANGE', () => {
    assertHandle(LOCATION_CHANGE, null, null);
  });

  it('should handle FETCH_POSTS', () => {
    assertHandle(FETCH_POSTS, REQUEST, null);
  });

  it('should handle successfully(FETCH_POSTS)', () => {
    assertHandle(successfully(FETCH_POSTS), SUCCESS, SUCCESS);
  });

  it('should handle failingly(FETCH_POSTS)', () => {
    assertHandle(failingly(FETCH_POSTS), FAIL, null);
  });

  it('should handle FETCH_POST', () => {
    assertHandle(FETCH_POST, null, REQUEST);
  });

  it('should handle successfully(FETCH_POST)', () => {
    assertHandle(successfully(FETCH_POST), null, SUCCESS);
  });

  it('should handle successfully(FETCH_POST)', () => {
    assertHandle(failingly(FETCH_POST), null, FAIL);
  });
});
