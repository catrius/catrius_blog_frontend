import React, { useEffect } from 'react';
import cx from 'classnames';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import styles from 'components/search-page/search-page.module.sass';
import { FAIL } from 'utils/constants';
import PostList from 'components/common/post-list';
import MetaPage from 'components/common/meta-page';
import commonStyles from 'styles/common.module.sass';
import { postsSelector } from 'selectors/posts-selectors';
import { getPage, getSearchQuery } from 'selectors/router-selectors';
import { getFetchState } from 'selectors/fetch-state-selectors';
import { fetchPosts } from 'actions/fetch-data-actions';


export default function SearchPage() {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);
  const location = useLocation();
  const page = getPage(location);
  const searchQuery = getSearchQuery(location);
  const fetchState = useSelector(getFetchState).posts;
  const foundText = `Search results for "${ searchQuery }"`;
  const notFoundText = `Nothing found for "${ searchQuery }"`;

  useEffect(() => {
    dispatch(fetchPosts({ q: searchQuery, page }));
  }, [dispatch, page, searchQuery]);

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
