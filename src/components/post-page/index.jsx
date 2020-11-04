import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useDispatch, useSelector } from 'react-redux';

import styles from './post-page.module.sass';

import MetaPage from 'components/common/meta-page';
import commonStyles from 'styles/common.module.sass';
import { fetchedPostSelector, postSelector } from 'selectors/posts-selectors';
import { getFetchState } from 'selectors/fetch-state-selectors';
import { fetchPost } from 'actions/fetch-data-actions';


export default function PostPage() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { title, date, category, content, excerpt, thumbnail, caption, imageShowing } = useSelector(postSelector(slug));
  const fetchedPost = useSelector(fetchedPostSelector(slug));
  const fetchState = useSelector(getFetchState).post;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    !fetchedPost && dispatch(fetchPost(slug));
  }, [dispatch, fetchedPost, slug]);

  return (
    <MetaPage fetchState={ fetchState } title={ title } description={ excerpt }>
      <div className={ styles['post-page'] }>
        <h1 className={ cx(commonStyles['title']) }>{ title }</h1>
        <div className={ styles['meta'] }>
          <Link to={ category.url } className={ styles['category'] }>
            <i className={ cx('far fa-folder', styles['icon']) }/>{ category.name }
          </Link>
          <div className={ styles['date'] }>
            <i className={ cx('far fa-calendar-alt', styles['icon']) }/>{ date }
          </div>
        </div>
        {
          imageShowing ? (
            <div className={ styles['thumbnail'] } onClick={ () => setLightboxOpen(true) }>
              <img className={ styles['thumbnail-image'] } src={ thumbnail } alt=''/>
              <div className={ styles['caption'] }>{ caption }</div>
            </div>
          ) : null
        }
        {
          lightboxOpen ? (
            <Lightbox
              mainSrc={ thumbnail }
              onCloseRequest={ () => setLightboxOpen(false) }
              enableZoom={ false }
              animationDuration={ 0 }
            />
          ) : null
        }
        <ReactMarkdown className={ styles['content'] } source={ content }/>
      </div>
    </MetaPage>
  );
}
