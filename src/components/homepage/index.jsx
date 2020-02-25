import React, { Component } from 'react';
import { arrayOf, bool, func, shape } from 'prop-types';
import { map } from 'lodash';

import styles from './homepage.module.sass';

import { POST_SHAPE } from 'utils/constants';
import PostCard from 'components/common/post-card';
import PaginatorContainer from 'containers/common/paginator';


export default class Homepage extends Component {
  componentDidMount() {
    const { fetchPosts, fetchedPosts } = this.props;
    !fetchedPosts && fetchPosts();
  }

  render() {
    const { posts, fetchPosts } = this.props;
    return (
      <div className={ styles['homepage'] }>
        <PaginatorContainer fetch={ fetchPosts }/>
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
