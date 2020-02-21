import React, { Component } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';

import styles from './homepage.module.sass';

import PostCard from 'components/homepage/post-card';
import { publicUrl } from 'utils/common';


export default class Homepage extends Component {
  componentDidMount() {
    const { fetchAllPosts } = this.props;
    fetchAllPosts();
  }

  render() {
    const { allPosts } = this.props;
    return (
      <div className={ styles['homepage'] }>
        <div className={ styles['posts'] }>
          {
            allPosts.map(post => (
              <PostCard
                key={ post.pk }
                pk={ post.pk }
                thumbnailUrl={ publicUrl('assets/blog-post/blog-post1.jpg') }
                title={ post.title }
                date={ post.date }
                excerpt={ post.excerpt }
                category={ post.category }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  fetchAllPosts: func,
  allPosts: arrayOf(shape({
    pk: number,
    title: string,
    date: string,
    excerpt: string,
    category: string,
  })),
};
