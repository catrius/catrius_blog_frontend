import React from 'react';
import { number, string } from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './post-card.module.sass';


function PostCard(props) {
  const { thumbnailUrl, title, date, excerpt, category } = props;
  return (
    <div className={ styles['post-card'] }>
      <div className={ styles['thumbnail'] }>
        <img className={ styles['thumbnail-image'] } src={ thumbnailUrl } alt=''/>
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
            <i className={ cx('far fa-folder', styles['category-icon']) }/>{ category }
          </span>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  thumbnailUrl: string,
  title: string,
  date: string,
  excerpt: string,
  category: string,
};

export default PostCard;
