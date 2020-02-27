import React, { Component } from 'react';
import { arrayOf, func, shape } from 'prop-types';

import styles from './homepage.module.sass';

import { POST_SHAPE } from 'utils/constants';
import PostList from 'components/common/post-list';


export default class Homepage extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { posts, fetchPosts } = this.props;
    return (
      <div className={ styles['homepage'] }>
       <PostList posts={ posts } fetchPosts={ fetchPosts }/>
      </div>
    );
  }
}

Homepage.propTypes = {
  fetchPosts: func,
  posts: arrayOf(shape(POST_SHAPE)),
};
