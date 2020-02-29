import React from 'react';
import { Link } from 'react-router-dom';

import styles from './footer.module.sass';

import Facebook from 'components/common/icons/facebook';
import Github from 'components/common/icons/github';


function Footer() {
  return (
    <div className={ styles['footer'] }>
      <div className={ styles['name'] }>Catri.us</div>
      <div className={ styles['description'] }>
        A blog by Thang Pham, where I can freely express myself.
      </div>
      <div className={ styles['social-media'] }>
        <Facebook className={ styles['icon'] } />
        <Github className={ styles['icon'] } />
      </div>
       <div className={ styles['pages'] }>
        <Link to='#' className={ styles['page'] }>About</Link>
        <Link to='#' className={ styles['page'] }>Contact</Link>
      </div>
    </div>
  );
}

export default Footer;
