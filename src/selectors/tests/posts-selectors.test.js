import { each } from 'lodash';

import { getPosts, postSelector, postsSelector, fetchedPostSelector } from 'selectors/posts-selectors';
import PostFactory from 'factories/post-factory';
import { transformPost } from 'selectors/transfomers';


let rawPosts;
let state;

beforeAll(() => {
  rawPosts = PostFactory.buildList(3);
  state = {
    posts: rawPosts,
  };
});

describe('getPosts', () => {
  it('should return posts', () => {
    const posts = getPosts(state);

    expect(posts).toHaveLength(3);
    expect(posts).toEqual(rawPosts);
  });
});

describe('PostsSelector', () => {
  it('should return transformed posts', () => {
    const posts = postsSelector(state);

    expect(posts).toHaveLength(3);
    each(posts, (post, index) => expect(post).toEqual(transformPost(rawPosts[index])));
  });
});

describe('postSelector', () => {
  it('should return post based on slug', () => {
    each(rawPosts, rawPost => {
      expect(postSelector(rawPost.slug)(state, {})).toEqual(transformPost(rawPost));
    });
  });
});

describe('fetchedPostSelector', () => {
  it('should return true if post has been fetched', () => {
    each(rawPosts, rawPost => {
      expect(fetchedPostSelector(rawPost.slug)(state, {})).toBe(true);
    });
  });

  it('should return false if post has not been fetched', () => {
    expect(fetchedPostSelector('not-fetched-post')(state, {})).toBe(false);
  });
});
