import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostList from 'components/common/post-list';
import MetaPage from 'components/common/meta-page';
import { postsSelector } from 'selectors/posts-selectors';
import { getPage } from 'selectors/router-selectors';
import { getFetchState } from 'selectors/fetch-state-selectors';
import { fetchPosts } from 'actions/fetch-data-actions';


export default function Homepage() {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);
  const page = useSelector(getPage);
  const fetchState = useSelector(getFetchState).posts;

  useEffect(() => {
    dispatch(fetchPosts({ page }));
  }, [dispatch, page]);
  
  return (
    <MetaPage fetchState={ fetchState }>
      <PostList posts={ posts } />
    </MetaPage>
  );
}
