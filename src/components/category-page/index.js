import React, { Component } from 'react';
import { func, number, shape } from 'prop-types';
import { map, isNil } from 'lodash';

import styles from './category-page.module.sass';

import PostCard from 'components/homepage/post-card';
import { CATEGORY_SHAPE } from 'utils/constants';


export default class CategoryPage extends Component {
  componentDidMount() {
    const { fetchCategory, pk } = this.props;
    fetchCategory(pk);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { fetchCategory, pk } = this.props;
    if (!isNil(pk) && pk !== prevProps.pk) {
      fetchCategory(pk);
    }
  }

  render() {
    const { category } = this.props;
    return (
      <div className={ styles['category-page'] }>
        <div className={ styles['posts'] }>
          {
            map(category.posts, post => (
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
      </div>
    );
  }
}

CategoryPage.propTypes = {
  pk: number,
  fetchCategory: func,
  category: shape(CATEGORY_SHAPE),
};
