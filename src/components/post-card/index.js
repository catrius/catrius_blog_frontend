import React from 'react';
import cx from 'classnames';

import styles from './post-card.module.sass';

function PostCard(props) {
  const { thumbnail, title, date, excerpt, category } = props;
  return (
    <div className={ styles['post-card'] }>
      <div className={ styles['thumbnail'] }>
        <img className={ styles['thumbnail-image'] } src={ thumbnail } alt=''/>
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

export default PostCard;
