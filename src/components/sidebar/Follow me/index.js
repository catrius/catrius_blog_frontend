import React from 'react';

import styles from './follow-me.module.sass';
import Section from 'components/sidebar/section';


function FollowMe() {
  return (
    <Section title='Follow Me'>
      <div className={ styles['social-icons'] }>
        <a href='/' className={ styles['social-icon'] }><i className='fab fa-facebook-f'/></a>
      </div>
    </Section>
  );
}

export default FollowMe;
