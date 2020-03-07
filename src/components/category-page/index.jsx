import React, { Component } from 'react';
import { arrayOf, func, number, shape } from 'prop-types';

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
    const { posts } = this.props;
    return (
      <PostList posts={ posts } />
    );
  }
}

CategoryPage.propTypes = {
  fetchPosts: func,
  pk: number,
  page: number,
  posts: arrayOf(shape(POST_SHAPE)),
};
