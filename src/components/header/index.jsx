import React from 'react';

import styles from './header.module.sass';
import { publicUrl } from 'utils/common';

function Header() {
  return (
    <div className={ styles['header'] }>
      <div className={ styles['content'] }>
        <div className={ styles['navbar-left'] }>
          <a href='/' className={ styles['navbar-item'] }>Home</a>
          <a href='/' className={ styles['navbar-item'] }>Category</a>
          <a href='/' className={ styles['navbar-item'] }>Archive</a>
        </div>
        <a href='/' className={ styles['logo'] } >
          <img src={ publicUrl('assets/logo.png') } alt=''/>
        </a>
        <div className={ styles['navbar-right'] }>
          <a href='/' className={ styles['navbar-item'] }>Elements</a>
          <a href='/' className={ styles['navbar-item'] }>Detail</a>
          <a href='/' className={ styles['navbar-item'] }>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
