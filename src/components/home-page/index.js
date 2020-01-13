import React from 'react';

import styles from './home-page.module.sass';
import Header from 'components/header';
import PostCard from 'components/post-card';
import { publicUrl } from 'utils/common';


function HomePage() {
  return (
    <div className={ styles.homePage }>
      <Header/>
      <div className='posts'>
        <PostCard
          thumbnail={ publicUrl('assets/blog-post/blog-post1.jpg') }
          title='There is going to be a musical about meghan'
          date='20th Nov, 2018'
          excerpt='Creepy green light appear let rule only you are divide and lights moving and is not given creeping deep.'
          category='Travel'
        />
        <PostCard
          thumbnail={ publicUrl('assets/blog-post/blog-post1.jpg') }
          title='There is going to be a musical about meghan'
          date='20th Nov, 2018'
          excerpt='Creepy green light appear let rule only you are divide and lights moving and is not given creeping deep.'
          category='Travel'
        />
        <PostCard
          thumbnail={ publicUrl('assets/blog-post/blog-post1.jpg') }
          title='There is going to be a musical about meghan'
          date='20th Nov, 2018'
          excerpt='Creepy green light appear let rule only you are divide and lights moving and is not given creeping deep.'
          category='Travel'
        />
        <PostCard
          thumbnail={ publicUrl('assets/blog-post/blog-post1.jpg') }
          title='There is going to be a musical about meghan'
          date='20th Nov, 2018'
          excerpt='Creepy green light appear let rule only you are divide and lights moving and is not given creeping deep.'
          category='Travel'
        />
      </div>
    </div>
  );
}

export default HomePage;
