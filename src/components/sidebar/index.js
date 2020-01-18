import React from 'react';

import styles from 'components/sidebar/sidebar.module.sass';
import Categories from 'components/sidebar/categories';
import Search from 'components/sidebar/search';
import Newsletter from 'components/sidebar/newsletter';
import AboutMe from 'components/sidebar/about-me';
import FollowMe from 'components/sidebar/Follow me';


function Sidebar() {
  const aboutMeContent = "Hi! I'm Thang Pham, a senior full stack web developer. My majors are Python, Django and React.";
  return (
    <div className={ styles['sidebar'] }>
      <AboutMe content={ aboutMeContent }/>
      <Search/>
      <Categories/>
      <Newsletter/>
      <FollowMe/>
    </div>
  );
}

export default Sidebar;
