import React from 'react';

import styles from './search.module.sass';
import Section from 'components/sidebar/section';


function Search() {
  return (
    <Section>
      <form className={ styles['search'] }>
        <input className={ styles['search-box'] } placeholder='Search Posts' name='search' type='text'/>
        <button className={ styles['submit-button'] } type='submit'><i className='fa fa-search'/></button>
      </form>
    </Section>
  );
}

export default Search;
