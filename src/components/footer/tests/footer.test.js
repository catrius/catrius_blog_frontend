import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import { WEB_DESCRIPTION, WEB_NAME } from 'utils/constants';
import GithubIcon from 'components/common/icons/github-icon';
import Footer from 'components/footer';
import FacebookIcon from 'components/common/icons/facebook-icon';
import styles from 'components/footer/footer.module.sass';


describe('Footer', () => {
  it('should render website information, social media icons and pages', () => {
    const wrapper = shallow(
      <Footer/>,
    );

    expect(wrapper.find('.name').text()).toEqual(WEB_NAME);
    expect(wrapper.find('.description').text()).toEqual(WEB_DESCRIPTION);

    const socialMedia = wrapper.find('.social-media');
    expect(socialMedia.find(FacebookIcon).prop('className')).toEqual(styles['icon']);
    expect(socialMedia.find(GithubIcon).prop('className')).toEqual(styles['icon']);

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
});
