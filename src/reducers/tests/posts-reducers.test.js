import { successfully } from 'utils/axios-suffixes';
import { FETCH_POST, FETCH_POSTS } from 'utils/constants';
import PostFactory from 'factories/post-factory';
import posts from 'reducers/posts-reducers';


describe('posts', () => {
  it('should handle successfully(FETCH_POSTS)', () => {
    const rawPosts = PostFactory.buildList(3);
    const action = {
      type: successfully(FETCH_POSTS),
      payload: {
        data: {
          results: rawPosts,
        },
      },
    };
    expect(posts({}, action)).toEqual(rawPosts);
  });

  it('should handle successfully(FETCH_POST)', () => {
    const rawPost = PostFactory.build();
    const action = {
      type: successfully(FETCH_POST),
      payload: {
        data: rawPost,
      },
    };
    expect(posts({}, action)).toEqual([rawPost]);
  });
});
