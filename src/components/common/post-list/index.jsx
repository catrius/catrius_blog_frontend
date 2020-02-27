import React, { Component, Fragment } from 'react';
import { arrayOf, func, shape, object } from 'prop-types';
import { map } from 'lodash';

import styles from './post-list.module.sass';

import { POST_SHAPE } from 'utils/constants';
import PostCard from 'components/common/post-card';
import PaginatorContainer from 'containers/common/paginator';


export default class PostList extends Component {
render() {
    const { posts, fetchPosts, fetchParams } = this.props;
    return (
      <Fragment>
        <div className={ styles['post-list'] }>
          {
            map(posts, post => (
              <PostCard
                key={ post.pk }
                pk={ post.pk }
                title={ post.title }
                date={ post.date }
                excerpt={ post.excerpt }
                category={ post.category }
                url={ post.url }
              />
            ))
          }
        </div>
        <PaginatorContainer fetch={ fetchPosts } fetchParams={ fetchParams }/>
      </Fragment>
    );
  }
}

PostList.propTypes = {
  fetchPosts: func,
  posts: arrayOf(shape(POST_SHAPE)),
  fetchParams: object,
};
