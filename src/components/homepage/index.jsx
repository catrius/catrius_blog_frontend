import React, { Component } from 'react';
import { arrayOf, func, number, shape } from 'prop-types';

import { POST_SHAPE } from 'utils/constants';
import PostList from 'components/common/post-list';
import MetaPage from 'components/common/meta-page';


export default class Homepage extends Component {
  fetch() {
    const { fetchPosts, page } = this.props;
    fetchPosts({ page });
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { page } = this.props;
    prevProps.page !== page && this.fetch();
  }

  render() {
    const { posts } = this.props;
    return (
      <MetaPage>
        <PostList posts={ posts } />
      </MetaPage>
    );
  }
}

Homepage.propTypes = {
  fetchPosts: func,
  page: number,
  posts: arrayOf(shape(POST_SHAPE)),
};
