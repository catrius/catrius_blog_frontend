import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  category: PropTypes.string,
};

export default PostCard;
