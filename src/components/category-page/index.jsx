import React, { Component } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { isEqual } from 'lodash';

import { CATEGORY_SHAPE, POST_SHAPE } from 'utils/constants';
import PostList from 'components/common/post-list';
import MetaPage from 'components/common/meta-page';


export default class CategoryPage extends Component {
  fetch() {
    const { fetchPosts, slug, page } = this.props;
    fetchPosts({ category: slug, page });
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { slug, page } = this.props;
    (!isEqual(slug, prevProps.slug) || prevProps.page !== page) && this.fetch();
  }

  render() {
    const { posts, category } = this.props;
    return (
      <MetaPage title={ category.name } description={ category.description }>
        <PostList posts={ posts } />
      </MetaPage>
    );
  }
}

CategoryPage.propTypes = {
  fetchPosts: func,
  slug: string,
  page: number,
  posts: arrayOf(shape(POST_SHAPE)),
  category: shape(CATEGORY_SHAPE),
};
