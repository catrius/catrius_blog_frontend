import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './post-card.module.sass';

import { publicUrl } from 'utils/common';
import { POST_SHAPE } from 'utils/constants';


function PostCard(props) {
  const { title, date, excerpt, category, url } = props;
  return (
    <Link to={ url } className={ styles['post-card'] }>
      <div className={ styles['thumbnail'] }>
        <img className={ styles['thumbnail-image'] } src={ publicUrl('assets/blog-post/blog-post1.jpg') } alt=''/>
      </div>
      <div className={ styles['detail'] }>
        <div className={ styles['title'] }>{ title }</div>
        <div className={ styles['date'] }>
          <i className={ cx('far fa-calendar-alt', styles['calendar-icon']) }/>{ date }
        </div>
        <div>{ excerpt }</div>
        <div className={ styles['footer'] }>
          <span className={ styles['read-more'] }>
            Read more<i className={ cx('fas fa-arrow-right', styles['right-arrow-icon']) }/>
          </span>
          <span className={ styles['category'] }>
            <Link to={ category.url }>
              <i className={ cx('far fa-folder', styles['category-icon']) }/>{ category.name }
            </Link>
          </span>
        </div>
      </div>
    </Link>
  );
}

PostCard.propTypes = POST_SHAPE;

export default PostCard;
