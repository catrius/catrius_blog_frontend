import React from 'react';

import styles from './newsletter.module.sass';

import Section from 'components/sidebar/section';


function Newsletter() {
  return (
    <Section title='Newsletter'>
      <form className={ styles['newsletter'] }>
        <input className={ styles['email'] } placeholder='Your email' name='email' type='text'/>
        <button className={ styles['submit-button'] } type='submit'>SUBSCRIBE</button>
      </form>
    </Section>
  );
}

export default Newsletter;
