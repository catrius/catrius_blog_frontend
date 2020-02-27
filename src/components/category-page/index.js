import React, { Component } from 'react';
import { arrayOf, func, number, shape } from 'prop-types';
import { isNil } from 'lodash';

import styles from './category-page.module.sass';

import { POST_SHAPE } from 'utils/constants';
import PostList from 'components/common/post-list';


export default class CategoryPage extends Component {
  componentDidMount() {
    const { fetchPosts, pk } = this.props;
    fetchPosts({ category: pk });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { fetchPosts, pk } = this.props;
    if (!isNil(pk) && pk !== prevProps.pk) {
      fetchPosts({ category: pk });
    }
  }

  render() {
    const { posts, fetchPosts, pk } = this.props;
    return (
      <div className={ styles['category-page'] }>
       <PostList posts={ posts } fetchPosts={ fetchPosts } fetchParams={ { category: pk } }/>
      </div>
    );
  }
}

CategoryPage.propTypes = {
  fetchPosts: func,
  pk: number,
  posts: arrayOf(shape(POST_SHAPE)),
};
