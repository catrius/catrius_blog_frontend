import { shallow } from 'enzyme';
import React from 'react';

import BaseIcon from 'components/common/icons/base-icon';
import FacebookIcon from 'components/common/icons/facebook-icon';
import { FACEBOOK_URL } from 'utils/constants';


describe('FacebookIcon', () => {
  it('should render BaseIcon with a facebook icon inside', () => {
    const wrapper = shallow(
      <FacebookIcon className='facebook-icon' />,
    );

    const baseIcon = wrapper.find(BaseIcon);
    expect(baseIcon.prop('className')).toEqual('facebook facebook-icon');
    expect(baseIcon.prop('href')).toEqual(FACEBOOK_URL);

    const icon = baseIcon.find('i');
    expect(icon.prop('className')).toEqual('fab fa-facebook-f');
  });
});
