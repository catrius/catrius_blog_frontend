import React, { useContext } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot';

import styles from './post-card.module.sass';

import { POST_SHAPE, DESKTOP, TABLET, MOBILE } from 'utils/constants';
import { DeviceTypeContext } from 'contexts';


export default function PostCard(props) {
  const { title, shortDate, excerpt, thumbnail, category, url } = props;
    const device = useContext(DeviceTypeContext);
    const flexBasicMap = {
      [DESKTOP]: '30%',
      [TABLET]: '47.5%',
      [MOBILE]: '100%',
    };

  return (
    <Link to={ url } className={ styles['post-card'] } style={ { flex: `0 0 ${ flexBasicMap[device] }` } }>
      <div className={ styles['thumbnail'] }>
        <img className={ styles['thumbnail-image'] } src={ thumbnail } alt=''/>
      </div>
      <div className={ styles['detail'] }>
        <div className={ styles['title'] }>
          <Dotdotdot clamp={ 2 }>{ title }</Dotdotdot>
        </div>
        <div className={ styles['meta'] }>
            <span className={ styles['category'] }>
            <i className={ cx('far fa-folder', styles['category-icon']) }/>{ category.name }
          </span>
          <div className={ styles['date'] }>
            <i className={ cx('far fa-calendar-alt', styles['calendar-icon']) }/>{ shortDate }
          </div>
        </div>
        <div className={ styles['content'] }>
          <Dotdotdot clamp={ 6 }>{ excerpt }</Dotdotdot>
        </div>
      </div>
    </Link>
  );
}

PostCard.propTypes = POST_SHAPE;
PostCard.contextType = DeviceTypeContext;
