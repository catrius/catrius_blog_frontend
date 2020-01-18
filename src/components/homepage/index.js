import React from 'react';

import styles from './homepage.module.sass';
import Header from 'components/header';
import PostCard from 'components/homepage/post-card';
import { publicUrl } from 'utils/common';
import Sidebar from 'components/sidebar';


function Homepage() {
  function renderPostCard() {
    return (
      <PostCard
        thumbnailUrl={ publicUrl('assets/blog-post/blog-post1.jpg') }
        title='There is going to be a musical about meghan'
        date='20th Nov, 2018'
        excerpt='Creepy green light appear let rule only you are divide and lights moving and is not given creeping deep.'
        category='Travel'
      />
    );
  }

  return (
    <div className={ styles['homepage'] }>
      <Header/>
      <div className={ styles['content'] }>
        <div className={ styles['posts'] }>
          { renderPostCard() }
          { renderPostCard() }
          { renderPostCard() }
          { renderPostCard() }
          { renderPostCard() }
          { renderPostCard() }
          { renderPostCard() }
        </div>
      <Sidebar />
      </div>
    </div>
  );
}

export default Homepage;
