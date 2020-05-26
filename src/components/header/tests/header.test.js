import { shallow } from 'enzyme';
import React, * as ReactAll from 'react';
import { Link } from 'react-router-dom';

import { DESKTOP, MOBILE, WEB_NAME } from 'utils/constants';
import GithubIcon from 'components/common/icons/github-icon';
import FacebookIcon from 'components/common/icons/facebook-icon';
import styles from 'components/footer/footer.module.sass';
import Header from 'components/header';
import { mockDeviceContext } from 'test-utils';


describe('Header', () => {
  it('should render fully on desktop', () => {
    mockDeviceContext(ReactAll, DESKTOP);

    const wrapper = shallow(
      <Header/>,
    );

    const socialMedia = wrapper.find('.social-media');
    expect(socialMedia.find(FacebookIcon).prop('className')).toEqual(styles['icon']);
    expect(socialMedia.find(GithubIcon).prop('className')).toEqual(styles['icon']);

    const logo = wrapper.find('.logo');
    expect(logo.prop('to')).toEqual('/');
    expect(logo.text()).toEqual(WEB_NAME);

    const pages = wrapper.find('.pages');
    const links = pages.find(Link);
    expect(links).toHaveLength(2);

    const aboutPage = links.at(0);
    expect(aboutPage.prop('to')).toEqual('#');
    expect(aboutPage.prop('className')).toEqual('page');
    expect(aboutPage.text()).toEqual('About');

    const contactPage = links.at(1);
    expect(contactPage.prop('to')).toEqual('#');
    expect(contactPage.prop('className')).toEqual('page');
    expect(contactPage.text()).toEqual('Contact');
  });

  it('should only render logo on mobile', () => {
    mockDeviceContext(ReactAll, MOBILE);

    const wrapper = shallow(
      <Header/>,
    );

    expect(wrapper.find('.social-media').exists()).toEqual(false);

    const logo = wrapper.find('.logo');
    expect(logo.prop('to')).toEqual('/');
    expect(logo.text()).toEqual(WEB_NAME);

    expect(wrapper.find('.pages').exists()).toEqual(false);
  });
});
