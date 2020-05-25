import { shallow } from 'enzyme';
import React from 'react';

import BaseIcon from 'components/common/icons/base-icon';


describe('BaseIcon', () => {
  it('should render children in an anchor', () => {
    const wrapper = shallow(
      <BaseIcon className='google' href='https://google.com'>
        <i className='fab fa-google'/>
      </BaseIcon>,
    );

    expect(wrapper.prop('className')).toEqual('base google');
    expect(wrapper.prop('href')).toEqual('https://google.com');
    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.children().at(0).prop('className')).toEqual('fab fa-google');
  });
});
