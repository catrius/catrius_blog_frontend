import React, { Fragment, useContext } from 'react';
import { arrayOf, shape } from 'prop-types';
import { map, isEmpty } from 'lodash';
import cx from 'classnames';

import styles from './post-list.module.sass';
import PostCard from './post-card';

import { POST_SHAPE, RESPONSIVE_CLASS_NAMES } from 'utils/constants';
import PaginatorContainer from 'containers/common/paginator';
import { DeviceContext } from 'contexts';


export default function PostList(props) {
  const device = useContext(DeviceContext);
  const { posts } = props;

  return isEmpty(posts) ? (
    <h1 className={ styles['empty-post-list'] }>Nothing to see here</h1>
  ) : (
    <Fragment>
      <div className={ cx(styles['post-list'], styles[RESPONSIVE_CLASS_NAMES[device]]) }>
        {
          map(posts, post => (
            <PostCard
              key={ post.slug }
              { ...post }
            />
          ))
        }
      </div>
      <PaginatorContainer/>
    </Fragment>
  );
}

PostList.propTypes = {
  posts: arrayOf(shape(POST_SHAPE)),
};
