import { failingly, successfully } from 'utils/axios-suffixes';


describe('successfully', () => {
  it('should return successfully fetch action name', () => {
    expect(successfully('FETCH_POSTS')).toEqual('FETCH_POSTS_SUCCESS');
  });
});

describe('failingly', () => {
  it('should return failingly fetch action name', () => {
    expect(failingly('FETCH_POSTS')).toEqual('FETCH_POSTS_FAIL');
  });
});
