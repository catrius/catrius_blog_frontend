import { shallow } from 'enzyme';
import React, * as ReactAll from 'react';
import { Link } from 'react-router-dom';

import { DESKTOP, MOBILE, WEB_NAME } from 'utils/constants';
import GithubIcon from 'components/common/icons/github-icon';
import FacebookIcon from 'components/common/icons/facebook-icon';
import styles from 'components/footer/footer.module.sass';
import Header from 'components/header/index';
import { DeviceContext } from 'contexts';


describe('Header', () => {
  it('should render fully on desktop', () => {
    jest.spyOn(ReactAll, 'useContext').mockImplementation(context => {
      return context === DeviceContext ? DESKTOP : null;
    });

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
    jest.spyOn(ReactAll, 'useContext').mockImplementation(context => {
      return context === DeviceContext ? MOBILE : null;
    });

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
