import React, { Component, Fragment } from 'react';
import { arrayOf, shape } from 'prop-types';
import { map } from 'lodash';

import styles from './post-list.module.sass';
import PostCard from './post-card';

import { POST_SHAPE } from 'utils/constants';
import PaginatorContainer from 'containers/common/paginator';


export default class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <Fragment>
        <div className={ styles['post-list'] }>
          {
            map(posts, post => (
              <PostCard
                key={ post.pk }
                { ...post }
              />
            ))
          }
        </div>
        <PaginatorContainer />
      </Fragment>
    );
  }
}

PostList.propTypes = {
  posts: arrayOf(shape(POST_SHAPE)),
};
