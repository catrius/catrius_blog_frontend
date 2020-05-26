import React, * as ReactAll from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import Dotdotdot from 'react-dotdotdot';

import { mockDeviceContext } from 'test-utils';
import { DEVICES, RESPONSIVE_CLASS_NAMES } from 'utils/constants';
import PostCard from 'components/common/post-list/post-card/index';
import { TransformedPostFactory } from 'factories/post-factory';


describe('PostCard', () => {
  it('should render post content', () => {
    const device = faker.random.arrayElement(DEVICES);
    mockDeviceContext(ReactAll, device);

    const post = TransformedPostFactory();
    const wrapper = shallow(
      <PostCard { ...post }/>,
    );

    expect(wrapper.prop('className')).toEqual(`post-card ${ RESPONSIVE_CLASS_NAMES[device] }`);
    expect(wrapper.prop('to')).toEqual(post.url);

    const thumbnailImage = wrapper.find('.thumbnail').find('.thumbnail-image');
    expect(thumbnailImage.prop('src')).toEqual(post.thumbnail);

    const detail = wrapper.find('.detail');

    const clampedTitle = detail.find('.title').find(Dotdotdot);
    expect(clampedTitle.prop('clamp')).toEqual(2);
    expect(clampedTitle.dive().text()).toEqual(post.title);

    const meta = detail.find('.meta');

    const category = meta.find('.category');
    expect(category.text()).toEqual(post.category.name);

    const categoryIcon = category.find('i');
    expect(categoryIcon.prop('className')).toEqual('far fa-folder icon');

    const date = meta.find('.date');
    expect(date.text()).toEqual(post.shortDate);

    const dateIcon = date.find('i');
    expect(dateIcon.prop('className')).toEqual('far fa-calendar-alt icon');

    const content = detail.find('.content').find(Dotdotdot);
    expect(content.prop('clamp')).toEqual(3);
    expect(content.dive().text()).toEqual(post.excerpt);
  });
});
