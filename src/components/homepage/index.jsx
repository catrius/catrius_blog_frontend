import React, { Component } from 'react';
import { arrayOf, bool, func, shape } from 'prop-types';
import { map } from 'lodash';

import styles from './homepage.module.sass';

import PostCard from 'components/homepage/post-card';
import { POST_SHAPE } from 'utils/constants';


export default class Homepage extends Component {
  componentDidMount() {
    const { fetchPosts, fetchedPosts } = this.props;
    !fetchedPosts && fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className={ styles['homepage'] }>
        <div className={ styles['posts'] }>
          {
            map(posts, post => (
              <PostCard
                key={ post.pk }
                pk={ post.pk }
                title={ post.title }
                date={ post.date }
                excerpt={ post.excerpt }
                category={ post.category }
                url={ post.url }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  fetchPosts: func,
  fetchedPosts: bool,
  posts: arrayOf(shape(POST_SHAPE)),
};
