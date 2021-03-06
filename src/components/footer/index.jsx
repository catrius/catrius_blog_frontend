import React from 'react';
import { Link } from 'react-router-dom';

import styles from './footer.module.sass';

import FacebookIcon from 'components/common/icons/facebook-icon';
import GithubIcon from 'components/common/icons/github-icon';
import { WEB_DESCRIPTION, WEB_NAME } from 'utils/constants';


function Footer() {
  return (
    <div className={ styles['footer'] }>
      <div className={ styles['name'] }>{ WEB_NAME }</div>
      <div className={ styles['description'] }>{ WEB_DESCRIPTION }</div>
      <div className={ styles['social-media'] }>
        <FacebookIcon className={ styles['icon'] }/>
        <GithubIcon className={ styles['icon'] }/>
      </div>
      <div className={ styles['pages'] }>
        <Link to='#' className={ styles['page'] }>About</Link>
        <Link to='#' className={ styles['page'] }>Contact</Link>
      </div>
    </div>
  );
}

export default Footer;
