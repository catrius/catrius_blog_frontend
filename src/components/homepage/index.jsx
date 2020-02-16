import React, { Component } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';

import styles from './homepage.module.sass';
import Header from 'components/header';
import PostCard from 'components/homepage/post-card';
import { publicUrl } from 'utils/common';
import Sidebar from 'components/sidebar';
import Footer from 'components/footer';


export default class Homepage extends Component {
  componentDidMount() {
    const { fetchAllPosts } = this.props;
    fetchAllPosts();
  }

  renderPostCard() {
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

  render() {
    const { allPosts } = this.props;
    return (
      <div className={ styles['homepage'] }>
        <Header/>
        <div className={ styles['content'] }>
          <div className={ styles['posts'] }>
            {
              allPosts.map(post => (
                <PostCard
                  key={ post.id }
                  thumbnailUrl={ publicUrl('assets/blog-post/blog-post1.jpg') }
                  title={ post.title }
                  date={ post.created }
                  excerpt={ post.exceprt }
                  category={ post.category }
                />
              ))
            }
          </div>
          <Sidebar/>
        </div>
        <Footer/>
      </div>
    );
  }
}

Homepage.propTypes = {
  fetchAllPosts: func,
  allPosts: arrayOf(shape({
    id: number,
    title: string,
    date: string,
    excerpt: string,
    category: string,
  })),
};
