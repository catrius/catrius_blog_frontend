import React, * as ReactAll from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';

import { mockDeviceContext } from 'test-utils';
import { DEVICES, RESPONSIVE_CLASS_NAMES } from 'utils/constants';
import PostCard from 'components/common/post-list/post-card';
import { TransformedPostsFactory } from 'factories/post-factory';
import PostList from 'components/common/post-list';
import PaginatorContainer from 'components/common/paginator-container';


describe('PostCard', () => {
  it('should render post content', () => {
    const device = faker.random.arrayElement(DEVICES);
    mockDeviceContext(ReactAll, device);

    const posts = TransformedPostsFactory(3);
    const wrapper = shallow(
      <PostList posts={ posts }/>,
    );

    const postList = wrapper.find('.post-list');
    expect(postList.prop('className')).toEqual(`post-list ${ RESPONSIVE_CLASS_NAMES[device] }`);

    const postCards = postList.find(PostCard);
    expect(postCards).toHaveLength(3);

    postCards.forEach((card, index) => {
      const post = posts[index];
      expect(card.props()).toEqual(post);
    });

    expect(wrapper.find(PaginatorContainer).exists()).toEqual(true);
  });
});
