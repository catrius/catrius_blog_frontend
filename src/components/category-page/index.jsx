import React, { Component } from 'react';
import { arrayOf, func, number, shape } from 'prop-types';

import styles from './category-page.module.sass';

import { POST_SHAPE } from 'utils/constants';
import PostList from 'components/common/post-list';


export default class CategoryPage extends Component {
  fetch() {
    const { fetchPosts, pk, page } = this.props;
    fetchPosts({ category: pk, page });
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { pk, page } = this.props;
    (pk !== prevProps.pk || prevProps.page !== page) && this.fetch();
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
  page: number,
  posts: arrayOf(shape(POST_SHAPE)),
};
