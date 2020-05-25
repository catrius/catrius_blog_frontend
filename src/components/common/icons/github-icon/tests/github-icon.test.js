import { shallow } from 'enzyme';
import React from 'react';

import BaseIcon from 'components/common/icons/base-icon';
import { GITHUB_URL } from 'utils/constants';
import GithubIcon from 'components/common/icons/github-icon';


describe('GithubIcon', () => {
  it('should render BaseIcon with a github icon inside', () => {
    const wrapper = shallow(
      <GithubIcon className='github-icon' />,
    );

    const baseIcon = wrapper.find(BaseIcon);
    expect(baseIcon.prop('className')).toEqual('github github-icon');
    expect(baseIcon.prop('href')).toEqual(GITHUB_URL);

    const icon = baseIcon.find('i');
    expect(icon.prop('className')).toEqual('fab fa-github-alt');
  });
});
