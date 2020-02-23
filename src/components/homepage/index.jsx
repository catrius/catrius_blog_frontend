import React, { Component } from 'react';
import { arrayOf, bool, func, shape } from 'prop-types';
import { map } from 'lodash';

import styles from './homepage.module.sass';

import PostCard from 'components/homepage/post-card';
import { POST_SHAPE } from 'utils/constants';


export default class Homepage extends Component {
  componentDidMount() {
    const { fetchAllPosts, fetchedAllPosts } = this.props;
    !fetchedAllPosts && fetchAllPosts();
  }

  render() {
    const { allPosts } = this.props;
    return (
      <div className={ styles['homepage'] }>
        <div className={ styles['posts'] }>
          {
            map(allPosts, post => (
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
  fetchAllPosts: func,
  fetchedAllPosts: bool,
  allPosts: arrayOf(shape(POST_SHAPE)),
};
