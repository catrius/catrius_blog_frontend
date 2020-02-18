import React from 'react';

import styles from './footer.module.sass';


function Footer() {
  const heart = <i className='fas fa-heart' />;
  const colorlib = (
    <a
      className={ styles['highlight'] }
      href='https://colorlib.com'
      target='_blank'
      rel='noopener noreferrer'>
      Colorlib
    </a>
  );
  return (
    <div className={ styles['footer'] }>
      <div className={ styles['copyright'] }>
        <p>A blog by <span className={ styles['highlight'] }>Thang Pham</span></p>
        <p>This template is made with { heart } by { colorlib }</p>
      </div>
    </div>
  );
}

export default Footer;
