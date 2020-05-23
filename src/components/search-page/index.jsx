import React, { Component } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import cx from 'classnames';
import { isEmpty } from 'lodash';

import styles from 'components/search-page/search-page.module.sass';
import { FAIL, POST_SHAPE } from 'utils/constants';
import PostList from 'components/common/post-list';
import MetaPage from 'components/common/meta-page';
import commonStyles from 'styles/common.module.sass';


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
    const { fetchState, posts, searchQuery } = this.props;
    const foundText = `Search results for "${ searchQuery }"`;
    const notFoundText = `Nothing found for "${ searchQuery }"`;
    return !isEmpty(posts) ? (
      <MetaPage fetchState={ fetchState } title={ foundText } description={ foundText }>
        <div className={ styles['search-page'] }>
          <h1 className={ cx(commonStyles['title'], styles['title']) }>{ foundText }</h1>
          <PostList posts={ posts }/>
        </div>
      </MetaPage>
    ) : (
      <MetaPage fetchState={ FAIL } title={ notFoundText } description={ notFoundText } errorMessage={ notFoundText }/>
    );
  }
}

SearchPage.propTypes = {
  fetchPosts: func,
  fetchState: string,
  page: number,
  searchQuery: string,
  posts: arrayOf(shape(POST_SHAPE)),
};
