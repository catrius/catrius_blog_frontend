import React, { Component } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';

import { POST_SHAPE } from 'utils/constants';
import PostList from 'components/common/post-list';


export default class SearchPage extends Component {
  fetch() {
    const { fetchPosts, searchQuery, page } = this.props;
    fetchPosts({ q: searchQuery, page });
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { searchQuery, page } = this.props;
    (searchQuery !== prevProps.searchQuery || prevProps.page !== page) && this.fetch();
  }

  render() {
    const { posts } = this.props;
    return (
      <PostList posts={ posts } />
    );
  }
}

SearchPage.propTypes = {
  fetchPosts: func,
  page: number,
  searchQuery: string,
  posts: arrayOf(shape(POST_SHAPE)),
};
