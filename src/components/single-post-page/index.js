import React, { Component } from 'react';
import { func, number, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './single-post-page.module.sass';


export default class SinglePostPage extends Component {
  componentDidMount() {
    const { fetchSinglePost, pk } = this.props;
    fetchSinglePost(pk);
  }

  render() {
    const { post } = this.props;
    const { title, date, category, content } = post;
    return (
      <div className={ styles['single-post-page'] }>
        <h4 className={ styles['title'] }>{ title }</h4>
        <div className={ styles['meta'] }>
          <Link to='#' className={ styles['category'] }>{ category }</Link>
          <span className={ styles['date'] }>{ date }</span>
        </div>
        <div className={ styles['content'] }>{ content }</div>
      </div>
    );
  }
}

SinglePostPage.propTypes = {
  pk: number,
  fetchSinglePost: func,
  post: shape({
    pk: number,
    title: string,
    date: string,
    excerpt: string,
    category: string,
  }),
};
