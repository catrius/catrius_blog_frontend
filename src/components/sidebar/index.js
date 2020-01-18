import React from 'react';

import styles from 'components/sidebar/sidebar.module.sass';
import Categories from 'components/sidebar/categories';
import Search from 'components/sidebar/search';

function Sidebar() {
  return (
    <div className={ styles['sidebar'] }>
      <Categories/>
      <Search/>
    </div>
  );
}

export default Sidebar;
