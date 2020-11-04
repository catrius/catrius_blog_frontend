import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PostList from 'components/common/post-list';
import MetaPage from 'components/common/meta-page';
import { postsSelector } from 'selectors/posts-selectors';
import { getPage } from 'selectors/router-selectors';
import { categorySelector } from 'selectors/categories-selectors';
import { getFetchState } from 'selectors/fetch-state-selectors';
import { fetchPosts } from 'actions/fetch-data-actions';


export default function CategoryPage() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const posts = useSelector(postsSelector);
  const page = useSelector(getPage);
  const category = useSelector(categorySelector(slug));
  const fetchState = useSelector(getFetchState).posts;

  useEffect(() => {
    dispatch(fetchPosts({ category: slug, page }));
  }, [dispatch, page, slug]);

  return (
    <MetaPage fetchState={ fetchState } title={ category.name } description={ category.description }>
      <PostList posts={ posts } />
    </MetaPage>
  );
}
