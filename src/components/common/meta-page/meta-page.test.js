import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker';
import { Helmet } from 'react-helmet-async';

import MetaPage from 'components/common/meta-page';
import { buildTitle } from 'utils/web-meta';
import { FAIL, SUCCESS } from 'utils/constants';


describe('MetaPage', () => {
  it('should render Helmet', () => {
    const title = faker.lorem.sentence();
    const description = faker.lorem.sentence();
    const wrapper = shallow(
      <MetaPage title={ title } description={ description }>
        <div className='children'/>
      </MetaPage>,
    );

    const helmet = wrapper.find(Helmet);
    expect(helmet.find('title').text()).toEqual(buildTitle(title));

    const descriptionMeta = helmet.find('meta');
    expect(descriptionMeta.prop('name')).toEqual('description');
    expect(descriptionMeta.prop('content')).toEqual(description);
  });

  it('should render error message when fetching failed', () => {
    const errorMessage = faker.lorem.sentence();
    const wrapper = shallow(
      <MetaPage errorMessage={ errorMessage } fetchState={ FAIL }>
        <div className='children'/>
      </MetaPage>,
    );

    const h1 = wrapper.find('.empty-page').find('h1');
    expect(h1.prop('className')).toEqual('title');
    expect(h1.text()).toEqual(errorMessage);
  });

  it('should render children after fetching success', () => {
    const wrapper = shallow(
      <MetaPage fetchState={ SUCCESS }>
        <div className='children'/>
      </MetaPage>,
    );

    expect(wrapper.find('.children').exists()).toEqual(true);
  });
});
